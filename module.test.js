//import mut from './module.js'; // MUT = Module Under Test
import mut from './stockPortfolio.js';
import stockPortfolio from './stockPortfolio';
import ShareSaleException from './ShareSaleException.js';
// test('Testing sum -- success', () => {
//   const expected = 30;
//   const got = mut.sum(12, 18);
//   expect(got).toBe(expected);
// });

// test('Testing containsNumbers -- success', () => {
//     const expected = true;
//     const got = mut.containsNumbers("1angelika");
//     expect(got).toBe(expected);
// });
// test('Testing containsNumbers --success', () => {
//     const expected = false;
//     const got = mut.containsNumbers("");
//     expect(got).toBe(expected);
// });
// test('Testing containsNumbers -- success', () => {
//     const expected = true;
//     const got = mut.containsNumbers("0");
//     expect(got).toBe(expected);
// });
// test('Testing div', () => {
//     const expected = Infinity;
//     const got = mut.div(1,0);
//     expect(got).toBe(expected);
// });

//ASK HOW TO TEST INITIALIZATION OF CLASS OBJECT
// test('Test creation of class object', () => {
//     dict = dict()
//     let sample = new stockPortfolio(dict, shares)
//     //const expected = ;
//     const got = mut.stockPortfolio();
//     expect(got).toBe(expected);
// });
test('Test initial shares ------ success' , () => {
    const sample = new stockPortfolio();
    const expected = 0;
    const got = sample.returnShares();
    expect(got).toBe(expected);
});
test('Test initial hashmap -------success' , () => {
    const sample = new stockPortfolio();
    const expected = new Map();
    const got = sample.hashMap;
    expect(got).toBeInstanceOf(Map);
});
test('Test Unique symbols -------- success' , () => {
    const sample = new stockPortfolio();
    sample.hashMap.set('GME', 5);
    sample.hashMap.set('RBLX', 10);
    const expected = 2;
    const got = sample.countUniqSymbols();
    expect(got).toBe(expected);
});
test('Test purchase function -------success' , () => {
    const sample = new stockPortfolio();
    sample.hashMap.set('RBLX', 100);
    const expected = 300;
    sample.purchase('RBLX', 300);
    const got = sample.hashMap.get('RBLX',);
    expect(got).toBe(expected);
});
test('Test sale function ----- success' , () => {
    const sample = new stockPortfolio();
    sample.hashMap.set('RBLX', 100);
    const expected = 80;
    sample.sale('RBLX', 20);
    const got = sample.hashMap.get('RBLX',);
    expect(got).toBe(expected);
});
test('Test returnShares --------- success' , () => {
    const sample = new stockPortfolio();
    sample.hashMap.set('RBLX', 100);
    const expected = 100;
    sample.returnSymbolShare('RBLX');
    const got = sample.hashMap.get('RBLX',);
    expect(got).toBe(expected);
});
test('Test returnShares if symbol does not exist -------- success' , () => {
    const sample = new stockPortfolio();
    const got = sample.returnSymbolShare('RBLX');
    expect(got).toStrictEqual("Symbol does not exist");
});
test('Test ownedSymbols ------- success' , () => {
    const sample = new stockPortfolio();
    sample.hashMap.set('RBLX', 100);
    sample.hashMap.set('GME', 0);
    const got = sample.ownedSymbols();
    expect(got).toStrictEqual(['RBLX, 100']);
});
test('Test preventing too many shares' , () => {
    const sample = new stockPortfolio();
    sample.hashMap.set('RBLX', 100);
    const got = () => {
        sample.sale('RBLX',120);
    };
    expect(got).toThrowError("Attempting to sell more shares than owned.");
});