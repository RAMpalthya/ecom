const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

const Clothes=[
    {
        "name":"John",
        "age":30,
        "cars":["Ford", "BMW", "Fiat"]
 },
 {
    "name":"John 2",
    "age":35,
    "cars":["Ford", "BMW", "Fiat"]
},
 


]