const shopButton=document.querySelector(".shop_btn");

shopButton.addEventListener("click",function(){
    document.querySelector(".products").scrollingIntoView({
        behavior:"smooth"
    });

});

const cartbuttons=document.querySelectorAll(".buy-btn");

cartbuttons.forEach(function(button){
    button.addEventListener("click",function(){
        alert("product added to cart!");
    });
});