const translations = {
  en: {
    mainTitle: "Smart Ration Queue System",
    subTitleTop: "Skip the Queue, Book Online!",
    description: "Easily book your ration slot without standing in long lines.",
    subTitleBottom: "Be a Smart Citizen",
    loginTitle: "Login",
    labelRation: "Enter Your Phone Number",
    labelOTP: "Enter OTP",
    generateOTPBtn: "Generate OTP",
    labelCaptcha: "Captcha",
    prefetchLabel: "Prefetch details while logging in",
    consentLabel: "I authorize data usage for booking and authentication.",
    submitBtn: "Submit",
  },
  ta: {
    mainTitle: "ஸ்மார்ட் ரேஷன் வரிசை அமைப்பு",
    subTitleTop: "வரிசையை தவிர்க்கவும், ஆன்லைனில் முன்பதிவு செய்யவும்!",
    description: "நீண்ட வரிசைகளில் நிற்காமல் உங்கள் ரேஷன் ஸ்லாட்டை எளிதாக பதிவு செய்யுங்கள்.",
    subTitleBottom: "நீங்கள் ஒரு புத்திசாலி குடிமகன்",
    loginTitle: "உள்நுழைவு",
    labelRation: " உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",
    labelOTP: "ஓடிபி உள்ளிடவும்",
    generateOTPBtn: "ஓடிபி உருவாக்கு",
    labelCaptcha: "கேப்சா",
    prefetchLabel: "உள்நுழையும்போது விவரங்களை முன்பதிவுசெய்க",
    consentLabel: "பதிவுப்பதிவிற்கும் சான்றுப்பதிவுக்கும் தரவுப் பயன்பாட்டை அனுமதிக்கிறேன்.",
    submitBtn: "சமர்ப்பிக்கவும்",
  },
  hi: {
    mainTitle: "स्मार्ट राशन कतार प्रणाली",
    subTitleTop: "कतार से बचें, ऑनलाइन बुक करें!",
    description: "लंबी कतारों में खड़े बिना आसानी से राशन स्लॉट बुक करें।",
    subTitleBottom: "एक स्मार्ट नागरिक बनें",
    loginTitle: "लॉग इन करें",
    labelRation: "अपना फोन नंबर दर्ज करें",
    labelOTP: "ओटीपी दर्ज करें",
    generateOTPBtn: "ओटीपी जनरेट करें",
    labelCaptcha: "कैप्चा",
    prefetchLabel: "लॉग इन करते समय विवरण प्रीफेच करें",
    consentLabel: "बुकिंग और प्रमाणीकरण के लिए डेटा उपयोग को अधिकृत करता हूं।",
    submitBtn: "सबमिट करें",
  },
};

function changeLanguage() {
  const lang = document.getElementById("language").value;
  const t = translations[lang];

  document.getElementById("mainTitle").innerText = t.mainTitle;
  document.getElementById("subTitleTop").innerText = t.subTitleTop;
  document.getElementById("description").innerText = t.description;
  document.getElementById("subTitleBottom").innerText = t.subTitleBottom;
  document.getElementById("loginTitle").innerText = t.loginTitle;
  document.getElementById("labelRation").innerText = t.labelRation;
  document.getElementById("labelOTP").innerText = t.labelOTP;
  document.getElementById("generateOTPBtn").innerText = t.generateOTPBtn;
  document.getElementById("labelCaptcha").innerText = t.labelCaptcha;
  document.getElementById("prefetchLabel").innerText = t.prefetchLabel;
  document.getElementById("consentLabel").innerText = t.consentLabel;
  document.getElementById("submitBtn").innerText = t.submitBtn;
}

function generateCaptcha() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("captcha").innerText = captcha;
}

generateCaptcha();

function showError(id, message) {
  const el = document.getElementById(id);
  el.innerText = message;
  el.style.display = "block";
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach((e) => {
    e.style.display = "none";
    e.innerText = "";
  });
}

function goToAdmin() {
  window.location.href = "Adminlogin.html";
}

function generateOTP() {
  clearErrors();
  const rationCard = document.getElementById("rationCard").value.trim();

  if (rationCard === "") {
    showError("rationError", "This is a required field.");
    return;
  } else if (rationCard.length !== 10 || !/^\d{10}$/.test(rationCard)) {
    showError("rationError", "Invalid Ration Card Number. Must be 10 digits.");
    return;
  }

  document.getElementById("otp").disabled = false;
  showError("otpError", "OTP sent successfully (simulated). Please enter OTP.");
  setTimeout(() => {
    document.getElementById("otpError").style.display = "none";
  }, 3000);
}

function submitLogin() {
  clearErrors();
  window.location.href = "profile.html";
  const rationCard = document.getElementById("rationCard").value.trim();
  const otp = document.getElementById("otp").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const captchaGenerated = document.getElementById("captcha").innerText.trim();
  const consent = document.getElementById("consent").checked;

  let valid = true;

  if (rationCard === "") {
    showError("rationError", "This is a required field.");
    valid = false;
  } else if (rationCard.length !== 10 || !/^\d{10}$/.test(rationCard)) {
    showError("rationError", "Phone Number must be 10 digits.");
    valid = false;
  }

  if (otp === "") {
    showError("otpError", "OTP is required.");
    valid = false;
  } else if (otp !== "123456") {
    showError("otpError", "Incorrect OTP. Please try again.");
    valid = false;
  }

  if (captchaInput === "") {
    showError("captchaError", "Captcha is required.");
    valid = false;
  } else if (captchaInput.toLowerCase() !== captchaGenerated.toLowerCase()) {
    showError("captchaError", "Captcha is incorrect.");
    generateCaptcha();
    valid = false;
  }

  if (!consent) {
    showError("consentError", "You must give consent to proceed.");
    valid = false;
  }

  if (!valid) return;
  window.location.href = "profile.html";
}
