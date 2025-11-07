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
  html.classList.add("darkmood");
  darkmoodBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else if (themeSaved === "light") {
  html.classList.add("lightmood");
  darkmoodBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

/* */
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
  "Header/Tesla.jpg",
  "Header/BMW-4.jpg",
  "Header/Audi-4.jpg",
  "Header/Mercedes-13.jpg",
  "Header/Rolls-Royce-1.jpg",
  "Header/Audi.jpg",
  "Header/Mercedes-15.jpg",
  "Header/Rolls-Royce-0.jpg",
  "Header/BMW-2.jpg",
  "Header/BMW-3.jpg",
  "Header/Mercedes-11.jpg",
];

let headersaved = localStorage.getItem("header");

headersaved = headersaved ? parseInt(headersaved) : 0;

const header = document.getElementById("header");
let a = 0;
function dinamicHeaderBackground() {
  header.style.backgroundImage = `url(${images[a]})`;
  header.style.backgroundSize = "cover";
  header.style.transition = `all 1s ease-in-out`;
  a = (a + 1) % images.length;

  localStorage.setItem("header", headersaved);
}
dinamicHeaderBackground();

setInterval(dinamicHeaderBackground, 15000);


/*Language translation program*/

//Translation file
const information = {
  en: {
    home: 'home',
    cars: 'cars',
    compare: 'compare',
    news: 'news',
    store: 'store',
    card1T: 'Mercedes-CLS-Class-2023',
    card1P: 'germany',
    list1: 'Engine capacity: 3.0L',
    list2: 'Number of cylinders: 6',
    list3: 'Engine power: 362 HP',
    list4: 'Drive system: four-wheel drive',
    faceBtn: 'More from Mercedes',
    card2T: 'BMW-3-series-2024',
    card2P: 'germany',
    list5: 'Engine capacity: 3.0L',
    list6: 'Number of cylinders: 4',
    list7: 'Engine power: 255 HP',
    list8: 'Drive system: rear',
    faceBtn2: 'More from BMW',
    card3T: 'Toyota-Camry-2025',
    card3P: 'Japan',
    list9: 'Engine capacity: 2.5L',
    list10: 'Number of cylinders: 4',
    list11: 'Engine power: 232 HP',
    list12: 'Drive system: four-wheel drive',
    faceBtn3: 'More from Toyota',
    card4T: 'Ford-Edge-2024',
    card4P: 'USA',
    list13: 'Engine capacity: 2.0L',
    list14: 'Number of cylinders: 4',
    list15: 'Engine power: 250 HP',
    list16: 'Drive system: four-wheel drive',
    faceBtn4: 'More from Ford',
    listdivTitle: 'Auto Archive',
    make: 'Make',
    model: 'Model',
    year: 'Year',
    go: 'Go',
  },
  ar: {
    home: 'الرئيسية',
    cars: 'السيارات',
    compare: 'المقارنة',
    news: 'الأخبار',
    store: 'المتجر',

    card1T: 'مرسيدس سي أل اس 2023',
    card1P: 'ألمانيا',
    list1: 'سعة المحرك: 3.0 لتر',
    list2: 'عدد الأسطوانات: 6',
    list3: 'قوة المحرك: 362 حصان',
    list4: 'نظام الدفع: دفع رباعي',
    faceBtn: 'المزيد من مرسيدس',

    card2T: 'بي إم دبليو الفئة الثالثة 2024',
    card2P: 'ألمانيا',
    list5: 'سعة المحرك: 3.0 لتر',
    list6: 'عدد الأسطوانات: 4',
    list7: 'قوة المحرك: 255 حصان',
    list8: 'نظام الدفع: خلفي',
    faceBtn2: 'المزيد من بي إم دبليو',

    card3T: 'تويوتا كامري 2025',
    card3P: 'اليابان',
    list9: 'سعة المحرك: 2.5 لتر',
    list10: 'عدد الأسطوانات: 4',
    list11: 'قوة المحرك: 232 حصان',
    list12: 'نظام الدفع: دفع رباعي',
    faceBtn3: 'المزيد من تويوتا',

    card4T: 'فورد إيدج 2024',
    card4P: 'الولايات المتحدة',
    list13: 'سعة المحرك: 2.0 لتر',
    list14: 'عدد الأسطوانات: 4',
    list15: 'قوة المحرك: 250 حصان',
    list16: 'نظام الدفع: دفع رباعي',
    faceBtn4: 'المزيد من فورد',

    listdivTitle: 'أرشيف السيارات',
    make: 'الشركة',
    model: 'الطراز',
    year: 'السنة',
    go: 'بحث',
    p2: 'مرحبًا بك في H&A Cars',
    p3: `  نحن هاني جمعة و علي سعدو، شغفنا بالسيارات كان الدافع الأكبر لإنشاء هذا
        الموقع. هنا، نأخذك في جولة بين أحدث الطرازات، أخبار الصناعة، وتقنيات
        المستقبل في عالم السيارات. هدفنا أن نصبح مرجعك الأول لكل ما تحتاجه عن
        السيارات، من المواصفات والأسعار، إلى أحدث الإصدارات والنصائح الذكية.
        في H&A Cars، نؤمن أن السيارة ليست مجرد وسيلة نقل، بل هي تجربة، قصة،
        وعالم من الإبداع.`,

    Services: 'الخدمات',
    ServicesBlog1: 'خدمة البحث عن السيارات',
    ServicesBlog2: 'تقييم السيارات المستعملة',
    blog: 'المدونة',
    ServicesBlog3: 'أخبار السيارات',
    ServicesBlog4: 'دليل المشتري',
    ServicesBlog5: 'مقارنة السيارات',

    site: 'سياسة الموقع',
    privacy1: 'سياسة الخصوصية',
    privacy2: 'الشروط والأحكام',
    privacy3: 'الكوكيز',
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

