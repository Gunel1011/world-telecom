const slider = document.getElementById("slider");
let x = 1;
setInterval(next, 5000);
show();

function prev() {
  if (x > 1) x--;
  else x = 5;
  show();
}

function next() {
  if (x < 5) x++;
  else x = 1;
  show();
}

function show() {
  slider.style.backgroundImage = `url(../img/home-sekil${x}.jpg)`;
}

//   slider 1
const slider2 = document.getElementById("slider2");
const slider1 = document.getElementById("slider1");

let y = 1;
setInterval(prev1, 5000);
show1();
function prev1() {
  if (x > 1) x--;
  else x = 2;
  show1();
}

function next1() {
  if (x < 1) x++;
  else x = 1;
  show1();
}

function show1() {
  slider1.style.backgroundImage = `url(../img/slider-sekil${y}.jpg)`;
}

const menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
  this.classList.toggle("open");
});

function deyis1() {
  document.getElementById("demo").innerHTML = "6 ay x 483.28 ₼";
}
function deyis2() {
  document.getElementById("demo").innerHTML = "12 ay x 249.28 ₼";
}
function deyis3() {
  document.getElementById("demo").innerHTML = "18 ay x 183.28 ₼";
}

function deyis4() {
  document.getElementById("demo1").innerHTML = "6 ay x 403.28 ₼";
}

function deyis5() {
  document.getElementById("demo1").innerHTML = "12 ay x 233.28 ₼";
}
function deyis6() {
  document.getElementById("demo1").innerHTML = "18 ay x 183.28 ₼";
}

function deyis7() {
  document.getElementById("demo2").innerHTML = "6 ay x 503.28 ₼";
}
function deyis8() {
  document.getElementById("demo2").innerHTML = "12 ay x 253.28 ₼";
}
function deyis9() {
  document.getElementById("demo2").innerHTML = "18 ay x 183.28 ₼";
}

function deyis10() {
  document.getElementById("demo3").innerHTML = "6 ay x 503.28 ₼";
}
function deyis11() {
  document.getElementById("demo3").innerHTML = "12 ay x 253.28 ₼";
}
function deyis12() {
  document.getElementById("demo3").innerHTML = "18 ay x 183.28 ₼";
}

function myFunction(value) {
  document.getElementById("req").innerHTML = value;
}

function replace() {
  document.getElementById("ap").innerHTML = "6 ay x 483.28 ₼";
}
function replace1() {
  document.getElementById("ap").innerHTML = "12 ay x 303.28 ₼";
}
function replace2() {
  document.getElementById("ap").innerHTML = "18 ay x 168.28 ₼";
}

function replace3() {
  document.getElementById("ap1").innerHTML = "6 ay x 403.28 ₼";
}
function replace4() {
  document.getElementById("ap1").innerHTML = "12 ay x 203.28 ₼";
}
function replace5() {
  document.getElementById("ap1").innerHTML = "18 ay x 150.28 ₼";
}

function replace6() {
  document.getElementById("ap2").innerHTML = "6 ay x 403.28 ₼";
}
function replace7() {
  document.getElementById("ap2").innerHTML = "12 ay x 203.28 ₼";
}
function replace8() {
  document.getElementById("ap2").innerHTML = "18 ay x 150.28 ₼";
}

function replace9() {
  document.getElementById("ap3").innerHTML = "6 ay x 403.28 ₼";
}
function replace10() {
  document.getElementById("ap3").innerHTML = "12 ay x 203.28 ₼";
}
function replace11() {
  document.getElementById("ap3").innerHTML = "18 ay x 150.28 ₼";
}

function replace12() {
  document.getElementById("ap4").innerHTML = "6 ay x 403.28 ₼";
}
function replace13() {
  document.getElementById("ap4").innerHTML = "12 ay x 203.28 ₼";
}
function replace14() {
  document.getElementById("ap4").innerHTML = "18 ay x 150.28 ₼";
}

function replace12() {
  document.getElementById("ap4").innerHTML = "6 ay x 403.28 ₼";
}
function replace13() {
  document.getElementById("ap4").innerHTML = "12 ay x 203.28 ₼";
}
function replace14() {
  document.getElementById("ap4").innerHTML = "18 ay x 150.28 ₼";
}

function replac1() {
  document.getElementById("sum").innerHTML = "6 ay x 403.28 ₼";
}
function replac2() {
  document.getElementById("sum").innerHTML = "12 ay x 203.28 ₼";
}
function replac3() {
  document.getElementById("sum").innerHTML = "18 ay x 150.28 ₼";
}

function replac4() {
  document.getElementById("sum1").innerHTML = "6 ay x 403.28 ₼";
}
function replac5() {
  document.getElementById("sum1").innerHTML = "12 ay x 203.28 ₼";
}
function replac6() {
  document.getElementById("sum1").innerHTML = "18 ay x 150.28 ₼";
}

function replac7() {
  document.getElementById("sum3").innerHTML = "6 ay x 403.28 ₼";
}
function replac8() {
  document.getElementById("sum3").innerHTML = "12 ay x 203.28 ₼";
}
function replac9() {
  document.getElementById("sum3").innerHTML = "18 ay x 150.28 ₼";
}

function replac10() {
  document.getElementById("xi").innerHTML = "6 ay x 50.28 ₼";
}
function replac11() {
  document.getElementById("xi").innerHTML = "12 ay x 25.28 ₼";
}
function replac12() {
  document.getElementById("xi").innerHTML = "18 ay x 15.28 ₼";
}

function replac13() {
  document.getElementById("xi1").innerHTML = "6 ay x 50.28 ₼";
}
function replac14() {
  document.getElementById("xi1").innerHTML = "12 ay x 25.28 ₼";
}
function replac15() {
  document.getElementById("xi1").innerHTML = "18 ay x 15.28 ₼";
}

function replac16() {
  document.getElementById("xi2").innerHTML = "6 ay x 50.28 ₼";
}
function replac17() {
  document.getElementById("xi2").innerHTML = "12 ay x 25.28 ₼";
}
function replac18() {
  document.getElementById("xi3").innerHTML = "18 ay x 15.28 ₼";
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// sebete elave et

function addToCart() {
  // Məhsul adı və qiymətini almaq
  const productName = "Apple iPhone 16 Pro 128 GB White Titanium";
  const productPrice = 2899; // Həmçinin qiyməti dəyişdirmək olar

  // Səbətə əlavə et
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${productName} səbətə əlavə edildi!`);
}
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productList = document.querySelector(".s-mehsullar > div"); // Məhsulların göstəriləcəyi yer
  let totalAmountElement = document.querySelector(".s-mehsullar > div h4"); // Ümumi məbləğ
  let total = 0;

  // Səbət məlumatlarını sıfırlamaq
  productList.innerHTML = ""; // Əvvəlki məhsulları təmizlə

  // Məhsulları və ümumi qiyməti yığmaq
  cart.forEach((item) => {
    total += item.price;

    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
            <p>${item.name}</p>
            <h4>${item.price} ₼</h4>
        `;

    productList.appendChild(itemDiv);
  });

  // Ümumi məbləği göstərmək
  totalAmountElement.textContent = total + " ₼";
}

// Səbət səhifəsi açılarkən yüklə
if (window.location.pathname.includes("../HTML/sebetim.html")) {
  loadCart();
}


