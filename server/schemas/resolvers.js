const { AuthenticationError } = require("apollo-server-express");
const { User, RoadTrip, WayPoints } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("roadTrips");
    },
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id);
    //   }

    //   return user;
    // },
    me: async (parent, args, context) => {
     // console.log(context);
      if (context.user) {
        return await User.findOne({ _id: context.user_id }).populate(
          "roadTrips"
        );
      }

      throw new AuthenticationError("You gotta login...");
    },
    roadTrip: async (parent, { roadTripId }) => {
      return RoadTrip.findOne({ _id: roadTripId });
    },

    // users: async () => {
    //   return User.find();
    // },
    userByUsername: async (parent, { username }) => {
      return User.findOne({ username: username }).populate("roadTrips");
    },
    // roadTrips: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return RoadTrip.find(params).sort({ createdAt: -1 });
    // },
    // roadTrip: async (parent, { roadTripId }) => {
    //   return RoadTrip.findOne({ _id: roadTripId }).populate('waypoints');
    // },
    // waypoints: async (parent, { roadTripId }) => {
    //   const params = roadTripId ? { roadTripId } : {};
    //   return WayPoints.find(params).sort({ createdAt: -1 });
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      // console.log('Hello')
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, {
    //       new: true,
    //     });
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addRoadTrip: async (parent, { name }, context) => {
      if (context.user) {
        console.log(context.user);
        const updatedTripData = await RoadTrip.create({
          name,
        });
        return updatedTripData;
      }
      throw new AuthenticationError("Please Log in to save a trip");
    },

    // addWayPoint: async (parent, { RoadTripId }, context) => {
    //     if (context.user) {
    //       return RoadTrip.findOneAndUpdate(
    //         { _id: RoadTripId },
    //         {
    //           $Set: {
    //             waypoints: { context., commentAuthor: context.user.username },
    //           },
    //         },
    //         // {
    //         //   new: true,
    //         //   runValidators: true,
    //         // },
    //       );
    //     }

    //     throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
