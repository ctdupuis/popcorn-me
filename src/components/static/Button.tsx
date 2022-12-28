import React from 'react'

type Props = {
    clickHandler: React.MouseEventHandler<HTMLButtonElement>,
    displayText: string
}

export default function Button({ clickHandler, displayText }: Props) {
  return (
    <button onClick={clickHandler}>
        { displayText }
    </button>
  )
}
