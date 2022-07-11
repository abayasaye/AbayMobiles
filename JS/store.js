const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
let phonesArray =  [
    "1phone.png",
    "2phone.png",
    "3phone.png",
    "4phone.png",
    "5phone.png",
    "6phone.png",
    "7phone.png",
    "8phone.png",
    "9phone.png",
    "10phone.png",
    "11phone.png",
    "12phone.png",
    "13phone.png",
    "14phone.png",
    "15phone.png"
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
    load_div.innerHTML = `<img class='position-absolute top-50 start-50' style='width:10vw;background:none;' src ='../IMAGES/loading.gif'/>.`
    getDataFunc()
    .then((data)=>{
        data.forEach((item,index)=> {
            // #aeccfb 
            colect_div.innerHTML +=`<div style='font-size:1.5rem;color:#000; background :none;' class='card my-5 col-lg-4 col-sm- bg-white'> <div> <img class='card-img w-75' src = '../IMAGES/IMGESARRAY/${phonesArray[index]}'/></div><br><div class='text-center' style='background:#aeccfb;'>price :${item.price}$<br>isAvailable : ${item.isAvailable}<br>createdAt : ${item.createdAt}<br>color : ${item.color}<br>brand : ${item.brand}<br>ram : ${item.ram}G<br></div></div> <br>`
       
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