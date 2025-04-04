"use client"
import { DoubleLeft, DoubleRight } from '@/components/shapes'
import StyledButton from '@/components/StyledButton'
import TranslatedLink from '@/components/TranslatedLink'
import { useTranslation } from '@/contexts/TranslationProvider'
import useIntersectionObserver from '@/lib/hooks/useIntersector'
import { HomeProps } from '@/types/PropTypes'
import clsx from 'clsx'
import { useState } from 'react'


export default function LearnSpanish() {
  const [show, setShow] = useState({
    header: false,
    body: false
  })
  const { t } = useTranslation()
  const Data: HomeProps = t('home')
  const defaultData = {
    "LearnSpanishtitle": "Learn Spanish in a fun way at our boutique school.",
    "LearnSpanishdescription": "At our boutique school Estyonline.es, based in Barcelona, we teach Spanish in fun and engaging way, completely different from traditional methods. Thanks the method techniques we use, learning spanish online has become an enjoyable and exciting process. Fun activities and game increase your motivation and reduce your stress, making language learning easier. Additionally, they encourage natural language use and strengthen social connections. Learning a language in an enjoyable way enhances retention and effectively helps improve your language skills.Our School has teachers from Spain, Italy, Argentina, and Colombia who are native Spanish speakers. The teacher who conduct beginner-level lessons also speak Turish. All our lessons are conducted online via Zoom",
    "LearnSpanishbutton": "Sample videos from Lesson",
  };
  
  const generalSect = useIntersectionObserver({
    onProgress(progress) {
      if(progress>0.05){
        setShow(s=>({
          ...s,
          header:true
        }))
      }else{
        setShow(s=>({
          ...s,
          header:false
        }))
      }
      if(progress>0.15){
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
    <section ref={generalSect} className="w-full mt-20 px-4 z-0 relative flex items-center justify-center isolate h-fit">
      <span className="absolute pointer-events-none w-fit max-w-[20vw] -left-5 top-5 sm:h-screen block -z-10 overflow-x-hidden">
              <DoubleLeft className="h-full w-full"/>
            </span>
            <span className="absolute pointer-events-none w-fit max-w-[20vw] -right-0 top-10 sm:h-screen block -z-10 overflow-x-hidden">
              <DoubleRight className="h-full relative left-5"/>
            </span>
      <div className="flex items-center justify-center flex-col gap-3 w-full max-w-3xl bg-white">
        <h3 className={
          clsx(
            "font-bold text-lg sm:text-xl lg:text-2xl duration-500 text-center",
            show.header?"-translate-y-5 opacity-100":"translate-y-0 opacity-0"
          )
        }>
          {Data.LearnSpanishtitle?Data.LearnSpanishtitle:defaultData.LearnSpanishtitle}
        </h3>
        <p className={
          clsx(
            "text-center duration-500 delay-[300ms]",
            show.body?"-translate-y-5 opacity-100":"translate-y-0 opacity-0"
          )
        }>{Data.LearnSpanishdescription?Data.LearnSpanishdescription:defaultData.LearnSpanishdescription}</p>
        <TranslatedLink href="/videos">
        <StyledButton >{Data.LearnSpanishbutton?Data.LearnSpanishbutton:defaultData.LearnSpanishbutton}</StyledButton>
        </TranslatedLink>
      </div>
  </section>
  )
}