// headeruser
const headerUser = document.querySelectorAll(".header-user i");
const headerUserShow = document.querySelectorAll(".header-user-toggle");
headerUser.forEach((e, i) => {
  e.addEventListener("click", () => {
    headerUserShow[i].classList.toggle("d-block");
  });
});
// quotebtn
const quotebtn = document.querySelector(".home-quote-form_btn");
const quoteSelect = document.querySelectorAll(".home-quote-form_select");
quotebtn.addEventListener("click", (e) => {
  if (quoteSelect[0].value && quoteSelect[1].value && quoteSelect[2].value) {
    alert("Yêu cầu của bạn đã được gửi, chúng tôi sẽ phản hồi bạn nhanh nhất");
    e.preventDefault();
  }
});
// cout fact
const factsNumbers = document.querySelectorAll(".home-facts-card_about_number");
function countFact(el) {
  let numberEl = el.querySelector(".home-facts-card_about_number span");
  let to = parseInt(numberEl.textContent);
  let count = 0;
  const time = 300;
  let step = to / time;
  let counting = setInterval(() => {
    count += step;
    if (count > to) {
      clearInterval(counting);
      numberEl.innerText = to;
    } else {
      numberEl.innerText = Math.round(count);
    }
  }, 1);
}
function loadCountFact(el) {
  const ElBox = el.getBoundingClientRect();
  const distandFormTop = -80;
  if (ElBox.top - window.innerHeight < distandFormTop) {
    return true;
  } else {
    return false;
  }
}
function scanDocument() {
  const homeFact = document.querySelector(".home-facts");
  if (loadCountFact(homeFact)) {
    factsNumbers.forEach((factsNumber) => {
      countFact(factsNumber);
      document.removeEventListener("scroll", scanDocument);
    });
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
// call functinon
document.addEventListener("scroll", scanDocument);
