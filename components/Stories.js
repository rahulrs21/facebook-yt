import { useSession } from "next-auth/react"
import StoryCard from "./StoryCard"

function Stories() {

    const { data: session } = useSession()

    const stories = [
        {
            name: "Rahul RS",
            // src: "https://rahuldxb.com/wp-content/uploads/2022/07/DP.png",
            src: "https://avatars.githubusercontent.com/u/41139835?v=4",
            profile: `${session.user.image}`,
            url: '/?image=1'
    
        },
        {
            name: "Elon Musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk",
            url: '/?image=2'
    
        },
        {
            name: "Jeff Bezoz",
            src: "https://links.papareact.com/k2j",
            profile: "https://links.papareact.com/f0p",
            url: '/?image=3'
    
        },
        {
            name: "Mark Zuckerberg",
            src: "https://links.papareact.com/xql",
            profile: "https://links.papareact.com/snf",
            url: '/?image=4'
    
        },
        {
            name: "Bill Gates",
            src: "https://links.papareact.com/4u4",
            profile: "https://links.papareact.com/zvy",
            url: '/?image=5'
    
        },
    ]
    

  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard key={story.src} url={story.url} name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories
