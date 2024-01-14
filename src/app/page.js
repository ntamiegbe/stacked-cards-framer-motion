import Card from "@/components/Card"
import { cardsData } from "@/data"

export default function Home() {
  console.log(cardsData)
  return (
    <main className="mt-[50vh] mb-[100vh]">
      {
        cardsData.map((data, index) => {
         return <Card key={index} {...data} />
        })
      }
    </main>
  )
}
