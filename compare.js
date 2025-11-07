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
const images = [
  "Header/BMW-3.jpg",
  "Header/Mercedes-15.jpg",
  "Header/Audi-4.jpg",
  "Header/Rolls-Royce-1.jpg",
  "Header/Mercedes-13.jpg",
  "Header/Tesla.jpg",
  "Header/BMW-2.jpg",
  "Header/Audi.jpg",
  "Header/Rolls-Royce-0.jpg",
  "Header/Mercedes-11.jpg",
  "Header/BMW-4.jpg",
];
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

const information = {
  en: {
    home: 'home',
    cars: 'cars',
    compare: 'compare',
    news: 'news',
    store: 'store',
    go: 'GO',
    carTitle: 'Car Spacialists:',
    Engine: 'Engine',
    power: 'power',
    Transmission: 'Transmission',
    Drivetrain: 'Drivetrain',
    price: 'price',
    cardButton: 'Show more',
    h1Special: 'BMW Series 3 - 2025',
    Specifications: 'Specifications',
    value: 'value',
    p2: 'Welcome to H&A Cars',
    p3: `We are Hani Jomaa and Ali Saadou, and our passion for cars was the greatest motivation for
     creating this website. Here, we take you on a tour of the latest models, industry news, and future
      technologies in the automotive world. Our goal is to become your primary reference for everything
       you need about cars, from specifications and prices to the latest releases and smart tips. At H&A Cars,
        we believe that a car is not just a means of transportation, but an experience, a story, and a world
         of creativity.`,
    Services: 'Services',
    ServicesBlog1: 'Car search service',
    ServicesBlog2: 'Used car evaluation',
    blog: 'blog',
    ServicesBlog3: 'Automotive News',
    ServicesBlog4: 'Buyer`s Guide',
    ServicesBlog5: 'Car Comparison',
    site: 'Site policies',
    privacy1: 'Privacy Policy',
    privacy2: 'Terms and Conditions',
    privacy3: 'Cookies',
  },
  ar: {
    home: 'الرئيسية',
    cars: 'السيارات',
    compare: 'مقارنة',
    news: 'الأخبار',
    store: 'المتجر',
    go: 'اذهب',
    carTitle: 'خصائص السيارة',
    Engine: 'المحرك',
    power: 'القوة الحصانية',
    Transmission: 'ناقل الحركة',
    Drivetrain: 'نظام الدفع',
    price: 'السعر',
    cardButton: 'عرض المزيد',
    h1Special: 'بي ام دبليو الفئة الثالثة - 2025',
    Specifications: 'المواصفات',
    value: 'القيمة',
    p2: 'مرحبا بكم في H&A Cars',
    p3: `نحن هاني جمعة وعلي سعدو، وشغفنا في عالم السيارات كان الدافع الأكبر لإنشاء هذا الموقع.
     هنا نأخذكم في جولة لأحدث الطرازات، أخبار الصناعة، والتقنيات المستقبلية في عالم السيارات.
     هدفنا أن نصبح مرجعكم الأول لكل ما يتعلق بالسيارات من مواصفات وأسعار إلى أحدث الإصدارات
     والنصائح الذكية. في H&A Cars، نؤمن أن السيارة ليست مجرد وسيلة نقل، بل تجربة وقصة وعالم
     من الإبداع.`,
    Services: 'خدماتنا',
    ServicesBlog1: 'خدمة البحث عن السيارات',
    ServicesBlog2: 'تقييم السيارات المستعملة',
    blog: 'المدونة',
    ServicesBlog3: 'أخبار السيارات',
    ServicesBlog4: 'دليل الشراء',
    ServicesBlog5: 'مقارنة السيارات',
    site: 'سياسات الموقع',
    privacy1: 'سياسة الخصوصية',
    privacy2: 'الشروط والأحكام',
    privacy3: 'ملفات الارتباط',
  }
}

const select = document.getElementById('selectlan');
let selector = document.querySelectorAll('[data-key]');

let lansaved = localStorage.getItem('lan');

function language(lang) {
  if (lang === 'Arabic') {
    selector.forEach(e => { e.textContent = information['ar'][e.dataset.key] });
    document.querySelectorAll('p').forEach(a => { a.style.textAlign = 'right' });
    document.querySelectorAll('h1').forEach(b => { b.style.textAlign = 'right' });
    select.value = 'Arabic';
  } else if (lang === 'English') {
    selector.forEach(e => { e.textContent = information['en'][e.dataset.key] });
    document.querySelectorAll('p').forEach(a => { a.style.textAlign = 'left' });
    document.querySelectorAll('h1').forEach(b => { b.style.textAlign = 'left' });
    select.value = 'English';
  }
}

if (lansaved) {
  language(lansaved);
} else {
  language('English');
}

select.addEventListener('change', () => {
  let newLang = select.value;
  language(newLang);
  localStorage.setItem('lan', newLang);
});


const Sections = document.querySelectorAll('.a1');

let savedIndex = localStorage.getItem('active');
if (savedIndex !== null) {
  Sections[savedIndex].classList.add('a1Active');
}

Sections.forEach((a, index) => {
  a.addEventListener('click', () => {
    Sections.forEach(s => s.classList.remove('a1Active'));
    a.classList.add('a1Active');

    localStorage.setItem('active', index);
  });
});

