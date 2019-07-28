const colors = [
  '#cf9c9c',
  '#e5ba9c',
  '#ddd0af',
  '#bdcec0',
  '#AADBFF',
  '#b4a7ca',
  '#222',
];

const sizes = [168, 150, 134, 120, 108, 96, 86].reverse();

colors.forEach((color, index) => {
  const duration = 250;

  const polygon = new mojs.Shape({
    shape: 'polygon',
    points: 7,
    fill: color,
    stroke: '#ffffff',
    strokeWidth: 3,
    radius: 0,
    delay: duration * 2 * index,
    duration,
  });

  const loopEnd = colors.length - index;
  const oneFourteenthTurn = 360 / 14;

  for (let i = 0; i < loopEnd; i++) {
    polygon
      .then({
        duration,
      })
      .then({
        angle: oneFourteenthTurn * i,
        duration,
        radius: sizes[i],
      });
  }

  polygon
    .then({
      duration,
    })
    .then({
      angle: 180 + oneFourteenthTurn * loopEnd,
      duration: duration * 2,
    });

  polygon.play();
});
