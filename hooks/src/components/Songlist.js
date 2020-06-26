import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Love the way you lie" },
    { id: 2, title: "I don't want to live forever" },
    { id: 3, title: "Tu choi nhe nhang thoi" },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
	};
	//useEffect runs every time the browser render or rerender
	//therefore, the second parameter is set to limit the render time
	useEffect(() => {

	},[songs])
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
