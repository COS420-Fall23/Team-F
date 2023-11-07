const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('src/quiz.html', () => {
  beforeEach((done) => {
   JSDOM.fromFile('src/quiz.html')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Quiz tests", () => {
 it("h1 heading should say 'Self-Assessment Quiz'", () => {
  let element = document.querySelector('.quiz-body').querySelector('h1')
  expect(element).to.have.text("Self-Assessment Quiz")
 })
})
})