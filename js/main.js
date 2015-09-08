$(document).ready(function() {
  console.log('Hello Niall, how are you.....')



  var searchButton = $('#search');
  var results = $('#result');

  searchButton.on('click', function(event){
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    var searchAction = $('#search-action').val();

    $.get('https://api.spotify.com/v1/search?q=' + searchTerm + '&type=' + searchAction, function(response){

      results.empty();
      
      var response = response;
      console.log(response);      
      var type = searchAction + 's'
      $.each(response[type].items, function(index, obj) {

      console.log(obj.name);
      if (searchAction != 'track'){
      var newElement = ('<div class="element"><li>' + obj.name + '</li></div>');
      var imgElement = ('<img class="img-element" src="' + obj.images[0].url + '">');
      results.append(newElement);
      results.append(imgElement);
      } else if (searchAction === 'track'){
        var newElement = ('<div class="element"><li>' + obj.name + '</li></div>');
        var imgElement = ('<img class="img-element" src="' + obj.album.images[0].url + '">');
        var audioElement = ('<audio controls="controls"> Your browser does not support the <code>audio</code> element. <source src="' + obj.preview_url +'" type="audio/wav"> </audio>');
        results.append(newElement);
        results.append(imgElement);
        results.append(audioElement);
      }

      });



    })

  })


})
