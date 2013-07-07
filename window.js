onload = function() {
  document.getElementById('name-form').onsubmit = function(e) {
    e.preventDefault();

    document.getElementById('output').innerHTML =
        document.getElementById('name-input').value + "!";
  };
};