import React, { Component } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs/DisplaySongs';


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

  render() { 
    return (  
      <div>
        <DisplaySongs songs= {this.state.songs}/>
        
        
      </div>
    );
  }
}
 
export default App;