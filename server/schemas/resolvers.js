const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
      }

      return user;
    },
    users: async () => {
      return User.find();
    },
    roadTrips: async (parent, { username }) => {
      const params = username ? { username } : {};
      return RoadTrip.find(params).sort({ createdAt: -1 });
    },
    roadTrip: async (parent, { roadTripId }) => {
      return RoadTrip.findOne({ _id: roadTripId });
    },
    waypoints: async (parent, { roadTripId }) => {
      const params = roadTripId ? { roadTripId } : {};
      return WayPoints.find(params).sort({ createdAt: -1 });
    },
  },
  

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addWayPoint: async (parent, { thoughtText, thoughtAuthor }) => {
      return WayPoints.create({ thoughtText, thoughtAuthor });
    },

  // addTrip: async (parent, { RoadTrip }, context) => {
  //   if (context.user) {
  //       console.log(context.user)
  //       // this looks good too
  //       const updatedTripData = await User.findByIdAndUpdate(
  //           { _id: context.user._id },
  //           { $push: { savedTrips: RoadTrip } }, 
  //           { new: true }
  //       );
  //       return updatedTripData
  //     }
  //     throw new AuthenticationError('Please Log in to save a trip')
  //   }
  // },
  }
};

module.exports = resolvers;
