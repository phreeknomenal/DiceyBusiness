$(document).ready(() => {
    
    // Set Global Variables
    // Create empty div to store new die objects.
    const dieOnScreen = [];
    // Generate button grab.
    let generateBtn = $('#generate-die');
    // Roll all dice button grab
    let rollBtn = $('#roll');
    // Get sum of all buttons button grab    
    let sumBtn = $('#sum');
    
    // addDie function. Adds new die object to dieOnScreen holder.
    const addDie = () => {
        // create a new Die object
        let newDieDiv = new Die();
        console.log(`Yooooo`);
    }

    // rollDice function. Loops through the dieOnScreen object and re-rolls the dice that are displayed once the roll button is clicked. 
    const rollDice = () => {
        // Loop through the dieOnScreen object.
        for (let i = 0; i < dieOnScreen.length; i++) {
            // re-roll the die. 
            dieOnScreen[i].roll();
        }
    };
    
    // checkSum function. 
    const checkSum = () => {
        // Set sum at 0
        let sum = 0;
        // Loop through dieOnScreen object and get sum of values. 
        for (let i = 0; i < dieOnScreen.length; i++) {
            sum += dieOnScreen[i].value;
        }
        // output sum in an alert.
        alert(`The value sum of all dice on the screen is ${sum}.`);
    };

    // Calls.
    generateBtn.click(addDie);
    rollBtn.click(rollDice);
    sumBtn.click(checkSum);

    // Die class.
    class Die {
        // can accept values. none are being passed so none is needed.
        constructor() {
            // create new div and assign class.
            this.div = $('<div></div>');
            this.div.attr(`class`, `die`);
            // rolls the die (this) object.
            this.roll()
            // add new div to divContainer.
            $('#dieContainerDiv').append(this.div);
            // add new div object to dieOnScreen object holder.
            dieOnScreen.push(this);

            // anon function. re-rolls the dice once dice div is clicked.
            $(this.div).click(() => {
                this.roll();
            });

            // anon function. removes die div and die object ****not working*****
            $(this.div).dblclick(() => {
                $(this.div).remove();
                dieOnScreen.splice($.inArray(this, dieOnScreen),1);
                console.log(`remove function works!`);
            });
        }

        // roll function.
        roll() { 
            // get a random number between 1-6
            this.value = Math.floor(Math.random() * (6 - 1) + 1);
            // calls getChar function.
            this.getChar();
            // adds new character to div.
            $(this.div).text("" + this.char + "");
        }

        // getChar function. takes random generated value checks it and replaces it with die char.
        getChar() {
            if (this.value === 1) {
                this.char = "⚀";
            } else if (this.value === 2) {
                this.char = "⚁"
            } else if (this.value === 3) {
                this.char = "⚂";
            } else if (this.value === 4) {
                this.char = "⚃";
            } else if (this.value === 5) {
                this.char = "⚄";
            } else {
                this.char = "⚅";
            }
        }
    }

});

console.log('%cStart%c of scripts.js file!', 'font-weight: 900; color: green;', 'font-weight: 400; color: green;');