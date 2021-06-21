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

    // rollDice funtion. Loops through the dieOnScreen object and re-rolls the dice that are displayed once the roll button is clicked. 
    const rollDice = () => {
        // Loop through the dieOnScreen object.
        for (let i = 0; i < dieOnScreen.length; i++) {
            // re-roll the die. 
            dieOnScreen[i].roll();
        }
    };

    const checkSum = () => {
        let sum = 0;
        for (let i = 0; i < dieOnScreen.length; i++) {
            sum += dieOnScreen[i].value;
        }
        alert(`The value sum of all dice on the screen is ${sum}.`);
    };

    generateBtn.click(addDie);
    rollBtn.click(rollDice);
    sumBtn.click(checkSum);

    class Die {
        constructor() {
            this.div = $('<div></div>');
            this.div.attr(`class`, `die`);
            this.roll()
            $('#dieContainerDiv').append(this.div);
            dieOnScreen.push(this);

            // anon function. re-rolls the dice once dice div is clicked.
            $(this.div).click(() => {
                this.roll();
            });

            $(this.div).dblclick(() => {
                $(this.div).remove();
                dieOnScreen.splice($.inArray(this, dieOnScreen),1);
                console.log(`remove function works!`);
            });
        }

        roll() { 
            this.value = Math.floor(Math.random() * (6 - 1) + 1);
            this.getChar();
            $(this.div).text("" + this.char + "");
            $(this.div).addClass("die");
        }

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





// let newDie1 = new Die();
// newDie1.dieGenerator();

console.log('%cStart%c of scripts.js file!', 'font-weight: 900; color: green;', 'font-weight: 400; color: green;');