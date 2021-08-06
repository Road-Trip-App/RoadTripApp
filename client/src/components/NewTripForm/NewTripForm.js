import React from "react";
import "./NewTripForm.css";
import {Link} from 'react-router-dom'
import WayPointForm from "../WaypointForm/WaypointForm";

const NewTripForm = () => {
  return (
    <div>
      <div className="NewTripForm">
        <div className="newform-container card">
          <div className="input-group1 ">
            <span className="input-group-text inpute" id="inputGroup">
              ORIGIN LOCATION
            </span>
            <input
              type="text"
              className="form-control inpute"
              aria-label="Sizing example input"
              aria-describedby="inputGroup mb-2"
            />
          </div>

          <div className="input-group2">
            <span className="input-group-text inputetwo" id="inputGroup">
              DESTINATION
            </span>
            <input
              type="text"
              className="form-control inpute"
              aria-label="Sizing example input"
              aria-describedby="inputGroup mb-3"
            />
          </div>

          <div className="input-group3 mb-3">
            <label className="input-group-text2" htmlfor="TILE PHOTO">
              TILE PHOTO
            </label>
            <select className="form-select inpute" name="tile-photo" id="tile-photo">
              <option selected>Choose file</option>
              <option value="photo1">Mountains</option>
              <option value="photo2">Lake</option>
              <option value="photo3">Camp</option>
              <option value="photo4">Trail</option>
              <option value="photo5">City</option>
              <option value="photo6">Village</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <Link to="/way-point">
            <button onClick={WayPointForm} className="btn btn-primary btn-block addpinbtnstyle" type="addstop">
              Add A Pin
            </button>
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTripForm;
