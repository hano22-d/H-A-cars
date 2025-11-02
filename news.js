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
  "Header/Audi.jpg",
  "Header/BMW-2.jpg",
  "Header/Tesla.jpg",
  "Header/Mercedes-11.jpg",
  "Header/Rolls-Royce-0.jpg",
  "Header/Mercedes-13.jpg",
  "Header/BMW-4.jpg",
  "Header/Rolls-Royce-1.jpg",
  "Header/Audi-4.jpg",
  "Header/Mercedes-1.jpg",
  "Header/BMW-3.jpg",
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
    dinamicNewsText: `German luxury carmaker Mercedes-Benz saw its profits decline significantly last year,
     primarily due to weak business in China.The company, listed on Germany's DAX stock exchange index,
     announced on Thursday that its profits fell by 28 percent year-on-year to €10.4 billion last year.`,
    nextPage: 'Next',
    lastPage: 'Last',
    filterTitle: 'Filter results',
    resultSubmit: 'Search',
    BU1: 'Mercedes-Benz',
    BU2: 'BMW',
    BU3: 'Tesla',
    BU4: 'Latest news',
    BU5: 'This Week',
    results: 'The most prominent results',
    fixedNtext1: `Cadillac Returns to the UK Market After an 8-Year Absence with Electric Vehicles
General Motors has confirmed its intention to bring the luxury brand Cadillac back to the UK, starting
with the all-electric Lyriq, currently available in select European countries, priced at around £68,000
and boasting a range of up to 330 miles.`,
fixedNtext2: `Nissan closed its California dealership after profits plummeted 90% year-on-year,
 and plans to shut down plants in Mexico and Japan by 2028, raising widespread concerns about the
 impact of declining demand in China on its global performance.`,
 fixedNtext3: `Volkswagen warns of huge losses and proposes building factories in America. VW has
 incurred approximately $1.5 billion as a result of tariffs. It is considering manufacturing Audi
  cars in the United States as part of its expansion strategy, within investments exceeding $5 billion
  in projects such as Scout and Rivian.`,
  fixedNtext4: `A test drive from Michigan to Maine in the United States in a Rivian R1S
The R1S achieved a real-world driving range of approximately 326 miles, highlighting the rapid
 growth of charging networks,despite rising costs of charging outside the home.`,
 fixedNtext5: `BMW brand sales in the US rose by 1.6% during the first half of 2025
  compared to the previous year, despite a slight slowdown in the second quarter.`,
  fixedNtext6: `The first Tesla showroom and service center in Riyadh has opened,
  and will soon begin offering the Model 3, Model Y, and Cybertruck, with plans to open
  additional branches in Jeddah and Dammam, as part of the Kingdom's vision to make 30%
  of Riyadh's cars electric by 2030.`,
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
    store: 'المتجر',

    dinamicNewsText: `شهدت شركة مرسيدس-بنز الألمانية الفاخرة انخفاضًا كبيرًا في أرباحها خلال العام الماضي،
وذلك بسبب ضعف المبيعات في السوق الصينية. أعلنت الشركة المدرجة في مؤشر داكس الألماني
أن أرباحها تراجعت بنسبة 28% على أساس سنوي لتصل إلى 10.4 مليار يورو.`,

    nextPage: 'التالي',
    lastPage: 'الأخير',

    filterTitle: 'تصفية النتائج',
    resultSubmit: 'بحث',

    BU1: 'مرسيدس-بنز',
    BU2: 'بي إم دبليو',
    BU3: 'تسلا',
    BU4: 'آخر الأخبار',
    BU5: 'هذا الأسبوع',

    results: 'أبرز النتائج',

    fixedNtext1: `عودة كاديلاك إلى السوق البريطانية بعد غياب 8 سنوات مع طرازات كهربائية.
أكدت جنرال موتورز نيتها إعادة علامة كاديلاك الفاخرة إلى المملكة المتحدة، بدءًا بطراز Lyriq الكهربائي،
بسعر يقارب 68 ألف جنيه إسترليني ومدى يصل إلى 330 ميلًا.`,

    fixedNtext2: `أغلقت نيسان أحد فروعها في كاليفورنيا بعد هبوط أرباحها بنسبة 90%،
وتخطط لإغلاق مصانع في المكسيك واليابان بحلول 2028، بسبب تراجع الطلب في السوق الصينية.`,

    fixedNtext3: `فولكس فاغن تحذر من خسائر ضخمة وتقترح بناء مصانع في أمريكا.
تكبدت الشركة حوالي 1.5 مليار دولار بسبب الرسوم الجمركية، وتدرس إنتاج سيارات أودي في الولايات المتحدة
ضمن استثمارات تتجاوز 5 مليارات دولار.`,

    fixedNtext4: `رحلة اختبار لسيارة Rivian R1S من ميشيغان إلى ولاية ماين الأمريكية.
حققت السيارة مدى قيادة حقيقي يبلغ حوالي 326 ميلًا، مما يعكس تطور البنية التحتية لشحن السيارات
على الرغم من ارتفاع تكلفة الشحن خارج المنزل.`,

    fixedNtext5: `ارتفعت مبيعات علامة بي إم دبليو في الولايات المتحدة بنسبة 1.6% خلال النصف الأول من 2025،
على الرغم من تباطؤ طفيف في الربع الثاني.`,

    fixedNtext6: `افتتاح أول صالة عرض ومركز خدمة لتسلا في الرياض،
مع قرب طرح موديل 3 وموديل Y وCybertruck، وخطط مستقبلية لافتتاح فروع في جدة والدمام
ضمن رؤية المملكة لجعل 30% من سيارات الرياض كهربائية بحلول 2030.`,

    p2: 'مرحبًا بك في H&A Cars',
    p3: `نحن هاني جمعة وعلي سعدو، وشغفنا بالسيارات كان الدافع الأكبر لإنشاء هذا الموقع.
هنا نأخذك في جولة عبر أحدث الموديلات وأخبار الصناعة والتقنيات المستقبلية في عالم السيارات.
هدفنا أن نكون مرجعك الأول لكل ما تحتاجه عن السيارات، من المواصفات والأسعار إلى الإصدارات الحديثة
وأذكى النصائح. في H&A Cars نؤمن أن السيارة ليست مجرد وسيلة نقل، بل تجربة وقصة وعالم من الإبداع.`,

    Services: 'الخدمات',
    ServicesBlog1: 'خدمة البحث عن سيارات',
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




