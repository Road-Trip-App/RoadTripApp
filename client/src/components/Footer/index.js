import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './footer.css'
const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    
    <footer className="fixed-bottom w-100 mt-auto bg-info footer p-1 margintop">
      <div className="container text-center mb-2">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-1"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className="h4">
          Made with{' '}
          <span
            className="emoji "
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
  
  );
};

export default Footer;
