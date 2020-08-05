import { formatDate } from './formatDate';

describe('formatDate tests', () => {
  it('returns a string with the date in YYYY-MM-DD format when given a Date object', () => {
    const expected = '2020-08-04';
    const date = new Date('2020-08-04T12:03:43.970Z');
    const actual = formatDate(date);

    expect(actual).toBe(expected);
  });
});
