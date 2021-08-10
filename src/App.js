import { useState } from "react";
import "./styles.css";

const genreList = {
  DesiHipHop: [
    {
      name: "BROWN MUNDE",
      year: "2020",
      artist: "AP Dhillon",
      albumArt: "./img/brown.jpeg"
    },
    {
      name: "3:59 AM",
      year: "2020",
      artist: "Divine",
      albumArt: "./img/3.59AM.jpg"
    }
  ],
  EDM: [
    {
      name: "ANIMALS",
      year: "2013",
      artist: "Martin Garrix",
      albumArt: "./img/animals.jpeg"
    },
    {
      name: "HEER",
      year: "2015",
      artist: "Nucleya",
      albumArt: "./img/heer.jpg"
    }
  ],
  OldSkool: [
    {
      name: "TAUBA TAUBA",
      year: "2006",
      artist: "Kailash Kher",
      albumArt: "./img/tauba tauba.jpeg"
    },
    {
      name: "DIL LUTEYA",
      year: "2008",
      artist: "Jazzy B",
      albumArt: "./img/dil luteya.jpg"
    }
  ],
  Pop: [
    {
      name: "GIRL LIKE YOU",
      year: "2017",
      artist: "Maroon 5",
      albumArt: "./img/girlslikeyou.jpg"
    },
    {
      name: "Havana",
      year: "2018",
      artist: "Camila Cabello ",
      albumArt: "./img/havana.jpg"
    }
  ]
};

export default function App() {
  const [currentGenre, setGenre] = useState("DesiHipHop");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Music Recommendation App</h1>
      <h3>Get some of the best music recommendation based on your mood</h3>
      {Object.keys(genreList).map((item) => {
        return (
          <button onClick={() => clickHandler(item)} className="btn-genre">
            {item}
          </button>
        );
      })}
      <hr />
      <div className="main-div">
        {genreList[currentGenre].map((song) => {
          return (
            <table>
              <tr>
                <td className="td-song-name">{song.name}</td>
                <td className="td-img" rowSpan="3">
                  <img src={song.albumArt} alt="" />
                </td>
              </tr>
              <tr>
                <td className="td-artist-name">{song.artist}</td>
              </tr>
              <tr>
                <td className="td-artist-year">{song.year}</td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
}
