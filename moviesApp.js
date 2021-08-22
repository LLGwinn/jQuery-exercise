let lineItem = 0;
let moviesList = [];

$(function() {

/** append user input to to DOM */
$('#user-inputs').on('submit', function(e) {
    e.preventDefault();
    let titleInput = $('#title').val();
    let ratingInput = $('#rating').val();
    let movieObj = {titleInput, ratingInput, lineItem};

    const rowToAppend = createHTML(movieObj);

    lineItem++;
    moviesList.push(movieObj);

    $('#table-body').append(rowToAppend);
    $('#user-inputs').trigger('reset');
});

/** remove movie object from array list and DOM */
$('tbody').on('click', ".remove-btn", function(e) {
    // find the index for this movie
    let removeIndex = moviesList.findIndex(movie => movie.lineItem === +$(e.target).data('deleteId'));
    // remove obj from the array of movies
    moviesList.splice(removeIndex, 1);

    // remove line from DOM
    $(e.target).closest('tr').remove();
    
  });

});

function createHTML(obj) {
    return `
      <tr>
        <td>${obj.titleInput}</td>
        <td>${obj.ratingInput}</td>
        <td>
          <button class="remove-btn" data-delete-id=${obj.currentId}>
            Remove
          </button>
        </td>
      <tr>
    `;
 }

