document.addEventListener('scroll', () => {
    var a  =document.getElementById('link');
    if (window.scrollY > 150){
        a.classList.add("scrolled");
    }
    else{
        a.classList.remove("scrolled"); 
    }
})