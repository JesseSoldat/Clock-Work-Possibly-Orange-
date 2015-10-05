var heading2 = $('h2');

$('h2').addClass('cool');

$('li').addClass('listItem');

var lis = document.querySelectorAll('li');
lis.forEach(function(li){
  li.classList.add('item');
})