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


const btnGO = document.getElementById('btnGO')
const companyA = document.getElementById('CompanyA');
const companyB = document.getElementById('CompanyB');
const modelA = document.getElementById('modelA');
const modelB = document.getElementById('modelB');
const selectA = document.getElementById('sel1');
const selectB = document.getElementById('sel2');

const listA = document.getElementById('listSpacialistsA');
const listB = document.getElementById('listSpacialistsB');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

let car_card1 = document.querySelectorAll('.divcard');


let CarsInfo = [
  {
    company: 'Mercedes-Benz',
    model: 'S-Class',
    year: '2009',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2009-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2009-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2009-inside.jpg'
    ],
    info: {
      EngineCapacity: '5.5L',
      NumberCylinders: '8',
      EnginePower: '382 HP',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '45,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'S-Class',
    year: '2013',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2013.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2013-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2013-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.5L',
      NumberCylinders: '6',
      EnginePower: '295 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '45,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'S-Class',
    year: '2015',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2015.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2015-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2015-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '436 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '45,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'S-Class',
    year: '2021',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2021-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2021-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2021-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '429 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '45,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'S-Class',
    year: '2025',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2025.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2025-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-S-Class-2025-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '442 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '45,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },

  /* G-Class */
  {
    company: 'Mercedes-Benz',
    model: 'G-Class',
    year: '2013',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2013-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2013-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2013-inside.jpg'
    ],
    info: {
      EngineCapacity: '5.5L Twin-Turbo',
      NumberCylinders: '8',
      EnginePower: '382 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '60,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'G-Class',
    year: '2018',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2018-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2018-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2018-inside.jpg'
    ],
    info: {
      EngineCapacity: '4.0L Twin-Turbo',
      NumberCylinders: '8',
      EnginePower: '416 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '50,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'G-Class',
    year: '2022',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2022-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2022-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2022-inside.jpg'
    ],
    info: {
      EngineCapacity: '4.0L Twin-Turbo',
      NumberCylinders: '8',
      EnginePower: '577 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '35,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'G-Class',
    year: '2025',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2025.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2025-back.avif',
      'cars img (store page)/Mercedes-Benz/Mercedes-G-Class-2025-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.0L Twin-Turbo',
      NumberCylinders: '6',
      EnginePower: '443 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '5 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },

  /* E-Class */
  {
    company: 'Mercedes-Benz',
    model: 'E-Class',
    year: '2008',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2008.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2008-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2008-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.5L',
      NumberCylinders: '6',
      EnginePower: '268 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '95,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'E-Class',
    year: '2012',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2012.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2012-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2012-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.5L',
      NumberCylinders: '6',
      EnginePower: '302 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '80,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'E-Class',
    year: '2015',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2015-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2015-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2015-inside.webp'
    ],
    info: {
      EngineCapacity: '2.1L',
      NumberCylinders: '4',
      EnginePower: '195 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '70,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'E-Class',
    year: '2020',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2020-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2020-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2020-inside.jpg'
    ],
    info: {
      EngineCapacity: '2.0L',
      NumberCylinders: '4',
      EnginePower: '255 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '30,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'E-Class',
    year: '2024',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2024.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2024-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-E-Class-2024-inside.jpg'
    ],
    info: {
      EngineCapacity: '2.0L',
      NumberCylinders: '4',
      EnginePower: '255 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '5 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },

  /* CLS-Class */
  {
    company: 'Mercedes-Benz',
    model: 'CLS-Class',
    year: '2007',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2007-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2007-inside.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2007-back.jpg'],
    info: {
      EngineCapacity: '5.5L Turbo',
      NumberCylinders: '8',
      EnginePower: '382 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '110,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'CLS-Class',
    year: '2010',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2010.jpg'
      , 'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2010-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2010-inside.jpg'],
    info: {
      EngineCapacity: '5.5L Turbo',
      NumberCylinders: '8',
      EnginePower: '382 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '95,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'CLS-Class',
    year: '2014',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2014.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2014-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2014-inside.jpg'
    ],
    info: {
      EngineCapacity: '4.7L Turbo',
      NumberCylinders: '8',
      EnginePower: '402 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '70,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'CLS-Class',
    year: '2019',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2019.webp',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2019-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2019-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.0L Turbo',
      NumberCylinders: '6',
      EnginePower: '362 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '45,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'CLS-Class',
    year: '2023',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2023-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2023-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-CLS-Class-2023-inside.jpg'
    ],
    info: {
      EngineCapacity: '3.0L Turbo',
      NumberCylinders: '6',
      EnginePower: '362 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '5 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },

  /* Maybach */
  {
    company: 'Mercedes-Benz',
    model: 'Maybach',
    year: '2016',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-Maybach-2016-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-2016-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-2016-inside.jpg'
    ],
    info: {
      EngineCapacity: '6.0L',
      NumberCylinders: '12',
      EnginePower: '523 HP',
      PaymentSystem: 'Rear wheel drive',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '40,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'Maybach',
    year: '2023',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-Maybach-2023-front.avif',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-2023-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-2023-inside.jpg'
    ],
    info: {
      EngineCapacity: '4.0L',
      NumberCylinders: '8',
      EnginePower: '496 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '12,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'Maybach EQS-SVU',
    year: '2024',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-Maybach-EQS-SVU-2024-front.avif',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-EQS-SVU-2024-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-EQS-SVU-2024-inside.jpg'
    ],
    info: {
      EngineCapacity: 'Electric motor',
      EnginePower: '649 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '5 km',
      fuelType: 'Electric',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'Maybach GLS',
    year: '2021',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-Maybach-GLS-SUV-2021-front.avif',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-GLS-SUV-2021-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-GLS-SUV-2021-inside.avif'
    ],
    info: {
      EngineCapacity: '4.0L',
      NumberCylinders: '8',
      EnginePower: '550 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'Used',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '30,000 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  {
    company: 'Mercedes-Benz',
    model: 'Maybach GLS',
    year: '2024',
    img: ['cars img (store page)/Mercedes-Benz/Mercedes-Maybach-GLS-SUV-2024-front.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-GLS-SUV-2024-back.jpg',
      'cars img (store page)/Mercedes-Benz/Mercedes-Maybach-GLS-SUV-2024-inside.jpg'
    ],
    info: {
      EngineCapacity: '4.0L',
      NumberCylinders: '8',
      EnginePower: '550 HP',
      PaymentSystem: 'All wheel drive (4MATIC)',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: 'Black',
      mileage: '5 km',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany'
    }
  },
  /* BMW Z4 */
  {
    company: 'BMW',
    model: 'Z4',
    year: 2010,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '260 HP',
      condition: 'Used',
      seats: 2,
      cleanliness: '78%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'Rear Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'Z4',
    year: 2014,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '240 HP',
      condition: 'Used',
      seats: 2,
      cleanliness: '78%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'Rear Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'Z4',
    year: 2019,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '255 HP',
      condition: 'Used',
      seats: 2,
      cleanliness: '100%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'Rear Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'Z4',
    year: 2023,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '255 HP',
      condition: 'New',
      seats: 2,
      cleanliness: '100%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'Rear Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'Z4',
    year: 2025,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '4',
      EnginePower: '255 HP',
      condition: 'New',
      seats: 2,
      cleanliness: '100%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'Rear Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'X5',
    year: 2009,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '260 HP',
      condition: 'Used',
      seats: 5,
      cleanliness: '78%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'All Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'X5',
    year: 2013,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '300 HP',
      condition: 'Used',
      seats: 5,
      cleanliness: '70%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'All Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'X5',
    year: 2017,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '300 HP',
      condition: 'Used',
      seats: 5,
      cleanliness: '70%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'All Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'X5',
    year: 2022,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '335 HP',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'All Wheel Drive'
    }
  },
  {
    company: 'BMW',
    model: 'X5',
    year: 2026,
    img: ['', '', ''],
    info: {
      EngineCapacity: '3.0L',
      NumberCylinders: '6',
      EnginePower: '375 HP',
      condition: 'New',
      seats: 5,
      cleanliness: '100%',
      color: '',
      mileage: '',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      origin: 'Germany',
      driveType: 'All Wheel Drive'
    }
  },
];

function ErrorMessage() {
  let unavailable = document.createElement('p');
  unavailable.classList.add('unavailable');
  unavailable.textContent = 'This model is not available';
  return unavailable;
}

let imgindex = 0;

function carsCopmare(company, model, year, Cardindex) {

  let check = false;

  car_card1[Cardindex].innerHTML = '';

  for (let i = 0; i < CarsInfo.length; i++) {
    let car = CarsInfo[i];

    if (
      company.value === car.company &&
      model.value === car.model &&
      year.value === car.year
    ) {
      let title = document.createElement('h1');
      title.textContent = 'Car spacialists:';


      let btn = document.createElement('button');
      btn.innerHTML = ' <i class="fas fa-chevron-down"></i>';
      btn.classList.add('card_button');
      btn.title = 'Show More';

      let btnimg = document.createElement('button');
      btnimg.innerHTML = ' <i class="fas fa-chevron-down"></i>';
      btnimg.classList.add('btnImg');

      let btnZoom = document.createElement('button');
      btnZoom.classList.add('btnZoom');
      btnZoom.innerHTML = '<i class="fas fa-expand-alt"></i>';

      let img = document.createElement('img');
      img.src = car.img[imgindex];
      img.classList.add('car_image1')
      setTimeout(() => img.classList.add('showCarimage'), 50)

      let ul = document.createElement('ul');
      ul.classList.add('spacialists');
      setTimeout(() => ul.classList.add('showSpacialists'), 50);


      img.addEventListener('mouseenter', () => btnimg.style.opacity = '0.8');
      img.addEventListener('mouseleave', () => btnimg.style.opacity = '0');
      btnimg.addEventListener('mouseenter', () => btnimg.style.opacity = '0.8');

      btnimg.onclick = () => {

        imgindex++;
        img.src = car.img[imgindex];
        if (imgindex === 3) {
          imgindex = 0;
          img.src = car.img[imgindex];
        }
      }

      btnZoom.onclick = () => {
        let div = document.createElement('div');
        div.classList.add('divZoom')

        let imgZoom = document.createElement('img');
        imgZoom.classList.add('imgZoom')
        imgZoom.src = img.src;

        setTimeout(function () {
          div.style.opacity = '1';
          div.style.background = 'rgba(0, 0, 0, 0.8)'
        }, 10)

        div.addEventListener('click', () => {
          div.style.opacity = '0';
          setTimeout(() => div.remove(), 500);
        });

        div.appendChild(imgZoom);
        document.body.appendChild(div);
      }

      let state = false;
      let l = 0;

      for (let key in car.info) {
        l++;
        if (!state) {
          let li = document.createElement('li');
          li.textContent = `${key}: ${car.info[key]}`;
          ul.appendChild(li);
        }
        if (l === 4) { state = true; }
      }

      btn.onclick = () => {
        if (state) {
          ul.innerHTML = '';
          let count = 0;
          for (let key in car.info) {
            count++;
            let li = document.createElement('li');
            li.textContent = `${key}: ${car.info[key]}`;
            ul.appendChild(li);
          }
          btn.title = 'Show Less';
          btn.style.transform = 'rotate(180deg)';
          state = false;
          scroll({
            top: 800
          })
        } else {
          ul.innerHTML = '';
          let count = 0;
          for (let key in car.info) {
            count++;
            if (count <= 4) {
              let li = document.createElement('li');
              li.textContent = `${key}: ${car.info[key]}`;
              ul.appendChild(li);
            }
          }
          btn.title = 'Show More';
          btn.style.transform = 'rotate(0deg)';
          state = true;
          scroll({
            top: 430
          })
        }
      };

      car_card1[Cardindex].appendChild(btnZoom)
      car_card1[Cardindex].appendChild(img);
      car_card1[Cardindex].appendChild(btnimg)
      car_card1[Cardindex].appendChild(title);
      car_card1[Cardindex].appendChild(ul);
      car_card1[Cardindex].appendChild(btn);

      check = true;
      break;
    }
  }

  if (!check) {
    car_card1[Cardindex].innerHTML = '';
    let msg = ErrorMessage()
    car_card1[Cardindex].appendChild(msg)
  }
}

btnGO.onclick = function () {
  let inputs = [companyA, modelA, selectA, companyB, modelB, selectB];
  let empty = inputs.some(input => input.value.trim() === "");

  if (empty) {
    inputs.forEach(input => {
      if (input.value === "") {
        input.style.border = '1.5px solid red';
        input.placeholder = 'This field is required';
        input.classList.add("error");
      }
    });
    return;
  }

  localStorage.setItem("carA", JSON.stringify({
    company: companyA.value,
    model: modelA.value,
    year: selectA.value
  }));

  localStorage.setItem("carB", JSON.stringify({
    company: companyB.value,
    model: modelB.value,
    year: selectB.value
  }));


  carsCopmare(companyA, modelA, selectA, 0);
  carsCopmare(companyB, modelB, selectB, 1);

  scroll({
    top: 400,
    behavior: "smooth"
  });
};

function savedCars() {
  let savedCarA = JSON.parse(localStorage.getItem("carA"));
  let savedCarB = JSON.parse(localStorage.getItem("carB"));

  if (savedCarA) {
    companyA.value = savedCarA.company;
    modelA.value = savedCarA.model;
    selectA.value = savedCarA.year;
  }

  if (savedCarB) {
    companyB.value = savedCarB.company;
    modelB.value = savedCarB.model;
    selectB.value = savedCarB.year;
  }

  if (savedCarA && savedCarB) {
    carsCopmare(companyA, modelA, selectA, 0);
    carsCopmare(companyB, modelB, selectB, 1);
  }
};
savedCars()



