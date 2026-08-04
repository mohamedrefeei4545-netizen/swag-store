const cartContainer = document.getElementById("cartContainer");

const totalPrice = document.getElementById("totalPrice");


let cart = JSON.parse(localStorage.getItem("cart")) || [];


// عرض السلة

function displayCart(){

    cartContainer.innerHTML = "";

    let total = 0;


    if(cart.length === 0){

        cartContainer.innerHTML = `
            <h3>Your cart is empty</h3>
        `;

        totalPrice.textContent = "";

        return;

    }



    cart.forEach((item,index)=>{


        total += item.price;


        cartContainer.innerHTML += `

        <div class="product-card">


            <img src="${item.image}">


            <div class="product-info">


                <h3>${item.name}</h3>


                <p>
                Price: ${item.price} EGP
                </p>


                <p>
                Size: ${item.size}
                </p>


                <p>
                Color: ${item.color}
                </p>


                <button 
                class="view-btn"
                onclick="removeItem(${index})">

                Remove

                </button>


            </div>


        </div>

        `;


    });



    totalPrice.textContent =
    "Total: " + total + " EGP";


}



// حذف منتج

function removeItem(index){


    cart.splice(index,1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();


}



displayCart();