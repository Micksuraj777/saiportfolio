import Image from "next/image"
import Dropdown from "./shared/Dropdown"

const contact = [
  { src: '/icons/mail.svg', alt: 'mail', cont: '@usergmail.com' },
  { src: '/icons/phone.svg', alt: 'phone', cont: '1234567890' }
]

const Sidebar = () => {
    return (
      <section className="h-[90vh] Border gap-4 flex w-[16%] flex-col animate-fade-left animate-once">
        <div className="w-full">
          <div className="pb-3">
          <div className="border-b border-b-[#607B96] p-4 flex items-center gap-3">
            <Image src='/icons/arrow-drop-down.svg' alt="arrow" width={24} height={24}/>
            <h1 className="Text">Personal-info</h1>
          </div>
          <div className="flex flex-col">
          <Dropdown title="bio" img="/icons/peech-fold.svg"/>
          <Dropdown title="interests" img="/icons/green-fold.svg"/>
          <Dropdown title="eduction" img="/icons/purple-fold.svg"/>
          </div>
          </div>
          <div className="Border p-4 flex items-center gap-3">
            <Image src='/icons/arrow-drop-down.svg' alt="arrow" width={24} height={24}/>
            <h1 className="Text">contact us</h1>
          </div>
          <ul>
          {contact.map((item) => (
            <li key={item.alt} className=' flex gap-2 pl-5 pt-2'>
              <Image src={item.src} alt={item.alt} width={15} height={15} />
              <h2 className="Text">{item.cont}</h2>
            </li>
          ))}
          </ul>
        </div>
      </section>
    )
  }
  
  export default Sidebar
  