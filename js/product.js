console.log('Product & Price');

/*-------------------------------------------------------------------------------*\
  /////////////////////// (1)Input products & prices \\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
const addProduct = () =>
{
    const product = document.getElementById('product');
    const productText = product.value;
    
    const price = document.getElementById('price');
    const priceText = price.value;

    if(!productText || !priceText)
    {
      return;
    }
            
    product.value = '';
    price.value = '';
    
    //Display The-List
    displayList(productText,priceText);

    //Adding Order on local storage
    addOrder(productText,priceText);
  
}
/*-------------------------------------------------------------------------------*\
  /////////////////////// (2)Display products & prices \\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
const displayList = (productText,priceText) =>
{
    const productList = document.getElementById('product-list');
    const productCount = document.createElement('li');
    productCount.innerHTML = productText;
    productList.appendChild(productCount);

    const priceList = document.getElementById('price-list');
    const priceCount = document.createElement('li');
    priceCount.innerHTML = priceText;
    priceList.appendChild(priceCount); 

    /*
    //Caught Mistake

    const priceList = document.getElementById('price-list');
    const priceCount = document.createElement('li');

    //Mistakes 
    //(1)creating </li> with another </li> in innerHTML
    //(2)that's why </ol> orders are breaking down with each other, when you're adding extra </li> dynamically
    
    priceCount.innerHTML = `<li>${priceText} $</li>`;
    priceList.appendChild(priceCount); 
    */

}
/*-------------------------------------------------------------------------------*\
  //////////////////// (3)Getting Order on local storage \\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
 const getOrder = () =>
 {
   const takeOrder = localStorage.getItem('Order'); //Local-Storage
   let orderObject;
   if(takeOrder)
   {
     orderObject = JSON.parse(takeOrder);
   }
   else
   {
     orderObject = {};
   }
   return orderObject;
 }
/*-------------------------------------------------------------------------------*\
  ////////////////////// (4)Adding Order on local storage \\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
const addOrder = (productText,priceText) =>
{
  
  const takeOrder = { product: productText, price: priceText};  

  console.log(takeOrder);
  
  const stringifiedTakeOrder = JSON.stringify(takeOrder);
  localStorage.setItem('Order',stringifiedTakeOrder); //Local-Storage

  getOrder();
  
} 

/*-------------------------------------------------------------------------------*\
  //////////////////// (5)Taking Order & Closing UI \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
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

    product.value = '';
    price.value = '';
     
}

