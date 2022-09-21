import VideocamIcon from '@mui/icons-material/Videocam';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import Contact from './Contact';


const contacts = [
    {src: "https://links.papareact.com/f0p", name: "Jeff Bezoz"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/zvy", name: "Bill Gates"},
    {src: "https://links.papareact.com/snf", name: "Mark Zuckerberg"},
    {src: "https://links.papareact.com/d0c", name: "Harry Potter"},
    {src: "https://links.papareact.com/6gg", name: "The Queen"},
    {src: "https://links.papareact.com/r57", name: "James Bond"},
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>

      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
            <VideocamIcon className='h-6' />
            <SearchIcon className='h-6' />
            <MoreHorizIcon className='h-6' />
        </div>
      </div>


      {contacts.map(contact => (
        <Contact key={contact.src} src={contact.src} name={contact.name}  />
      ))}

    </div>
  )

//   TO hide scrolling bar in right side, we need to install 'npm install tailwind-scrollbar-hide' using 'bash' cmd
//  Then we need to install new plugin in tailwind css. so goto tailwind.congfig.js
// There in plugin: [] add this --> [require("tailwind-scrollbar-hide")];
// Then Feed.js, there add 'scrollbar-hide' in div like this --> className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide"
}

export default Widgets
