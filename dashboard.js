const dropdowns = document.querySelectorAll('.dropdown');
// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Use 'click' in lowercase
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;

            // Remove the clicked select styles
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            // Remove active class from all options
            options.forEach(option => {
                option.classList.remove('active');
            });

            // Add active class to clicked option
            option.classList.add('active');
            if(option.innerText == "ElectroCardioGram"){
                window.location.href = "ecg.html";
            }
        });
    });
});
