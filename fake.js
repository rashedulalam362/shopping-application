<script>
  // JavaScript code for adding items to the cart, clearing the cart, and checkout goes here
  
  function addToCart(productName, price) {
    // Create a new list item for the cart
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${productName} - $${price}`;
    
    // Add the list item to the cart
    var cartItems = document.getElementById("cart-items");
    cartItems.appendChild(li);
    
    // Update the total amount
    var totalAmount = document.getElementById("total-amount");
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) + price;
  }
  
  function clearCart() {
    // Remove all items from the cart
    var cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    
    // Reset the total amount to 0
    var totalAmount = document.getElementById("total-amount");
    totalAmount.innerHTML = 0;
  }
  
  function checkout() {
    // Implement the checkout functionality
    alert("Proceeding to checkout...");
  }
</script>