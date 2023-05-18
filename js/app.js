const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $img = $('#img')
const $boxOffice = $('#box-office');

$.ajax({
  url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
}).then(
  (data) => {
    $title.text(data.Title);
    $img.attr('src', data.Poster)
    $year.text(data.Year);
    $rated.text(data.Rated);
    $boxOffice.text(data.BoxOffice)
    console.log(data)
  },
  (error) => {
    console.log('bad request', error);
  }
)