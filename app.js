// Event Bubbling: 

// document.querySelector('#grand-parent').addEventListener('click', function(){
//     console.log("Grand Parent");
// })
// document.querySelector('#parent').addEventListener('click', function(){
//     console.log("Parent");
// })
// document.querySelector('#child').addEventListener('click', function(){
//     console.log("Child");
// })


// Event Capturing: 

// document.querySelector('#grand-parent').addEventListener('click', function(){
//     console.log("Grand Parent");
// }, true)
// document.querySelector('#parent').addEventListener('click', function(){
//     console.log("Parent");
// }, true)
// document.querySelector('#child').addEventListener('click', function(){
//     console.log("Child");
// }, true)


// First Capturing Then Bubbling

// document.querySelector('#grand-parent').addEventListener('click', function(){
//     console.log("Grand Parent");
// }, true)
// document.querySelector('#parent').addEventListener('click', function(){
//     console.log("Parent");
// }, false)
// document.querySelector('#child').addEventListener('click', function(){
//     console.log("Child");
// }, true)



// First Capturing Then Bubbling 

// document.querySelector('#grand-parent').addEventListener('click', function(){
//     console.log("Grand Parent");
// }, true)
// document.querySelector('#parent').addEventListener('click', function(){
//     console.log("Parent");
// }, false)
// document.querySelector('#child').addEventListener('click', function(){
//     console.log("Child");
// }, false)


// Stop Propagation: Bubbling

// document.querySelector('#grand-parent').addEventListener('click', function(){
//     console.log("Grand Parent");
// }, false)
// document.querySelector('#parent').addEventListener('click', function(e){
//     console.log("Parent");
//     e.stopPropagation();
// }, false)
// document.querySelector('#child').addEventListener('click', function(){
//     console.log("Child");
// }, false)




// Stop Propagation: Capturing

document.querySelector('#grand-parent').addEventListener('click', function(e){
    console.log("Grand Parent");
    e.stopPropagation();
}, true)
document.querySelector('#parent').addEventListener('click', function(e){
    console.log("Parent");
    e.stopPropagation();
}, true)
document.querySelector('#child').addEventListener('click', function(){
    console.log("Child");
}, true)