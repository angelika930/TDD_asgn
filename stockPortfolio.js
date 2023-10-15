import ShareSaleException from './ShareSaleException.js';
class stockPortfolio {

    constructor() {
        this.hashMap = new Map();      //collection of stock ticker symbols
    }
    returnPortfolioNum() {
        if (this.hashMap.size === 0) {
            return true;
        }
        return false;
    }
    countUniqSymbols() {
        return this.hashMap.size;
    }
    purchase(symbol, shares) {
        this.hashMap.set(symbol, shares);
    }
    sale(symbol, amount) {
        var currAmount = this.hashMap.get(symbol)
        if (currAmount - amount < 0) {
            throw new ShareSaleException('Attempting to sell more shares than owned.');
        }
        else {
            currAmount = currAmount - amount;
            this.hashMap.set(symbol, currAmount);
        }
    }
    returnSymbolShare(symbol) {
        if (this.hashMap.has(symbol)) {
            return this.hashMap.get(symbol);
        }
        return "Symbol does not exist";
    }
    ownedSymbols() {
        let symbol = [];
        for (let [key,value] of this.hashMap) {
            if (value === 0) {
                continue;
            }
            else {
                symbol.push(key + ", " + value);
            }
        }
        return symbol;
    }
  

}

export default stockPortfolio;

