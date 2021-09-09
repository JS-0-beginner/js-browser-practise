console.log('Product & Price');

const addProduct = () =>
{
    const product = document.getElementById('product');
    const productText = product.value;
    
    const price = document.getElementById('price');
    const priceText = price.value;
    
    const productList = document.getElementById('product-list');
    const productCount = document.createElement('li');
    productCount.innerHTML = `<li>${productText}</li>`;
    productList.appendChild(productCount);

    const priceList = document.getElementById('price-list');
    const priceCount = document.createElement('li');
    priceCount.innerHTML = `<li>${priceText} $</li>`;
    priceList.appendChild(priceCount);

    product.value = '';
    price.value = '';
      

}

const order = () =>
{
    const list = document.getElementById('the-list');
    list.textContent = '';
    
    const product = document.getElementById('product');
    product.setAttribute('disabled', true);

    const price = document.getElementById('price');
    price.setAttribute('disabled', true);

    const addButton = document.getElementById('add-btn');
    addButton.setAttribute('disabled', true);
    
    const message = document.createElement('p');
    message.innerHTML = `<div class="container">
    <p>Your order has been send to the Local Storage, <strong><a href="">Reload</a></strong> the page for new order</p>
  </div>`;
    list.appendChild(message);

    

}