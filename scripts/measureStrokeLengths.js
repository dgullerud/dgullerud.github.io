// gets the total length of strokes for the "Dan Gullerud" SVG animation in the intro section

const logo = document.querySelectorAll('#my-name path');

for(let i = 0; i < logo.length; i++) {
    console.log('Letter ${i} is ${logo[i].getTotalLength()}');
}