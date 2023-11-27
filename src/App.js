import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CardSection from "./Components/CardSection/CardSection";
import FilterSection from "./Components/FilterSection";

//import Card from "./Components/Card";
import { useEffect } from "react";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [Songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
    axios.get(`${ENDPOINT}Songs`).then(({ data }) => {
      setSongs(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection tittle="Top Albums" data={topAlbums} />
      <CardSection tittle="New Albums" data={newAlbums} />
      <FilterSection tittle="Songs" data={Songs} />
    </>
  );
}

export default App;
