const data = JSON.parse(localStorage.getItem("products")); 
const products = document.getElementById('products') ; 
const badge = document.querySelector(".badge") ;
const productParentMenu = document.querySelector(".card-product") ; 
const productDiv = document.querySelector(".card-product div");
const ShoppingCard = document.querySelector(".shopping-card") ; 

/* show data using Map  */

let showInfoDB; 

(showInfoDB = function showInfo (data = []) {
   let product = data.map((pr) => {
    return `
    <div class="col-3 py-2 my-2 col-sm-6 col-md-6  col-lg-3 col-12 text-center">
       <div class="card">
            <img src="${pr.imageUrl}" class="card-img-top" alt="Headphone Item">
            <div class="card-body">
                <a href="cartDetails.html" onclick="saveItemId(${pr.id})" class="card-title">${pr.title}</a>
                <p class="card-text">${pr.desc}</p>

                <p class="card-text"><strong>Size: </strong>${pr.size}</p>
                <button class="add-to-cart btn btn-primary" onclick="AddToCart(${pr.id})">Add To Cart</button>
                <i class="fa fa-heart-circle-bolt" onclick="AddToFavorite(${pr.id})" style="color:${pr.liked == true ? "red" : ""}"></i>

            </div>
       </div>
    </div>
    `
   })
   products.innerHTML = product.join("") ; 

})(JSON.parse(localStorage.getItem("products")))

/* Add To Cart */

let AddedItem = JSON.parse(localStorage.getItem("ProductCart")) ? JSON.parse(localStorage.getItem("ProductCart")) : []; 

/* To not lose the data  */

if(AddedItem) {
  AddedItem.map((item) => {
    let cardProduct = document.querySelector(".card-product div") ;
    cardProduct.innerHTML += `<p class="text-black-50">${item.title} ${item.qty}</p>` ;
  })
  productDiv.style.display = "block" ; 
  let cardProductDiv = document.querySelectorAll(".card-product div p ")
  badge.innerHTML = cardProductDiv.length ; 


}

/* To Not Loose The Data After Refreshing  */
let allItems = [] ; 

function AddToCart(id) {
  if (localStorage.getItem("username")) {
      // Find the Item
      let choosenItem = data.find((element) => element.id === id);

      let item = allItems.find((i) => i.id === choosenItem.id);
      if (item) {
          choosenItem.qty += 1;
      } else {
          allItems.push(choosenItem);
      }

      let cardProduct = document.querySelector(".card-product div");
      cardProduct.innerHTML = ''; // Clear previous content
      allItems.forEach((item) => {
          cardProduct.innerHTML += `<p class="text-black-50">${item.title} ${item.qty} </p>`;
      });

      // Add number above icon

      // Update the array in localStorage with the correct IDs
      AddedItem = allItems.map((item) => {
          const product = data.find((p) => p.id === item.id);
          return { ...item, id: product.id };
      });

      let uniqueProduct = getUniqueArr(AddedItem, "id");
      localStorage.setItem("ProductCart", JSON.stringify(uniqueProduct));

      let cardProductDiv = document.querySelectorAll(".card-product div p");
      badge.style.display = "block";
      badge.innerHTML = cardProductDiv.length;
  } else {
      window.location = "register.html";
  }
}


// Unique Product

function getUniqueArr(arr, filterType) {
  let unique = arr
      .map((item) => item[filterType])
      .map((item, i, final) => final.indexOf(item) === i && i)
      .filter((item) => arr[item])
      .map((item) => arr[item]);
  return unique;
}
console.log(getUniqueArr(AddedItem, "id")); // Log the unique array



/* Open card Function  */
 
ShoppingCard.addEventListener("click" , OpenMenuCard) ; 

function OpenMenuCard () {
    if(productDiv.innerHTML !== "") {
      if(productParentMenu.style.display == "none" ) {
        productParentMenu.style.display = "block" ;  
      }else {
        productParentMenu.style.display = "none" ;  

      }

    }
}


/* Sava Id in LS   */


function saveItemId (id) {
   localStorage.setItem("ProductId" , id) ; 
   window.location = "cartDetails.html" ; 
}

//Search Function 

let inputSearch = document.getElementById("search") ; 
inputSearch.addEventListener("keyup" , function(e) {
    if(e.keyCode ===13) {
        search(e.target.value , JSON.parse(localStorage.getItem("products"))) ; 
    }
    if(e.target.value.trim() === ""){
       showInfoDB(JSON.parse(localStorage.getItem("products"))) ; 
    }
}) ; 

function search(title , myArray) {
    let arr = myArray.filter((item) => item.title.indexOf(title) !== -1) ; 
    showInfoDB(arr) ; 
}




/* To Not Lose Favourite Data  */
let FavouriteItem = JSON.parse(localStorage.getItem("ProductsFavorite")) ? JSON.parse(localStorage.getItem("ProductsFavorite")) : []; 

/* Add to Favorit */


function AddToFavorite(id) {
  if (localStorage.getItem("username")) {

      // Find the Item
      let choosenItem = data.find((element) => element.id === id);
      
      // to add red heart 
      choosenItem.liked = true ; 
      // add the newest to the oldest
      FavouriteItem = [...FavouriteItem , choosenItem] ;
      
      // to get the unique one 
      
      let uniqueProduct = getUniqueArr(FavouriteItem, "id");

      // to add Like to the product 

      data.map((pr) => {
          if(pr.id === choosenItem.id) {
            pr.liked = true ; 
          }
      })
      localStorage.setItem("ProductsFavorite", JSON.stringify(uniqueProduct));
      
      showInfoDB(data) ;  
  } else {
      window.location = "register.html";
  }
}
