import React, { PropTypes } from 'react'

const renderSpeakers = speakers => (
  speakers.map(({ author, github, position, company }) => {
    let authorProfile

    if (github) {
      authorProfile = (<a href={github} className="a-link" target="_blank">
        {author}
      </a>)
    } else {
      authorProfile = author
    }

    return (
      <section key={author} className="m-topic-speaker">
        <h2 className="a-body-2 is-highlight">
          {authorProfile}
        </h2>
        <p className="a-body-1 is-highlight">{position}, {company}</p>
      </section>
    )
  }
))

const Event = props => (
  <article>
    {renderSpeakers(props.speakers)}
  </article>
)

export default Event
