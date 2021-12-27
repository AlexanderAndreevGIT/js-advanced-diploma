import Daemon from '../characters/Daemon';

test('class Daemon should constructs object', () => {
  const expected = {
    type: 'daemon',
    level: 1,
    attack: 10,
    defence: 40,
    health: 50,
    moveDistance: 1,
    attackDistance: 4,
  };
  const received = new Daemon(1);
  expect(received).toEqual(expected);
});
