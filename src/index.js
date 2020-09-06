import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import configure  from './store/configurestore'
import {startMoviePost} from './action/movieAction'
const store=configure()

store.subscribe(()=>{
  console.log(store.getState())
})
console.log("index",localStorage.getItem("form"))
if(localStorage.getItem("form"))
{
  // store.dispatch(startMoviePost())

}

const jsx=(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

