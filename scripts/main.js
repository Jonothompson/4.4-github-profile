(function(){
  'use strict';

  $(document).ready(function(){
    $.ajax({
      url: "https://api.github.com/user",
      headers: {
        "Authorization": "token " + GITHUB_TOKEN
      }
    }).then(function(user) {
      $('body').prepend(JST['user'](user));
      console.log(user);
    });
  });
  
  $.ajax({
   url: "https://api.github.com/users/Jonothompson/repos",
  	}).then(function(data){
       $('body').prepend(JST['repo'](data));
       console.log(data);
 });

  $(document).ready(function(e){
    var code = window.location.href.match(/\?code=(.*)/)[1];
    if(code) {
      $.getJSON('http://localhost:9999/authenticate/'+code, function(data) {
//       console.log(data);
      });
    }
  });

  $('button').on('click', function(e){
    window.location.replace('https://github.com/login/oauth/authorize?client_id=44b961c4761352756e91');
  });
  
})();