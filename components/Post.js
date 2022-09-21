import Image from "next/image"

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from "react";

function Post({name, message, email, postImage, image, timestamp}) {
  const [like, setLike] = useState();

  const likeClick = () => {
    console.log("clicked")
  }

  return (
    <div className="flex flex-col">
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm ">
            <div className="flex items-center space-x-2">
                <img 
                    src={image} 
                    alt="" 
                    className="rounded-full"
                    width={40}
                    height={40}
                />
                <div>
                    <p className="font-medium">{name}</p>

                    {timestamp ? (
                        <p className="text-sm text-gray-400">

                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    ) : (
                        <p className="text-xs text-gray-400">Loading</p>
                    )}
                </div>
            </div>

            <p className="pt-4">{message}</p>

        </div>

        {postImage && (
            <div className="relative h-48 md:h-96 bg-white">
                <Image
                    src={postImage}
                    objectFit="cover"
                    layout="fill"
                />
            </div>
        )}

        {/* Footer */}
        <div className="flex justify-between py-2 items-center rounded-b-2xl bg-white shadow-md text-blue-500 border-t">
            <div className="inputIcon rounded-none rounded-bl-xl" onClick={likeClick}>
                <ThumbUpOutlinedIcon className="h-5" />
                <p className="text-md sm:text-base">Like</p>
            </div>

            <div className="inputIcon rounded-none">
                <ChatOutlinedIcon className="h-5" />
                <p className="text-md sm:text-base">Comment</p>
            </div>

            <div className="inputIcon rounded-none rounded-br-xl">
                <ShareOutlinedIcon className="h-5" />
                <p className="text-md sm:text-base">Share</p>
            </div>
        </div>


    </div>
  )
}

export default Post
