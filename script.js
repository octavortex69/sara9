const emojiContainer = document.getElementById('emoji-container');

// Function to create a new emoji element
function createEmoji() {
  const emoji = document.createElement('span');
  emoji.classList.add('emoji');
  emoji.innerHTML = '❤️'; // Replace with your preferred emoji
  emoji.style.left = Math.random() * 100 + '%'; // Random horizontal position
  emojiContainer.appendChild(emoji);

  // Remove the emoji from the container when animation ends
  emoji.addEventListener('animationend', () => {
    emoji.remove();
  });
}

// Generate emojis for the first 3 seconds
let timer = setInterval(createEmoji, 500); // Adjust the interval (in milliseconds) as desired

// Stop generating emojis after 3 seconds
setTimeout(() => {
  clearInterval(timer); // Stop generating new emojis
}, 5000);

// Remove any emojis that are still animating after 3 seconds
setTimeout(() => {
  const emojis = document.getElementsByClassName('emoji');
  while (emojis.length > 0) {
    emojis[0].remove();
  }
}, 5000);

// Set the target date (April 1st, 2024)
const targetDate = new Date('2024-04-01T00:00:00Z').getTime();

// Update the counter every second
setInterval(updateCounter, 1000);

function updateCounter() {
  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - targetDate;

  // Calculate the days
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Calculate hours (with remainder from days calculation)
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Calculate minutes (with remainder from hours calculation)
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Calculate seconds (with remainder from minutes calculation)
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the counter on the webpage (assuming you have an element with ID 'counter')
  const counterElement = document.getElementById('counter');
  counterElement.innerHTML = `
    <h3>This is a counter for how many days since <s>we're together</s> we met each other for the first time</h3>
    <p>Days: ${days}</p>
    <p>Hours: ${hours}</p>
    <p>Minutes: ${minutes}</p>
    <p>Seconds: ${seconds}</p>
  `;
}

const puzzle = document.querySelector('.puzzle');

puzzle.addEventListener('mouseover', () => {
  puzzle.style.cursor = `url('Screenshot_7.png'), auto`;
});

puzzle.addEventListener('mouseout', () => {
  puzzle.style.cursor = 'default';
});

function hintButtonClick(){
  alert("default+the first pic you sent me with an object in your hand. what was in that pic as the object?+the time i first msg-ed you+the name of the first pic (of you) file you sent me+how many hello kitty stickers are there? (that are fully visible and understandable) (no space and no capital letter in answer) ")
}


function checkColor() {
  const input = document.getElementById("color-input");
  const inputValue = input.value;

  if (inputValue === "128248241007spoon12158") {
    window.location.href = "./success.html"; // Replace with your desired URL
  } else {
    alert("Incorrect answer.");
  }
}
