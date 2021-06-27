import { handleNavDropdown, updateDropdownMaxHeight } from '../header';

// Add event listener to dropdown
handleNavDropdown();

// On resize
window.addEventListener('resize', () => {
    updateDropdownMaxHeight();
})