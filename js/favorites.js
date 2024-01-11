let productDom = document.querySelector("#products") ; 
let EmptyProduct = document.querySelector(".emptyProduct") ; 

function FavoriteProduct () {

    /* call the empty div if there is no product */

    if (JSON.parse(localStorage.getItem("ProductsFavorite")).length === 0) {
       EmptyProduct.innerHTML = " !!! There is no Product !!!" ; 
       EmptyProduct.style.display = 'flex' ; 
    }


    /* == Calling only tha data that the user choose when he clicked on "Add To Cart " */
    let favouriteDB = JSON.parse(localStorage.getItem("ProductsFavorite")) ; 
    
    /*Showing it */
    
    let productR = favouriteDB.map ((i) => {
     return `
     <div class="col-3 py-2 my-2 col-sm-6 col-md-6  col-lg-3 col-12 text-center">
        <div class="card">
             <img src="${i.imageUrl}" class="card-img-top" alt="Headphone Item">
             <div class="card-body">
                 <h5 class="card-title">${i.title}</h5>
                 <p class="card-text">${i.desc}</p>
                 <p class="card-text"><strong>Size: </strong>${i.size}</p>
                 <p><strong>Quantity: </strong>${i.qty}</p>
                 <button class="add-to-cart btn btn-danger" onclick="RemovefromFavorite(${i.id})">Remove From favourite </button>
             </div>
        </div>
     </div>
     `
    })

    productDom.innerHTML = productR ; 
}
FavoriteProduct() ; 



/* Remove Click Btn  */

function RemovefromFavorite (id) {
    let Fproduct = localStorage.getItem("ProductsFavorite");
    if(Fproduct)  {
    
    /* filter = > to let only the element that not deleted  */
    let itemR = JSON.parse(Fproduct) ;

    let FilterItems = itemR.filter((r) =>r.id !== id )  ;
    

    localStorage.setItem('ProductsFavorite' , JSON.stringify(FilterItems)) ; // this is delete from data

    /* and after that show me just the items that not deleted */
    FavoriteProduct(FilterItems); // this is will delete from the website show

}
}