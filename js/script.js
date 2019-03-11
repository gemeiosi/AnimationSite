	 $(document).ready(function(){
        slideShow();
         //Image Gallery
        function slideShow(){
            $("#headerimg").fadeOut(2500,function(){
                $(this).attr("src","images/header.jpg").fadeIn(2500,function(){
                    $(this).attr("src","images/header2.jpg").fadeOut(2500,function(){
                        $(this).attr("src","images/header3.jpg").fadeIn(2500,function(){
                             setTimeout(slideShow,100);
                        });
				});		
		});
});

        };
        
        

    //Faq
        var question = $('.accordion .question');
        var answer = $('.accordion .answer');
  
 $(question).click(function(){
    $(answer).slideUp();
    $(this).next().slideToggle('fast');
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToBottom').fadeOut();
    }
});
//Click event to scroll to bottom
$('#scrollToBottom').click(
    function () {
        $('html, body').animate({scrollTop: $("#parallax").height()}, 800);
    }
);

// Click event to scroll to top
$('#scrollToTop').click(
    function () {
        $('html, body').animate({scrollTop: '0px'}, 800);
        $("#scrollToTop").attr("src","images/downarrow.png");
    }
);
//Bottom animation
$(window).scroll(function(){
    var wh = $(this).height();
    var ww = $(this).width();
    var wscroll = $(this).scrollTop();
    

    if (ww>600 && wh>900){

    }

    var left = function(){
      $(".left").each(function(){
        $(this).delay(800).animate({left:"0",opacity:"1"})
      });
    };
    
    if(wscroll>=3000){
      left();
    }
    var right = function(){
        $("#right").each(function(){
          $(this).delay(800).animate({right:"0",opacity:"1"})
        });
      };
      
      if(wscroll>=3000){
        right();
      }
});
$.getJSON( "ajax/programma.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "#programma" );
  });
});