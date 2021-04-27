import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const KEY = process.env.REACT_APP_KEY;

export default function Items(props) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(
        `movie/` + props.match.params.id + `?api_key=${KEY}` ||
          `tv/` + props.match.params.id + `?api_key=${KEY}`
      );
      setMovie(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return <div></div>;
}
