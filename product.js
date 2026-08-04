const selectedId = Number(localStorage.getItem("selectedProduct"));

const product = products.find(item => item.id === selectedId);


if(product){

    document.getElementById("productImage").src = product.image;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productPrice").textContent =
    product.price + " EGP";

    document.getElementById("productDescription").textContent =
    product.description;

}


document.getElementById("addToCart").addEventListener("click",()=>{

    const size = document.getElementById("sizeSelect").value;


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push({

        id: product.id,

        name: product.name,

        price: product.price,

        image: product.image,

        size: size

    });


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert("Added To Cart");

});