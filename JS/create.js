const BASIC_API = "htthjgfdfghjps://my-json-server.typicode.com/Jeck99/fake-server/users"

// async function addUserFunc () {
//     try {
//         return await fetch(BASIC_API)
//         .then((res)=>{})
//     } 
//     catch (error) {
        
//     }
//     finally{

//     }
// }

async function saveUserFunc () {
    const theNewUser =  {
        user: {

            age:age_input.value,
            email:email_input.value,
            index:index_input.value,
            name:{
                first:first_input.value,
                last:last_input.value
            },
            phone:phone_ID.value,
            id:id_input.value,
            picture:img_input.value

        }
    }
    try {
        
        await fetch(`${BASIC_API}`,
        {
            method:"POST",
            body:JSON.stringify(theNewUser),
            headers:{
                'Content-Type':'application/json'
            },
        }
        )
    } 
    catch (err) {
        alert(err)
    }
    finally{

    }
    
}

