const messages = {
    en: {
      usernameRequired: "Username is required.",
      passwordRequired: "Password is required.",
      captchaRequired: "Captcha is required.",
      captchaWrong: "Captcha does not match.",
      invalidCredentials: "Invalid username or password."
    },
    ta: {
      usernameRequired: "பயனர் பெயர் தேவை.",
      passwordRequired: "கடவுச்சொல் தேவை.",
      captchaRequired: "கேப்ட்சா தேவை.",
      captchaWrong: "கேப்ட்சா பொருந்தவில்லை.",
      invalidCredentials: "தவறான பயனர் பெயர் அல்லது கடவுச்சொல்."
    }
  };
  
  let currentLang = "en";
  
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    document.getElementById('usernameError').innerText = "";
    document.getElementById('passwordError').innerText = "";
    document.getElementById('captchaError').innerText = "";
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const captchaInput = document.getElementById('captcha').value.trim();
    const generatedCaptcha = document.getElementById('generatedCaptcha').value.trim();
  
    let valid = true;
  
    if (username === "") {
      document.getElementById('usernameError').innerText = messages[currentLang].usernameRequired;
      valid = false;
    }
  
    if (password === "") {
      document.getElementById('passwordError').innerText = messages[currentLang].passwordRequired;
      valid = false;
    }
  
    if (captchaInput === "") {
      document.getElementById('captchaError').innerText = messages[currentLang].captchaRequired;
      valid = false;
    } else if (captchaInput.toLowerCase() !== generatedCaptcha.toLowerCase()) {
      document.getElementById('captchaError').innerText = messages[currentLang].captchaWrong;
      valid = false;
    }
  
    if (valid) {
      if (username === "admin" && password === "admin123") {
        window.location.href='AdminDashboardD.html';
      } else {
        document.getElementById('usernameError').innerText = messages[currentLang].invalidCredentials;
      }
    }
  });
  
  document.getElementById('refreshCaptcha').addEventListener('click', function () {
    const captchaText = Math.random().toString(36).substring(2, 8);
    document.getElementById('generatedCaptcha').value = captchaText;
  });
  
  document.getElementById('languageSelect').addEventListener('change', function () {
    const lang = this.value;
    currentLang = lang;
  
    if (lang === "en") {
      document.getElementById('subtitle').innerText = "SMART RATION QUEUE - Admin Login";
      document.getElementById('loginText').innerText = "LOGIN";
      document.getElementById('usernameLabel').innerText = "Username (Registered Email Address)";
      document.getElementById('passwordLabel').innerText = "Password";
      document.getElementById('captchaLabel').innerText = "Captcha";
      document.getElementById('loginButton').innerText = "Login";
      document.getElementById('newUser').innerText = "New User?";
      document.getElementById('forgotPassword').innerText = "Forgot Password?";
    } else if (lang === "ta") {
      document.getElementById('subtitle').innerText = "ஸ்மார்ட் ரேஷன் க்யூ - நிர்வாகி உள்நுழைவு";
      document.getElementById('loginText').innerText = "உள்நுழைவு";
      document.getElementById('usernameLabel').innerText = "பயனர் பெயர் (பதிவுசெய்யப்பட்ட மின்னஞ்சல் முகவரி)";
      document.getElementById('passwordLabel').innerText = "கடவுச்சொல்";
      document.getElementById('captchaLabel').innerText = "கேப்ட்சா";
      document.getElementById('loginButton').innerText = "உள்நுழைய";
      document.getElementById('newUser').innerText = "புதிய பயனர்?";
      document.getElementById('forgotPassword').innerText = "கடவுச்சொல் மறந்துவிட்டதா?";
    }
  });
  