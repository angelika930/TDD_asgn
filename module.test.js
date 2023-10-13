import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("1angelika");
    expect(got).toBe(expected);
});
test('Testing containsNumbers --success', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
});
test('Testing containsNumbers -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("0");
    expect(got).toBe(expected);
});
test('Testing div', () => {
    const expected = Infinity;
    const got = mut.div(1,0);
    expect(got).toBe(expected);
});
test('Test Stock Portfolio', () => {
    Dictionary<string, int> stocks;
    dict[0] = {"GME": 5};
    const expected = true;
    const got = mut.stockPortfolio(0,0);
    expect(got).toBe(expected);
})