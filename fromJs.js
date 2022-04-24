const nextBtn = document.querySelectorAll(".btn-next");
const prevBtn = document.querySelectorAll(".btn-prev");
const fromStep = document.querySelectorAll(".from-step");
const progress = document.getElementById("progress");

let fromStepNum = 0;

nextBtn.forEach((el) => {
    el.addEventListener("click", () => {
        fromStepNum++;
        fromUpdate();
    });
});


function fromUpdate() {
    fromStep[fromStepNum].classList.add("from-step-active");

}