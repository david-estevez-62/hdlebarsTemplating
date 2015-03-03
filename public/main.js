$(document).ready(function(){
  var source = $('#1st-template').html();
  var template = Handlebars.compile(source);

  // console.log(template);

  // var context = {title: 'My New Post'};
  // var html = template(context);

  for(var item in productsData.productsList) {
    var toAppend = template(productsData.productsList[item]);
    $('#product-container').append(toAppend);
  }
});