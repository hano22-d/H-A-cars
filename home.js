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
  d: "Mercedes-Bemz-CLS-Class",
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
const scroolZero = document.getElementById('scroolZer');
scroolZero.style.display = 'none';
function scroolbtn() {
  if (scrollY <= 100) {
    scroolZero.style.display = 'none';
  }
  else {
    scroolZero.style.display = 'block';
  }
  function scrollzero() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
  scroolZero.addEventListener('click', () => scrollzero())
}

window.addEventListener('scroll', () => scroolbtn())

/*برنامج تطبيق الثيم الليلي*/
const darkmoodBtn = document.getElementById('darkmoodBtn');

const themeSaved = localStorage.getItem('theme');
let html = document.documentElement;


if (themeSaved === 'dark') {
  html.classList.add('darkmood')
  darkmoodBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
}
else if (themeSaved === 'light') {
  html.classList.add('lightmood')
  darkmoodBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'

}

let iconChange = themeSaved === 'dark' ? false : true;

darkmoodBtn.onclick = _ => {
  html.classList.toggle('lightmood');
  html.classList.toggle('darkmood');

  html.classList.contains('darkmood') ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light')

  iconChange ? darkmoodBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
    : darkmoodBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  iconChange = !iconChange
}

/*حفظ القيم في HeaderSearch*/
const headerSubmit = document.getElementById('headerSubmit');
const headerSearch = document.getElementById('headerSearch');
const headerSearchSaved = sessionStorage.getItem('headerSearchValue');
headerSearch.oninput = _ => sessionStorage.setItem('headerSearchValue', headerSearch.value);
headerSearchSaved ? headerSearch.value = headerSearchSaved : '';

/*برنامج تغيير خلفية الهيدر*/
const images =
  [
    'img/Tesla.jpg',
    'img/Mercedes5.jpg',
    'img/BMW.jpg',
    'img/Rolls_Royce.jpg',
    'img/Audi.jpg'
  ]

let headersaved = localStorage.getItem('header')

headersaved = headersaved ? parseInt(headersaved) : 0

const header = document.getElementById('header')
let a = 0;
function dinamicHeaderBackground() {
  header.style.backgroundImage = `url(${images[a]})`
  header.style.backgroundSize = 'cover';
  header.style.transition = `all 1s ease`
  a = (a + 1) % images.length

  localStorage.setItem('header', headersaved)
}
dinamicHeaderBackground()

setInterval(
  dinamicHeaderBackground, 15000
)

