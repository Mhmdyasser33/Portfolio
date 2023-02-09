/* 
let navbar = document.querySelector('.navbar');
console.log(navbar) ;
navbar.addEventListener('click', function(e) {
  let target = e.target;
  if (target.nodeName === 'A' && target.hasAttribute('href')) {
    e.preventDefault();
    let href = target.getAttribute('href');
    window.history.pushState({}, '', href);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }  
}); */