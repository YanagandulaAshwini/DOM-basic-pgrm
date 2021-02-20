function caluclate(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var operator=document.getElementById("operator").value;
    switch(operator){

        case "add" :
            document.getElementById("result").value=num1+num2;
            break;

        case "sub" :
                document.getElementById("result").value=num1-num2;
                break;
         case 'mul' :
                document.getElementById("result").value=num1*num2;
                break;
            case 'div' :
                document.getElementById("result").value=num1/num2;  
                break;
    }
}