import React from 'react'
import { Tooltip } from 'antd'
import './Button.scss'

const Button = (props) => {
  return props.children.length > 20 && props.tooltip ? (
    <Tooltip title={props.children}>
      <button {...props}> {props.children}</button>
    </Tooltip>
  ) : (
    <button {...props}> {props.children} </button>
  )
}

export default Button
