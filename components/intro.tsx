import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Welcome
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        here I'm writing about my experiences and everything that comes to my mind
      </h4>
    </section>
  )
}

export default Intro
