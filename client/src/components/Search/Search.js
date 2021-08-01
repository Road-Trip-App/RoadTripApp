import { ChangeEvent } from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

  import "@reach/combobox/styles.css";
  //import "./styles.scss";
  
 // const libraries = ["places"];
  
  function Search() {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      //clearSuggestions,
    } = usePlacesAutocomplete(
    //     {
    //   requestOptions: {
    //     location: { lat: () => 45.4230016, lng: () => -75.6312533 },
    //     radius: 200 * 1000,
    //   },
    // }
    );
  
  
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = async (address) => {
      setValue(address, false);
  
    //   try {
    //     const results = await getGeocode({ address });
    //     const { lat, lng } = await getLatLng(results[0]);
  
    //   panTo({ lat, lng });
    //   } catch (error) {
    //     console.log("😱 Error: ", error);
    //   }
    };


    const renderSuggestions = (): JSX.Element => {
        const suggestions = data.map(({ place_id, description }: any) => (
          <ComboboxOption key={place_id} value={description} />
        ));
        return (
            <>
              {suggestions}
              <li className="logo">
                <img
                  src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
                  alt="Powered by Google"
                />
              </li>
            </>
          );
        };
  
    return (
      <div className="search">
        <Combobox onSelect={handleSelect}>
          <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search your location"
          />
          <ComboboxPopover>
            <ComboboxList>
              {status === "OK" && renderSuggestions()}</ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  
  }

  export default Search;