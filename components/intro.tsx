import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Welcome
      </h1>
      <Link href="/about">
          <a className="hover:underline text-5xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">About me.</a>
        </Link>
    </section>
  )
}

export default Intro
