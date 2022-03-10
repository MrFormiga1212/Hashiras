
let count = 1;
document.getElementById("radio1").cheked = true;


setInterval( function(){
    nextImagem()
},2000)

function nextImagem(){
    count++;
    if(count>9){
        count = 1;
    }

    document.getElementById("radio"+count).cheked = true;
}