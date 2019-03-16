let page = document.getElementById('buttonDiv');

var randThing = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', "rand"];

function generateRandColor() {
	var myChars = [];
	var i = 0;
	for(i = 0; i < 6; i++){
    		var mynum = Math.trunc(15 * Math.random());
		myChars.push(randThing[mynum]);
	};
	var mycolor = "#";
	for (x in myChars) 
		mycolor += myChars[x];
	return mycolor;
};

function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
      if (item == "rand") {
          let button = document.createElement('button');
	  var mycolor = generateRandColor();
          button.style.backgroundColor = mycolor; 
          button.addEventListener('click', function() {
		var newcolor = generateRandColor();
                chrome.storage.sync.set({color: newcolor}, function() {
                  console.log('color is ' + newcolor);
                  button.style.backgroundColor = newcolor;
              })
          });
          page.appendChild(button);
      }
      else {
          let button = document.createElement('button');
          button.style.backgroundColor = item;
          button.addEventListener('click', function() {
              chrome.storage.sync.set({color: item}, function() {
                  console.log('color is ' + item);
      })
    });
    page.appendChild(button);
      }}
}

constructOptions(kButtonColors);
