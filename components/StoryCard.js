import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router"

function StoryCard({name, src, profile, url}) {
  let router = useRouter()
  const popUp = () => {
    // console.log(url);
      <div className="absolute top-72 z-100 text-100">
        <p>Hello</p> 
        <Image 
          src={router.query.profile}
          width={500}
          height={200}
          layout="fill"
          objectFit="cover"
        />
      </div>
  }
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:animate-pulse">

      
      
     
      <Image 
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10'
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        
      />

    <Link href={url}>
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
        onClick={popUp}
      />
    </Link>

    </div>
  )
}

export default StoryCard
