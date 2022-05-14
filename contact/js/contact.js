// headeruser
const headerUser = document.querySelectorAll(".header-user i");
const headerUserShow = document.querySelectorAll(".header-user-toggle");
headerUser.forEach((e, i) => {
  e.addEventListener("click", () => {
    headerUserShow[i].classList.toggle("d-block");
  });
});
// main
const forminfo = document.querySelectorAll(".info-to-cmt");
const writeText = document.querySelector(".write-cmt");
const btnSubmit = document.querySelector(".add-t-c");
btnSubmit.addEventListener("click", (e) => {
  if (forminfo[0].value && forminfo[1].value.includes("@") && writeText.value) {
    alert(
      '"Cảm ơn bạn đã gửi yêu cầu, chúng tôi sẽ phản hồi cho bạn sớm nhất"'
    );
    e.preventDefault();
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
