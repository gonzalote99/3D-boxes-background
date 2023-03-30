const magicElement = document.getElementById('btn');
const boxesElement = document.getElementById('boxes');


magicElement.addEventListener('click', () => boxesElement.classList.toggle('big'));

for(let i = 0; i < 4; i++) {
  for(let j = 0; j < 4; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundPosition = `${-1 * j * 125}px ${-1 * i * 125}px`;
    boxesElement.appendChild(box);
  }
}