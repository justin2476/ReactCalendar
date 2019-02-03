import React from 'react'
import Calendar from 'react-calendar';
class CalendarDate extends React.Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
  	console.log(this.state.date)
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
} 
export default CalendarDate
