const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
        const trigerBottom = window.innerHeight / 5 * 4

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top

            if(boxTop < trigerBottom){
                box.classList.add('show')
            } else {
                box.classList.remove('show')
            }
            
        })

}
