<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }

    canvas {
      display: block;
    }
  </style>
  <title>Beautiful JS Code</title>
</head>
<body>
  <canvas id="gradientCanvas"></canvas>

  <script>
    const canvas = document.getElementById('gradientCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FF6B6B', '#FFE66D', '#8AFF6B', '#6B9FFF', '#D58AFF'];
    let colorIndex = 0;

    function draw() {
      ctx.fillStyle = colors[colorIndex];
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      colorIndex = (colorIndex + 1) % colors.length;

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    draw();
  </script>
</body>
</html>
