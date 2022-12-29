
  /* constant scroll button */
const scrollBtn = document.querySelector('.scroll-btn') ;

/* scroll button */
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})







