var mainModule = (function($) {
  function initializeFirebase() {    
    var config = {
      apiKey: "AIzaSyC4585I19YYcZyH5bDKp6FcKlk8sPfxJb8",
      authDomain: "shoppingonline-a7d91.firebaseapp.com",
      databaseURL: "https://shoppingonline-a7d91.firebaseio.com",
      projectId: "shoppingonline-a7d91",
      storageBucket: "shoppingonline-a7d91.appspot.com",
      messagingSenderId: "61133875764"
    };
    firebase.initializeApp(config);
  }

  return {
    initializeApp: function() {
      initializeFirebase();
    }
  }
})(jQuery);

$(document).ready(function() {
  mainModule.initializeApp();
});
