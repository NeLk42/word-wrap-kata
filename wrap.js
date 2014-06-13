var expect = require('chai').expect;

function wrap(wordToWrap, width) {
    if(!wordToWrap) return '';
    return wordToWrap;
}

describe("First test", function(){

    it("wrap empty string", function(){
        expect(wrap('', 0)).to.eql('');
    });

    it("word does not need wrapping", function(){
        expect(wrap('hello', 5)).to.eql('hello');
    });

});