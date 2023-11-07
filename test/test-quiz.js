const quizFile = '../src/quiz.html';
const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe(quizFile, () => {
  beforeEach((done) => {
   JSDOM.fromFile(quizFile)
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 });
})

describe("Quiz page tests", () => {
  it("Quiz page has title 'Self-Assessment Quiz'", () => {
   let element = document.querySelector('.quiz-body').querySelector('h1')
   expect(element).to.have.text("Self-Assessment Quiz")
  })
 })
 