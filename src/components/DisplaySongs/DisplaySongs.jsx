import React, { Component } from 'react';
import './DisplaySongs.css'

class DisplaySongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            album:'',
            artist:'',
            genre:'',
            release_date:'',
        }
    }
    render() { 
        return ( 
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
                {this.props.songs.map((song, index) => {
                return(
                <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <button className="btn btn-danger" onClick={() => this.props.handleDelete(song.id)}>Delete</button>
                </tr>)}
                )}
            </tbody>
            </table>
          </div>
        );
    }
}
 
export default DisplaySongs;