/* global $ */ 
$(document).ready(function () {
  var counter = 0; 
  $('.button').on('click', function() {
    $('nav .full').slideToggle(function() {
      // Sometimes you aren't proud of the things you do. This is one of those times...but it works. 
      // $('.full').toggle().css('display', counter % 2 === 0 ? 'block' : 'none');
      counter++;
    });
    console.log('2 menus, really? Dude, why u no tel me?!');
  });
});

