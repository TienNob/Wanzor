// headeruser
const headerUser = document.querySelectorAll(".header-user i");
const headerUserShow = document.querySelectorAll(".header-user-toggle");
headerUser.forEach((e, i) => {
  e.addEventListener("click", () => {
    headerUserShow[i].classList.toggle("d-block");
  });
});
// main
const signUpInputs = document.querySelectorAll(".signUp-content-about_input");
const signUpBtn = document.querySelector(".signUp-content-about_btn");
signUpBtn.addEventListener("click", (e) => {
  if (signUpInputs[0].value && signUpInputs[1].value) {
    alert("Đăng nhập thành công");
    e.preventDefault;
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
