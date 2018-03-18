// jQuery selector expression used to define variable, 'table'
// which will be invoked at global scope (it's called numerous times).
// Using const for this declaration as 'table' identifier is
// unlikely to be reassigned.
const table = $("#pixelCanvas");

// The function makeGrid() needs to be invoked by an event listener.
// When the user clicks submit button, this function gets called
$("#sizePicker").submit(function makeGrid(event) {
  let col, row;
  // set variable 'col' to value of inputHeight
  col = $('#inputHeight').val();
  // set variable 'row' to value of inputWidth
  row = $('#inputWidth').val();
  // now we have to create the Grid
  for (let i = 1; i <= col; i++) {
    // Used global scoped 'table' variable to append element '<tr></tr>'
    // to the existing DOM table element, #pixelCanvas
    table.append('<tr></tr>');
    // Nesting a second for loop so updates to table's width are accounted
    // for in newly added table row
    for (let j = 1; j <= row; j++) {
      table.children().last().append('<td></td>');
      // Each new 'td' element will receive a class attribute
      // with the value set to pixel. This allows for proper delegation
      // of background-color action being applied to the cell when the
      // cell is clicked (see line 39).
      $('td').attr('class', 'pixel');
    }
  }
  event.preventDefault();
});

// Create an event listener to update the background-color
// of a <td> element in the pixelCanvas grid with the value stored
// in variable color.  Variable color is updated with current selected
// color from the colorPicker input

table.on('click','.pixel',function () {
  // Event delegation - checks for any changes in table with id
  // pixelCanvas and makes changes to element with class .pixel
  let color=$('#colorPicker').val();
  $(this).css('background-color',color);
});
