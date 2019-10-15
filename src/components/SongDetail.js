import React from 'react';

const SongDetail = (props) => {
  if(!props.song){
    return(
      <p>No Song Selected</p>
    )
  }
  return (
    <div>
    <h4>Song: {props.song['im:name'].label}</h4>
    <h4>Artist: {props.song['im:artist'].label}</h4>
    <h4>Price: {props.song['im:price'].label}</h4>
    </div>
  )
}

export default SongDetail;
