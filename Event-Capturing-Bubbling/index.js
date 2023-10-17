var capturingFlag = false //Capturing flag

document.getElementById('parent').addEventListener('click', () => {
    console.log("DIV")
}, capturingFlag)
//Bubbling Phase DIV log will be 3
//Capturing Phase DIV log will be 1

document.getElementById('child-one').addEventListener('click', () => {
    console.log("PARA")
}, capturingFlag)
//Bubbling Phase PARA log will be 2
//Capturing Phase PARA log will be 2

document.getElementById('child-two').addEventListener('click', () => {
    console.log("SPAN")
}, capturingFlag)
//Bubbling Phase SPAN log will be 1
//Capturing Phase SPAN log will be 3























