function handleNavDropdown() {
    var btn = document.getElementById('pt_toolDropDownBtn');
    btn.addEventListener('click', () => {
        var toolDropdownEle = document.getElementById('pt_toolDropdownRow');
        var offsetHeight = document.getElementById('pt_toolDropdownRowWrapper').offsetHeight;
        if(toolDropdownEle.classList.contains('closed')) {
            // Open menu
            toolDropdownEle.classList.remove('closed');
            toolDropdownEle.style.maxHeight = `${offsetHeight}px`;
            btn.attributes['aria-expanded'].value = true;
        } else {
            // Close menu
            toolDropdownEle.classList.add('closed');
            toolDropdownEle.style.maxHeight = `0px`;
            btn.attributes['aria-expanded'].value = false;
        }
    })
}
// If the nav is open and the user resizes
function updateDropdownMaxHeight() {
    var toolDropdownEle = document.getElementById('pt_toolDropdownRow');
    var offsetHeight = document.getElementById('pt_toolDropdownRowWrapper').offsetHeight;
    if(!toolDropdownEle.classList.contains('closed')) {
        toolDropdownEle.style.maxHeight = `${offsetHeight}px`;
    }
}

export { handleNavDropdown, updateDropdownMaxHeight }