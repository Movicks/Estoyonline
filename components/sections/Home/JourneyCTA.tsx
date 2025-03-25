"use client";
import ImageBox from "@/components/ImageBox";
import { Dots1, Dots2 } from "@/components/shapes";
import { AnimatedSunLogo } from "@/components/shapes/logo";
import StyledButton from "@/components/StyledButton";
import TranslatedLink from "@/components/TranslatedLink";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationProvider";
import useIntersectionObserver from "@/lib/hooks/useIntersector";
import { useIsMobile } from "@/lib/hooks/useMobile";
import { HomeProps } from "@/types/PropTypes";
import clsx from "clsx";
import { Volume2Icon, VolumeX } from "lucide-react";
import { useState } from "react";

const ImageItem = ({index}:{index:number})=>{
  const [show, setShow] = useState(false);
  const [muted, setMuted] = useState(false)

  
  
  const imageRef = useIntersectionObserver<HTMLLIElement>({
    onProgress(progress) {
      if (progress > 0.05) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
  });
  return(
    <li ref={imageRef} className={
      clsx(
        "w-full max-h-52 sm:max-h-64 bg-primary relative rounded-md duration-500 overflow-hidden",
        show?"scale-100 opacity-100":"scale-0 opacity-0"
      )
    }>
      <ImageBox
        src={`/Images/image (${index+1}).png`}
        width={1024}
        height={1024}
        className="size-full object-cover object-top"
      />
      <Button onClick={()=>{
            setMuted(!muted)
          }} className="!absolute !block !bottom-4 !left-1/2 !-translate-x-1/2  !p-2 !h-fit !bg-black/30 !backdrop-blur-3xl !text-white">
          {
            muted?<VolumeX className="size-5"/>:<Volume2Icon className="size-5"/>
          }
          </Button>
    </li>
  )
}

export default function JourneyCTA() {
  const isTabletScreen = useIsMobile(640);
  const [show, setShow] = useState({
    body: false,
  });

  const { t } = useTranslation()
  const Data: HomeProps = t('home')
  
  const bodyRef = useIntersectionObserver<HTMLDivElement>({
    onProgress(progress) {
      if(progress>0.05){
        setShow(s=>({
          ...s,
          body:true
        }))
      }else{
        setShow(s=>({
          ...s,
          body:false
        }))
      }
    },
  })

  return (
    <section className="w-full py-20 px-4 relative overflow-x-hidden md:px-10 lg:px-20 bg-[#078CE2]">
      {/* sun image */}
      <AnimatedSunLogo svg={{
        className:"size-40 sm:size-60 absolute -top-20 -left-20 sm:-top-30 sm:-left-30"
      }} />
      <AnimatedSunLogo svg={{
        className:"size-40 sm:size-60 absolute top-1/2 -translate-y-1/2 left-[calc(100%-5rem)] sm:left-[calc(100%-7.5rem)]"
      }}/>
      <div className="w-full grid sm:grid-cols-2 items-center gap-5 isolate">
        <div ref={bodyRef} className="w-full relative text-white flex flex-col justify-center gap-3 h-full">
          {!isTabletScreen && (
            <>
              <span className="absolute -bottom-5 -left-5 pointer-events-none -z-10">
                <Dots1 />
              </span>
              <span className="absolute -top-8 left-[70%] pointer-events-none -z-10">
                <Dots2 />
              </span>
            </>
          )}
          <h3
            className={clsx(
              "font-bold text-lg sm:text-xl lg:text-2xl duration-500",
              show.body
                ? "sm:translate-x-0 sm:translate-y-0 opacity-100"
                : "sm:-translate-x-10 sm:translate-y-0 translate-y-10 opacity-0"
            )}
          >
            {Data.homeSubAboutTitle}
          </h3>
          <p
            className={clsx(
              "duration-500 delay-300",
              show.body
              ? "sm:translate-x-0 sm:translate-y-0 opacity-100"
              : "sm:-translate-x-10 sm:translate-y-0 translate-y-10 opacity-0"
            )}
          >
            {Data.homeSubAboutDescription}
          </p>
          <TranslatedLink href={"/courses"}>
          <StyledButton className="!mt-2">
            {Data.homeSubAboutButton}
          </StyledButton>
          </TranslatedLink>
        </div>
        <ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(240px,1fr))] sm:grid-cols-2 gap-3">
          {
            Array.from({length:4}).map((_, i)=><ImageItem key={i} index={i}/>)
          }
        </ul>
      </div>
    </section>
  );
}
