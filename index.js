const productImage = document.querySelector("#product-image");
const tShirt= document.querySelector(".t-shirt");
const whiteBtn = document.querySelector("#white");
const blackBtn = document.querySelector("#black");
const redBtn = document.querySelector("#red");
const blueBtn = document.querySelector("#blue");
const orderBtn = document.querySelector("#orderBtn");
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector(".close-dialog-icon");


whiteBtn.addEventListener("click", ()=>{
    productImage.style.fill = "white";
    tShirt.style.stroke = "black";
})

blackBtn.addEventListener("click", ()=>{
    productImage.style.fill = "black";
    tShirt.style.stroke = "white";
})

redBtn.addEventListener("click", ()=>{
    productImage.style.fill = "#953232";
    tShirt.style.stroke = "black";
})
blueBtn.addEventListener("click", ()=>{
    productImage.style.fill = "#89ACCC";
    tShirt.style.stroke = "black";
})

orderBtn.addEventListener("click", ()=>{
    if (dialog){
        dialog.showModal();
    }
})

closeBtn.addEventListener("click", ()=>{
    dialog.close(); // Pokud chcete dialog rovněž zavřít
})

