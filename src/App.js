import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CardSection from "./Components/CardSection/CardSection";
//import Card from "./Components/Card";
import { useEffect } from "react";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection tittle="Top Albums" data={topAlbums} />
      <CardSection tittle="New Albums" data={newAlbums} />
    </>
  );
}

export default App;
