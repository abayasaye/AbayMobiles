async function addObjectFunc () {
    try {
        return await fetch(BASIC_API)
        .then((res)=>{})
    } 
    catch (error) {
        
    }
    finally{

    }
}

async function saveMovieFunc (eve) {
    eve.preventDefault();
    const myNewMovie =  {
        movie: {
            image:img_id.value,
            linkToMovie:link_id.value,
            movieName:movie_name_id.value,
            rating:rating_id.value,
            synopsis:synop_id.value
        }
    }
    try {
        
        await fetch("https://moviesmern.herokuapp.com/movies/saveMovie",
        {
            method:"POST",
            body:JSON.stringify(myNewMovie),
            headers:{
                'Content-Type':'application/json'
            },
        }
        )
    } 
    catch (err) {
        
    }
    finally{

    }
    
}