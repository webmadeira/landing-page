import React, { PropTypes } from 'react'

const renderSpeakers = speakers => (
  speakers.map(({ author, position, company }) => (
    <section key={author}>
      <h2>{author}</h2>
      <p>{position}, {company}</p>
    </section>
  ))
)

const Event = props => (
  <article>
    {renderSpeakers(props.speakers)}
  </article>
)

export default Event
