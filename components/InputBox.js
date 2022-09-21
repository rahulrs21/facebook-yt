import { useSession } from "next-auth/react"
import Image from "next/image"

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useRef, useState } from "react";
import { db } from "../firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
  listAll,
  list,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";



import { ReadMoreRounded } from "@mui/icons-material";



function InputBox() {

  const { data: session } = useSession()

  const inputRef = useRef(null);

  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null)

  // const [imageUpload, setImageUpload] = useState(null);

  // STUDY THIS OLPERATION 4:40:00
  const sendPost = (e) => {
    e.preventDefault();
    if(!inputRef.current.value) return;

    db.collection('posts').add({
      message: inputRef.current.value,
      name: session.user.name,
      email: (session.user.email)?(session.user.email):"No Email",
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((doc) => {

      if(imageToPost) {
        console.log("Image was inserted")
        console.log(imageToPost);

        const storage = getStorage();
        const storageRef = ref(storage, `posts/${doc.id}`);

        const uploadTask = uploadString(storageRef, imageToPost, 'data_url');

        uploadBytes(storageRef, uploadTask).then((snapshot) => {
          console.log('Uploaded a blob or file!');

          getDownloadURL(snapshot.ref).then((url) => {
            db.collection('posts').doc(doc.id).set({
              postImage: url
            }, {merge: true})
          });

        });

        removeImage();

        // These 4 links helped me to get rid out of the problem

        // https://firebase.google.com/docs/storage/web/upload-files#upload_from_a_string
        // https://stackoverflow.com/questions/69719797/how-to-upload-images-to-firebase-web-v9-using-reactjs
        // https://github.com/firebase/snippets-web/blob/7403e77cc6b0c9bae8e9cd9d43f58eb93df2241a/snippets/storage-next/upload-files/storage_upload_blob.js#L8-L16
        // https://github.com/machadop1407/firebase-file-upload/blob/main/src/App.js

        
      }

    });

    inputRef.current.value='';
  };


  const addImageToPost = (e) => {
    // FileReader() is a API helps to fetch the image from local file and it helps to convert image into its URL
    const reader = new FileReader();  
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    }


    /*  How it works
      we take the action of user's file they clicked. (e.target.files[0])
      then we read the file as DataURL ->  readAsDataURL

      when comes back or when onloads back, it will come back as Result, which is basically 'base64 encoding'
    */
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-600 font-medium mt-6">

      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <form className="flex flex-1">
          
          <input ref={inputRef} className="rounded-full bg-gray-100 h-12 flex-grow px-5 outline-none" type="text" placeholder={`What's on your mind, ${session.user.name}?`} />
          <button hidden type="submit" onClick={sendPost}>submit</button>

        </form>


        {imageToPost && (
          <div className="flex flex-col filter hover:brightness-110 transition  duration-150 transform hover:scale-105 cursor-pointer" onClick={removeImage}>
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}

      </div>

      <div className="flex justify-evenly p-3 border-t-2 items-center ">
        <div className="inputIcon">
          <VideoCameraBackIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        {/* onClick={() => filePickerRef.current.click()} ->  this will click the hidden button. so we can post image */}
        <div onClick={() => filePickerRef.current.click()} className="inputIcon">
          <CameraAltIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} type="file" hidden onChange={addImageToPost} />
        </div>
        
        <div className="inputIcon">
          <EmojiEmotionsIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
      
    </div>
  )
}

export default InputBox
