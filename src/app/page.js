import Card from "@/components/Card"
import { cardsData } from "@/data"

export default function Home() {
  console.log(cardsData)
  return (
    <main className="">
      {
        cardsData.map((data, index) => {
         return <Card key={index} {...data} />
        })
      }
    </main>
  )
}
