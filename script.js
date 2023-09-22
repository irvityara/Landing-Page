// Tambahkan kode JavaScript kalian di file ini
const video = document.querySelector('video');
video.autoplay = true;

function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
  
    return { name, city, email, zipCode, status };
}
  

function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {
    if (formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
        return true
    } else {
        return false
    }
  }
  
  let warningMessage = document.getElementById("warning")

  function submit() {
    event.preventDefault();
    const formData = handleGetFormData();
    if (!validateFormData(formData)) {
      document.getElementById("warning").innerHTML =
        "Periksa form anda sekali lagi";
    } else {
      document.getElementById("warning").innerHTML = "";
    }
  }
  
  document.getElementById("submit-form").addEventListener("click", submit);
  