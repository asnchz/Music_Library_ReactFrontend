import React, { Component } from 'react';


class CreateSong extends Component {
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

    handleChange= (event)=>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit= (event)=>{
        event.preventDefult()
        this.props.createSong(this.state)
    }
    render() { 
        return ( 
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <label>Song Title</label>
                <input name='title' onChange={this.handleChange} value={this.state.title}/>
                <label>Album</label>
                <input name='album' onChange={this.handleChange} value={this.state.album}/>
                <label>Artist</label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist}/>
                <label>Genre</label>
                <input name='genre' onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                <button type='submit'>Add New Song!</button>
            </form>
         );
    }
}
 
export default CreateSong;