let productDom = document.querySelector(".products") ; 
let EmptyProduct = document.querySelector(".emptyProduct") ; 

function RemoveCartInfo () {

    /* call the empty div if there is no product */

    if (JSON.parse(localStorage.getItem("ProductCart")).length === 0) {
       EmptyProduct.innerHTML = " !!! There is no Product !!!" ; 
       EmptyProduct.style.display = 'flex' ; 
    }


    /* == Calling only tha data that the user choose when he clicked on "Add To Cart " */
    let productInCart = JSON.parse(localStorage.getItem("ProductCart")) ; 
    
    /*Showing it */
    
    let productR = productInCart.map ((items) => {
     return `
     <div class="col-3 py-2 my-2 col-sm-6 col-md-6  col-lg-3 col-12 text-center">
        <div class="card">
             <img src="${items.imageUrl}" class="card-img-top" alt="Headphone Item">
             <div class="card-body">
                 <h5 class="card-title">${items.title}</h5>
                 <p class="card-text">${items.desc}</p>

                 <p class="card-text"><strong>Size: </strong>${items.size}</p>
                 <p><strong>Quantity: </strong>${items.qty}</p>
                 <button class="add-to-cart btn btn-danger" onclick="RemovefromCart(${items.id})">Remove From Cart </button>
             </div>
        </div>
     </div>
     `
    })

    productDom.innerHTML = productR ; 
}
RemoveCartInfo() ; 


/* Remove Click Btn  */

function RemovefromCart (id) {
    let itemR = JSON.parse(localStorage.getItem("ProductCart")) ;
    if(itemR)  {

    /* filter = > to let only the element that not deleted  */
    
    let FilterItems = itemR.filter((R) =>R.id !== id )  ;
    localStorage.setItem('ProductCart' , JSON.stringify(FilterItems)) ; // this is delete from data

    /* and after that show me just the items that not deleted */
    RemoveCartInfo(FilterItems); // this is will delete from the website show

}
}
