chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    width: 410,
    height: 485,
 	frame: 'none',
  });
});

chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() { 
  // Do some simple clean-up tasks.
});