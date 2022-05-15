class FizzbuzzSer {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }
        if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    static applyValidationInNumber(number) {
        const obj = { score:number};
        if (number % 5 === 0 && number % 3 === 0) {
            obj.trick = "FIZZBUZZ";
            return obj;
        }
        if (number % 5 === 0) {
            obj.trick = "BUZZ";
            return obj;
        }
        if (number % 3 === 0) {
            obj.trick = "FIZZ";
            return obj;
        } else {
            obj.trick = number;
            return obj;
        }
    }
}

module.exports = FizzbuzzSer;
