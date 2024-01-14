'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Card = ({ index, title, description, imageSrc, backgroundColor }) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1])

    return (
        <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
            <div style={{ backgroundColor: backgroundColor, top: `calc(-10% + ${index * 25}px)` }} className="h-[500px] w-[1000px] rounded-xl p-10 relative">
                <h3 className="text-2xl text-center font-bold">{title}</h3>
                <div className="flex justify-between items-center h-full">
                    <p>{description}</p>
                    <div className="h-[80%] w-[60%] overflow-hidden relative m-3">
                        <motion.div style={{ scale }} className="w-full h-full">
                            <Image
                                fill
                                src={`/${imageSrc}`}
                                alt='cards'
                                className='rounded-2xl object-cover'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card