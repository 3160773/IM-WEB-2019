// $(".point").click(function(){
//     var c = "."+$(this).attr("id");
//     $(".active").removeClass("active")

//     $(c).addClass("active");

// })

// $(function() {
  
//   $('.point').on('click', function() {
//     var $ container = $(this);
//     $ container.fadeOut(function() {
//       $ container.toggleClass('japan egypt').fadeIn();
//     });
//   });
  
// });

// $(".point").click(function(){
//    var c = "."+$(this).attr("id");
// $(".active").removeClass("active")

// if ( $(this).hasClass("osaka") ) {
//     $(".stats").toggleClass("osaka.active")

// }

// });

$(".japan").click(function(){
  $(this).toggleClass("active")
  $(".osaka").toggleClass("active")

  if ( $(this).hasClass("japan") ) {
    $(".stats").toggleClass("osaka.active")
  }

});