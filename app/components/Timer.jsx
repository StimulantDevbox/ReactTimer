var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'

    };

  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.Timer = undefined;
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({count: newCount });
    }, 1000);
  },

  handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus});
  },

  handleStartTimer: function () {
    this.setState({
      timerStatus: 'started'
    });
  },


  render: function() {
      var {count, timerStatus} = this.state;
      var renderControlArea = () => {
        if(timerStatus !== 'stopped') {
          return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
        } else {
          return <button className="button expanded" onClick={this.handleStartTimer}>Start</button>;
        }
      };

      return (
        <div>
            <h1 className="page-title">Timer</h1>
            <Clock totalSeconds={count}/>
            {renderControlArea()}
        </div>
      );
  }
});

module.exports = Timer;
