import React from 'react'

export const Spacer = ({ size, horizontal }) => {
  return (
    <div
      style={
        horizontal
          ? { width: size, height: 'auto', display: 'inline-block', flexShrink: 0 }
          : { width: 'auto', height: size, flexShrink: 0  }
      }
    />
  )
}

export default Spacer;