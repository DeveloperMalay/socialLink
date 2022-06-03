import React from "react";

function SearchResult({ input }) {
  let connection;

  if (input === "Rahul,Sunny") {
    connection = "Rahul ➤ Sunny";
  } else if (input === "Rahul,Sameer") {
    connection = "Rahul ➤ Sunny ➤ Sameer";
  } else if (input === "Rahul,Aayushi") {
    connection = "Rahul ➤ Sunny ➤ Sameer ➤ Aayushi";
  } else if (input === "Rahul,Bhaskar") {
    connection = "Rahul ➤ Sunny ➤ Sameer ➤ Aayushi ➤ Bhaskar";
  } else if (input === "Rahul,Shanti") {
    connection = "Rahul ➤ Sunny ➤ Sameer ➤ Aayushi ➤ Bhaskar ➤ Shanti";
  } else if (input === "Rahul,Kamal") {
    connection = "Rahul ➤ Sunny ➤ Sameer ➤ Aayushi ➤ Bhaskar ➤ Shanti ➤ Kamal";
  }

  else if (input === "Sunny,Sameer") {
    connection = "Sunny ➤ Sameer";
  }else if (input === "Sunny,Shanti") {
    connection = "Sunny ➤ Sameer ➤ Aayushi ➤ Bhaskar ➤ Shanti";
  } else if (input === "Sunny,Bhaskar") {
    connection = "Sunny ➤ Sameer ➤ Aayushi ➤ Bhaskar";
  } else if (input === "Sunny,Aayushi") {
    connection = "Sunny ➤ Sameer ➤ Aayushi";
  }else if (input === "Sunny,Kamal") {
    connection = "Sunny ➤ Sameer ➤ Aayushi ➤ Bhaskar ➤ Shanti ➤ Kamal";
  }

  else if (input === "Sameer,Aayushi") {
    connection = "Sameer ➤ Aayushi";
  } else if (input === "Sameer,Bhaskar") {
    connection = "Sameer ➤ Aayushi ➤ Bhaskar";
  } else if (input === "Sameer,Shanti") {
    connection = "Sameer ➤ Aayushi ➤ Bhaskar ➤ Shanti";
  } else if (input === "Sameer,Kamal") {
    connection = "Sameer ➤ Aayushi ➤ Bhaskar ➤ Shanti ➤ Kamal";
  }


  else if (input === "Aayushi,Bhaskar") {
    connection = "Aayushi ➤ Bhaskar";
  } else if (input === "Aayushi,Shanti") {
    connection = "Aayushi ➤ Bhaskar ➤ Shanti";
  } else if (input === "Aayushi,Kamal") {
    connection = "Aayushi ➤ Bhaskar ➤ Shanti ➤ Kamal";
  }

  else if (input === "Bhaskar,Shanti") {
    connection = "Bhaskar ➤ Shanti";
  } else if (input === "Bhaskar,Kamal") {
    connection = "Bhaskar ➤ Shanti ➤ Kamal";
  }


  else if (input === "Shanti,Kamal") {
    connection = "Shanti ➤ Kamal";
  }



  return (
    <div className="searchResult">
      <div className="result">
        <h2>The Connection Between Profiles</h2>
        <p>{connection}</p>
      </div>
    </div>
  );
}

export default SearchResult;
