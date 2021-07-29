import React from "react";
import "./NewTripForm.css";

const NewTripForm = () => {
  return (
    <div>
      <div class="NewTripForm">
        <div className="newform-container">
          <div class="input-group1 input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              ORIGIN LOCATION
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div class="input-group2 input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              DESTINATION
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>

          <div class="input-group3 mb-3">
            <label class="input-group-text2" for="TILE PHOTO">
              TILE PHOTO
            </label>
            <select class="form-select" name="tile-photo" id="tile-photo">
              <option selected>Choose file</option>
              <option value="photo1">Mountains</option>
              <option value="photo2">Lake</option>
              <option value="photo3">Camp</option>
              <option value="photo4">Trail</option>
              <option value="photo5">City</option>
              <option value="photo6">Village</option>
            </select>
          </div>

          <div class="input-group mb-3">

            <button class="btn btn-danger btn-block" type="addstop">
              ADD A PIT STOP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTripForm;
