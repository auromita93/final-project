var lines = [];

function showInput(){
  var textarea = document.getElementById("textarea1");
  var spanarea = document.getElementById("white-text");
  spanarea.innerHTML = textarea.value + lines;
 
}

function showOtherInput(){
  var textarea2 = document.getElementById("textarea2");
  var spanarea = document.getElementById("white-text");
  spanarea.innerHTML = textarea2.value + lines;
}



//if words rhyme, keep battling. if not you stop

function rhymeTest(){
	var pattern = new RegExp("[a-z]{3}$");
	var test = document.getElementById("textarea1");
	var test2 = document.getElementById("textarea2");
	if(pattern.test(test) === pattern.test(test2))
		{
			console.log("It rhymes, keep going!");
		}
	else {
		console.log("Does not rhyme, end of battle!");
	}
}

