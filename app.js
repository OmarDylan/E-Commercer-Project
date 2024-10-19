const wrapper = document.querySelector('.sliderWrapper');

const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 120,
    colors: [
      {
        code: "black",
        img: "/images/air.png",
      },
      {
        code: "darkblue",
        img: "/images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "/images/jordan.png",
      },
      {
        code: "green",
        img: "/images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/images/blazer.png",
      },
      {
        code: "green",
        img: "/images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/images/crater.png",
      },
      {
        code: "lightgray",
        img: "/images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/images/hippie.png",
      },
      {
        code: "black",
        img: "/images/hippie2.png",
      },
    ],
  },
];
//the choosen product
let choosenProduct = products[0];

//the current that the user see
const currentProductImg = document.querySelector(".productimg");

//current title that the user see

const currentProductTitle = document.querySelector(".productTitle");
//the current price that the user see
const currentProductPrice = document.querySelector(".productPrice");

//the current color that the user see
const currentProductColors = document.querySelectorAll(".color");

//the current size that the user see
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change to the chosen product
    choosenProduct = products[index];

    //change the text(title, description and price) of the current procuct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//changing the color based on the user click
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

//changing the size based on the user click
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//payment implementations(variables and operations)

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".closeButton");

//buy button
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

//close button
closeButton.addEventListener("click", () => {
  payment.style.display = "none";
});
