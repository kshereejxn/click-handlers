
const color_box = document.querySelector("#color_box");
// JS for the gray button
const gray_button = document.querySelector("#gray_button");
gray_button.addEventListener("click", function () {
    color_box.className = "gray";
})
// JS for the blue button
const blue_button = document.querySelector("#blue_button");
blue_button.addEventListener("click", function () {
    color_box.className = "blue";
})
// JS for the pink button
const pink_button = document.querySelector("#pink_button");
pink_button.addEventListener("click", function () {
    color_box.className = "pink";
})

let count = 0;
const countspan = document.querySelector("#countspan");
const counter_button = document.querySelector("#counter_button");
counter_button.addEventListener("click", function () { 
    console.log (" count")
    count = count + 1;
    countspan.innerHTML = count

})
const even_or_odd_button = document.querySelector("#even_or_odd_button");
even_or_odd_button.addEventListener("click", function () {
    /* TODO 3
    *
    * Fill in this function so that it shows an
    * alert dialog stating whether the count variable
    * (from part 2, above) is even or odd.
    */
})