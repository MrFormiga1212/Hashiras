const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', 'active')
    if (active){
         event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
        } 
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



function leiaMais(n){
    var mais = document.querySelector('.mais'+n);
    var pontos = document.querySelector('.pontos'+n);
    var btn = document.querySelector('btn'+n);
    var txtbtn = document.querySelector('txtbtn'+n);
 
    if(mais.style.display === 'block') {
        mais.style.display = 'none';
        pontos.style.display = 'block';
    } else {
        mais.style.display = 'block';
        pontos.style.display = 'none';
    }

}

var clicar1 = document.querySelector('#btn1');
var texto1 = ['Giyu Tomioka - Hashira da Água', 'Ocultar'];
var index1 = 0;

clicar1.addEventListener("click", function(){
    if(index1 +1 == texto1.length){
        index1 = 0;
    }else{
        index1 = index1 + 1;
    }
        clicar1(clicar1.textContent = texto1[index1])
 
})

var clicar2 = document.querySelector('#btn2');
var texto2 = ['Shinobu Kocho - Hashira do Inseto', 'Ocultar'];
var index2 = 0;

clicar2.addEventListener("click", function(){
    if(index2 +1 == texto2.length){
        index2 = 0;
    }else{
        index2 = index2 + 1;
    }
        clicar2(clicar2.textContent = texto2[index2])
 
})

var clicar3 = document.querySelector('#btn3');
var texto3 = ['Kyojuro Rengoku - Hashira das Chamas', 'Ocultar'];
var index3 = 0;

clicar3.addEventListener("click", function(){
    if(index3 +1 == texto3.length){
        index3 = 0;
    }else{
        index3 = index3 + 1;
    }
        clicar3(clicar3.textContent = texto3[index3])
 
})

var clicar4 = document.querySelector('#btn4');
var texto4 = ['Mitsuri Kanroji - Hashira do Amor', 'Ocultar'];
var index4 = 0;

clicar4.addEventListener("click", function(){
    if(index4 +1 == texto4.length){
        index4= 0;
    }else{
        index4 = index4 + 1;
    }
        clicar4(clicar4.textContent = texto4[index4])
 
})

var clicar5 = document.querySelector('#btn5');
var texto5 = ['Obanai Iguro - Hashira das Serpentes', 'Ocultar'];
var index5 = 0;

clicar5.addEventListener("click", function(){
    if(index5 +1 == texto5.length){
        index5 = 0;
    }else{
        index5 = index5 + 1;
    }
        clicar5(clicar5.textContent = texto5[index5])
 
})

var clicar6 = document.querySelector('#btn6');
var texto6 = ['Sanemi Shinazugawa - Hashira do Vento', 'Ocultar'];
var index6 = 0;

clicar6.addEventListener("click", function(){
    if(index6 +1 == texto6.length){
        index6 = 0;
    }else{
        index6 = index6 + 1;
    }
        clicar6(clicar6.textContent = texto6[index6])
 
})

var clicar7 = document.querySelector('#btn7');
var texto7 = ['Gyomei Himejima - Hashira da Rocha', 'Ocultar'];
var index7 = 0;

clicar7.addEventListener("click", function(){
    if(index7 +1 == texto7.length){
        index7 = 0;
    }else{
        index7 = index7 + 1;
    }
        clicar7(clicar7.textContent = texto7[index7])
 
})

var clicar8 = document.querySelector('#btn8');
var texto8 = ['Tengen Uzui - Hashira do Som', 'Ocultar'];
var index8 = 0;

clicar8.addEventListener("click", function(){
    if(index8 +1 == texto8.length){
        index8 = 0;
    }else{
        index8 = index8 + 1;
    }
        clicar8(clicar8.textContent = texto8[index8])
 
})

var clicar9 = document.querySelector('#btn9');
var texto9 = ['Muichiro Tokito - Hashira da Névoa', 'Ocultar'];
var index9 = 0;

clicar9.addEventListener("click", function(){
    if(index9 +1 == texto9.length){
        index9 = 0;
    }else{
        index9 = index9 + 1;
    }
        clicar9(clicar9.textContent = texto9[index9])
 
})


var textos = "Solicitação enviada com sucesso"
var click = document.querySelector('#enviarbtn')
click.addEventListener("click", function(){
    click(window.alert(textos))
})
