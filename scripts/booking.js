/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let daily_cost = 35;
let weekly_cost = 0;
let number_of_days = 0;

let clear_days_button = document.getElementById('clear-button');
const day_buttons = [document.getElementById('monday'), document.getElementById('tuesday'), document.getElementById('wednesday'), document.getElementById('thursday'), document.getElementById('friday')];
let half_day_button = document.getElementById('half');
let full_day_button = document.getElementById('full');

let calculated_cost_text = document.getElementById('calculated-cost');

recalculate();

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for(let i = 0; i < day_buttons.length; ++i)
{
    initiate_listener(i);
}

function initiate_listener(i)
{
    day_buttons[i].addEventListener("click", function() {
        if (!day_buttons[i].classList.contains('clicked')){
            day_buttons[i].classList.add('clicked');
            number_of_days += 1;
            recalculate();
        }
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_days_button.addEventListener('click', function() {
    for(let i = 0; i < day_buttons.length; ++i)
    {
        day_buttons[i].classList.remove('clicked');
    }
    number_of_days = 0;
    weekly_cost = 0;
    recalculate();
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day_button.addEventListener('click', function() {
    half_day_button.classList.add('clicked');
    full_day_button.classList.remove('clicked');
    daily_cost = 20;
    recalculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_day_button.addEventListener('click', function() {
    full_day_button.classList.add('clicked');
    half_day_button.classList.remove('clicked');
    daily_cost = 35;
    recalculate();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate()
{
    weekly_cost = number_of_days*daily_cost;
    calculated_cost_text.innerHTML = weekly_cost;

}