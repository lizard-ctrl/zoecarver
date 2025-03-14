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