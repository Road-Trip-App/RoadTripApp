import React from "react";
import "./NewTripForm.css";

const NewTripForm = () => {
  return (
    <div>
      <div className="NewTripForm">
        <div className="newform-container">
          <div className="input-group1 input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              ORIGIN LOCATION
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div className="input-group2 input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              DESTINATION
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div className="input-group3 mb-3">
            <label className="input-group-text2" for="TILE PHOTO">
              TILE PHOTO
            </label>
            <select className="form-select" name="tile-photo" id="tile-photo">
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

            <button className="btn btn-danger btn-block" type="addstop">
              ADD A PIT STOP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTripForm;
