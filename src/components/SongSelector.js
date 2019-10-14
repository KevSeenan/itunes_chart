import React from 'react';

const SongSelector = (props) => {

  function handleClick(event) {
    props.onSongSelected(event.target.value);
  }

  if(props.entry === 0){
    return "Loading......";
  }

  const chartSongs = props.songs.map((song, index) => {
    return <li value={index} key={index}>{song.title.label}</li>
  });

  return (
    <ul className="song-selector" onClick={handleClick}>
    {chartSongs}
    </ul>
  )
}

export default SongSelector;
