// Handle blog links
const blogElements = document.querySelectorAll('[blog-link]');
function navigateLink(e, att) {
    if (e.type === 'click' || e.key === 'Enter') {
        let ref = e.target;
        if (ref) {
          window.open(att, '_self');
        }
    }
}
for(var i = 0; i < blogElements.length; i++) {
    var ele = blogElements[i];
    ele.addEventListener('click', (e) => {
        navigateLink(e, ele.getAttribute('data-href'))
    });
    ele.addEventListener('keydown', (e) => {
        navigateLink(e, ele.getAttribute('data-href'))
    });
}