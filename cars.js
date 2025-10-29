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

/* */
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
    'img/BMW.jpg',
    'img/Tesla.jpg',
    'img/Mercedes5.jpg',
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





