const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
let phonesArray = [
    "APPLE1.jpeg",
    "APPLE2.jpeg",
    "APPLE3.jpeg",
    "APPLE4.jpeg",
    "APPLE5.jpeg",
    "APPLE6.jpeg",
    "SONY1.jpeg",
    "SONY2.jpeg",
    "SONY3.jpeg",
    "SONY4.jpeg",
    "SONY5.jpeg",
    "GOOGLE1.jpeg",
    "GOOGLE2.jpeg",
    "SAMS1.jpeg",
    "SAMS2.jpeg",

]
// const IMG_API = "https://marketingaccesspass.com/wp-content/uploads/2019/09/img_mobile-768x621.png"
async function getDataFunc() {
    try {
        return await fetch(BASIC_API)
        .then(data=>data.json())
   
        
    } 
    catch (error) {
        
    }
    finally{

    }
    
}
console.log(getDataFunc())


function printIdsFunc () {
    // clic_print.disabled = true;
    load_div.innerHTML = `<img class='position-absolute top-50 start-50' style='width:10vw;background:none;' src ='/IMAGES/loading.gif'/>.`
    getDataFunc()
    .then((data)=>{
        data.forEach((item,index)=> {
            // #aeccfb 
            colect_div.innerHTML +=`<div style='font-size:1.5rem;color:#000; background' class='card my-5 col-lg-4 col-sm-'> <div> <img class='card-img w-75' src = '../IMAGES/IMGESARRAY/${phonesArray[index]}'/></div><br>price :${item.price}$<br>isAvailable : ${item.isAvailable}<br>createdAt : ${item.createdAt}<br>color : ${item.color}<br>brand : ${item.brand}<br>ram : ${item.ram}G<br></div> <br>`
       
        });
    })
    .catch((error)=>{
        alert(`page not found : ${error}`)
    })
    .finally(()=>{
        // clic_print.disabled = false;
        load_div.innerHTML = " "
    })

}
printIdsFunc ()