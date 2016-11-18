$(function(){
  window.onclick = function(event) {
    var target = event.target;
    if (!target.matches('.dropdown__toggle')) {
      if (target.matches('.dropdown-list__item')){
        var choice = target.innerHTML;
        console.log($(target).parent().siblings('.dropdown__toggle'));
        $(target).parent().siblings('.dropdown__toggle').html(choice);
      }
      var dropdowns = document.getElementsByClassName("dropdown-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    } else {$(target).siblings('.dropdown-list').toggleClass('active');}
  }
});
