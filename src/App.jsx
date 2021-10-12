import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import CreateSong from './components/CreateSong/CreateSong';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs:[]
     }
  }

  componentDidMount(){
    this.getAllSongs();
  }

  async getAllSongs(){
    let response= await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs:response.data
    })
    console.log("Response: ", response.data)
  }

  handleDelete= async(song) =>{
    let response = await axios.delete('http://127.0.0.1:8000/music/' + song)
    this.setState();
    return response.status
  }

  updateSongList = (songs) =>{
    this.setState({
      songs: songs
    })
  }

  createSong = async (newSong) =>{
    let response= await axios.post('http://127.0.0.1:8000/music/', newSong)
    this.getAllSongs()
    return response.status
}


  render() { 
    return (  
      <div>
        <DisplaySongs songs= {this.state.songs} handleDelete={this.handleDelete} updateSongList={this.updateSongList}/>
        <CreateSong createSong= {this.createSong}/>
        
      </div>
    );
  }
}
 
export default App;