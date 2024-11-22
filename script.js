

   const circle = document.querySelector(".circle");

    // Function to generate a random color
    function getRandomColor() {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      return randomColor;
    }

    // Add click event listener to the circle
    circle.addEventListener("click", function () {
      // Change the background color of the body
      document.body.style.backgroundColor = getRandomColor();
    });

