import { useSession } from "next-auth/react"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import PeopleIcon from '@mui/icons-material/People';
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session, loading } = useSession() 

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        <SidebarRow src={session.user.image} title={session.user.name} />

        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={GroupsIcon} title="Groups" />
        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
        <SidebarRow Icon={DesktopMacIcon} title="Watch" />
        <SidebarRow Icon={CalendarMonthIcon} title="Events" />
        <SidebarRow Icon={WatchLaterIcon} title="Memories" />
        <SidebarRow Icon={ExpandMoreIcon} title="See more" />
    </div>
  )
}

export default Sidebar
