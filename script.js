let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(name, price){

cart.push({

name:name,
price:price

});


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("تم إضافة المنتج للسلة 🛒");

}




function loadCart(){

let box = document.getElementById("cartItems");

let totalBox = document.getElementById("total");


if(!box) return;


let html="";
let total=0;



cart.forEach((item,index)=>{


html += `

<div class="cartItem">

<h3>
${item.name}
</h3>


<p>
${item.price} OMR
</p>


<button onclick="removeItem(${index})">
حذف
</button>


</div>

`;


total += item.price;


});



box.innerHTML = html;


totalBox.innerHTML = total;



let message="طلب جديد من Vura:\n\n";


cart.forEach(item=>{

message +=
item.name+" - "+item.price+" OMR\n";

});


message +=
"\nالمجموع: "+total+" OMR";



document.getElementById("whatsapp").href =
"https://wa.me/96876757295?text="
+
encodeURIComponent(message);


}



function removeItem(index){

cart.splice(index,1);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


loadCart();

}



loadCart();
