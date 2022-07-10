const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users"
const IMG_API = "/IMAGES/userPic.png"
const usersPicturesArr= [
  "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
  "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc",
  "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
  "https://i.pinimg.com/736x/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg",
  "https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6",
  "https://buffer.com/library/content/images/2022/03/amina.png",
  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
  "https://i.insider.com/59b6c4bfba785e36f932a317?width=600&format=jpeg&auto=webp",
  "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
  "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
  "https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?k=20&m=1311634222&s=612x612&w=0&h=1a0XDWnZNPjk_5n7maZdzowaDfBcBohwoiZZF69qS9A=",
  "https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-headshots-for-linkedin-chicago-1024x1024.jpg",
  "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/02/Website-Photo-11-1.jpg",
  "https://i.pinimg.com/736x/42/57/dd/4257dd317ad8c667d62b47acd041788c.jpg"
]
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
    load_div.innerHTML = `<img class='position-absolute top-50 start-50' style='width:10vw;margin:0 auto;' src ='/IMAGES/loading.gif'/>.`
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

