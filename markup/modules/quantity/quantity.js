$(function(){
  var input = document.getElementById('quantity');
  if (input!=null) {
    var quantity = input.value;
  }
  $('.quantity__plus').click(function(){
    quantity++;
    $(input).val(quantity);
  });
  $('.quantity__minus').click(function(){
    if (quantity>0) {
      quantity--;
      $(input).val(quantity);
    }
  });
})
