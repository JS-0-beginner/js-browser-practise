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
    priceCount.innerHTML = `<li>${priceText}</li>`;
    priceList.appendChild(priceCount);

    product.value = '';
    price.value = '';
    
    

}