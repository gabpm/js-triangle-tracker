function triangle(a,b,c) {
  return (a === b && b === c) && 'equilateral ' ||
  (a === b || a === c || b === c) && 'isosceles' ||
  'scalene';
}


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangle(a, b, c);

    $("#triangle").text(result);
    event.preventDefault();
  });
});
