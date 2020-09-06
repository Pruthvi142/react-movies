import React, { Component } from 'react'
import {connect} from 'react-redux'
import { startMoviePost} from '../action/movieAction'
import moment from 'moment'

 class movieDetail extends Component {
     constructor(props) {
         super(props);
         
     }
     
    
     
    render() {
        let res=localStorage.getItem("responseData")
        let result=JSON.parse(res)
        console.log("res",result)

        return (
            <div>
{
                result.map((ele)=>{
                    return(
                        <div className="card mb-3">
                        <div className="row no-gutters">
                        <div className="col-md-4">
                                 <img src= {ele.poster}className="card-img"  width="50" height="400" />
                        </div>
                          <div class="col-md-8">
                            <div class="card-body">
                    <h5 class="card-title">{ele.title}</h5>
                    <p>Genre:{ele.genre}</p>
                   <p> director:{ele.director}</p>
                    <p>Starring:{ele.stars}</p>
                   
                    <p> release Date{moment(ele.releasedDate).fromNow()}</p>
                    <p> <a class="card-link">{ele.pageViews}views</a > <a className="card-link"> Voted by{ele.voted.length}People </a></p> 
                              
                             
                            </div>
                            <div  className="col-md-4">
                            <button class="btn btn-primary">Watch Trailer</button>
                                </div>
                          
                          </div>
                          
                        </div>
                      </div>
                    )

                })
              }
            </div>
              
        )
    }
}
// const mapStateToProps=(state)=>{
//     console.log("state",state.movies)
//     return{
//         movies:state.movies
//     }
// }
export default connect()(movieDetail)
