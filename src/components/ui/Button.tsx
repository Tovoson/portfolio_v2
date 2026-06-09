import React from 'react'

function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  )
}

export default Button