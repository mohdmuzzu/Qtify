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
  const [filteredSongs, setfilteredSongs] = useState([]);
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then((res) => {
      setTopAlbums(res.data);
    });
    axios.get(`${ENDPOINT}albums/new`).then((res) => {
      setNewAlbums(res.data);
    });
    axios.get(`${ENDPOINT}Songs`).then((res) => {
      setSongs(res.data);
      setfilteredSongs(res.data);
    });
    axios.get(`${ENDPOINT}genres`).then((res) => {
      setGenre([{ key: "all", label: "All" }, ...res.data.data]);
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection tittle="Top Albums" data={topAlbums} />
      <CardSection tittle="New Albums" data={newAlbums} />
      <FilterSection
        tittle="Songs"
        data={filteredSongs}
        filters={genres}
        executeFilter={(genre) => {
          if (genre === "all") {
            setfilteredSongs(Songs);
          } else {
            setfilteredSongs(Songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
    </>
  );
}

export default App;
