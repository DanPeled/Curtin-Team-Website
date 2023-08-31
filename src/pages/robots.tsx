import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Robots | 4788</title>
        <meta name="description" content="Curtin FRC's robots" />
      </Head>
      <div className="page">
        <div className='hero-no-padding'>
          <div className="column">
            {/* <Image src="/robot2023.jpg" alt="Our 2023 robot Whiplash" width={600} height={336}/> */}
          </div>
        </div>
        <div className='heros'> </div>
      </div>
    </>
  )
}