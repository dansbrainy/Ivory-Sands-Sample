const svg = new Walkway({
  selector: "#svg-castle",
  duration: 3000,
});

svg.draw(after);

function after() {
  // fillPath('color-1','#695a69');
  // fillPath('color-2','#b2441d');
  // fillPath('color-3','#dfd0c6');
  // fillPath('color-4','#c8b2a8');
  // fillPath('color-5','#de582a');
  // fillPath('color-6','#a08a8a')
}

function fillPath(classname, color) {
  const paths = document.querySelectorAll(`#svg-castle .${classname}`);
  for (path of paths) {
    path.style.fill = `${color}`;
  }
}
