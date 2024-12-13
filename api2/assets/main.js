let container=document.querySelector(".container");

async function getApi() {
    try {
       await axios.get("https://fakestoreapi.com/products")
       .then((res)=>{
        let data =res.data;
        data.forEach((item)=>{
            let div=document.createElement("div");
            div.classList.add("box");
            div.innerHTML=` <div class="box">
            <img src="${item.image}" alt="">
        </div>
        <h4>${item.price}</h4>
        <span>${item.title}</span>
    </div>`
        container.appendChild(div)
        })
       }) 
    } catch (error) {
        console.log(error);
        
    }
    
}
getApi()