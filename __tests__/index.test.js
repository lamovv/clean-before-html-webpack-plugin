import CleanBeforeHtmlWebpackPlugin from '../src/index';

describe('compare api test', () => {
  test('a == b', () => {
    console.log(typeof CleanBeforeHtmlWebpackPlugin);
    expect(typeof CleanBeforeHtmlWebpackPlugin).toBe(0);
  });
});