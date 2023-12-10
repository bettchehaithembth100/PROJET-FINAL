

const products = [
  {
    id: 1,
    title: "aerpredy shirt",
    price: $25,
    category: "men's clothing",
    image: "img/product1.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },

  {
    id: 2,
    title: "WIRELESS EARBUDS ",
    price: $100,
    category: "men's clothing",
    image:img/product2.jpg,
   
    rating: {
      rate: 4.1,
      count: 259,
    },
  },

  {
    id: 3,
    title: "HOODED PARKA ",
    price: $45,
    category: "men's clothing",
    image:img/product3.jpg,
   
    rating: {
      rate:4.7,
      count: 500,
    },
  },

  {
    id: 4,
    title: "STRAW METAL BOTTLE ",
    price: $23,
    category: "men's clothing",
    image:img/product4.jpg,
   
    rating: {
      rate:2.1,
      count: 430,
    },
  },


   {
    id: 5,
    title: "STRAW METAL BOTTLE ",
    price: $50,
    category: "men's clothing",
    image:img/product5.jpg,
   
    rating: {
      rate:4.6,
      count: 400,
    },
  },

  {
    id: 6,
    title: "BACK HAT ",
    price: $50,
    
    category: "jewelery",
    image: "img/product6.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "ВАСКРАСК",
    price: $75,
   
    category: "jewelery",
    image: "img/product7.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "UL TRABOOST",
    price: $45,
    
    category: "jewelery",
    image: "img/product8.jpg",
    rating: {
    
    },
  },

];




 const productsContainer = document.getElementById("my-products");
  
 
 function addProduct() {
  
   const userTitle = document.getElementById("title").value;
   const userPrice = document.getElementById("price").value;
   const userDescription = document.getElementById("description").value;
 
   
   if (typeof userPrice !== "number") {
     alert("Le prix doit être un nombre");
   } else {
    
      
   
     productsContainer.insertAdjacentHTML(
       "afterbegin",
       `
    <div id="card">
       <img src=${obj.image} alt="" />
       <h3>${obj.title}</h3>
       <p>${obj.description}</p>
       <div id="prix">
         <h6>${obj.price}$</h6>
         <h6><i class="fa-solid fa-cart-shopping"></i></h6>
       </div>
     </div>`
     );
   }
 }
 

 for (let i = 0; i < products.length; i++) {
   
   const pa = products[i];
 
  
   productsContainer.innerHTML += `
    <div id="card">
       <img src=${pa.image} alt="" />
       <h3>${pa.title}</h3>
       <p>${pa.description}</p>
       <div id="prix">
         <h6>${pa.price}$</h6>
         <h6><i class="fa-solid fa-cart-shopping"></i></h6>
       </div>
     </div>`;
 }

 const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

   


