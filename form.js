const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const modal = document.querySelector('.modal');
const bedrooms = document.querySelector('select');
const rent = document.querySelector('#rentRange')
// const priceRange = document.getElementById('test-slider');
// images found in another file

document.addEventListener('DOMContentLoaded', function() {
    M.Modal.init(modal,{});
    M.FormSelect.init(bedrooms,{});
});

// noUiSlider.create(priceRange, {
//     start: [750, 1800],
//     connect: true,
//     step: 1,
//     orientation: 'horizontal', // 'horizontal' or 'vertical'
//     range: {
//         'min': 0,
//         'max': 3000
//     },
// });

function submitform() {
    const data = {
        zip: '',
        bedrooms: bedrooms.value, 
        rentRange: '',
        // priceRange: priceRange.value
    }
    console.log('test success', data);
}

submit.addEventListener("click", submitform);
