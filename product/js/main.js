// headeruser
const headerUser = document.querySelectorAll(".header-user i");
const headerUserShow = document.querySelectorAll(".header-user-toggle");
headerUser.forEach((e, i) => {
  e.addEventListener("click", () => {
    headerUserShow[i].classList.toggle("d-block");
  });
});

var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
  $fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);
setBar();

const sliderr = document.querySelector("input");
const valuee = document.querySelector(".valuee");
valuee.textContent = sliderr.value;
slider.oninput = function () {
  valuee.textContent = this.value;
};

const allFilterItems = document.querySelectorAll(".product-item_fillter");
const allFilterBtns = document.querySelectorAll(".filter-btn");

allFilterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn) {
  allFilterItems.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

var btnvar1 = document.getElementById("btnh1");

function Toggle1() {
  if (btnvar1.style.color == "pink") {
    btnvar1.style.color = "white";
    btnvar1.style.backgroundColor = "#ff642f";
  } else {
    btnvar1.style.color = "pink";
    btnvar1.style.backgroundColor = "red";
  }
}

var btnvar2 = document.getElementById("btnh2");

function Toggle2() {
  if (btnvar2.style.color == "pink") {
    btnvar2.style.color = "white";
    btnvar2.style.backgroundColor = "#ff642f";
  } else {
    btnvar2.style.color = "pink";
    btnvar2.style.backgroundColor = "red";
  }
}

var btnvar3 = document.getElementById("btnh3");

function Toggle3() {
  if (btnvar3.style.color == "pink") {
    btnvar3.style.color = "white";
    btnvar3.style.backgroundColor = "#ff642f";
  } else {
    btnvar3.style.color = "pink";
    btnvar3.style.backgroundColor = "red";
  }
}
var btnvar4 = document.getElementById("btnh4");

function Toggle4() {
  if (btnvar4.style.color == "pink") {
    btnvar4.style.color = "white";
    btnvar4.style.backgroundColor = "#ff642f";
  } else {
    btnvar4.style.color = "pink";
    btnvar4.style.backgroundColor = "red";
  }
}
var btnvar5 = document.getElementById("btnh5");

function Toggle5() {
  if (btnvar5.style.color == "pink") {
    btnvar5.style.color = "white";
    btnvar5.style.backgroundColor = "#ff642f";
  } else {
    btnvar5.style.color = "pink";
    btnvar5.style.backgroundColor = "red";
  }
}
var btnvar9 = document.getElementById("btnh9");

function Toggle9() {
  if (btnvar9.style.color == "pink") {
    btnvar9.style.color = "white";
    btnvar9.style.backgroundColor = "#ff642f";
  } else {
    btnvar9.style.color = "pink";
    btnvar9.style.backgroundColor = "red";
  }
}
var btnvar6 = document.getElementById("btnh6");

function Toggle6() {
  if (btnvar6.style.color == "pink") {
    btnvar6.style.color = "white";
    btnvar6.style.backgroundColor = "#ff642f";
  } else {
    btnvar6.style.color = "pink";
    btnvar6.style.backgroundColor = "red";
  }
}
var btnvar7 = document.getElementById("btnh7");

function Toggle7() {
  if (btnvar7.style.color == "pink") {
    btnvar7.style.color = "white";
    btnvar7.style.backgroundColor = "#ff642f";
  } else {
    btnvar7.style.color = "pink";
    btnvar7.style.backgroundColor = "red";
  }
}
var btnvar8 = document.getElementById("btnh8");

function Toggle8() {
  if (btnvar8.style.color == "pink") {
    btnvar8.style.color = "white";
    btnvar8.style.backgroundColor = "#ff642f";
  } else {
    btnvar8.style.color = "pink";
    btnvar8.style.backgroundColor = "red";
  }
}

//fliter price
//search product name
function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  str = str.replace(/ + /g, " ");
  str = str.trim();
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}

const search = document.querySelector(".product-search");
const productitem = document.querySelectorAll(".product-item");
const productName = document.querySelectorAll(".name-item");
search.addEventListener("keyup", (e) => {
  e.preventDefault();

  const searchValue = removeVietnameseTones(search.value.toLowerCase().trim());
  for (i = 0; i < productitem.length; i++) {
    console.log(searchValue);
    console.log(removeVietnameseTones(productName[i].textContent));
    if (
      removeVietnameseTones(productName[i].textContent.toLowerCase()).includes(
        searchValue
      )
    ) {
      productitem[i].style.display = "block";
    } else if (searchValue == "") {
      productitem[i].style.display = "block";
    } else {
      productitem[i].style.display = "none";
    }
  }
});

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
