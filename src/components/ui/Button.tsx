import React from 'react'

export function Btn({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  )
}
