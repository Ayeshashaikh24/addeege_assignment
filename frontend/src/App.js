import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get?search=${searchQuery}`)
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI, searchQuery]);

  return (
    <div className="App">
      <Navbar onSearch={setSearchQuery} />
      <Grid photos={photos} />
      <Button setUpdateUI={setUpdateUI} />
    </div>
  );
}

export default App;
