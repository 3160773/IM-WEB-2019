// $(document).ready(function(){
//     $(".button a").click(function(){
//         $(".overlay").fadeToggle(200);
//        $(this).toggleClass('btn-open').toggleClass('btn-close');
//     });
// });
// $('.overlay').on('click', function(){
//     $(".overlay").fadeToggle(200);   
//     $(".button a").toggleClass('btn-open').toggleClass('btn-close');
//     open = false;
// });


$(".point").click(function(){


  var target = $(this).attr("data-target");
//  alert(target)

  $(target).toggleClass("active")

});