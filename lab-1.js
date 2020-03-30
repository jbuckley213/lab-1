// Iteration 1: Names and Input
let hacker1 = "Andrew";
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Anda";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow it seems the names are the same length, ${hacker1.length}`);
}

// Iteration 3: Loops
let driver = '';
for (let i = 0; i < hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + " ";
}
console.log(driver);
let navigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i];
}
console.log(navigator)

if (hacker1 === hacker2) {
    console.log("What? You both have the same name?")
} else if (hacker1.length > hacker2.length) {
    for (let i = 0; i < hacker1.length; i++) {
        if (hacker1[i] > hacker2[i]) {
            console.log("The drivers name goes first.");
            break;
        } else if (hacker2[i] < hacker1[i]) {
            console.log("Yo, the navigator goes first definitely.")
            break;
        }
    }
} else if (hacker2.length > hacker1.length) {
    for (let i = 0; i < hacker2.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            console.log("The drivers name goes first.");
            break;
        } else if (hacker2[i] < hacker1[i]) {
            console.log("Yo, the navigator goes first definitely.")
            break;
        }
    }
}

//Bonus 1
let latinParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis ante id neque semper, laoreet interdum eros pretium. Quisque viverra massa eget augue tincidunt molestie. Nunc bibendum urna in dolor imperdiet, eget pellentesque enim lacinia. Nam tempus, nisi quis varius sodales, augue nunc pretium erat, in porta enim nisi nec nisl. Mauris finibus enim nec tortor venenatis aliquam. Cras dui ex, condimentum ultricies interdum vitae, rutrum ac tellus. Suspendisse potenti. Nam maximus tempor erat. Pellentesque et lacinia nibh. Vivamus fringilla nibh malesuada massa pulvinar blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla sit amet magna eu magna bibendum malesuada. Morbi ullamcorper porttitor congue. Phasellus at pulvinar nulla. Vivamus tincidunt, elit non porttitor iaculis, lectus lorem ultricies nibh, vitae commodo enim neque a lacus. Mauris mollis sollicitudin orci non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut risus diam, ornare vitae aliquet ac, vehicula sit amet metus. Donec lectus velit, scelerisque et nisl iaculis, tincidunt consectetur magna. Etiam eget risus eget diam tempus fermentum. Quisque id facilisis quam. Maecenas ac finibus tortor. Vestibulum eget elit et augue egestas ultrices. Vestibulum vel sem in diam molestie fermentum. In luctus ultrices auctor. In sed lorem ante. Pellentesque at lacus vel lacus cursus bibendum. In vulputate felis tellus, sit amet malesuada ipsum ullamcorper eu. Donec vulputate quam sit amet quam ultricies, ut aliquet turpis sagittis. In tincidunt, justo in egestas efficitur, libero ligula rutrum metus, mollis finibus purus arcu at ex. Sed aliquet massa ligula, in egestas urna porttitor vitae. Donec ut sem imperdiet, varius lorem iaculis, tristique felis. Ut blandit, felis ut faucibus fermentum, enim libero tristique velit, id lacinia purus orci nec arcu. Nunc pulvinar in purus quis suscipit."

latinParagraph = latinParagraph.split('.').join(' ');
latinParagraph = latinParagraph.split(',').join(' ');

let counterWords = 0;
for (let i = 0; i < latinParagraph.length; i++) {
    if (latinParagraph[i] === ' ' && latinParagraph[i + 1] !== ' ') {
        counterWords++;
    }

}
console.log(`Number of words in paragraph ${counterWords}`); //Number in paragraph is 291

//Counting number of 'et' in paragraph

let counterEt = 0;
for (let i = 0; i < latinParagraph.length; i++) {
    if (latinParagraph.substring(i, i + 4).includes(" et ")) {
        counterEt++;
    }

}

console.log(`number of et ${counterEt}`) //there are 6 'et' in the paragraph

//Bonus 2
let phraseToCheck = "taco cat";
let phraseStrip = '';
phraseStrip = phraseToCheck.split(',').join('');
phraseStrip = phraseStrip.split('?').join('');
phraseStrip = phraseStrip.split(' ').join('');

let counterPalindrome = 0;
for (let i = 0; i < (phraseStrip.length); i++) {
    if (phraseStrip[i] === phraseStrip[(phraseStrip.length - 1) - i]) {
        counterPalindrome++;
    }
}

if (counterPalindrome === phraseStrip.length) {
    console.log(`${phraseToCheck} is a Palindrome`);
} else {
    console.log(`${phraseToCheck} is not a Palindrome`);

}