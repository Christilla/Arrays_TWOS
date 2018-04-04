/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("exo array");

//var monBody = document.createElement('body');
var monBody = document.querySelector('body');
var myH1 = document.createElement('h1');
myH1.style.backgroundColor ="steelblue";
myH1.style.padding = "40px";
//    myH1.appendChild(document.createTextNode("ARRAYs – the way of storage"));
    myH1.innerHTML = "ARRAYs – the way of storage";
monBody.appendChild(myH1);


var myDiv = document.createElement('div');
myDiv.setAttribute('id', 'exo01_basket');
myDiv.appendChild(document.createTextNode(""));

var monSpan = document.createElement('button');
monSpan.setAttribute('onclick','addToBasket()');
monSpan.setAttribute('class','addBtn');
monSpan.innerHTML = "Ajouter";

var monInput = document.createElement('input');
monInput.setAttribute('id','MonEntree');
monInput.setAttribute('placeholder','Produits');
monInput.innerHTML = "";

var myDiv_2 = document.createElement('div');
myDiv_2.appendChild(monInput);
myDiv_2.appendChild(monSpan);
monBody.appendChild(myDiv_2);
monBody.appendChild(myDiv);

console.log(myDiv);
console.log(monBody);


var basket = [];
function addToBasket() {
 var newProduct = document.getElementById('MonEntree');
console.log(newProduct);
basket.push(newProduct.value);

majVue();

}

function majVue(){
 var divPanier = document.getElementById("exo01_basket");
 divPanier.innerHTML = "";
  for(i=0 ; i < basket.length ; i++){
   newDiv = document.createElement("div");
   newDiv.innerHTML = basket[i];
   divPanier.appendChild(newDiv);
  }
}

console.log(basket);