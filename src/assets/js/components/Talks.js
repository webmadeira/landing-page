import React, { PropTypes } from 'react'
import translate from './translate'

const renderTalks = talks => (
  talks.map(({ theme, speaker }) => (
    <div key={theme}>
      <div>{theme}</div>
      <div>{speaker}</div>
    </div>
  ))
)

const Talks = props => (
  <main>
    {renderTalks(props.strings)}
  </main>
)

Talks.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)), // TODO: Use the same structure
}

export default translate('Talks')(Talks)
