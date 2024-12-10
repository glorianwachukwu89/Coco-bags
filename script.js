const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
    id: 1,
    title: "Stellar",
    price: 199,
    colors: [
        {
            code: "black",
            img: "/bag1.png"
        },
        {
            code: "green",
            img: "/bag 4.png"
        },
    ],
},  

{
    id: 2,
    title: "Marie",
    price: 109,
    colors: [
        {
            code: "#04351e",
            img: "/bag 2.png"
        },
        {
            code: "#a29fbb",
            img: "/bag 8.png"
        },
    ],
},  

{
    id: 1,
    title: "Beaux",
    price: 100,
    colors: [
        {
            code: "#63252f",
            img: "/bag 3.png"
        },
        {
            code: "#7c4f71",
            img: "/bag 11.png"
        },
    ],
},  

{
    id: 1,
    title: "Roxie",
    price: 130,
    colors: [
        {
            code: "#c46127",
            img: "/bag 9.png"
        },
        {
            code: "#10684e",
            img: "/bag 10.png"
        },
    ],
},  

{
    id: 1,
    title: "Zenny",
    price: 150,
    colors: [
        {
            code: "black",
            img: "/bag 7.png"
        },
        {
            code: "#174983",
            img: "/bag 6.png"
        },
    ],
}  
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
    wrapper.style.transform= `translate(${-100 * index}vw)`;

    //change the chosen product
    choosenProduct = products[index]

    //change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
 
    //assign new colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })
    });
})


currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
    currentProductSizes.forEach(size=>{
        size.style.backgroundColor = "white";
        size.style.color = "black";
        });    
    size.style.backgroundColor = "black";
    size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})