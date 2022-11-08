import React from 'react'
import { Container } from '../components/Global'
import Image from '../assets/images/img-blog.png'

const HomePage = () => {
  return <Container>
    <section className='flex items-start gap-6 mt-[40px]'>
        <div className="w-[70%]">
            <div className="rounded-10">
                <a href='/' className="relative block rounded-10 overflow-hidden w-full h-0 pb-[50%] transition-all">
                    <img src={Image} alt="" className='w-full object-contain absolute' />
                </a>
            </div>
        </div>
    </section>

  </Container>
}

export default HomePage
