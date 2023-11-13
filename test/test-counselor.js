const { expect } = require('chai');
const { should } = require('chai').should();
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('src/counselor.html', () => {
    beforeEach((done) => {
        JSDOM.fromFile('src/counselor.html')
        .then((dom) => {
        global.document = dom.window.document
   })
   .then(done, done);
 })

    describe("Counselor tests", () => {
        it("h1 heading should say 'Counselors at Universities in Maine'", () => {
            let element = document.querySelector('h1')
            expect(element).to.have.text("Counselors at Universities in Maine")
        })
        it("Select university buttons exist", () => {
            let element1 = document.querySelector('.container').querySelector('button#btnUniversityA')
            let element2 = document.querySelector('.container').querySelector('button#btnUniversityB')
            expect(element1).to.have.text("Counselors at University A")
            expect(element2).to.have.text("Counselors at University B")
        })
        it("Body has counselors", () => {
            let element = document.querySelector('.container').querySelector('.counselor').querySelector('h2')
            expect(element).to.have.text("John Doe")
        })
    })
})

