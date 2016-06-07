/* global bootstrappy stuff, just to get it to work */
var React = require('react')

var Home =  require('../main/components/home/Home.react')
var TestRig = require('fluxxed_up').TestRig

var rig

describe('Home', function() {
  beforeEach(function() {
    rig = new TestRig()
    rig.boltOn(<Home someProp={true} />) // this puts your test component onto the dom, for testing
  })
  afterEach(function() {
    rig.boltOff() // clean up the test component
  })

  it('is true', function() {
    // trivial expectation just to see how it works
    expect(true).to.equal(true)
  })

  it('shows welcome message', function() {
    expect(rig.domNode.find('h3').text()).to.match(/Home/)
  })

  it('shows secondary message', function() {
    expect(rig.domNode.find('p').text()).to.match(/Welcome to react-boilerplate, Guest/)
  })

  // since the DOM updates async, you'll need to put the expectations in a callback
  it('correctly submits the form (aysnc)', function(done) {
    // first, manipulate the dom
    rig.fillIn('.name', 'steve')
    rig.clickButton('Submit')

    // this callback will get fired after the final render (so you can deterministically test the change)
    rig.setExpectationCallback(function() {
      expect(rig.domNode.find('p').text()).to.match(/Welcome to react-boilerplate, steve/)
      done() // tell mocha it's time to fire the expectations
    })

    rig.finish() //trigger the final render
  })
})

