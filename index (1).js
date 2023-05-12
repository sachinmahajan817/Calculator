var side=document.getElementById('my-sidebar');
var close=document.getElementById('closebar');
var nums=document.getElementsByClassName('element');
var variable1="",variable2="",operand,j=1;
var screen=document.getElementById('big_div');
var small_screen=document.getElementById('small_div');




side.addEventListener('click',sidebar);
function sidebar(){
    side_element.style.display='block';
    close.addEventListener('click',function(){
        side_element.style.display='none';
    });
}
function GetTwoPar(a,b,c){
    a=variable1,b=variable2,c=operand;
   if(a===undefined && b=== undefined){

   }else{
      if(c==='*'){
          console.log(eval(a*b));
      }
   }
}
function firstoperator(value){
    variable1=variable1+value;
    j=j*10;
    big_div.innerHTML=variable1;
}
function operands(value){
    // operand="";
    if(value==="%"){
        big_div.innerHTML=variable1+'/100';
        variable1=big_div.innerHTML;
        big_div.innerHTML=eval(variable1);
        operand="";
        return;
    }
    else if(value==="+-"){
            big_div.innerHTML="(-1)*("+big_div.innerHTML+")";
            return ;
    }
    // console.log(value+"v  "+variable1)
    operand=value;
    big_div.innerHTML=variable1+operand;
}
function secondoperator(value){
    variable2=variable2+value;
    j=j*10;
    console.log(big_div.innerHTML);
    big_div.innerHTML+=variable2;
    // console.log("hhhhhheeeelllooo "+variable1);
}

var side_element=document.getElementById('sidebar');
    for(var i=0;i<nums.length;i++){
        nums[i].addEventListener('click',function(){
            var t=this.getElementsByTagName("p")[0].innerHTML;
            console.log(t);
            
            if(t===`<i class="fas fa-backspace" aria-hidden="true"></i>`){
                var tstring=big_div.textContent;
                // console.log(tstring);
                big_div.innerHTML=tstring.substring(0,tstring.length-1);
                if(variable2!=""){
                    variable2=variable2.substring(0,variable2.length-1);
                }
                else if(operand!=""){
                    operand=operand.substring(0,operand.length-1);
                }
                else{
                    variable1=variable1.substring(0,variable1.length-1);
                }
            }
            else if(t===`<span class="num">1</span>/<span class="num">x</span>`){
                big_div.innerHTML="1/"+big_div.innerHTML;
                eval(big_div.innerHTML);
            }
            else if(t===`x<sup>2</sup>`){
                variable1=eval(big_div.innerHTML*big_div.innerHTML);
                big_div.innerHTML=variable1; 
            }
            else if(t===`2√x`){
                variable1=Math.sqrt(big_div.innerHTML);
                big_div.innerHTML=Math.sqrt(big_div.innerHTML);
                
                // eval(big_div.innerHTML);
            }
            else if(t==='C' || t=='CE'){
                big_div.innerHTML="0";
                variable1="";
                operand="";
                variable2="";
            }
            else if(t===`<i class="fas fa-divide" aria-hidden="true"></i>`){
                        operands("/");
            }
            else if(t===`x<sup>2</sup>`){
                
            }
            else if(t==='='){
                small_screen.innerHTML=big_div.textContent;
                big_div.innerHTML=eval(big_div.innerHTML);
                
                variable1=eval(big_div.innerHTML);
                operand="";
                variable2="";
            }
            else if(t==='.'){
                big_div.innerHTML+=t;
            }

            else if(t>=0 && t<=9){
                if(operand==='-' && variable1===""){
                    variable1+=big_div.innerHTML;
                }
                if(variable1!=="" && operand!=="" && variable2!==""){
                    variable1+=big_div.innerHTML;
                    variable2="";
                    operand="";
                }
                if(variable1==="" || operand===""){
                    firstoperator(t);
                }
                else{
                    if(operand!=="")
                    secondoperator(t);
                }

            }
            else{
                if(variable1!=="" && operand!=="" && variable2!==""){
                    variable1=big_div.innerHTML;
                    variable2="";
                    operand="";
                }
                switch(t){
                    case 'X':
                        console.log("my_value " +variable1);
                        operands("*");

                        break;
                    case '—':
                        operands("-");
                        break;
                    case '+':
                        operands("+");
                        break;  
                    case '%':
                        operands("%");
                        break;    
                    case '+/-':
                        operands("+-");
                        break;              
                }
            }

        });
    }
