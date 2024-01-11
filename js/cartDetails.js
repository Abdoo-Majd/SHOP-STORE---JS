let dataDB = JSON.parse(localStorage.getItem('products')) ; 
let ProductId  = localStorage.getItem('ProductId') ; 
let itemDom = document.querySelector(".item-details")


let productDetails = dataDB.find(item => item.id == ProductId) ;
console.log(productDetails)
itemDom.innerHTML = `
<div class="col-lg-8 mx-auto py-2 my-2 col-12 text-center">
<div class="card">
<img src="${productDetails.imageUrl}" class="card-img-top w-100"  />
     <div class="card-body">
     <h5>${productDetails.title}</h5>
     <p class="card-text"><strong>Size: </strong>${productDetails.desc}</p>
     <p class="card-text"><strong>Size: </strong>${productDetails.size}</p>
     <p class="card-text"><strong>Quantity: </strong>${productDetails.qty}</p>

     </div>
</div>
</div>
` ; 

