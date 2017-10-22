// Logout Page
var scriptString = 'document.getElementsByClassName("panel-heading")[0].getElementsByTagName("a")[0].click();';
var scriptNode = document.createElement('script');
scriptNode.textContent = scriptString;
document.body.appendChild(scriptNode);