document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            document.body.style.backgroundColor = this.dataset.color;
        });
    });
});