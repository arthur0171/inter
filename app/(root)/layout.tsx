import Link from 'next/link'
import Image from 'next/image'
import React, { Children, ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" width={38} height={32} />
          <h2 className='text-primary-100'>Interview prep</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout