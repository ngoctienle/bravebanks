import React from 'react'
import { Container } from '../components/Global'
import Image from '../assets/images/img-blog.png'

const HomePage = () => {
  return <Container>
    <section className='flex items-start gap-6'>
        <div className="w-[70%]">
            <div className="p-6 rounded-10">
                <a href='/' className="relative block rounded-10 overflow-hidden w-full h-0 pb-[67.5%]">
                    <img src={Image} alt="" className='w-full h-full object-cover absolute' />
                </a>
            </div>
        </div>
        <div className="flex-1">
            <div className="p-6 rounded-10">
                <a href='/' className="relative block rounded-10 overflow-hidden w-full h-0 pb-[67.5%]">
                    <img src={Image} alt="" className='w-full h-full object-cover absolute' />
                </a>
            </div>
        </div>
    </section>

  </Container>
}

export default HomePage
