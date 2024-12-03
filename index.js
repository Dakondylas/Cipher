let form = document.getElementById('form');
let runAll = document.getElementById('runAll');
let number = document.getElementById('number');
let input = document.getElementById('input');
let right = document.getElementById('right')
let rightOperand = false;

runAll.onclick = hideNumber;
right.onclick = function() {
    if (rightOperand) {
        rightOperand = false ;
    } else {
        rightOperand = true;
    };
};

function hideNumber() {
    if (rightOperand) {
        right.click()
    }
    if (number.disabled == false) {
        number.value = ''
        number.required = false;
        number.disabled = true;
        right.disabled = true;
        right.required = false;
    } else {
        number.disabled = false;
        number.required = true;
        right.disabled = false;
        right.required = true;
    };
};

let alphabetNum = {
    'a':0, 
    'b':1, 
    'c':2, 
    'd':3, 
    'e':4, 
    'f':5, 
    'g':6, 
    'h':7, 
    'i':8, 
    'j':9, 
    'k':10, 
    'l':11, 
    'm':12, 
    'n':13, 
    'o':14, 
    'p':15, 
    'q':16, 
    'r':17, 
    's':18, 
    't':19, 
    'u':20, 
    'v':21, 
    'w':22, 
    'x':23, 
    'y':24, 
    'z':25}

form.addEventListener('submit', function(event) {
    document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '';
    event.preventDefault()
    document.getElementById('deCipher').disabled = true;
    let inputArray = [];
    let inputArrayIndex = [];
    let otherChars = [];
    let otherCharsIndex = [];
    for (x=0; x<(input.value).length; x++) {
        let letterCheck = /^[a-zA-Z]/
        if (letterCheck.test((input.value)[x])) {
            inputArray.push(alphabetNum[(input.value)[x].toLowerCase()])
            inputArrayIndex.push(x)
        } else {
            otherChars.push((input.value)[x]);
            otherCharsIndex.push(x);
        };
    };
    document.getElementById('output').style.display = 'initial';
    function displayOutput() {
        let finalString = '';
        if (runAll.checked == false) {
            if (rightOperand) {
                for (x=0; x<(input.value).length; x++) {
                    if (x == inputArrayIndex[0]) {
                        inputArray[0] += Number(number.value);
                        if (inputArray[0] >= 26) {
                            inputArray[0] -= 26
                        }
                        finalString += Object.keys(alphabetNum)[inputArray[0]];
                        inputArray.shift()
                        inputArrayIndex.shift()
                        
                    } else if (x == otherCharsIndex[0]) {
                        finalString += otherChars[0]
                        otherChars.shift()
                        otherCharsIndex.shift()
                    }
                    console.log(finalString)
                }
                let strongNode = document.createElement('strong')
                let h2Node = document.createElement('h2')
                let actualOutputText = document.createTextNode(`${finalString}`)
                strongNode.appendChild(actualOutputText);
                h2Node.appendChild(strongNode);
                let actualOutputNode = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
                actualOutputNode.appendChild(h2Node)
            } else {
                for (x=0; x<(input.value).length; x++) {
                    if (x == inputArrayIndex[0]) {
                        inputArray[0] -= Number(number.value);
                        if (inputArray[0] <= 0) {
                            inputArray[0] += 26
                        }
                        finalString += Object.keys(alphabetNum)[inputArray[0]];
                        inputArray.shift()
                        inputArrayIndex.shift()
                        
                    } else if (x == otherCharsIndex[0]) {
                        finalString += otherChars[0]
                        otherChars.shift()
                        otherCharsIndex.shift()
                    }
                    console.log(finalString)
                }
                let strongNode = document.createElement('strong')
                let h2Node = document.createElement('h2')
                let actualOutputText = document.createTextNode(`${finalString}`)
                strongNode.appendChild(actualOutputText);
                h2Node.appendChild(strongNode);
                let actualOutputNode = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
                actualOutputNode.appendChild(h2Node)
            }
            
        } else {
            for (comboNum=1; comboNum<=25; comboNum++) {
                let finalString = '';
                let comboInputArray = [];
                let comboInputArrayIndex = [];
                let comboOtherChars = [];
                let comboOtherCharsIndex = [];
                for (x=0; x<inputArray.length; x++) {
                    comboInputArray.push(inputArray[x])
                }
                for (x=0; x<inputArrayIndex.length; x++) {
                    comboInputArrayIndex.push(inputArrayIndex[x])
                }
                for (x=0; x<otherChars.length; x++) {
                    comboOtherChars.push(otherChars[x])
                }
                for (x=0; x<otherCharsIndex.length; x++) {
                    comboOtherCharsIndex.push(otherCharsIndex[x])
                }

                for (x=0; x<(input.value).length; x++) {
                    if (x == comboInputArrayIndex[0]) {
                        comboInputArray[0] += comboNum;
                        if (comboInputArray[0] >= 26) {
                            comboInputArray[0] -= 26
                        }
                        finalString += Object.keys(alphabetNum)[comboInputArray[0]];
                        comboInputArray.shift()
                        comboInputArrayIndex.shift()
                        
                    } else if (x == comboOtherCharsIndex[0]) {
                        finalString += comboOtherChars[0]
                        comboOtherChars.shift()
                        comboOtherCharsIndex.shift()
                    }
                }
                let strongNode = document.createElement('strong')
                let h2Node = document.createElement('h2')
                let actualOutputText = document.createTextNode(`${comboNum}. ${finalString}`)
                strongNode.appendChild(actualOutputText);
                h2Node.appendChild(strongNode);
                let actualOutputNode = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
                actualOutputNode.appendChild(h2Node)

            }
        }
    }
    displayOutput()
    document.getElementById('deCipher').disabled = false;
});