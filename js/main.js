$(document).ready(function() {
  console.log('Hello Niall, how are you.....')



  var searchButton = $('#search');
  var results = $('#result');

  searchButton.on('click', function(event){
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    var searchAction = $('#search-action').val();

    console.log('line 12')
    $.get('https://api.spotify.com/v1/search?q=' + searchTerm + '&type=' + searchAction, function(response){

      results.empty();
      
      var response = response;
      var type = searchAction + 's'
      $.each(response[type].items, function(index, obj) {
  //use obj.id and obj.name here, for example:
      console.log(obj.name);
      var newElement = ('<div class="element"><li>' + obj.name + '</li></div>');
      results.append(newElement);
      });



    })

  })


})


//response.albums.items[4].name

// https://api.spotify.com/v1/search?q=muse&type=track