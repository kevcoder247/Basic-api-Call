let movieData, userInput;

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $img = $('#img')
const $boxOffice = $('#box-office');
const $input = $('input[type="text"]');


$('form').on('submit', handleGetData);

function handleGetData(event){
  // calling preventDefault() on a 'submit' event will prevent a page refresh 
  event.preventDefault();
  
  // getting the user input
  userInput = $input.val();
  $.ajax({
    url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
  }).then(
    (data) => {
     movieData = data;
     render(); 
    },
    (error) => {
      console.log('bad request', error);
    }
  )

  function render(){
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated)
    $img.attr('src', movieData.Poster)
  }

}