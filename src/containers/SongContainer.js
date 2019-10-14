import React from 'react';
import SongSelector from '../components/SongSelector.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error(err));
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({selectedSong: selectedSong})
  }

  render() {
    return(
      <div>
      <h2>Song Container</h2>
      <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
      <SongDetail song={this.state.selectedSong} />

      </div>
    );
  }
}

export default SongContainer;
