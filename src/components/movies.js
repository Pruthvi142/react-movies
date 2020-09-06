import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startMoviePost} from '../action/movieAction'

class movies extends Component {
    constructor(props) {
        super(props);
        this.state={
            category:"",
            language:"",
            genre:"",
            sort:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            category:this.state.category,
            language:this.state.language,
            genre:this.state.genre,
            sort:this.state.sort
        }
       const redirect=()=>{
            return this.props.history.push('/users/moviesList')
        }
        this.props.dispatch(startMoviePost(formData,redirect))


    }
    render() { 
        return (
            <div>
               <h1>movies list</h1> 
               <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>category</label>
                        <input type="text" className="form-control" name="category" value={this.state.category}onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>langauge</label>
                        <input type="text" className="form-control" name="language" value={this.state.language} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>genre</label>
                        <input type="tel" className="form-control" name="genre" value={this.state.genre}  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>sort</label>
                        <input type="tel" className="form-control" name="sort" value={this.state.sort} onChange={this.handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}
export default connect()(movies)
