import React from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 border-b border-gray-300'>
        <div className='text-2xl font-bold text-red-600'>KodeMe Games</div>
        <nav className="mt-4 space-x-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/games">Games</Link>
        <Link href="/blog">Blog</Link>
        {/* <Link href="/sign-in">Login</Link>
        <Link href="/sign-up">Sign Up</Link> */}
      </nav>
      <nav className='mt-4 space-x-4'>
      <Link href="/sign-in">Login</Link>
        <Link href="/sign-up">Sign Up</Link>
        </nav>
        {/* <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn> */}
    </div>
  )
}

export default Navbar