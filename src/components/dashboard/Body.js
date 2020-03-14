import moment from 'moment'
import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'

const propTypes = {}

class Body extends React.Component {
  constructor(...args) {
    super(...args)
    console.log(args)

    this.state = { events: [] }
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  render() {
const localizer = momentLocalizer(moment)
    return (
      <>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.MONTHS}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          style={{ height: 500 }}
        />
      </>
    )
  }
}

Body.propTypes = propTypes

export default Body
