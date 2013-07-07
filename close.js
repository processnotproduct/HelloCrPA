  document.addEventListener('DOMContentLoaded', function(e) {
    var closeButton = document.querySelector('#close-button');
    closeButton.addEventListener('click', function(e) {
      window.close();
  });
});