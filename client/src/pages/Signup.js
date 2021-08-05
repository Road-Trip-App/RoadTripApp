import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import "./signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("foormstate", formState);
    console.log("event,", event)

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.log("data", data)

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(  'yo', e);
    }
  };

  return (
    <Container fluid>
    <main className="row login-signup">
      <div className="col">
        <div className="card" style={{ width: '18rem' }}>
        <div className="card-title">
          <h4 className="page-title text-dark">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                 <label for="username" class="form-label">Username:</label>
                <input
                  className="form-input"
                  placeholder="Your Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                 <label for="email" class="form-label">Email:</label>
                <input
                  className="form-input"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                 <label for="password-signup" class="form-label">Password:</label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                 <div className="form-group">
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                 Sign-up
                </button>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
          </div>
        </div>
      </div> 
    </main>
    </Container>
  );
};

export default Signup;
