// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2);
  return subtotal;
}
// ITERATION 2
// ITERATION 3
function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  document.querySelector('#total-value span').innerHTML = total.toFixed(2);
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  
});

// ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
