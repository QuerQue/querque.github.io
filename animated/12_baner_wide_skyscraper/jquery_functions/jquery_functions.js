$(function(){
animate_one();
});

function animate_one()
{
	$('#logo').delay(1000).show("explode", {pieces: 16}, 1000, function() { animate_two();}).delay(9000).show("explode", {pieces: 16}, 1000);
}

function animate_two()
{
	$('#slogan').show("drop", {direction: "up"}, 1000, function() { animate_three();}).delay(8500).show("drop", {direction: "down"}, 1000);
}

function animate_three()
{
	$('#text').show("slide", {direction:"right"}, 1000, function() { animate_four();}).delay(8000).show("slide", {direction:"left"}, 1000);
}

function animate_four()
{
	$('#button').effect("shake", {times:6, direction:"right", distance:20}, 300, function() { animate_one();});
}