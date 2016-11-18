$(function(){
  $('.basket-table__delete').click(function(e){
    e.preventDefault();
    console.log($(this).parents(".basket-table__row"));
    $(this).parents(".basket-table__row").remove();
  })
});
