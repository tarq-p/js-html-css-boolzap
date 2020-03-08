$(document).ready(function() {


    $('.new-message-inputs').focus(function() {
        $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');
    }).blur(function () {
        $('.right-footer-icon.f-right i').toggleClass('fa fa-microphone fas fa-paper-plane');
    });

     $('.right-footer-icon.f-right').click(function() {
          invioMessaggio();
     });
     $('.new-message-inputs').keypress(function(event) {
          if(event.keyCode == 13) {
               invioMessaggio();
          }
     });


     function invioMessaggio() {
          var testoMessaggio = $('.new-message-inputs').val();
          if(testoMessaggio.trim().length > 0) {
               $('.new-message-inputs').val('');
               creaMsg(testoMessaggio, 'sent');
               scroll();
               setTimeout(function() {
                    creaMsg('ok', 'received');
                    scroll();
               }, 2000);
          }
     }


     function creaMsg(testoMsg, sentReceived) {
          var templateMessaggio = $('.template .message').clone();
          templateMessaggio.children('.message-text').text(testoMsg);
          templateMessaggio.addClass(sentReceived);
          $('.right-messages.active').append(templateMessaggio);
     }



     function scroll() {
          var pixelScroll = $('.right-messages.active').height();
          $('.right-messages.active').scrollTop(pixelScroll);
     }


     $('#search').keyup(function(event){
       var filter = $(this).val().toLowerCase();
       $('.user').each(function(){
           var contactinput = $(this).find('#nome').text().toLowerCase();
           if (contactinput.includes(filter)) {
               $(this).show();
           } else {
               $(this).hide();
           }
       })
   });


});
