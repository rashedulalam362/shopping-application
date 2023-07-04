// select elements
const productsEl = document.querySelector(".card");
const cartItemEl=document.querySelector('.table')
const subtotalEl = document.querySelector(".subtotal");
// const totalItemsInCartEl = document.querySelector(".subtotal");

function renderProdcuts (){

    products.forEach((product)=>{
        productsEl.innerHTML +=`
        
        <div class="card" style="display: flex; justify-content: center; align-items: center;">
            <div class="card-body" style="width: 10rem;" >
            <img src="${product.imgSrc}" class="card-img-top" alt="...">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Price:${product.price} </p>
              <button class="btn btn-primary" onclick=addToCart(${product.id})>Add to Cart</button>
            </div>
          </div>
        
        `
    })

}

renderProdcuts()

  //cart array
  let cart=[]
  console.log(cart);

  //add to cart

function addToCart(id){
    console.log(id);
    // check if prodcut already exist in cart
    // if (cart.some((item) => item.id === id))
if(cart.some((item)=> item.id === id)){
  changeUnite('plus',id)
}else{
   let item=  products.find((product)=>product.id == id)
   cart.push({
     ...item,
     numberOfUnits: 1,
   }
   )

}
updateCart()
renderSubTotal()
}

//// update cart

function updateCart(){
    cartItemEl.innerHTML = ""; //

    cart.forEach((item)=>{
        cartItemEl.innerHTML += `
        <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
        
          <td>
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" onclick="changeUnite('minus',${item.id})" type="button" id="minus-btn">-</button>
              </div>
              <div  style="height: 1px;
              background-color: #ccc;
              margin: 10px 0;">${item.numberOfUnits}</div>
              <div class="input-group-append">
                <button  onclick="changeUnite('plus',${item.id})" type="button" id="plus-btn">+</button>
              </div>
            </div>
          </td>
         
        </tr>
        <!-- Add more rows for other products -->
      </tbody>
      <button class="btn btn-danger" onclick="removeCarItem(${item.id})" >Remove button</button>
        
        `
    })

}

//calcullate subtotal 

function renderSubTotal(){
    let totalPrice = 0,
    totalItems = 0;
    cart.forEach((item)=>{
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })

    subtotalEl.innerHTML=`Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`
    // totalItemsInCartEl.innerHTML=totalItems;

}// change number of units for an item
 // Initialize the cart variable as an empty array


 function changeUnite(action, id) {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
      if (item.id === id) {
        if (action === 'minus' && numberOfUnits > 1 ) {
          numberOfUnits--;
        }
        if (action === 'plus' && numberOfUnits < item.instock ) {
          numberOfUnits++;
        }
      }
      return {
        ...item,
        numberOfUnits,
      };
    });
  
    updateCart(cart);
  }

//remove cart 
  function removeCarItem(id){
    cart=cart.filter((item)=> item.id != id)
    updateCart()
}