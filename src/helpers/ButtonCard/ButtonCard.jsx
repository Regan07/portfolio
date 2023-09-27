import React from 'react'
import './ButtonCard.css'

function ButtonCard({children,className}) {
    const classes="buttonCard "+className;
  return (
    <div className={classes}>{children}</div>
  )
}

export default ButtonCard