/* Variables */
let nameV = document.getElementById('name');
let descV = document.getElementById("desc");
let imgFile = document.getElementById("img-file");
let productSelect = document.getElementById("product-select");
let PsizeValue;
let create = document.getElementById("create");
let allProducts = JSON.parse(localStorage.getItem("products")) || [];

// Find the maximum ID in the existing products
let maxId = allProducts.reduce((max, product) => (product.id > max ? product.id : max), 0);
let productIdCounter = maxId + 1; // Set the counter to the next available ID

/* Change Function */
productSelect.addEventListener("change", getProductSizeValue);

function getProductSizeValue(e) {
    PsizeValue = e.target.value;
}

/* Form Function */
create.addEventListener("click", createProductFun);

function createProductFun(e) {
    e.preventDefault();

    let nameValue = nameV.value;
    let descValue = descV.value;

    // Check if an image is selected
    if (!productImage) {
        alert("Please upload an image");
        return;
    }

    let newProduct = {
        id: productIdCounter++, 
        title: nameValue,
        desc: descValue,
        imageUrl: productImage, 
        size: PsizeValue,
        qty: 1,
    };

    allProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(allProducts));

    nameV.value = "";
    descV.value = "";
    imgFile.value = "";
    productSelect.value = "";
    productImage = null; // Reset productImage

    const event = new Event("newProductCreated");
    document.dispatchEvent(event);
    setTimeout(() => {
        window.location = "index.html"
    },500)
}

/* Image Upload Function */

imgFile.addEventListener("change", uploadImage);
let productImage;

function uploadImage() {
    let file = this.files[0];
    let types = ["image/jpeg", "image/png"];

    if (types.indexOf(file.type) === -1) {
        alert("Type is not supported");
        return;
    }

    if (file.size > 50 * 1024 * 1024) {
        alert("Image should not exceed 2MB");
        return;
    }

    productImage = URL.createObjectURL(file);
}
