import Link from 'next/link'


const Header = () => {
  return (
    <div>
      <h2 className="flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mr-5 ml-5">
        <Link href="/">
          <a className="hover:underline">Blog.</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">About me.</a>
        </Link>
        
      </h2>
    </div>
  )
}

export default Header
