$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen
    var elemenTujuan = $(tujuan);

    $('body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});





// menyimpan parallax

$(window).scroll(function(){
    var wSroll = $(this).scrollTop();
    
    
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
})