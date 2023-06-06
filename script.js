const button = document.getElementById('myButton');
const randomcolors = ['#ee9349','#e45b49','#a93749','#7c2349','#184161','#1c4e74','#3288cc','#8abbe2','#e9edf0'];

button.addEventListener('click', function() {
    const pick = Math.floor(Math.random() * randomcolors.length);
    
    document.body.style.backgroundColor = randomcolors[pick];    
  });