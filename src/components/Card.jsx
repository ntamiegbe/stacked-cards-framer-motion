import Image from 'next/image'

const Card = ({ title, description, imageSrc, backgroundColor }) => {
    console.log(title)
    return (
        <div className='h-screen flex items-center justify-center sticky top-0'>
            <div style={{ backgroundColor: backgroundColor }} className="h-[500px] w-[1000px] rounded-xl p-10">
                <h3 className="text-2xl text-center font-bold">{title}</h3>
                <div className="flex justify-between items-center h-full">
                    <p>{description}</p>
                    <div className="h-[300px] w-[500px] relative m-3">
                        <Image
                            fill
                            src={`/${imageSrc}`}
                            alt='cards'
                            className='rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card