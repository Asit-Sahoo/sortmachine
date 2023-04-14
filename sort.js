let input=document.getElementById('inputbox');

let button=document.querySelectorAll('button');
let string="";
let string1="";
let arr1=[];
let arr=Array.from(button);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='RUN'){
            
            for(let i=0;i<string.length;i++){
                
                if(string[i]==','){
                    arr1.push(string1);
                    string1="";
                }
                else{
                        string1+=string[i];
                }
            }
            arr1.push(string1);
            arr1.sort();
            console.log(arr1);
           document.getElementById("outputbox").innerHTML=arr1;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            arr1=[];
            input.value=string;
            document.getElementById("outputbox").innerHTML=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
         
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})
