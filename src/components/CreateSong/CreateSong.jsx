import React, {Component} from 'react';
import './CreateSong.css'

class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                title: '',
                artist: '',
                album: '',
                genre: '',
                release_date:'',    
         }
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        console.log(event.state)
        this.setState({
         [event.target.name] : event.target.value
        })
    }

    handleSumbit = (event) =>{
        event.preventDefault();
        this.props.createSong(this.state)
    }

    render() {
        return ( 
            <form className='newsong' onSubmit={this.handleSumbit}>
                <h1>What's Your Favorite Song?</h1>
                <label> Title </label>
                <input  name="title" onChange={this.handleChange} value={this.state.title}/><br/>
                <label> Artist </label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist} /><br/>
                <label> Album </label>
                <input name="album" onChange={this.handleChange} value={this.state.album} /><br/>
                <label> Genre </label>
                <input name="genre" onChange={this.handleChange} value={this.state.genre} /><br/>
                <label> Release Date </label>
                <input name="release_date" onChange={this.handleChange} value={this.state.release_date} /><br/>
                <button className='button1' type='Submit'>Add New Song!</button>
            </form>
    )}
}
 
export default CreateSong;