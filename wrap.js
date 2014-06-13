var expect = require('chai').expect;

function wrap(wordToWrap, width) {
    if(!wordToWrap) return '';
}

describe("First test", function(){

   it("wrap empty string", function(){
       expect(wrap('', 0)).to.eql('');
   });

});