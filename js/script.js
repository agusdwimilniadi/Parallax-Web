// $('.page-scroll').on('click', function(e){

//     //ambil isi href
//     var tujuan = $(this).attr('href');
//     //tangkap elemen
//     var elemenTujuan = $(tujuan);

//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top -50
//     }, 1250, 'easeInOutExpo');

//     e.preventDefault();
// });

// ABOUT

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})



// menyimpan parallax

$(window).scroll(function(){
    var wSroll = $(this).scrollTop();
    
    // JUMBOTRON
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wSroll/4 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wSroll/2 +'%)'
    })
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wSroll/1.2 +'%)'
    })

    // PORTFOLIO
    
    if (wSroll > (($('.portfolio').offset().top ) - 200)) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 150 *(i));
        })
    }
    if (wSroll > (($('.portfolio').offset().top ) + 250)) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).removeClass('muncul');
            }, 150 *(i));
        })
    }
    if (wSroll > (($('.portfolio').offset().top )+250)) {

        $('.isiForm .bagianForm').each(function(i){
             setTimeout(function(){
                 $('.isiForm .bagianForm').eq(i).addClass('formMuncul');
             }, 150 *(i));
        })
    }
    
})