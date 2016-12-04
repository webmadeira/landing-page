import React, { PropTypes } from 'react'

const renderSpeakers = speakers => (
  speakers.map(({ author, position, company }) => (
    <section key={author} className="m-topic-speaker">
      <h2 className="a-body-2 is-highlight">{author}</h2>
      <p className="a-body-1 is-highlight">{position}, {company}</p>
    </section>
  ))
)

const Event = props => (
  <article>
    {renderSpeakers(props.speakers)}
  </article>
)

export default Event
