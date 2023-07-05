import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <title>MLSC</title>
      <body className='flex min-h-screen flex-col'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
