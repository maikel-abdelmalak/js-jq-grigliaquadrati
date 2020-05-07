$(document).ready(function(){
    //creo la griglia
    var i;
    for(i = 0; i<25; i++){
        $('#griglia').append('<div class="Quadrato"></div>');
    };


    $('#griglia div').click(function(){
        numero = numero_random(1, 10);
        console.log(numero);
        $(this).addClass('colorato');
        $(this).text(numero);
    });

})


function numero_random(min, max){
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}
