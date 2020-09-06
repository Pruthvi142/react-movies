import React from 'react';
import Register from './components/signup'

import Login from './components/signin'
import movies from './components/movies'
import {connect} from 'react-redux'
import moviedetail from './components/moviDetail'
import company from './components/company'
import {BrowserRouter,Link,Route,} from 'react-router-dom'






function App (props) {

 
  return (
    
     
       <BrowserRouter>
       <div>
       {
        
             
                 <div>
                   <nav className="navbar navbar-dark bg-dark">
                 
                   <ul className="nav nav-pills">
                   <li class="nav-item">
                   <Link to="/users/company" className="nav-link">companyInfo</Link>
                   </li>
                   <li className="nav-item">
                   < Link to ="/users/register"  className="nav-link">Register</ Link>
                     </li>
                   <li className="nav-item">
                  < Link to ="/users/login" className="nav-link" >Login</ Link> 
                 </li>
                   </ul>
                 </nav>
                </div>

          }       
       
       
       <div className="container">
          
              <Route path="/users/register" component={Register} exact={true}/>
              <Route path="/users/login" component={Login} exact={true}/>
              <Route path="/users/movies" component={movies}/>
              <Route path="/users/company" component={company}/>
              <Route path="/users/moviesList" component={moviedetail}/>
          
              </div>
       </div>
       </BrowserRouter>

 
   
  );
}


export default connect() (App) 
