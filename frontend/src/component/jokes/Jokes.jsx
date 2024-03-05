import React, { useEffect, useState } from "react";
import axios from "axios";

const Jokes = () => {
  const [jokesData, setJokesData] = useState([]);

  const getJokes = async () => {
    const data = await axios
      .get("api/v1/jokes")
      .then((res) => {
        console.log(res);
      }).catch((err) =>{
        console.log(err);
      })
  };

  useEffect(() => {
    getJokes();
  }, []);
  return <div>Jokes</div>;
};

export default Jokes;
