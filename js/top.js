function scrollUp(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 5));
        buttonUp.style.transform = "scale(0)";
    }
}