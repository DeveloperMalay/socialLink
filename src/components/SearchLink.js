import React from "react";
import SearchResult from "./SearchResult";

function SearchLink() {
  const [formdata, setFormData] = React.useState();

  function handleFirstinput(event) {
    setFormData(event.target.value);
  }

 

  return (
    <div className="search">
      <form className="form" >
        <div className="nameArea">
          <div className="selectName">
            <label htmlFor="name">Choose Profiles Name</label>
            <select
              name="name"
              id="name"
              onChange={handleFirstinput}
              value={formdata}
            >
              <option value="undefine"> --Choose Profiles--</option>
              <option value="Rahul,Sunny">Rahul,Sunny</option>
              <option value="Rahul,Sameer">Rahul,Sameer</option>
              <option value="Rahul,Shanti">Rahul,Shanti</option>
              <option value="Rahul,Bhaskar">Rahul,Bhaskar</option>
              <option value="Rahul,Kamal">Rahul,Kamal</option>
              <option value="Rahul,Aayushi">Rahul,Aayushi</option>

              <option value="Sunny,Sameer">Sunny,Sameer</option>
              <option value="Sunny,Shanti">Sunny,Shanti</option>
              <option value="Sunny,Bhaskar">Sunny,Bhaskar</option>
              <option value="Sunny,Kamal">Sunny,Kamal</option>
              <option value="Sunny,Aayushi">Sunny,Aayushi</option>

              <option value="Sameer,Shanti">Sameer,Shanti</option>
              <option value="Sameer,Bhaskar">Sameer,Bhaskar</option>
              <option value="Sameer,Kamal">Sameer,Kamal</option>
              <option value="Sameer,Aayushi">Sameer,Aayushi</option>

              <option value="Shanti,Bhaskar">Shanti,Bhaskar</option>
              <option value="Shanti,Kamal">Shanti,Kamal</option>
              <option value="Aayushi,Shanti">Shanti,Aayushi</option>

              <option value="Bhaskar,Kamal">Bhaskar,Kamal</option>
              <option value="Aayushi,Bhaskar">Bhaskar,Aayushi</option>
              <option value="Aayushi,Kamal">Kamal,Aayushi</option>
            </select>
          </div>
          {/* <div className="selectName">
            <label htmlFor="name2">Choose Profile Name</label>
            <select
              name="name2"
              id="name2"
              onChange={handleSecondinput}
              value={formdata.name2}
            >
              <option value="Aayushi">Aayushi</option>
              <option value="Shanti">Shanti</option>
              <option value="Rahul">Rahul</option>
              <option value="Bhaskar">Bhaskar</option>
              <option value="Sunny">Sunny</option>
              <option value="Kamal">Kamal</option>
              <option value="Sameer">Sameer</option>
            </select>
          </div> */}
        </div>
      </form>
      {/* <div className="btn">
        <button onClick={handleFirstinput}>See Connection</button>
      </div> */}

      <div className="resultArea">
        <SearchResult input={formdata} />
      </div>
    </div>
  );
}

export default SearchLink;
