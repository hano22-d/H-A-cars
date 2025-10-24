/*برنامج تصفير السكرول عند الضغط على الزر*/
const scroolZero = document.getElementById('scroolZer');
scroolZero.style.opacity = '0';
function scroolbtn () {
  if (scrollY <= 100) {
    scroolZero.style.opacity = '0';
  }
  else {
    scroolZero.style.opacity = '1';
  }
  function scrollzero () {
    window.scroll({
      top: 0,
      behavior:"smooth"
    })
  }
  scroolZero.addEventListener('click',() => scrollzero())
}

window.addEventListener('scroll',() => scroolbtn())


