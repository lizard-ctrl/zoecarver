document.addEventListener("DOMContentLoaded", function() {
  function typeOutText(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        if (text.charAt(i) === '\n') {
          element.innerHTML += '<br>';
        } else {
          element.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  const targetDiv = document.getElementById("targetDiv");
  const text = "This is the text that will be typed out slowly.\nHere is the second paragraph.\nAnd here is the third paragraph.";
  const speed = 100; // Speed in milliseconds

  const textWithLinks = [
    "This is the text that will be typed out slowly.",
    "Here is the second paragraph with a link to <a href='https://example.com'>Example</a>.",
    "And here is the third paragraph."
  ];

  function typeOutTextWithLinks(element, textArray, speed) {
    let i = 0;
    let j = 0;

    function type() {
      if (i < textArray.length) {
        if (j < textArray[i].length) {
          if (textArray[i].charAt(j) === '<') {
            const endTagIndex = textArray[i].indexOf('>', j);
            element.innerHTML += textArray[i].substring(j, endTagIndex + 1);
            j = endTagIndex + 1;
          } else {
            element.innerHTML += textArray[i].charAt(j);
            j++;
          }
          setTimeout(type, speed);
        } else {
          element.innerHTML += '<br>';
          i++;
          j = 0;
          setTimeout(type, speed);
        }
      }
    }
    type();
  }

  typeOutTextWithLinks(targetDiv, textWithLinks, speed);
});




document.addEventListener("DOMContentLoaded", function () {
const container = document.getElementById("imageContainer");

for (let i = 1; i <= 33; i++) {
    const img = document.createElement("img");
    img.src = `hpimages/${i}.png`;
    img.classList.add("random-img");

   //bounds for the random images :P
    const paddingX = window.innerWidth * 0.15;  
    const paddingY = window.innerHeight * 0.15; 
    const widthRange = window.innerWidth * 0.6; 
    const heightRange = window.innerHeight * 0.5; 

    const x = paddingX + Math.random() * widthRange; 
    const y = paddingY + Math.random() * heightRange; 
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    // Sizing random images :D
    const size = Math.random() * 100 + 50;
    img.style.width = `${size}px`;
    img.style.height = "auto";

    container.appendChild(img);
}
});

const fonts = ['FontOne', 'FontTwo', 'FontThree','FontFour','FontFive','FontSix','FontSeven','FontEight'];
let index = 0;

setInterval(() => {
document.getElementById("changingText").style.fontFamily = fonts[index];
index = (index + 1) % fonts.length;
}, 3000);

function createStars(numStars) {
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "☆";

  
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let size = Math.random() * 30 + 10; // Star Sizing ☆

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.fontSize = `${size}px`;

    document.body.appendChild(star);
}
}

createStars(30);

const circleBtn = document.querySelector('.circle-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtnNav = document.querySelector('.nav-links .close-btn');
const contentSections = document.querySelectorAll('.content');
const linkBtns = document.querySelectorAll('.nav-link');
const nameHeader = document.getElementById('nameHeader'); 


circleBtn.addEventListener('click', () => {
    circleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});


closeBtnNav.addEventListener('click', () => {
    circleBtn.classList.remove('active');
    navLinks.classList.remove('active');
});

linkBtns.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const contentId = link.getAttribute('data-content');
        const contentDiv = document.getElementById(contentId);

      
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        contentDiv.classList.add('active');

        changingText.style.display = 'none';
    });
});

const closeBtns = document.querySelectorAll('.content .close-btn');
closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const contentDiv = e.target.closest('.content');
        contentDiv.classList.remove('active');

        if (![...contentSections].some(section => section.classList.contains('active'))) {
            changingText.style.display = 'block';
        }
    });
});

const images = ['images/try1.jpeg', 'images/try2.png', 'images/try3.png'];

let currentIndex = 0;


function changeBackgroundImage() {
  if (window.innerWidth > 775) {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  } else {
    // Optional: reset to a default background for mobile
    document.body.style.backgroundImage = "none";
  }
}


setInterval(changeBackgroundImage, 5000);


changeBackgroundImage();

/*const textWithLinks = [
"Zoe currently works on the visionOS System Software team in Apple’s <a href=”https://www.apple.com/apple-vision-pro/”>Vision Products Group</a> as a Senior System Engineer, leading projects and contributing across the stack from firmware, to system daemons (such as the visionOS compositor), and UI frameworks (such as SwiftUI).",
"Zoe started full time at Apple working on <a href=”https://github.com/swiftlang/swift-evolution/blob/main/visions/using-c%2B%2B-from-swift.md”>Swift and C++ interop,<a> a project he had been leading for several years in high school. Once at Apple, he continued to push this effort forward, eventually releasing it at WWDC23 where it was featured in the  <a href=”https://developer.apple.com/videos/play/wwdc2023/10172/”>keynote,<a> SOTU, and a number of sessions.",
"Next he turned his focus to the intersection of programming languages, security, and operating systems where he helped with a number of security initiatives, including the Embedded Swift project, implementing parts of the feature and helping adopt Swift across Apple’s operating systems.",
"Contact Zoe <a href=”tel:+12068591242”>here 📱</a> and <a href=”mailto:zoec@zoecarver.com”>here 📧</a>."
];

const targetDiv = document.getElementById("aboutText");

function typeOutTextWithLinks(element, textArray, speed) {
let i = 0; // Index for textArray
let j = 0; // Index for characters
let currentText = "";

function type() {
    if (i < textArray.length) {
        if (j < textArray[i].length) {
            currentText += textArray[i].charAt(j); // Append new character
            element.innerHTML = currentText; // Update innerHTML
            j++;
            setTimeout(type, speed);
        } else {
            // Add a line break after each complete sentence (except the last one)
            if (i < textArray.length - 1) {
                currentText += "<br>"; 
                currentText += "<br>"; 
                element.innerHTML = currentText; // Apply line break
            }
            i++; // Move to next sentence
            j = 0;
            setTimeout(type, speed);
        }
    }
}
type();
}

const speed = 30; // Typing speed in milliseconds
typeOutTextWithLinks(targetDiv, textWithLinks, speed);
*/