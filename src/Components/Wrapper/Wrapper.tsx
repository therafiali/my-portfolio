import React from 'react'
import { FC } from 'react'

const Wrapper :FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className='  xs:px-4 md:mx-2  lg:mx-4 xl:mx-10 2xl:mx-20 '>{children}</div>
  )
}

export default Wrapper