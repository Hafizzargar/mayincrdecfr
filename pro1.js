let changevalue=document.getElementById("c");
let countless=document.getElementById("less");
let idr=document.querySelectorAll(".idr>button");
let clk=document.getElementById("clk");

let co=1;
changevalue.innerText=co;
function dec(){
    return co--;

}

function inc(){
    return  ++co;
}
idr[0].addEventListener("click",()=>{
    if(co<1 ){
        
        countless.classList.remove("hide");
            countless.classList.add("show");
            return;
    }
    changevalue.innerHTML=dec();

})
idr[1].addEventListener("click",()=>{
    if(co>=1){
        countless.classList.remove("show");
        countless.classList.add("hide");
    
    }
    changevalue.innerHTML=inc();
})
idr[2].classList.add("b3");
idr[2].addEventListener("click",()=>{
    co=1;
    changevalue.innerText=co;
    
})