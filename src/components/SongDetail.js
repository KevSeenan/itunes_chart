import React from 'react';

const SongDetail = (props) => {
  if(!props.song){
    return(
      <p>No Song Selected</p>
    )
  }

  return(
    <div>
    <p>will change when song is selected</p>
    </div>
  )
}

export default SongDetail;
