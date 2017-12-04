(function($){
        $(window).on("load",function(){
            
            $( ".menu-open" ).click(function() {
                 $(this).toggleClass("active");
                 $(".header-nav").toggleClass("nav-open");
                
           });

            

            $( '#my-slider' ).sliderPro({
                width: 960,
                height: 380,
                arrows: true
            });


            $(window).resize(function() {
                     var  screenWidth = $(window).width();
                      if (screenWidth < 768){
                             $(".menu").mCustomScrollbar({
                                axis:"y" 
                            }); }
                                          
                      else{
                        $(".menu").mCustomScrollbar("destroy")
                    }
            });


        });
    })(jQuery);


    // vidmina mCustomScrollbar window resize $(".menu")mCustomScrollbar("destroy");


    

    //           
                
    //         

       



    //         {
    //              var  screenWidth = $(window).width();
    //              {
    //              console.log(1111);

    //           });
          
    // //           