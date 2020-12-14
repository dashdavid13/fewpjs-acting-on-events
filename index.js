


  let dodger = document.getElementById("dodger");

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }

  function moveDodgerDown() {
    let downNumbers = dodger.style.down.replace("px", "");
    let down = parseInt(downNumbers, 10);
  
    if (down > 0) {
      dodger.style.down = `${down - 1}px`;
    }
  }

  function moveDodgerUp() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });

