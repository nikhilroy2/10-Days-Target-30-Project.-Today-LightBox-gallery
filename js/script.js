// first slide control

function open_first_slide(parent){
    document.querySelector('.my_slider_wrapper').style.display = 'block';
    parent.parentElement.style.display = 'none';
}

// slideshow
slideIndex = 1;
showSlide(slideIndex);
function btnControl(n) {
    showSlide(slideIndex += n);
};
function currentSlide(n) {
    showSlide(slideIndex = n);
};
function showSlide(n) {
    let slide = document.querySelectorAll('.slide');
    let slide_control = document.querySelectorAll('.slide_control img');
    if (n > slide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slide.length;
    }
    //for slide
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';
    // for slide control
    for (let i = 0; i < slide_control.length; i++) {
        slide_control[i].className = slide_control[i].className.replace(' img_active', '');
    }
    slide_control[slideIndex - 1].className += ' img_active';
}
{
    let close_my_slider = document.querySelector('.close_my_slider');
    close_my_slider.onclick= ()=>{
        document.querySelector('.my_slider_wrapper').style.display = 'none';
        document.querySelector('.first_slide_control_wrapper').style.display = 'flex'
    }
}