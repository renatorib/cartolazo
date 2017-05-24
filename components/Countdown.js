import React, { Component } from 'react';
import distanceInWords from 'date-fns/distance_in_words';
import ptLocale from 'date-fns/locale/pt';

const calculate = (targetDate) => {
  const today = new Date();
  const target = new Date(targetDate);

  return distanceInWords(today, target, { locale: ptLocale });
};

class Countdown extends Component {
  interval = null;

  state = {
    countdown: calculate(this.props.date),
  };

  recalculate = () =>
    this.setState({ countdown: calculate(this.props.date) });

  componenWillMount() {
    const interval = this.props.interval || 1000;
    this.interval = setInterval(this.recalculate, interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span>{this.state.countdown}</span>;
  }
}

export default Countdown;
