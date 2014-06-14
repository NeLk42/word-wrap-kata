var expect = require('chai').expect;

function wrap(wordToWrap, width) {
    if(!wordToWrap) return '';
    if (width < wordToWrap.length){
        return wordToWrap.substr(0, width) + "\n" + wordToWrap.substr(width);
    }
    return wordToWrap;
}

describe("Wrap", function(){

    it("will process an empty string", function(){
        expect(wrap('', 0)).to.eql('');
    });

    it("processes a word that does not need wrapping", function(){
        expect(wrap('hello', 5)).to.eql('hello');
    });

    it("processes a word that needs wrapping", function(){
        expect(wrap('hello', 3)).to.eql('hel\nlo');
    });

    it("processes a word that needs to be wrapped twice", function(){
        expect(wrap('hello', 2)).to.eql('he\nll\no');
    });

});