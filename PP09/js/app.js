var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const marquee = document.querySelector('.marquee');
const span = marquee.querySelector('span');

const marqueeWidth = marquee.offsetWidth;
const spanWidth = span.offsetWidth;

span.style.left = marqueeWidth + 'px';

function animate() {
  const animation = span.animate([
    { left: marqueeWidth + 'px' },
    { left: -spanWidth + 'px' }
  ], {
    duration: 10000,
    easing: 'linear',
    iterations: Infinity
  });
}

animate();



