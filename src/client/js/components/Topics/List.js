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
  <main>
    {renderTopics(props.strings)}
  </main>
)

export default translate('Topics')(Topics)
