"use client"

import { useTranslation } from "@/contexts/TranslationProvider";
import { useIsMobile } from "@/lib/hooks/useMobile";
import usePage from "@/lib/hooks/usePage";
import useScrollPercent from "@/lib/hooks/useScrollPercent";
import clsx from "clsx";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import ImageBox from "../ImageBox";
import MenuIcon from "../MenuIcon";
import TranslatedLink from "../TranslatedLink";
import Translator from "../Translator";
import { Button } from "../ui/button";

export default function Navbar() {
  const {t} = useTranslation()
  const isTabletScreen = useIsMobile(640)
  const params = useParams()
  const isHome = usePage(`/${params.locale}`) //defaults to check for home page and locale page
  const {scrollPercentage} = useScrollPercent("#scroll-container") // check the current scroll percent of scroll-container 
  const [dropped, setDropped] = useState(false)
  const navbarData = t<{
    links: Record<string, string>
  }>("navbar")
  const handleToggleDropMenu = ()=>{
    setDropped(!dropped)
  }

  
  return (
    <header className={
      clsx(
        "w-full z-50 top-0 p-4 md:px-10 lg:px-20 flex items-center duration-300 justify-between gap-5",
        isHome.isPage&&scrollPercentage>=5?"bg-white fixed shadow-md":
          "bg-transparent fixed",
        !isHome.isPage&&"bg-white sticky shadow-md"
      )
    }>
      {/* logo */}
      <span className="w-fit">
        <ImageBox
          fallback={
            <strong className="text-lg text-black">estoyonline.es</strong>
          }
          className="h-6 min-[498px]:h-8 md:h-10 lg:h-12 w-fit"
          src={"/Images/logo.png"}
          width={500}
          height={300}
          alt="logo image"
        />
      </span>

      
     
      {/* for smaller screen */}
      {
        isTabletScreen&&<Button variant="ghost" onClick={handleToggleDropMenu} className="!bg-transparent !p-0">
        {!dropped?<MenuIcon path={{
            stroke:isHome.isPage&&scrollPercentage<5?"#fff":"#000",
            strokeOpacity: 1
          }} svg={{
            className:"size-6 min-[498px]:size-8 brightness-125"
          }} />:<X className="size-6 min-[498px]:size-8"/>}
        </Button>
      }

      <div className={
        clsx(
          "w-full sm:w-fit absolute left-0 duration-300 shadow-md p-2 sm:p-0 sm:shadow-none bg-white sm:bg-transparent sm:static flex flex-col-reverse sm:flex-row items-center gap-5",
          isTabletScreen&&{
            "top-[100%] opacity-100":dropped,
            "top-[-200%] opacity-0 pointer-events-none":!dropped,
          },
          isHome.isPage&&scrollPercentage<5&&"text-white"
        )
      }>
        <Translator />
        <nav className="w-full min-[498px]:w-fit flex flex-col min-[498px]:flex-row items-center gap-5 text-sm md:text-base lg:text-lg">
          
            {
              navbarData.links&&Object.keys(navbarData.links||{
                "Teachers":"/teachers",
                "Courses":"/courses",
                "Videos":"/videos",
                "Price":"/price",
                "Contact":"/contact"
              }).map((link)=><TranslatedLink key={link} href={navbarData.links[link]} className="w-full min-[498px]:w-fit text-center border-b min-[498px]:border-b-0 border-b-primary">{link}</TranslatedLink>)
            }
              
            
        </nav>
        </div>

      
    </header>
  );
}
