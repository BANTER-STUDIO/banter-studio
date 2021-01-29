function CheckhCap() {
  const val = false;
  const captcha = document.getElementById("captcha");

  if (typeof document.getElementsByTagName('h-captcha-response')[0] != 'undefined') {
    const hcaptchaVal = document.getElementsByTagName('h-captcha-response')[0].value;
    if (hcaptchaVal === "") {
      showError(captcha)
    } else {
      alert(hcaptchaVal);
    }
  } else {
    alert('error');
  }
  return val;
}

async function submitCap() {
  const val = false;
  const capForm = document.getElementById('capForm');
  let formData = new FormData(capForm);
  formData.delete('g-recaptcha-response');

  let response = await fetch('http://localhost:8080/verifyCap.php', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
   const data = await response.text();
    alert(data);
    val = true
  } else {
    alert(response.status);
  }
  return val;
}

function cap() {
  var checkedCap = CheckhCap();
  if (checkedCap == true) {
    return true;
  } else {
    return false;
  }
}