const cartProduct = [];

function display(displayProduct){
    const tableBody = document.getElementById('cart-products');
        tableBody.innerHTML='';
        let totalPrice = 0;
    for(let i = 0; i<cartProduct.length;i++){
        const name = cartProduct[i].productName;
        const price = cartProduct[i].productPrice;

        totalPrice = totalPrice + price;
        const tr = document.createElement('tr');
        tr.innerHTML =`<th scope="row">${i + 1}</th>
        <td>${name}</td>
        <td>${price}$</td>`;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
        tr.innerHTML =`<th scope="row"> </th>
        <td>Total Price</td>
        <td>${totalPrice}$</td>`;
        tableBody.appendChild(tr);
}

function addToCart(element){
    const productName = element.parentNode.children[0].innerText;
    const productPrice = element.parentNode.children[1].children[0].innerText;
    const productObj = {
        productName:productName,
        productPrice:parseInt(productPrice),
    }
    cartProduct.push(productObj);
    document.getElementById('total-added-product').innerText = cartProduct.length;
    display(cartProduct);
    const btnOut =document.getElementById('btn-out');
    btnOut.classList.remove('d-none');
}

document.getElementById('btn-out').addEventListener('click',function(){
    alert('we are working for Checkout Payment.As soon as possible we will add it!!');
    
})