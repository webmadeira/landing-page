import React, { PropTypes } from 'react'
import translate from '../translate'
import Event from './Event'

const renderTopics = topics => (
  topics.map(({ theme, image, description, speakers }) => (
    <Event
      key={theme}
      image={image}
      theme={theme}
      description={description}
      speakers={speakers}
    />
  ))
)

const Topics = props => (
  <main className="o-body">
    <div className="o-topics-list o-container">
      {renderTopics(props.strings)}
    </div>
  </main>
)

export default translate('Topics')(Topics)
