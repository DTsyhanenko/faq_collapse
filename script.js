"use strict";

/*
- Bring in toggle buttons (querySelectorAll)
- Loop through nodeList (forEach)
- Add click event
- Toggle the active class on the parent node (.parentNode & classList.toggle())
*/

const faq = document.querySelectorAll('.faq');
const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(element => {
//     element.addEventListener('click', () => {
//         let accordionClasses = element.parentNode.classList;
//         if(accordionClasses.contains('active')) {
//             accordionClasses.remove('active');
//             return;
//         }
//         removeActiveClasses();
//         element.parentNode.classList.add('active');
//     });
// });

toggles.forEach(element => {
    element.addEventListener('click', () => {
        let accordionClasses = element.parentNode.classList;
        //important thing is, we create a variable with element.parentNode.classList, so the code is shorter and works better
        if(accordionClasses.contains('active')) {
            accordionClasses.remove('active');
        } else {
        removeActiveClasses();
        element.parentNode.classList.add('active');
        }
    });
});

function removeActiveClasses() {
    toggles.forEach(element => {
        element.parentNode.classList.remove('active');
    });
}

