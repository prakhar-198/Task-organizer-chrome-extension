//Devleoped by Prakhar Chakravarty
document.querySelector('#add').addEventListener("click",addtext);
document.querySelector('#remove').addEventListener("click",removetext);
document.querySelector('#clear').addEventListener("click",cleartext);

let i=1;let j=1;

let g=document.getElementById("myinput");
function addtext(){
    
    let task= ">"+" "+document.getElementById('myinput').value;
    if(document.getElementById('myinput').value==""){
        
        
         g.setAttribute('placeholder','mention task here....');
    }else{

        g.setAttribute('placeholder','new task..');
    localStorage.setItem(`lastname${i}`, task);
    localStorage.setItem("iter",i);
    
    console.log(task);
    let check=document.createElement('h4');
    if(i<5){
    check=`#checklist${i}`;
    
    document.querySelector(check).textContent=task;
    document.querySelector(check).style.color="white";
    document.querySelector(check).style.fontFamily="'Lobster', cursive";
    document.querySelector(check).style.fontFamily="'Questrial', sans-serif";
    document.getElementById('myinput').value=null;
    
    }else if(i=5){
        check=`#checklist${i}`;
        document.querySelector(check).textContent=task;
        document.querySelector(check).style.color="white";
        document.querySelector(check).style.fontFamily="'Lobster', cursive";
        document.querySelector(check).style.fontFamily="'Questrial', sans-serif";
        document.getElementById('myinput').value=null;
        i=0;
    }
    
     i++;
     
     
    }     
}
    function removetext(){
     
     for(let j=1;j<6;j++){
         let uncheck=document.getElementById(`${j}`);
         let cbox=document.getElementById(`checklist${j}`);
         if(uncheck.checked && cbox.textContent===""){
             uncheck.checked=false;
         }else{  
     
         if(uncheck.checked){
         cbox.textContent="Done!";
         cbox.style.color="#1884ff";
         uncheck.checked=false;
         localStorage.removeItem(`lastname${j}`);
         
        }else{
         g.setAttribute('placeholder','no task checked..'); 
     }
    }
}
}
function cleartext(){
    for(let j=1;j<6;j++){   
        let cbox2=document.getElementById(`checklist${j}`);
         let uncheck2= document.getElementById(`${j}`);
             cbox2.textContent=null;
             uncheck2.checked=false;
         localStorage.removeItem(`lastname${j}`)
        }i=1;
        g.setAttribute('placeholder','new task...');
} 
function holder(){
    for(j=1;j<6;j++){
let retask=localStorage.getItem(`lastname${j}`);
document.getElementById(`checklist${j}`).textContent=retask;
let check=document.createElement('h4');
    if(j<5){
    check=`#checklist${j}`;
    
    document.querySelector(check).textContent=retask;
    document.querySelector(check).style.color="white";
    document.querySelector(check).style.fontFamily="'Lobster', cursive";
    document.querySelector(check).style.fontFamily="'Questrial', sans-serif";
    document.getElementById('myinput').value=null;
    
    }else if(j=5){
        check=`#checklist${j}`;
        document.querySelector(check).textContent=retask;
        document.querySelector(check).style.color="white";
        document.querySelector(check).style.fontFamily="'Lobster', cursive";
        document.querySelector(check).style.fontFamily="'Questrial', sans-serif";
        document.getElementById('myinput').value=null;
        
    }
}
    
};
holder();
let iter=localStorage.getItem("iter");
iter++;
i=iter;
let b=localStorage.getItem("checkholder");


