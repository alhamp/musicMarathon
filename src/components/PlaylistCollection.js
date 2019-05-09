import React from 'react'
import Playlist from './Playlist'
const PlaylistCollection =(props) => {


    let playlistItem = this.props.data.map((playlist)=>{
        return(
        <Playlist 
            id={playlist.id}
            name={playlist.name}
            songs={playlist.songs}/>
        )
    })

        return (
            <div>
                <h3>Playlist Test Header</h3>
                {playlistItem}
            </div>
        )
    }

    

export default PlaylistCollection