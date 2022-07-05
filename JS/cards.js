const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
const IMG_API = "https://marketingaccesspass.com/wp-content/uploads/2019/09/img_mobile-768x621.png"
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
    load_div.innerHTML = `<img style='width:10vw' src ='/IMAGES/load.gif'/>.`
    getDataFunc()
    .then((data)=>{
        data.forEach(item => {
            
            colect_div.innerHTML +=`<div style='font-size:1.5rem;color:#ebfafd; background:#aeccfb;' class='card my-5 col-lg-4 col-sm-'> <div> <img class='card-img' src = '${IMG_API}'/></div><br>price : ${item.price}$<br>isAvailable : ${item.isAvailable}<br>createdAt : ${item.createdAt}<br>color : ${item.color}<br>brand : ${item.brand}<br>ram : ${item.ram}G<br></div> <br>`
       
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