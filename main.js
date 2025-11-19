const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  // تحقق من اسم المستخدم
  if (name.value.trim() === "") {
    messages.push("Name is required");
  }

  // تحقق من الباسورد
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 chars");
  }
  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 chars");
  }
  if (password.value.toLowerCase() === "password") {
    messages.push("Password cannot be 'password'");
  }

  // عرض الرسائل أو السماح بالإرسال
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    errorElement.style.display = "block"; // إظهار الصندوق
  } else {
    errorElement.innerText = "";
    errorElement.style.display = "none"; // إخفاء الصندوق
  }
});
