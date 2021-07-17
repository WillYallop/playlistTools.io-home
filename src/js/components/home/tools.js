const parentEle = document.getElementById('pt_toolsListCol'); 

// Touch device
function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
}

// Update active pagination
function updateActivePagination(index) {
    var paginationConEle = document.getElementById('pt_sliderPagination');
    for(var i = 0; i < paginationConEle.children.length; i++) {
        let child = paginationConEle.children[i];
        if(child.classList.contains('active')) child.classList.remove('active');
    }
    paginationConEle.children[index].classList.add('active');
}

// Slide new image into view
function translateSliderSlide(index) {
    var sliderEle = document.getElementById('pt_sliderCon');
    var largeSlideWidth = undefined;
    for(var i = 0; i < sliderEle.children.length; i++) {
        var child = sliderEle.children[i];
        if(child.classList.contains('active')) largeSlideWidth = child.offsetWidth - 40, child.classList.remove('active');
        if(i === index) child.classList.add('active');
    }
    var smallSliderWidth = largeSlideWidth * 0.8;
    var sliderWidth = sliderEle.scrollWidth;
    var slides = 4;
    sliderWidth -= Math.abs(largeSlideWidth - smallSliderWidth);
    var averagelideWidth = sliderWidth / slides;
    var translateX = -Math.abs(index * averagelideWidth);
    sliderEle.style.transform = `translateX(${translateX}px)`;
}
// Select new feature select elemenet
function selectFeature(target) {
    for(var i = 0; i < parentEle.children.length; i++) {
        var child = parentEle.children[i];
        if(child.classList.contains('active')) child.classList.remove('active'), child.attributes['aria-pressed'].value = 'false';
    }
    // Set this child to active
    target.classList.add('active');
    target.attributes['aria-pressed'].value = 'true';
}
// Add event listeners
function addListener(target, index) {
    if(!isTouchDevice()) {
        target.addEventListener('keypress', (e) => {
            e.preventDefault();             
            var code = e.keyCode;
            if(code === 32 || code === 13){
                selectFeature(target);
                translateSliderSlide(index);
                updateActivePagination(index);
            }
        })
        target.addEventListener('click', (e) => {
            selectFeature(target);
            translateSliderSlide(index);
            updateActivePagination(index);
        });
    }
}

// Add event listeners for pagination
function paginationListeners() {
    var paginationConEle = document.getElementById('pt_sliderPagination');
    for(var i = 0; i < paginationConEle.children.length; i++) {
        var child = paginationConEle.children[i];
        child.addEventListener('click', (e) => {
            var index = parseInt(e.target.attributes['index'].value);
            selectFeature(parentEle.children[index]);
            translateSliderSlide(index);
            updateActivePagination(index);
        }, false);
    }
}
paginationListeners();

if(isTouchDevice()) {
    var sliderConEle = document.getElementById('pt_sliderCon');
    var slides = 4;
    var prevScreenX = undefined;
    var prevScreenY = undefined;
    var slideActive = false;
    var activeSlide = 0;
    sliderConEle.addEventListener('touchstart', (e) => {
        prevScreenX = e.changedTouches[0].screenX;
        prevScreenY = e.changedTouches[0].screenY;
    });
    sliderConEle.addEventListener('touchmove', (e) => {
        if(prevScreenX != undefined) {
            var newScreenX = e.changedTouches[0].screenX;
            var newScreenY = e.changedTouches[0].screenY;
            // Work out what slide we are currently on
            for(var i = 0; i < sliderConEle.children.length; i++) {
                let child = sliderConEle.children[i];
                if(child.classList.contains('active')) activeSlide = i;
            }

            if(Math.abs(newScreenY - prevScreenY) > 100) {
                console.log('scroll up/down')
            } else {
                e.preventDefault();
                // see direction
                if(newScreenX > prevScreenX) {
                    // Right swipe
                    // dec current slide
                    if(!slideActive) {
                        if(activeSlide - 1 >= 0) {
                            selectFeature(parentEle.children[activeSlide - 1]);
                            translateSliderSlide(activeSlide - 1);
                            updateActivePagination(activeSlide - 1);
                        }
                        slideActive = true;
                    }
                }
                else {
                    // Left swipe
                    // inc current slide 
                    if(!slideActive) {
                        if(activeSlide + 1 < slides) {
                            selectFeature(parentEle.children[activeSlide + 1]);
                            translateSliderSlide(activeSlide + 1);
                            updateActivePagination(activeSlide + 1);
                        }
                        slideActive = true;
                    }
                }
            }


        }
    });
    sliderConEle.addEventListener('touchend', (e) => {
        prevScreenX = undefined;
        prevScreenY = undefined;
        slideActive = false;
    });
}

// For features, add event listeners
for(var i = 0; i < parentEle.children.length; i++) {
    addListener(parentEle.children[i], i);
}