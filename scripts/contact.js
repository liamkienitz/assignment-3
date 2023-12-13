// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.getElementById('submit-button');
let contact_main = document.getElementById('contact-page');

submit_button.addEventListener('click', function() {
    contact_main.innerHTML = 'Thank you for your message.';
    contact_main.style.fontSize = "24px";
});