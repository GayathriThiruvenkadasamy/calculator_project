
document.addEventListener("DOMContentLoaded", function () {
    let numbers = document.getElementById("userInput");
    let numbtns = document.querySelectorAll(".numbtn");
      numbtns.forEach(btns => {
        btns.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(btns.textContent);
            let value = btns.textContent
            numbers.value += value;

        })
      });


      let input = document.getElementById("userInput");
      let addbtn = document.getElementById("addition");

      addbtn.addEventListener("click", function(e){
        e.preventDefault();
        let value = input.value;
        console.log(value);
        input.value="";

      })

})



