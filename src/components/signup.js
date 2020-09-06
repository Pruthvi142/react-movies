import React, { Component } from 'react'


class signup extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            email:"",
            mobile:"",
            password:""

        }
        
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=()=>{
        const  fomdata={
            username:this.state.username,
            email:this.state.email,
            mobile:this.state.mobile,
            password:this.state.password
        }
        localStorage.setItem("form" ,JSON.stringify(fomdata))
        this.props.history.push('/users/login')
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
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.value} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>mobile</label>
                        <input type="tel" name="mobile" onChange={this.handleChange} value={this.state.mobile} className="form-control" />
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
export default signup