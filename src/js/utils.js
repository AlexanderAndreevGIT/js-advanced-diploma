export function calcTileType(index, boardSize) {
  const topCells = index < (boardSize - 1);
  const leftCells = Number.isInteger(index / boardSize);
  const rightCells = Number.isInteger((index + 1) / boardSize)
  const bottomCells = index >= (boardSize ** 2 - boardSize)
  if (index === 0) {
    return 'top-left';
  }
  if (index === (boardSize - 1)) {
    return 'top-right';
  }
  if (index === boardSize ** 2 - boardSize) {
    return 'bottom-left';
  }
  if (index === boardSize ** 2 - 1) {
    return 'bottom-right';
  }
  if (topCells) {
    return 'top';
  }
  if (leftCells) {
    return 'left';
  }
  if (rightCells) {
    return 'right';
  }
  if (bottomCells) {
    return 'bottom';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
