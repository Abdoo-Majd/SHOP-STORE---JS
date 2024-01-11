let productDb = [
    {
        id : 1 , 
        title : "Headphone Item" , 
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        size : "large" , 
        imageUrl : 'images/image-27.jpg',
        qty : 1,
    },
    {
        id : 2 , 
        title : "Glasses" , 
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        size : "medium" , 
        imageUrl : 'images/image-28.jpg',
        qty : 1,
    },
    {
        id : 3 , 
        title : "Laptop" , 
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        size : "Small" , 
        imageUrl : 'images/image-29.jpg',
        qty : 1,
    },
    {
        id : 4 , 
        title : "Headphone4 Item4" , 
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        size : "XXL" , 
        imageUrl : 'images/image-30.jpg',
        qty : 1,
    }
]; 
localStorage.setItem("products" , JSON.stringify(productDb)) ; 