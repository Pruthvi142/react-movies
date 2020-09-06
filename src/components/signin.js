import React, { Component } from 'react'


class signin extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""

        }
        
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const  fomdata={
            username:this.state.username,
            password:this.state.password
        }
      let obj=  localStorage.getItem("form")
      let signdata=JSON.parse(obj)
      console.log("form", signdata.username)
      if(signdata.username ==fomdata.username && signdata.password==fomdata.password)
      {
  this.props.history.push('/users/movies')
      }
      else{
          alert("invalid username or password ")
      }
       
    }
    
    render() {
        return (
            <div>
                  <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"  name="username" value={this.state.username} onChange={this.handleChange}className="form-control" />
                    </div>
                  
                    <div className="form-group">
                         <label>password</label>
                         <input type="password" name="password" onChange={this.handleChange} value={this.state.value}/>

                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}
export default signin
