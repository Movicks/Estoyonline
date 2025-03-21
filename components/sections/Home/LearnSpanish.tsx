import { DoubleLeft, DoubleRight } from '@/components/shapes'
import { Button } from '@/components/ui/button'
import React from 'react'


export default function LearnSpanish() {
  return (
    <section className="w-full mt-10 px-4 relative flex items-center justify-center isolate h-fit">
    <span className="absolute pointer-events-none w-fit -left-5 top-5 h-screen block -z-10 overflow-x-hidden">
    <DoubleLeft className="h-full"/>
    </span>
    <span className="absolute pointer-events-none w-fit -right-0 top-10 h-screen block -z-10 overflow-x-hidden">
    <DoubleRight className="h-full relative left-5"/>
    </span>
    <div className="flex items-center justify-center flex-col gap-3 w-full max-w-3xl">
    <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl text-center">Learn Spanish in a fun way at our boutique school.</h3>
    <p className="text-center">At our  boutique school Estyonline.es, based in Barcelona, we teach Spanish in fun and engaging way, completely different from traditional methods. Thanks the method techniques we use, learning spanish online has become an enjoyable and exciting process. Fun activities and game increase your motivation and reduce your stress, making language learning easier. Additionally, they encourage natural language use and strengthen social connections.  Learning a language in an enjoyable way enhances retention and effectively helps improve your language skills.Our School has teachers from Spain, Italy, Argentina, and Colombia who are native Spanish speakers. The teacher who conduct beginner-level lessons also speak Turish. All our lessons are conducted online via Zoom </p>
    <Button variant={"secondary"} className="!w-fit !px-4">Sample videos from Lesson</Button>
    </div>
  </section>
  )
}