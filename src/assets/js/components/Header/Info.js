import React, { PropTypes } from 'react'
import Montain from './Montain'
import Ballon from './Ballon'
import translate from '../translate'

const Info = (props) => {
  const { date, talks } = props.strings

  return (
    <div>
      <Ballon text={date} />
      <Ballon text={talks} />
      <Montain />
    </div>
  )
}

export default translate('Info')(Info)
