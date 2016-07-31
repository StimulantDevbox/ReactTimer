var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('StartTimer', () => {
    it('should set state to start Timer', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStartTimer();
        expect(timer.state.timerStatus).toBe('started');
          done();
        });
      });
});
