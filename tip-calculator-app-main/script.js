// script for calculation and changing the visual looks of the page
// Design has three stages: 
// 
// Empty
// Active
// Completed
// 
// When loaded or reset button clicked
// - Placeholder bill field:            hsl(180, 9%, 71%)
// - Placeholder People field:          hsl(180, 9%, 71%)
// - Reset button :   	                hsl(183, 87%, 21%)
// - background percentage buttons:     hsl(183, 100%, 15%)
// - font percentage buttons:           hsl(189, 41%, 97%)
// - Placeholder custom button:         hsl(183, 100%, 15%)
// - placeholder amounts: 0
// - show custom placeholder in custom percentage field
// 
// when onclick:
//      bill field
//          - Background:            	hsl(202, 50%, 97%)
//          - font                      hsl(183, 100%, 15%)
//          - border:                   hsl(173, 61%, 77%)
// 
//      Number of People field
//          - Background:            	hsl(202, 50%, 97%)
//          - font                      hsl(183, 100%, 15%)
//          - border:                   hsl(173, 61%, 77%)
//      if bill field or number of people field is empty or zero
//          - show 'Cant be zero' next to label in red and red border
//          - color hsl(12, 33%, 57%)
//          - bordercolor:  hsl(12, 33%, 57%)
//      when button Custom percentage is clicked: 
//          - Show Custom placeholder in Custom field
//              - styling as in empty placeholer
//      when Tip percentage button is clicked  
//          - color: hsl(183, 87%, 21%);
//          - background color: hsl(172, 67%, 45%);
//      when bill/percentage/people is filled and/or clicked:
//          - Reset button background color: hsl(172, 67%, 45%);
//          - Calculate Tip Amount en Total
//          - Place results in Tip Amount and Total fields
//
// START SCRIPT

// remove the active states when Reset button is clicked
{
    var billAmount = 0;
    var numberOfPeople = 0;
    var tipPercentage = 0;

    function RemoveActive(){
        const activeClasses = document.querySelectorAll('.active');
        activeClasses.forEach(active  => {
            active.classList.remove('active')
        }); 
            console.log(document.getElementsByClassName("active"));
    }

    function OnResetPressed(){
        RemoveActive();
        document.getElementById("tip-amount-end-value").innerHTML = "$0.00";
        document.getElementById("total-amount").innerHTML = "$0.00";
        billAmount = 0;
        numberOfPeople = 0;
        tipPercentage = 0;
    }

    // When user starts filling in the form

    function OnBillValueClicked(){
        // console.log(document.getElementById("reset"));
        // style the reset button
        // problem is that when backgroundreset button is styled using ID the hover doesnt work
        // The ID looks to the element
        // see: https://stackoverflow.com/questions/58071475/losing-hover-and-active-styles-in-html-when-change-button-background-in-javascri
        //solution:
        // make an active class on the reset button and style it accordingly
        document.getElementById("reset").classList.add('active');
        document.getElementById("bill").classList.add('active');
    }

    //read values of Bill input field and shows error when 0 
    function OnBillValueChanged(value){
	billAmount = parseFloat(value).toFixed(2);
	console.log(billAmount);
        if (billAmount > 0 && billAmount < 10000) {
            document.getElementsByClassName("errormessage-label")[0].style.visibility = "hidden";
            document.getElementById('bill').style.borderColor= "hsl(173, 61%, 77%)";
            document.getElementById('bill').style.color = "hsl(183, 100%, 15%)";
        }
        else {
            document.getElementById('bill').style.borderColor= "#B87E70";
            document.getElementById('bill').style.color = "hsl(183, 100%, 15%)";
            document.getElementById('bill').value = "";
        }
        if (billAmount == 0){
            document.getElementById('bill').value = "0";
            const timer = setTimeout(function() {
                document.getElementsByClassName("errormessage-label")[0].style.visibility = "visible";
                document.getElementById('bill').style.borderColor= "#B87E70";
                document.getElementById('bill').style.color = "hsl(183, 100%, 15%)";
                document.getElementById('bill').value = "";
                }, 500);
        }
        calculate();
    }

    function OnPeopleNumberClicked(){
        document.getElementById("number-people").classList.add('active');
        document.getElementById("reset").classList.add('active');
    }

    //read values of 'People-field' 
    function OnPeopleNumberChanged(value){
        numberOfPeople = parseInt(value);
        if (numberOfPeople > 0 && numberOfPeople < 1000) {
            document.getElementsByClassName("errormessage-people")[0].style.visibility = "hidden";
            document.getElementById('number-people').style.borderColor = "hsl(173, 61%, 77%)";
            document.getElementById('number-people').style.color = "hsl(183, 100%, 15%)"; 
        }
        else {
            document.getElementsByClassName("errormessage-people")[0].style.visibility = "visible";
            document.getElementById('number-people').style.borderColor = "#B87E70";
            document.getElementById('number-people').style.color = "hsl(183, 100%, 15%)";
            document.getElementById('number-people').value = "";
        }
        if (numberOfPeople == 0){
            document.getElementById('number-people').value = "0";
            const timer = setTimeout(function() {
                document.getElementsByClassName("errormessage-people")[0].style.visibility = "visible";
                document.getElementById('number-people').style.borderColor = "#B87E70";
                document.getElementById('number-people').style.color = "hsl(183, 100%, 15%)";
                document.getElementById('number-people').value = "";
            },500);
        }
        calculate();
    }

    // Select the value of Tip
    
    function OnPercentageValueClicked(value){
        document.getElementById("reset").classList.add('active')
        // if there is an active state on custom percentage; remove it
        if (document.getElementById("tip-amount").classList.contains("active")){
            document.getElementById("tip-amount").classList.remove("active");
        }

        var buttons = document.getElementsByClassName("percentage");
        const selectedPercentage = value;
        tipPercentage = parseInt(selectedPercentage);
        var currentActive = document.getElementsByClassName("active percentage");
        // if there is a active percentage deactivate it
        if (currentActive.length > 0){
            currentActive[0].classList.remove("active");
        }
        for (var i = 0;i < buttons.length; i++){
            // if there is a active percentage deactivate it
            if (buttons[i].value == selectedPercentage){
            buttons[i].classList.add("active");
            }  
        }
        calculate();
    }

    function OnCustomPercentageValueClicked(){
        document.getElementById("reset").classList.add('active')
        // run function OnPercentageValueClicked with no value to remove
        // active states on percentage buttons
        OnPercentageValueClicked();
        document.getElementById("tip-amount").classList.add('active');
        // if there is a number already filled in calculate
        value = document.getElementById("tip-amount").value
        OnCustomPercentageValueChanged(value);
    }

    function OnCustomPercentageValueChanged(value){
        tipPercentage = parseInt(value);
        if (tipPercentage >= 0 && tipPercentage <= 100){
            console.log(tipPercentage = parseInt(value));
        calculate();
        }
        else{
            console.log(document.getElementById("tip-amount").placeholder);
            document.getElementById("tip-amount").value = "";
        }
    }


    function calculate(){
        var totalAmountPerson;
        var tipAmountPerson;
        // if values of percentage+Bill+people are active; start calculation

    if((billAmount > 0) && (tipPercentage >= 0) && (numberOfPeople > 0 )){
        tipAmountPerson = ((billAmount/100)*tipPercentage)/numberOfPeople;
        totalAmountPerson = (billAmount/numberOfPeople)+tipAmountPerson;
        tipAmountPerson= (Math.round(tipAmountPerson*100)/100).toFixed(2);
        totalAmountPerson= (Math.round(totalAmountPerson*100)/100).toFixed(2)
        document.getElementById("tip-amount-end-value").innerHTML = "$" + (tipAmountPerson);
        document.getElementById("total-amount").innerHTML = "$" + (totalAmountPerson);
        }
    
    else {
        document.getElementById("tip-amount-end-value").innerHTML = "$0.00";
        document.getElementById("total-amount").innerHTML = "$0.00";
        }
    }
}
