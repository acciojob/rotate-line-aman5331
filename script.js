//your JS code here. If required.
function rotateLine() {
      const line = document.getElementById('line');
      let rotation = 0;

      // Function to update the rotation
      function updateRotation() {
        rotation += 1;
        line.style.transform = `rotate(${rotation}deg)`;
      }

      // Rotate the line every 10 milliseconds
      setInterval(updateRotation, 10);
    }

    // Start rotating the line when the page loads
    window.onload = rotateLine;
