// Select color input
// Select size input
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');

sizePicker.addEventListener('submit', function(){
  pixelCanvas.innerHTML = "";
  var y = document.getElementById('inputHeight').value;
  var x = document.getElementById('inputWidth').value;
  console.log("Entered values: x = " + x + " y = " + y);
  makeGrid(x, y);
  event.preventDefault();
});

// Your code goes here!
// Creates rows and columns

function makeGrid(x, y){
  for (var a = 0; a < y ; a++){
    pixelCanvas.insertAdjacentHTML('beforeend','<tr></tr>');
    var pixelRow = pixelCanvas.querySelectorAll('tr')[a];
    //first loop to add rows
      for (var b = 0; b < x ; b++){
        pixelRow.insertAdjacentHTML('afterbegin','<td></td>');
        //second loop to add column
        //console.log("raw"+ a + "column" + b);
        //check loop count
      }
  }
}

pixelCanvas.addEventListener('click', function(event){
  if (event.target.tagName === "TD") {
     // When user clicks on td
     event.target.style.backgroundColor = colorPicker.value;
   }
});
