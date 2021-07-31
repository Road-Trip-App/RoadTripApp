import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className=" fixed-bottom w-100 mt-auto bg-secondary p-1">
    <footer className="fixed-bottom w-100 mt-auto bg-secondary footer p-1">
      <div className="container text-center mb-2">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the kids of bootcamp.
        </h4>
      </div>
    </footer>
    </footer>
  );
};

export default Footer;
