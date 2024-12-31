document.getElementById('tipForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var tip = document.getElementById('tipInput').value;
  if (tip) {
    var tipsSection = document.getElementById('tips');
    var tipElement = document.createElement('p');
    tipElement.textContent = tip;
    tipsSection.appendChild(tipElement);
    document.getElementById('tipInput').value = ''; // Clear input after submission
  }
});