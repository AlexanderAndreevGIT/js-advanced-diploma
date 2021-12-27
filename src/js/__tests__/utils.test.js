import { calcTileType, showCharacterStats } from '../utils';
import Bowman from '../characters/Bowman';

test.each([
  [0, 8, 'top-left'],
  [7, 8, 'top-right'],
  [56, 8, 'bottom-left'],
  [63, 8, 'bottom-right'],
  [4, 8, 'top'],
  [40, 8, 'left'],
  [55, 8, 'right'],
  [60, 8, 'bottom'],
  [43, 8, 'center'],
])(
  ('should show health string'),
  (index, boardSize, expected) => {
    expect(calcTileType(index, boardSize)).toBe(expected);
  },
);

test('function showCharacterStats should constructs taged Template', () => {
  const expected = `${String.fromCodePoint(0x1F396)}1  ${String.fromCodePoint(0x2694)}25  ${String.fromCodePoint(0x1F6E1)}25  ${String.fromCodePoint(0x2764)}50`;
  const character = new Bowman(1);
  const received = showCharacterStats(character);
  expect(received).toEqual(expected);
});
