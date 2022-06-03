import SearchLink from "./components/SearchLink";

import User from "./components/User";
import UserData from "./components/UserData";

function App() {
  const data = UserData.map((item) => {
    return <User key={item.id} img={item.imgUrl} name={item.name} />;
  });

  return (
    <div className="App">
      <div className="header">
        <h1>SocialLink</h1>
      </div>
      <div className="profiles">{data}</div>
      <div className="box">
        <div className="seacrhArea">
          <SearchLink />
        </div>
       
      </div>
    </div>
  );
}

export default App;
