let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let h1=document.querySelector("h1")

function randomcolor() {
    const hex='123456789ABCDEF';
    let color='#'
    for(let i=0; i<6; i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
   return color;
}
// console.log(Math.floor(Math.random()*16))
console.log(randomcolor())
   let value;
btn1.addEventListener("click",function(){
    if(!value){
        value=setInterval(bgcolor,1000);
    }

    function bgcolor(){
        document.querySelector("body").style.background=randomcolor();
        h1.style.transition="all 3s ease 0.1s";
        h1.style.transform="scale(1.3)";
        h1.style.transform="rotate(360deg)";
        btn1.classList.add("hoverr");
    }
   
})
btn2.addEventListener("click",function(){
    
 clearInterval(value)
 value=null;

})

