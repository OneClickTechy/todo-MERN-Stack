import React from 'react'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

const Header = () => {
  return (
    <header className='flex w-full  flex-col'>
        <Logo />
        <Menu />
    </header>
  )
}

export default Header