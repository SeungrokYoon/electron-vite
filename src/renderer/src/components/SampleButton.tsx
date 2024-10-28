import { PropsWithChildren } from 'react'

interface SampleButtonProps extends PropsWithChildren {
  onClick: () => void
}
export default function SampleButton({ children, onClick }: SampleButtonProps): JSX.Element {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}
