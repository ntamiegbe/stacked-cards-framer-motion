'use client'

import Card from "@/components/Card"
import { cardsData } from "@/data"
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // Used to track the progress of the scroll
  
  // useEffect(() => {
  //   scrollYProgress.on("change", e => console.log(scrollYProgress))
  // }, [])

  return (
    <main ref={container} className="mt-[50vh] mb-[100vh]">
      {
        cardsData.map((data, index) => {
          const targetScale = 1 - ((cardsData.length - index) * 0.05)
          return <Card key={index} index={index} {...data} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
        })
      }
    </main>
  )
}
