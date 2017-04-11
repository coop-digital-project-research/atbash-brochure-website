document.addEventListener("DOMContentLoaded", function(event) {
  var addToChromePrompt = document.getElementById('add-to-chrome-prompt');

  if (addToChromePrompt) {

    dismissButton = document.getElementById('button-bar')
    dismissButton.addEventListener('click', function() {
        addToChromePrompt.style.display = 'none';
    })

    addToChromePrompt.style.display = 'none';

    button = document.getElementById('add-to-chrome-button');

    button.addEventListener('click', function() {
        addToChromePrompt.style.display = 'block';
    });
  }
});
