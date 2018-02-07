$('document').ready(function(){
    var bool=false;
$('.selected_img').click(function(){
    $('img').css('border','none');
    $(this).css('border-style','dotted');
    if(!bool){
        $(".sup_frame").append('<img class="fitted_img">');
        bool=true;
             }
    $('.fitted_img').attr('src', this.getAttribute('src'));
});
  
});