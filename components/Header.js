import Image from "next/image";

import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import HeaderIcon from "./HeaderIcon";

import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';

import GridViewIcon from '@mui/icons-material/GridView';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {

  const { data: session } = useSession()  // helps to pull the session information anywhere within the app and  to get the user authenticated sort of state, we can go ahead and pause the session
  // https://next-auth.js.org/getting-started/client#usesession [3:56:00]

  return ( 
    <div className="shadow-md w-full sticky top-0 z-99 bg-white flex items-center p-2 lg:px-5 md:shadow-md">

        {/* Left */}
        <div className="flex display-center">
            <Link href="/"><IconButton><Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" /></IconButton></Link>
            {/* Here we get Error: Error: Invalid src prop (https://links.papareact.com/5me) on `next/image`, hostname "links.papareact.com" is not configured under images in your `next.config.js` 
                TO remove this we need to goto 'next.config.js'(already created during npx) so that we can tell nextJs 'what type of domains are include in that <Image /> component'
            */}

            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input className="hidden md:inline-flex bg-transparent ml-2 outline-none" type="text" placeholder="Search Facebook" />
            </div>
        </div>

        {/* Center */}
        <div className="flex justify-center flex-grow mx-3">
          <div className="flex space-x-3 md:space-x-2 lg:space-x-4">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayCircleFilledWhiteIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={GroupsIcon} />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* Profile Pic */}
          <IconButton onClick={signOut}>
          <Image 
            className='rounded-full cursor-pointer' 
            src={session.user.image} 
            width="40" 
            height="40" 
            layout="fixed" 
          />
          </IconButton>

          <p className="hidden md:inline-flex whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
          
          <IconButton><GridViewIcon className="icon" /></IconButton>
          <IconButton><ChatIcon className="icon" /></IconButton>
          <IconButton><NotificationsIcon className="icon" /></IconButton>
          <ExpandMoreIcon className="icon" />

        </div>

    </div>
  )
}

export default Header