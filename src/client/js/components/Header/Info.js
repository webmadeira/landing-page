import React, { PropTypes } from 'react'
import Montain from './Montain'
import Ballon from './Ballon'
import translate from '../translate'

const Info = (props) => {
  const { date, talks } = props.strings

  return (
    <div className="m-mb-info">
      <Ballon text={date} class="is-long-text" />
      <Ballon text={talks} class="is-small-text" />
      <Montain />
    </div>
  )
}

export default translate('Info')(Info)
