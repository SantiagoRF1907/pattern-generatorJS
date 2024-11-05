const frame = document.querySelector(".frame");
const shapeName = "square";

function generatePattern() {
  // Access form values
  const form = document.getElementById("shapeForm");
  const color = form.elements["color"].value;
  const shapesAmount = form.elements["shapesAmount"].value;
  const direction = form.elements["direction"].value;
  const angleIncrement = form.elements["angleIncrement"].value;

  console.log(color);
  console.log(shapesAmount);
  // Clear frame before generating new pattern
  frame.innerHTML = "";

  for (let i = 0; i < shapesAmount; i++) {
    // Declare size and angle variables
    let size = 250;
    let angle = 0;
    // Decrease shape size
    size -= i * 5;
    // Increase shape angle
    if (direction == "right") {
      angle += i * angleIncrement;
    } else {
      angle -= i * angleIncrement;
    }

    // Debugging
    console.log(`index: ${i}`);
    console.log(`size: ${size}`);
    console.log(`angle: ${angle}`);

    // Generate shape
    const shape = document.createElement("div");
    shape.className = shapeName;
    shape.style.position = "absolute";
    shape.style.height = size + "px";
    shape.style.width = size + "px";
    shape.style.transform = `rotate(${angle}deg)`;
    shape.style.backgroundColor = color;
    frame.appendChild(shape);
  }
}
