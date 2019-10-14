import React from 'react';

const SongDetail = (props) => {
  if(!props.song){
    return(
      <p>No Songs</p>
    )
  }

  return(
    <div>
    <p>{props.song.title}</p>
    </div>
  )
}

export default SongDetail;
