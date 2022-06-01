var searchFormEl = document.getElementById('search-form')

function submitSearch(event){
    event.preventDefault();

    var textInputVal = document.getElementById('text-input').value;
    var selectInputVal = document.getElementById('select-input').value;
  
    if (!textInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    var queryString = './search-results.html?q=' + textInputVal + '&format=' + selectInputVal;
  
    location.assign(queryString);
}

searchFormEl.addEventListener('submit', submitSearch);