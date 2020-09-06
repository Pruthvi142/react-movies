import axios from "axios"




export const startMoviePost=(formdata ,redirect)=>{
    return(dispatch)=>{
        axios.post("https://hoblist.com/movieList",formdata)
          .then((response)=>{
              const data=response.data.result
              console.log("response",response.data.result)
              localStorage.setItem("responseData", JSON.stringify(response.data.result))
         
             redirect()
        //    window.location.href="/users/moviesList"
          })
          
          
    }

    
}

