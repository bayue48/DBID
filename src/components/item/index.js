import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../utils/api";

const KEY = process.env.REACT_APP_KEY;

export default function Items(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log(id)

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(
        `movie/` + id + `?api_key=${KEY}` || `tv/` + id + `?api_key=${KEY}`
      );
      setMovie(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, []);

  return <div></div>;
}
