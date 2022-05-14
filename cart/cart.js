// headeruser
const headerUser = document.querySelectorAll(".header-user i");
const headerUserShow = document.querySelectorAll(".header-user-toggle");
headerUser.forEach((e, i) => {
  e.addEventListener("click", () => {
    headerUserShow[i].classList.toggle("d-block");
  });
});
// main
var listItems = [
  {
    name: "Thức ăn cho cún",
    price: 299000,
    pathImg: "../product/img/product1.png",
  },
  {
    name: "Vitamin cho thú cưng",
    price: 199000,
    pathImg: "../product/img/product2.png",
  },
  {
    name: "Cơm chiên dương châu",
    price: 399000,
    pathImg: "../product/img/product3.png",
  },
  {
    name: "Thức ăn tự nhiên pik",
    price: 159000,
    pathImg: "../product/img/product4.png",
  },
  {
    name: "Áo khoác cực cool",
    price: 189000,
    pathImg: "../product/img/product5.png",
  },
  {
    name: "Thuốc ho sổ mũi",
    price: 239000,
    pathImg: "../product/img/product6.png",
  },
  {
    name: "Đồ chơi bóng gai",
    price: 399000,
    pathImg: "../product/img/product7.png",
  },
  {
    name: "Pa tê cao cấp",
    price: 210000,
    pathImg: "../product/img/product9.png",
  },
  {
    name: "Kẹo bòn bon",
    price: 129000,
    pathImg: "../product/img/product99.png",
  },
];

const cartTableBody = document.querySelector("tbody");
let items = [];
let oderNums = [];
let itemSums = [];
const cartTable = document.querySelector(".cart-table");
// get data localstorage
for (let i = 0; i < localStorage.length; i++) {
  const keyProduct = localStorage.key(i);
  if (listItems[keyProduct]) {
    items.push(listItems[keyProduct]);
    oderNums.push(parseInt(localStorage.getItem(keyProduct)));
    for (let j = 0; j < oderNums.length; j++) {
      var result = listItems[keyProduct].price * oderNums[j];
    }
    itemSums.push(result);
  }
}
console.log(itemSums, oderNums);
// show item cart
function showItem() {
  const itemsHtml = items.map((item, i) => {
    return `<tr class="cart-table_row">          
      <td class="pt-3 pb-3 text-start">
        <img width="100px" src="${item.pathImg}" alt="">
        <b class="mt-2 d-block d-sm-inline-block text-sm-start text-center">${item.name}</b>
      </td>
      <td><small>${item.price}đ</small></td>
      <td><small>${oderNums[i]}</small></td>
      <td><small>${itemSums[i]}đ</small></td>
      <td class="text-end"><i class="fa-solid fa-xmark cart-remove"></i></td>          
    </tr>`;
  });
  const emptyTable = [
    `<tr>
      <td class="text-center pt-4" colspan="5">Bạn chưa có sản phẩm nào, vui lòng thêm sản phẩm ở mục sản phẩm!!</td>
    </tr>`,
  ];
  items.length !== 0
    ? (cartTableBody.innerHTML = itemsHtml.join(""))
    : (cartTableBody.innerHTML = emptyTable.join());
  const cartRemoves = document.querySelectorAll(".cart-remove");
  cartRemoves.forEach((remove, i) => {
    remove.addEventListener("click", () => {
      const keyProduct = localStorage.key(i);
      if (keyProduct) {
        localStorage.removeItem(keyProduct);
        location.reload();
      }
    });
  });
}
// calc
function totalCost() {
  if (itemSums) {
    const cartSum = document.querySelector(".cart-total_sum");
    const sumItem = itemSums.reduce((acc, item) => {
      return acc + item;
    }, 0);
    cartSum.innerText = sumItem + "đ";
    const totalEnd = document.querySelector(".cart-total_end");
    const btnPay = document.querySelector(".btn-pay");
    const totalShip = document.querySelector(".cart-total_ship");
    if (items.length !== 0) {
      totalEnd.innerText = sumItem + 20000 + "đ";
      totalShip.innerText = 20000 + "đ";
      btnPay.addEventListener("click", () => {
        alert("Cảm ơn bạn đã thanh toán");
      });
    } else {
      totalEnd.innerText = 0 + "đ";
      totalShip.innerText = 0 + "đ";
      btnPay.addEventListener("click", () => {
        alert("Vui lòng thêm sản phẩm để thanh toán");
      });
    }
  }
}
// footer email
const footerEmail = document.querySelector(".footer-mail_send_input");
const footerBtn = document.querySelector(".footer-mail_send_btn");
footerBtn.addEventListener("click", () => {
  if (footerEmail.value.includes("@")) {
    alert(
      "Cảm ơn bạn đã đăng kí, chúng tôi sẽ gửi cho bạn những thông tin mới nhất"
    );
  }
});

showItem();
totalCost();
