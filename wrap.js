var expect = require('chai').expect;

function recursiveWrap(text, width){
    if (width < text.length){
        return text.substr(0, width) + "\n" + recursiveWrap(text.substr(width), width);
    }
    return text;
}

function wrap(wordToWrap, width) {
    if(!wordToWrap) return '';
    if (width < wordToWrap.length){
        return recursiveWrap(wordToWrap, width);
    }
    else {
        return wordToWrap;
    }
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