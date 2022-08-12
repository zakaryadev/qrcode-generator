const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (qrValue != "") {
    preValue = qrValue;
    generateBtn.innerText = "QR Code Generaciyalanbaqta...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}&bgcolor=fff&color=000`;
    qrImg.addEventListener("load", (e) => {
      generateBtn.innerText = "QR Code Generaciyalaw";
      wrapper.classList.add("active");
    });
  }
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});
