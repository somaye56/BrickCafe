"use client"
import Image from 'next/image'
import { useState } from 'react'
import InstagramIcon from '../icons/InstagramIcon'
import LocationIcon from '../icons/LocationIcon'
import PhonesIcon from '../icons/PhonesIcon'
import NoteModal from '../modules/NoteModal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full items-center p-[1.1rem] gap-1 mt-5">
        <div className=" w-1/2 ">
          <button onClick={() => setIsOpen(true)} className="flex items-center justify-center h-10 w-10 bg-[rgba(73,169,121,1)] rounded-full -mt-0.5 mr-1.5 hover:bg-[rgba(73,169,121,0.8)] transition-all">
            <Image
              src="/menu.png"
              alt="منو"
              width={35}
              height={35}
              className="mx-2 cursor-pointer inline"
              priority
            />
          </button>

        </div>
        <div className="  w-1/2  gap-4 flex justify-center">
          <a href="Tel:03432483632" id="phone" aria-label="تماس با ما">
            <PhonesIcon />
          </a>
          <a href="https://maps.app.goo.gl/aAhoZ9sd3w6HkEscA?g_st=ac" id="map">
            <LocationIcon />
          </a>
          <a href="" id="instagram">
            <InstagramIcon />
          </a>

        </div>

        <div className="w-1/2 flex justify-end">
          <Image
            src="/girpey.jpg"
            alt="girpey"
            width={56}
            height={50}
            className="mx-2 cursor-pointer inline"
            priority
          />
        </div>

      </div>
      <div className=" text-[#323232] mt-[28px] text-center w-full mb-[28px] ">
        <h3 className='font-bold text-xl'>brick lounge</h3>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"
          } fixed inset-0 items-center justify-center w-screen h-screen bg-black z-[10000]`}
      >
        <NoteModal onClose={() => setIsOpen(false)} />
      </div>
    </>
  )
}

export default Header
