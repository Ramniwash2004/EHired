import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './button'

export const Header = () => {
  return (
    <nav className="py-4 flex justify-between items-center">
        {/* Logo */}
        <Link>
            <img src="ehire.png" alt="EHire Logo" className='h-20 w-30 rounded-2xl '/>
        </Link>

        <Button variant="default">Login</Button>

    </nav>
  )
}

