/*برنامج تصفير السكرول عند الضغط على الزر*/
const scroolZero = document.getElementById('scroolZer');
scroolZero.style.display = 'none';
function scroolbtn () {
  if (scrollY <= 100) {
    scroolZero.style.display = 'none';
  }
  else {
    scroolZero.style.display = 'block';
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





