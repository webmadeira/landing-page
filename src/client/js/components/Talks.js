import React, { PropTypes } from 'react'

const renderTalks = (talks) => {
  if (!talks) return <div>Loading...</div>

  return talks.map(({ theme, speaker }) => (
    <div key={theme}>
      <div>{theme}</div>
      <div>{speaker}</div>
    </div>
  ))
}

const Talks = props => (
  <main>
    {renderTalks(props.talks)}
  </main>
)

Talks.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Talks
