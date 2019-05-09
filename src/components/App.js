import React from 'react';

import PlaylistCollection from './PlaylistCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        selectedId:null,
      }
      this.selectPlaylistId = this.selectPlaylistId.bind(this)
  }

  selectPlaylistId(id){
    this.setState({selectedId:id})
  }

  render() {
    let data = this.props.data



    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <div className="columns small-6"> {/* playlist div*/}
          <PlaylistCollection
          data={data.playlists}
          handlePlaylist={this.selectPlaylistId}
          />
        </div>
        <div className="columns small-6">{/* songs div*/}
          <h3>Songs</h3>
          <p>{data.songs[0].name}</p>
        </div>
      </div>
    );
  }
}

export default App;
