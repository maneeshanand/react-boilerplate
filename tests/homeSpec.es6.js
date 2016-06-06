import React from 'react'
import Home from '../main/components/home/Home.react.es6'
import { TestRig } from 'fluxxed_up'

var rig

describe('Home', () => {
  beforeEach(() => {
    rig = new TestRig()
    rig.boltOn(<Home someProp={true} />) // this puts your test component onto the dom, for testing
  })
  afterEach(() => {
    rig.boltOff() // clean up the test component
  })

  it('is true', () => {
    // trivial expectation just to see how it works
    expect(true).to.equal(true)
  })

  it('shows welcome message', () => {
    expect(rig.domNode.find('h3').text()).to.match(/Home/)
  })

  it('shows secondary message', () => {
    expect(rig.domNode.find('p').text()).to.match(/Welcome to react-boilerplate, Guest/)
  })

  // since the DOM updates async, you'll need to put the expectations in a callback
  it('correctly submits the form (aysnc)', done => {
    // first, manipulate the dom
    rig.fillIn('.name', 'steve')
    rig.clickButton('Submit')

    // this callback will get fired after the final render (so you can deterministically test the change)
    rig.setExpectationCallback(() => {
      expect(rig.domNode.find('p').text()).to.match(/Welcome to react-boilerplate, steve/)
      done() // tell mocha it's time to fire the expectations
    })

    rig.finish() //trigger the final render
  })
})

