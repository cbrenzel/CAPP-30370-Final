//Output the Image Properites 
$(document).on('click','img', function() {
  var $this = $(this);
	console.log('alt: ', $(this).attr("alt"));
	console.log('width:', $(this).width());
	console.log('height:', $(this).height());
	});
//Output the heading properties						
  $(document).on('click', 'h1,h2,h3', function() {
  var $this = $(this);
	console.log("text:", $(this).text());
	console.log('color:', $(this).css('color'));
	console.log('font-size:', $(this).css('font-size'));
  });
  
//Window Size 
console.log('window width');
console.log($(window).width());

$(window).resize(function(){
	console.log('window width:');
    $('width').text($(window).width());
    console.log($(window).width());
	});
