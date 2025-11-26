const data = [
  { text: "style: Tesla Model S - price: 81000$  ", img: "img/tes.jpg" },
  {
    text: "style: BMW i7 (xDrive60) -  price: 124200$ ",
    img: "img/bmwdrive60.jpg",
  },
  {
    text: "style: Porsche 911 GT3  - price: 187000$",
    img: "img/porshe911.png",
  },
  {
    text: "style: Audi e-tron GT -  price: 99000$",
    img: "img/audi_e_tron.jpg",
  },
];

let current = 0;
const infoBar = document.querySelector(".infobar");
const infoText = document.querySelector(".price1");
const infoImage = document.getElementById("infoImage");

function showNextMessage() {
  // تغيير النص والصورة
  infoText.textContent = data[current].text;
  infoImage.src = data[current].img;

  // إعادة تشغيل الأنيميشن
  infoBar.classList.remove("slide");
  void infoBar.offsetWidth; // يجبر المتصفح على إعادة قراءة الأنيميشن
  infoBar.classList.add("slide");

  // الانتقال للعنصر التالي
  current = (current + 1) % data.length;
}

// أول تشغيل
showNextMessage();

// تشغيل كل 8 ثوانٍ
setInterval(showNextMessage, 8000);

/*عرض اسماء السيارات في المعرض*/
let imgbigers = document.getElementById("imgbigers");
let CarNames = document.getElementById("CarNames");

const kan = {
  a: "Hyundai-Elantra",
  b: "Audi-A4",
  c: "BMW-3series",
  d: "Mercedes-Benz-CLS-Class",
  e: "Hyundai-Palisade",
  f: "Audi-Q7",
  g: "BMW-7series",
  h: "Mercedes-Benz-E-Class",
  i: "Hyundai-Tucson",
  j: "Audi-SQ8",
  k: "BMW-i5",
  l: "Mercedes-Benz-G-Class",
  m: "Hyundai-Sonata",
  n: "Audi-S8",
  o: "BMW-X3",
  p: "Mercedes-Benz-Maybach",
  q: "Hyundai-SantaFe",
  r: "Audi-TT",
  s: "BMW-X5",
  t: "Mercedes-Benz-S-Class",
};

function ShowCarsName(carsrc, carName) {
  imgbigers.src = carsrc.src;
  CarNames.style.opacity = "1";
  CarNames.innerText = carName;
  CarNames.classList.add("textShow");
}
/*برنامج تصفير السكرول عند الضغط على الزر*/
const scroolZero = document.getElementById("scroolZer");
scroolZero.style.display = "none";
function scroolbtn() {
  if (scrollY <= 100) {
    scroolZero.style.display = "none";
  } else {
    scroolZero.style.display = "block";
  }
  function scrollzero() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  scroolZero.addEventListener("click", () => scrollzero());
}

window.addEventListener("scroll", () => scroolbtn());

/*برنامج تطبيق الثيم الليلي*/
const darkmoodBtn = document.getElementById("darkmoodBtn");

const themeSaved = localStorage.getItem("theme");
let html = document.documentElement;

if (themeSaved === "dark") {
  html.classList.remove("lightmood");
  html.classList.add("darkmood");
  darkmoodBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  html.classList.remove("darkmood");
  html.classList.add("lightmood");
  darkmoodBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

let iconChange = themeSaved === "dark" ? false : true;

darkmoodBtn.onclick = (_) => {
  html.classList.toggle("lightmood");
  html.classList.toggle("darkmood");

  html.classList.contains("darkmood")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");

  iconChange
    ? (darkmoodBtn.innerHTML = '<i class="fa-solid fa-sun"></i>')
    : (darkmoodBtn.innerHTML = '<i class="fa-solid fa-moon"></i>');
  iconChange = !iconChange;
};

/*حفظ القيم في HeaderSearch*/
const headerSubmit = document.getElementById("headerSubmit");
const headerSearch = document.getElementById("headerSearch");
const headerSearchSaved = sessionStorage.getItem("headerSearchValue");
headerSearch.oninput = (_) =>
  sessionStorage.setItem("headerSearchValue", headerSearch.value);
headerSearchSaved ? (headerSearch.value = headerSearchSaved) : "";

/*برنامج تغيير خلفية الهيدر*/
const images = [
  "Header/Mercedes-15.jpg",
  "Header/BMW-4.jpg",
  "Header/Audi.jpg",
  "Header/Rolls-Royce-0.jpg",
  "Header/Mercedes-11.jpg",
  "Header/BMW-3.jpg",
  "Header/Tesla.jpg",
  "Header/Rolls-Royce-1.jpg",
  "Header/Audi-4.jpg",
  "Header/Mercedes-13.jpg",
  "Header/BMW-2.jpg",
];

let headersaved = localStorage.getItem("header");

headersaved = headersaved ? parseInt(headersaved) : 0;

const header = document.getElementById("header");
let a = 0;
function dinamicHeaderBackground() {
  header.style.backgroundImage = `url(${images[a]})`;
  header.style.backgroundSize = "cover";
  header.style.transition = `all 1s ease`;
  a = (a + 1) % images.length;

  localStorage.setItem("header", a);
}
dinamicHeaderBackground();

setInterval(dinamicHeaderBackground, 15000);

/*Language translation program*/

//Translation file
const information = {
  en: {
    home: "home",
    cars: "cars",
    compare: "compare",
    news: "news",
    store: "store",
    h2c: "The Nio Firefly electric minicar – the first model from the Firefly brand (owned by Nio).",
    paragrafa: `Basic information revealed by Nio on December 21, 2024,
      with official deliveries starting on April 19, 2025, in China.
      The starting price is around $16,770, and with the Battery-as-a-Service subscription option,
      the lower price is about $11,100 per month. It will be launched in the European market during summer 2025 at v3cars.com.
      ⚙️ Key specifications: a compact and modern hatchback design with the distinct Firefly logo,
       not camouflaged with the traditional Nio badge. It focuses on energy efficiency,
       with a fast and safe battery swap system through Nio's exchange network.`,
    h2c2: "Electric car manufacturing in Morocco",
    paragrafb: `Basic information revealed by Nio on December 21, 2024, with official deliveries
     starting on April 19, 2025, in China. The starting price is around $16,770, and with the Battery-as-a-Service
      option, the lowest price is about $11,100 per month. It will be launched in the European market during
       the summer of 2025. ⚙️ Key specifications: A modern compact hatchback design with the distinctive
        Firefly logo, not camouflaged with the traditional Nio badge. It focuses on energy efficiency,
         with a fast and safe battery swap system through Nio's exchange network.`,
    titlemain3: "The latest developments of next year...!",
    bigPhotoText1: "A fierce new competitor in the markets!",
    bigPhotoText2:
      "Palisade 2026, the latest extension of Hyundai`s luxury family SUV lineup",
    pictureText1: "Mercedes 2026 coming",
    pictureParagraph1: `Mercedes-Benz will launch the 2026 S-Class with 6- and 8-cylinder engines delivering 496 and 442 hp.`,
    pictureText2: "The royal car has returned again!",
    pictureParagraph2:
      "Rolls-Royce announced a new release of its luxurious electric car, the Spectre.",
    pictureText3: "BMW refuses to back down",
    pictureParagraph3:
      "BMW is preparing to make a radical change in the world of electric cars with its new vehicle.",
    titlemain5: "Top 10 Popular Cars",
    h2e: "Photo gallery",
    p2: "Welcome to H&A Cars",
    p3: `We are Hani Jomaa and Ali Saadou, and our passion for cars was the greatest motivation for
     creating this website. Here, we take you on a tour of the latest models, industry news, and future
      technologies in the automotive world. Our goal is to become your primary reference for everything
       you need about cars, from specifications and prices to the latest releases and smart tips. At H&A Cars,
        we believe that a car is not just a means of transportation, but an experience, a story, and a world
         of creativity.`,
    Services: "Services",
    ServicesBlog1: "Car search service",
    ServicesBlog2: "Used car evaluation",
    blog: "blog",
    ServicesBlog3: "Automotive News",
    ServicesBlog4: "Buyer`s Guide",
    ServicesBlog5: "Car Comparison",
    site: "Site policies",
    privacy1: "Privacy Policy",
    privacy2: "Terms and Conditions",
    privacy3: "Cookies",
  },
  ar: {
    home: "الرئيسية",
    cars: "السيارات",
    compare: "المقارنة",
    news: "الأخبار",
    store: "المتجر",
    h2c: "سيارة Nio Firefly الكهربائية الصغيرة أول طراز من علامة Firefly التابعة لشركة Nio.",
    paragrafa: `كشفت Nio عن المعلومات الأساسية في 21 ديسمبر 2024،
  مع بدء التسليم الرسمي في 19 أبريل 2025 في الصين.
  يبدأ سعر السيارة من حوالي 16,770 دولار،
  ومع خيار الاشتراك في البطارية (Battery-as-a-Service)
  يصبح سعرها حوالي 11,100 دولار شهريًا. سيتم إطلاقها في السوق الأوروبية خلال صيف 2025 عبر v3cars.com.
  ⚙️ المواصفات الأساسية: تصميم هاتشباك صغير وعصري مع شعار Firefly الجديد،
  وليس شعار Nio التقليدي. تركّز السيارة على الكفاءة في استهلاك الطاقة،
  وتدعم نظام تبديل البطاريات السريع عبر شبكة Nio لتغيير البطاريات.`,

    h2c2: "تصنيع السيارات الكهربائية في المغرب",
    paragrafb: ` أعلنت مؤخّرًا عن استثمار بقيمة 1.2 مليار يورو لتوسيع مصنعها في
            القنيطرة، المغرب، بهدف زيادة الإنتاج السنوي من 20,000 إلى 70,000
            سيارة كهربائية من نماذج مثلStellantis Citroën Ami، Opel Rocks‑e،
            وFiat Topolino Reuters . تأتي هذه الخطوة كجزء من استراتيجية المغرب
            لتعزيز صناعة السيارات المحلية؛ مع هدف رفع نسبة المكونات المصنعة
            محليًا إلى 75% بحلول 2030، مقارنةً بحاليًا حوالي 69% Reuters .
            توسعة المصنع الخامسة منذ افتتاحه عام 2019، وهي خطوة تؤكد مكانة
            المغرب كمركز إنتاج عالمي للسيارات الكهربائية.`,
    titlemain3: "أحدث تطورات العام القادم",
    bigPhotoText1: "منافس شرس جديد في الأسواق!",
    bigPhotoText2:
      "باليسيد 2026 الامتداد الأحدث لسلسلة سيارات الدفع الرباعي العائلية الفاخرة من هيونداي",

    pictureText1: "مرسيدس 2026 قادمة قريبًا",
    pictureParagraph1: `تستعد مرسيدس بنز لإطلاق سيارتها الجديدة اس كلاس 2026 بمحرك 6
                و8 سلندر بقوة 496 و442 حصان`,

    pictureText2: "عودة السيارة الملكية من جديد",
    pictureParagraph2:
      "أعلنت شركة رولز رويس عن إصدار جديد من سياراتها الكهربائية الفاخرة، سبيكتر.",

    pictureText3: "BMW ترفض التراجع",
    pictureParagraph3:
      "تستعد شركة بي أم دبليو لإحداث تغيير جذري في عالم السيارات الكهربائية من خلال سيارتها الجديدة",

    titlemain5: "أفضل 10 سيارات شهيرة",
    h2e: "معرض الصور",

    p2: "مرحبًا بك في H&A Cars",
    p3: `  نحن هاني جمعة و علي سعدو، شغفنا بالسيارات كان الدافع الأكبر لإنشاء هذا
        الموقع. هنا، نأخذك في جولة بين أحدث الطرازات، أخبار الصناعة، وتقنيات
        المستقبل في عالم السيارات. هدفنا أن نصبح مرجعك الأول لكل ما تحتاجه عن
        السيارات، من المواصفات والأسعار، إلى أحدث الإصدارات والنصائح الذكية.
        في H&A Cars، نؤمن أن السيارة ليست مجرد وسيلة نقل، بل هي تجربة، قصة،
        وعالم من الإبداع.`,

    Services: "الخدمات",
    ServicesBlog1: "خدمة البحث عن السيارات",
    ServicesBlog2: "تقييم السيارات المستعملة",
    blog: "المدونة",
    ServicesBlog3: "أخبار السيارات",
    ServicesBlog4: "دليل المشتري",
    ServicesBlog5: "مقارنة السيارات",

    site: "سياسة الموقع",
    privacy1: "سياسة الخصوصية",
    privacy2: "الشروط والأحكام",
    privacy3: "الكوكيز",
  },
};
const select = document.getElementById("selectlan");
let selector = document.querySelectorAll("[data-key]");

let lansaved = localStorage.getItem("lan");

function language(lang) {
  if (lang === "Arabic") {
    selector.forEach((e) => {
      e.textContent = information["ar"][e.dataset.key];
    });
    document.querySelectorAll("p").forEach((a) => {
      a.style.textAlign = "right";
    });
    document.querySelectorAll("h1").forEach((b) => {
      b.style.textAlign = "right";
    });
    select.value = "Arabic";
  } else if (lang === "English") {
    selector.forEach((e) => {
      e.textContent = information["en"][e.dataset.key];
    });
    document.querySelectorAll("p").forEach((a) => {
      a.style.textAlign = "left";
    });
    document.querySelectorAll("h1").forEach((b) => {
      b.style.textAlign = "left";
    });
    select.value = "English";
  }
}

if (lansaved) {
  language(lansaved);
} else {
  language("English");
}

select.addEventListener("change", () => {
  let newLang = select.value;
  language(newLang);
  localStorage.setItem("lan", newLang);
});

const Sections = document.querySelectorAll(".a1");

let savedIndex = localStorage.getItem("active");
if (savedIndex !== null) {
  Sections[savedIndex].classList.add("a1Active");
}

Sections.forEach((a, index) => {
  a.addEventListener("click", () => {
    Sections.forEach((s) => s.classList.remove("a1Active"));
    a.classList.add("a1Active");

    localStorage.setItem("active", index);
  });
});

//  Login system  //
let overlay = document.getElementsByClassName("overlay")[0];
let loginBtn = document.getElementById("loginBtn");
let template = document.getElementById("tem1");
let clone = template.content.cloneNode(true);
let div1 = clone.querySelector("div");
let divout = clone.querySelector('.logout');
document.body.appendChild(clone);

let form = div1.querySelector('.formLogin')
let checkInput = div1.querySelectorAll('input');
let buttonLogin = div1.querySelector(`#sendLoginData`);
let logout = false;

//Window display function
function loginWindow() {
  div1.classList.add("div1Show");
  overlay.classList.add("overlayShow");
}
//Window hiding function
function loginHidden() {
  div1.classList.remove("div1Show");
  overlay.classList.remove("overlayShow");
}
//Logout function
function logOut() {
  let WindowOut = document.createElement('div');
  let divButtons = document.createElement('div')
  let yes = document.createElement('button');
  let no = document.createElement('button');
  let textOut = document.createElement('h2');
  textOut.innerText = 'Are you sure you want to log out?'
  yes.innerText = 'Yes';
  no.innerText = 'No';
  divButtons.appendChild(yes);
  divButtons.appendChild(no);
  WindowOut.appendChild(textOut)
  WindowOut.appendChild(divButtons);
  WindowOut.classList.add('windowOut');
  divButtons.classList.add('divButtons');
  document.body.appendChild(WindowOut)

  overlay.classList.add("overlayShow");

  yes.onclick = function () {
    overlay.classList.remove("overlayShow");
    logout = false;
    loginBtn.innerHTML = '<i class="fa-solid fa-user"></i>';
    WindowOut.classList.remove('windowOut');
    divButtons.classList.remove('divButtons');
  }
  no.onclick = _ => {
    overlay.classList.remove("overlayShow");
    WindowOut.classList.remove('windowOut');
    divButtons.classList.remove('divButtons');
  }
}
//Function to add classes to fields
function setState(input, valid) {
  if (!valid) {
    input.classList.add('succesValue');
    input.classList.remove('errorValue');
  } else {
    input.classList.remove('succesValue');
    input.classList.add('errorValue');
  }
}
//Data validation function
function checkData() {

  let resultCheck = true;

  checkInput.forEach((input) => {
    let inValid = input.value.trim() === '';
    inValid ? resultCheck = false : '';
    setState(input, inValid)
  });

  let email = checkInput[0].value
  let emailValid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  emailValid ? resultCheck = false : '';
  setState(checkInput[0], emailValid)

  let Password = checkInput[1].value;
  let rePassword = checkInput[2].value;
  let passWordValid = Password !== rePassword || Password.length < 8;
  passWordValid ? resultCheck = false : '';
  setState(checkInput[1], passWordValid);
  setState(checkInput[2], passWordValid);

  return resultCheck
};

loginBtn.addEventListener('click', () => !logout ? loginWindow() : logOut())
overlay.addEventListener("click", () => !logout ? loginHidden() : '')
checkInput.forEach(input => { input.addEventListener('keyup', _ => checkData()) })

//send data
form.addEventListener('submit', (e) => {
  if (checkData()) {
    logout = true;
    divout.classList.add("logoutShow");
    div1.classList.remove("div1Show");
    loginBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
    setTimeout(_ => {
      divout.classList.remove("logoutShow");
      overlay.classList.remove('overlayShow')
    }, 2000)
  } else {
    e.preventDefault();
  }
})



