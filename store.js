/*برنامج تصفير السكرول عند الضغط على الزر*/
const scroolZero = document.getElementById('scroolZer');
scroolZero.style.opacity = '0';
function scroolbtn() {
  if (scrollY <= 100) {
    scroolZero.style.opacity = '0';
  }
  else {
    scroolZero.style.opacity = '1';
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
  "Header/Rolls-Royce-1.jpg",
  "Header/Mercedes-1.jpg",
  "Header/Audi-4.jpg",
  "Header/BMW-3.jpg",
  "Header/Mercedes-11.jpg",
  "Header/Tesla.jpg",
  "Header/BMW-2.jpg",
  "Header/Audi.jpg",
  "Header/Rolls-Royce-0.jpg",
  "Header/Mercedes-13.jpg",
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
    saleTitle: 'Offers',
    carName: 'Genesis GV80 2020',
    saleText1: 'A 3.5-liter, 6-cylinder engine producing 375 horsepower.',
    saleText2: 'Four-wheel drive system',
    saleText3: 'Acceleration from 0 to 100 km/h in 5.5 seconds',
    saleText4: 'Fuel tank capacity: 80 liters',
    next: 'Next',
    last: 'Last',
    buying: 'Buying',
    ViewDetails: 'View Details',
    Suggestions: 'Suggestions',
    carName2: 'Kia Sorento 2021',
    saleText5: 'A 3.5-liter, 6-cylinder engine producing 290 horsepower.',
    saleText6: 'Four-wheel drive system',
    saleText7: 'Acceleration from 0 to 100 km/h in 7.5 seconds',
    saleText8: 'Fuel tank capacity: 67 liters',
    SLabel: 'Chosse your reuest',
    view: 'view',
    search: 'search',
    theCar: '🔥 CLS-Class 2012 🔥',
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
    privacy3: 'Cookies'
  },
  ar: {
    home: 'الرئيسية',
    cars: 'السيارات',
    compare: 'المقارنة',
    news: 'الأخبار',
    store: 'المعرض',
    saleTitle: 'العروض',
    carName: 'جينيسيس GV80 2020',
    saleText1: 'محرك سعة 3.5 لتر، 6 سلندر بقوة 375 حصان.',
    saleText2: 'نظام دفع رباعي',
    saleText3: 'التسارع من 0 الى 100 كم/س خلال 5.5 ثانية',
    saleText4: 'سعة خزان الوقود: 80 لتر',
    next: 'التالي',
    last: 'السابق',
    buying: 'شراء',
    ViewDetails: 'عرض التفاصيل',
    Suggestions: 'اقتراحات',
    carName2: 'كيا سورينتو 2021',
    saleText5: 'محرك سعة 3.5 لتر، 6 سلندر بقوة 290 حصان.',
    saleText6: 'نظام دفع رباعي',
    saleText7: 'التسارع من 0 الى 100 كم/س خلال 7.5 ثانية',
    saleText8: 'سعة خزان الوقود: 67 لتر',
    SLabel: 'اختر طلبك',
    view: 'عرض',
    search: 'بحث',
    theCar: '🔥 مرسيدس CLS 2012 🔥',
    p2: 'مرحباً بكم في موقع H&A Cars',
    p3: `نحن هاني جمعة وعلي سعدو، وشغفنا بعالم السيارات كان الدافع الأكبر لإنشاء هذا الموقع.
     هنا نأخذكم في جولة على أحدث الطرازات، وأخبار الصناعة، وتقنيات المستقبل في عالم السيارات.
     هدفنا أن نكون مرجعكم الأول لكل ما يتعلق بالسيارات، من المواصفات والأسعار إلى أحدث الإصدارات
     والنصائح الذكية. في H&A Cars نؤمن أن السيارة ليست مجرد وسيلة نقل، بل تجربة وقصة وعالم من الإبداع.`,
    Services: 'الخدمات',
    ServicesBlog1: 'خدمة البحث عن السيارات',
    ServicesBlog2: 'تقييم السيارات المستعملة',
    blog: 'المدونة',
    ServicesBlog3: 'أخبار السيارات',
    ServicesBlog4: 'دليل الشراء',
    ServicesBlog5: 'مقارنة السيارات',
    site: 'سياسات الموقع',
    privacy1: 'سياسة الخصوصية',
    privacy2: 'الشروط والأحكام',
    privacy3: 'ملفات تعريف الارتباط'
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



