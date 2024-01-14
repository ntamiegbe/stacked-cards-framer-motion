'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Card = ({ index, title, description, imageSrc, backgroundColor, progress, range, targetScale }) => {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
    const cardScale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
            <motion.div style={{ scale: cardScale, backgroundColor: backgroundColor, top: `calc(-10% + ${index * 25}px)` }} className="h-[500px] w-[1000px] rounded-xl p-10 relative">
                <h3 className="text-2xl text-center font-bold">{title}</h3>
                <div className="md:flex justify-between items-center h-full">
                    <p>{description}</p>
                    <div className="h-[80%] w-[100%] md:w-[60%] overflow-hidden relative m-3">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full">
                            <Image
                                fill
                                src={`/${imageSrc}`}
                                alt='cards'
                                className='rounded-2xl object-cover'
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card