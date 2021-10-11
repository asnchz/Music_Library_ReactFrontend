import React from 'react';
import './DisplaySongs.css'

const DisplaySongs = (props)=>{

        return ( 
            <React.Fragment>
            <div>
                <h1>Music Library</h1>
            <table id='table'>
                <thead>
                <tr>
                    <th>Song Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                </tr>
                </thead>
            <tbody>
                {props.songs.map((song, index) => {
                return(
                <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <button className="btn btn-danger" onClick={() => props.handleDelete(song.id)}>Delete</button>
                </tr>)}
                )}
            </tbody>
            </table>
          </div>
          </React.Fragment>
        );
}
 
export default DisplaySongs;