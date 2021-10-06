document.addEventListener("DOMContentLoaded", init);

function init(){
    let text = document.getElementById("test");

    document.getElementById("testbtn").addEventListener('click', ()=>{
        alert(text.value);
    })
}