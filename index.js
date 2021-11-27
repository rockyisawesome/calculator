let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button');
let screenValue = '';

let tippu = false;

 for (items of buttons){
     items.addEventListener ('click', (e)=>{
         buttonText = e.target.innerText;
         console.log("button text is", buttonText)
         console.log(tippu)

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
            if (!tippu) {
            screenValue = eval(screenValue);
             screenValue ? screen.value = screenValue : screenValue = screen.value = "";
            //  screenValue = screen.value;
            tippu = !tippu;
            }
            else{
                screenValue = eval(screenValue);
             screenValue ? screen.value = screenValue : screenValue = screen.value = "";
            }
         }else{
            if(tippu){
                screenValue = screen.value = buttonText;
                tippu = !tippu;
            }else {
                screenValue += buttonText;
                screen.value  = screenValue;
            }
         }
     })
 }