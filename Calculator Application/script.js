if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }


function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}

function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}

function backspace()
{
var exp = document.form1.textview.value;
document.form1.textview.value = exp.substring(0, exp.length - 1); 
}

var a = 0;
var x;

function red(){


x = setInterval(function(){
    a++;
    
    if(a > 3){
        document.getElementById("redLight").style.backgroundColor = "darkred" ;
        document.getElementById("greenLight").style.backgroundColor = "rgb(0, 82, 0)" ;
        document.getElementById("textview").value = "" ;
        document.getElementById('textview').style.cursor = 'default';
        document.getElementById('textview').className = 'blank';
        
        document.getElementById('textview').style.textAlign = 'right';
        a = 0
        clearInterval(x)
    }else{
        document.getElementById("redLight").style.backgroundColor = "red" ;
        document.getElementById("greenLight").style.backgroundColor = "rgb(0, 82, 0)" ;
        document.getElementById('textview').value = 'CASIO !';
        document.getElementById('textview').style.textAlign = 'center';
        document.getElementById('textview').style.cursor = 'default';
    }

},1000)


}


function green(){

    document.getElementById('textview').className = 'textview';

    document.getElementById("textview").value = "" ;
    document.getElementById('textview').focus();

    document.getElementById('textview').style.cursor = 'text';





    document.getElementById("greenLight").style.backgroundColor = "greenyellow" ;
    document.getElementById("redLight").style.backgroundColor = "darkred" ;
}

