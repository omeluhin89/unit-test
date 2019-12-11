// eslint-disable-next-line import/extensions
import indicatorHealth from '../src';

test.each([
  ['one_value', { health: 60 }, 'healthy'],
  ['two value', { health: 40 }, 'wounded'],
  ['three_value', { health: 7 }, 'critical'],
])(
  ('calculate health with %s'),
  (variants, obj, expected) => {
    const result = indicatorHealth(obj);
    expect(result).toBe(expected);
  },
);
