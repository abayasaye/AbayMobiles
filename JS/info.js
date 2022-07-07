const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users"
const IMG_API = "/IMAGES/userPic.png"
async function getUserDataFunc() {
    try {
        return await fetch(BASIC_API)
        .then(res=>res.json())
   
        
    } 
    catch (err) {
        
    }
    finally{

    }
    
}
console.log(getUserDataFunc())


function printUserDataFunc () {
    load_div.innerHTML = `<img style='width:20vw;margin:0 auto;' src ='/IMAGES/loading.gif'/>.`
    getUserDataFunc()
    .then((res)=>{
        res.forEach(item => {
            // #aeccfb 
            // table_Id.innerHTML += `<th>age</th><th>age</th><th>age</th><th>age</th><th>age</th><th>age</th><th>age</th><th>age</th>`
            tbody_id.innerHTML +=`<tr>
            <td data-title='age'>${item.age}</td>
            <td data-title='email'>${item.email}</td> 
            <td data-title='index'>${item.index}</td> 
            <td data-title='firstName'>${item.name.first}</td> 
            <td data-title='lastName'>${item.name.last}</td> 
            <td data-title='phone'>${item.phone}</td> 
            <td data-title='id'>${item._id}</td> 
            <td data-title='picture'><img src = '${item.picture}'/></td></tr>
            <button type="button" class="btn btn-light btn-lg mx-5">delete</button>`
        });
    })
    .catch((err)=>{
        alert(`user not found : ${err}`)
    })
    .finally(()=>{
        load_div.innerHTML = " "
    })

}
printUserDataFunc ()