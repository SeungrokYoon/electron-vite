interface QuoteProps {
  quote: string
}

export default function Quote({ quote }: QuoteProps): JSX.Element {
  return <blockquote className="Quote">{quote}</blockquote>
}
