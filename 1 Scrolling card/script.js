let boxes = document.querySelectorAll('.box');

boxes.forEach((box)=>{

    box.addEventListener('click',()=>{
        removeActiveClasses();
        box.classList.add('active');
    })
})

function removeActiveClasses(){
    boxes.forEach((box)=>{
        box.classList.remove('active');
    })
}