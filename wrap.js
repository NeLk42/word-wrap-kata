var expect = require('chai').expect;

function wrap(wordToWrap, width) {
    if(!wordToWrap) return '';
    if (width < wordToWrap.length){
        return wordToWrap.substr(0, width) + "\n" + wordToWrap.substr(width);
    }
    return wordToWrap;
}

describe("First test", function(){

    it("wrap empty string", function(){
        expect(wrap('', 0)).to.eql('');
    });

    it("word does not need wrapping", function(){
        expect(wrap('hello', 5)).to.eql('hello');
    });

    it("word needs wrapping", function(){
        expect(wrap('hello', 3)).to.eql('hel\nlo');
    });

});