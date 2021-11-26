let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button');
let screenValue = '';

 for (items of buttons){
     items.addEventListener ('click', (e)=>{
         buttonText = e.target.innerText;
         console.log("button text is", buttonText)

         if(buttonText === 'X'){
             buttonText = '*';
             screenValue += buttonText;
             screen.value = screenValue;
         }
         else if(buttonText == ')'){
             console.log(typeof screen.value)
             screen.value  = screen.value.slice(0, (screen.value.length-1));
             screenValue = screen.value;

         }
         
         else if(buttonText === 'C'){
             screenValue = "";
             screen.value = screenValue;

         }
         
         else if(buttonText == '='){
             screen.value = eval(screenValue);
             screenValue = screen.value;
         }else{
             screenValue += buttonText;
             screen.value = screenValue; 
         }
     })
 }