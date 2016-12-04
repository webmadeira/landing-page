import React, { PropTypes } from 'react'

const AtomicHighlight = props => {
  const highlight = () => {
    /*
    [class*='a-'] {
      border: 2px solid green;
    }

    [class*='m-'] {
      border: 2px solid red;
    }

    [class*='m-'] {
      border: 2px solid blue;
    }
    */
  }

  return (<ul className="o-atomic-selectors">
    <li className="m-atomic-selector">
      <a onClick={highlight} href="">
        <img src="/img/atomicdesign.svg" className="a-atomic-img" alt="Atom" title="Atom" />
      </a>
    </li>
    <li className="m-atomic-selector">
      <a onClick={highlight} href="">
        <img src="/img/atomicdesign.svg" className="a-atomic-img" alt="Molecule" title="Molecule" />
      </a>
    </li>
    <li className="m-atomic-selector">
      <a onClick={highlight} href="">
        <img src="/img/atomicdesign.svg" className="a-atomic-img" alt="Organism" title="Organism" />
      </a>
    </li>
  </ul>)
}

export default AtomicHighlight
