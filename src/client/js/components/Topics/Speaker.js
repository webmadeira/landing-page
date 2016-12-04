import React, { PropTypes } from 'react'

const renderSpeakers = speakers => (
  speakers.map(({ author, github, position, company }) => {
    let authorProfile

    if (github) {
      authorProfile = (<a href={github} className="a-link a-body-2 is-highlight" target="_blank">
        {author}
      </a>)
    } else {
      authorProfile = (<h2 className="a-body-2 is-highlight">
        {author}
      </h2>)
    }

    return (
      <section key={author} className="m-topic-speaker">
        {authorProfile}
        <p className="a-body-1 is-highlight">{position}, {company}</p>
      </section>
    )
  }
))

const Event = props => (
  <article className="m-topic-speakers">
    {renderSpeakers(props.speakers)}
  </article>
)

export default Event
