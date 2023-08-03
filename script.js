function fetchRandomTip() {
    fetch('http://localhost:3000/api/tips/random')
        .then(response => response.json())
        .then(data => {
            const tip = data.tip;
            // Display the tip on the website
            displayFitnessTip(tip);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function fetchcreateTips(){
    fetch('http://localhost:3000/fitness-tips','post',{title:data})

}
window.addEventListener('load', fetchRandomTip);

// Or call the function when a button is clicked, for example
const nextTipButton = document.getElementById('nextTipButton');
nextTipButton.addEventListener('click', fetchRandomTip);

function displayFitnessTip(tip) {
    const tipContainer = document.getElementById('tip-section');
    tipContainer.textContent = tip;
  }