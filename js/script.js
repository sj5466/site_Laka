$(function(){
    /*visual 슬라이드갤러리*/
    $('.slides').bxSlider({
        auto:true,
        speed:500,
        pager:true,
        mode:'vertical',
        controls:false,
      });

    /*contents_nail 슬라이드 갤러리*/
    $('.show').bxSlider({
        auto:true,
        speed:300,
        controls:true,
        autoHover:true,
        minSlides:3,
        maxSlides:3,
        moveSlides:1,
        slideWidth:203,
        slideMargin:109,
        pager:false,
    });

      /*scroll 효과*/
      ScrollOut({
        once:true,
    });
});