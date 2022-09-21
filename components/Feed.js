import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed({posts}) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div>
        {/* stories */}
        <Stories />

        {/* Input Box  [4:23:00]*/}
        <InputBox />  

        {/* Posts */}
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default Feed
