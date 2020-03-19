
// create a variable for the number of buttons 
const numberOfDrumButtons = document.querySelectorAll(".drum").length

// to add an eventlistner for each button you to create a for loop so that you can loop through each button.
// you the loop to stop based of the number of buttond that are clicked there are 7 buttons thats when the variable numberOfButtons comes into play.
// so the for loop is basicly saying start i from 0 and end when i is no longer less then the numberOfButtons, and increment i by 1 each time.
for (let i = 0; i <numberOfDrumButtons;++i ){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML

        switch (buttonInnerHTML) {
            case "D":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); 
            break;

            case "R":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;

            case "U":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
            break;

            case "M":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
            break;

            case "S":
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play(); 
            break;

            case "E":
            const crash = new Audio('sounds/crash.mp3');
            crash.play(); 
            break;

            case "T":
            const snare = new Audio('sounds/snare.mp3');
            snare.play(); 
            break;
  
            default: console.log(buttonInnerHTML)
        
        }
    });

}
