"use client";
import GeneralHero from "@/components/GeneralHero";
import MapComponent from "@/components/sections/Contact/MapContainer";
// import ContactMap from "@/components/sections/Contact/Map";
import {
  MapPinCustom,
  MessagePhone,
  SingleLineShortLeft,
  SingleLineShortRight,
} from "@/components/shapes";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/lib/hooks/useMobile";
import clsx from "clsx";

export default function Contact() {
  const sm = useIsMobile(640);
  return (
    <>
      <GeneralHero
        icon={
          <MessagePhone
            path={{
              fill: "none",
              stroke: "#FEFEFE",
            }}
          />
        }
        text="Contact us"
      />

      <section className="w-full mt-10 bg-white isolate relative grid grid-cols-1 sm:grid-cols-2 items-center justify-center overflow-hidden">
        <div className="w-full h-full isolate px-4 relative py-14 md:px-10 lg:px-20 flex flex-col gap-3">
          <span
            className={clsx(
              "absolute size-full bg-[#DEEBFE] top-0 left-0 -z-10",
              sm ? "contact-shape-bottom" : "contact-shape-left"
            )}
          />
          <span className="absolute h-full -left-2 top-0 pointer-events-none -z-10">
            <SingleLineShortLeft className="h-[calc(100%+2rem)]" />
          </span>
          <strong>Do you need assistance?</strong>
          <p>Contact us via whatsapp</p>
          <Button variant={"secondary"} className="w-fit">
            <MessagePhone />
            Send Us Message
          </Button>
        </div>
        <div className="w-full isolate flex flex-col items-center  px-4 relative py-14 md:px-10 lg:px-20 gap-3">
          <span
            className={clsx(
              "absolute size-full bg-[#DEEBFE] top-0 left-0 -z-10",
              sm ? "contact-shape-top" : "contact-shape-right"
            )}
          />
          <span className="absolute h-full right-0 top-0 pointer-events-none -z-10">
            <SingleLineShortRight className="h-[calc(100%+2rem)] translate-x-2 -z-10" />
          </span>
          <span className="size-10">
            <MapPinCustom className="size-full" />
          </span>
          <strong>Address</strong>
          <address className="w-full text-center max-w-[25ch]">
            9 Station Rd, West Drayton UB7 7BT
          </address>
        </div>
      </section>

      <section className="w-full mt-10 z-[-1]">
        {/* <ContactMap/> */}
        {/* handle the map section in contact design */}
        <MapComponent/>
      </section>
    </>
  );
}
