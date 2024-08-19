import Link from "next/link"
import Image from "next/image"
import afrique from '../public/111 - Copie2.png'
import whar from '../public/icons/whatsapp_127px.png'
import inst from'../public/instagram_127px.png'
import fb from '../public/icons/facebook_circled_127px.png'
import  affiche from '../public/AFFICHE FESTTM AFRIQUE 2024copie2.png'
import  affiche2 from '../public/LOGO.png'
import  mail from "../public/icons/gmail_127px.png"
import  x from "../public/X-Logo.png"
import  tik from "../public/tiktok_127px.png"

import {usePathname, useRouter} from 'next/navigation'
//import f from '../../app/home/historic'
export default function Barre() {
   const router = useRouter();

   return (
      <>
         <div
            className="relative h-72 w-[100%] z-30  bg-no-repeat   bg-cover   bg-[url('../public/Sans.jpg')]  flex justify-evenly md:justify-between lg:justify-evenly items-center ">
            <div
               className="absolute bg-gradient-to-t from-black/80 via-black/100 to-black/100 z-20 h-72 w-full opacity-85 ">


            </div>
            <div className=" relative h-[100%] w-full z-30 ">
               <div className=" relative h-[90%] w-[82%] md:w-[83%] lg:w-full flex justify-between ">
                  <div className="hidden lg:block flex flex-col relative w-[40%] h-[100%]     ">
                     <img
                        className="-my-12 -mx-10 absolute "
                        src={affiche.src}
                        height={800}
                        width={800}
                        alt="Nfc"
                     />
                     {/*<h1 className="text-white text-xl w-full">Diplomatie,Affaires et Entreprenariat des Jeunes </h1>*/}


                  </div>


                  <div className=" flex flex-col relative  w-[20%] h-[80%] md:w-[30%] md:h-[80%]   space-y-2 mt-6 ">
                     <div className="flex flex-row items-center  relative w-[100%]  h-16">
                        <img
                           className="my-6"
                           src={affiche2.src}
                           height={110}
                           width={120}
                           alt="Nfc"
                        />
                        <h1 className="font-black relative  w-[50%] text-lg md:text-2xl text-green-600">
                           FESTIM AFRIQUE</h1>
                     </div>
                     <h1
                        className="text-white text-xs md:text-lg relative w-[200%] mx-6 lg:-mx-64 text-center ">Diplomatie,
                        Affaires et Entreprenariat des Jeunes </h1>


                  </div>


                  <div className=" relative mt-6 md:mt-2 lg:mt-2 w-[50%] md:w-[30%] h-[100%]  z-30  ">
                     <div className="flex flex-col  w-[30%] h-[90%]   space-y-1 p-4">
                        <h1 className="font-black text-2xl text-red-600">
                           Contact</h1>
                        <div className="   w-48 md:w-80 lg:w-80 h-[100%] flex flex-col justify-center ">

                           <div className=" relative w-[98%] md:w-full h-full md:h-[100%] lg:h-[100%] space-y-2 p-2 ">
                              <div className="flex items-center gap-6 md:gap-2">
                                 <img
                                    className="-mx-1 h-4 w-4 md:w-6 md:h-6  "
                                    src={whar.src}
                                    height={80}
                                    width={80}
                                    alt="Nfc"/>
                                 <a className="relative text-xs w-full   md:text-[13px] mx-2 text-white  ">
                                    +242 06 440 08 81
                                 </a>

                              </div>


                              <a href="https://www.instagram.com/festival_dimages_dafrique"
                                 className="flex items-center gap-3">

                                 <img
                                    className="-mx-1 h-5 w-5 md:w-6 md:h-6  "
                                    src={inst.src}
                                    height={60}
                                    width={40}
                                    alt="Nfc"/>
                                 <a href="https://www.instagram.com/festival_dimages_dafrique"
                                    className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                    festival_dimages_dafrique
                                 </a>
                              </a>


                              <a className="flex items-center gap-3 ">
                                 <img
                                    className="-mx-1 h-5 w-5 md:w-6 md:h-6  "
                                    src={mail.src}
                                    height={60}
                                    width={40}
                                    alt="Nfc"/>
                                 <h1 className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                    festimafrique@gmail.com
                                 </h1>
                              </a>
                              <a href="https://www.facebook.com/festimbrazza?mibextid=ZbWKwL"
                                 className="flex items-center  gap-3">

                                 <img
                                    className="-mx-2 h-5 w-5 md:w-7 md:h-7  "
                                    src={fb.src}
                                    height={60}
                                    width={40}
                                    alt="Nfc"/>
                                 <span
                                    className=" text-xs text-white my-0.5 mx-2   cursor-pointer">
                                   facebook.com/festimbrazza?mibextid=ZbWKwL
                                </span>
                              </a>
                              <a className="flex items-center gap-3">
                                 <img
                                    className="-mx-2 h-5 w-5 md:w-7 md:h-6  "
                                    src={x.src}
                                    height={20}
                                    width={20}
                                    alt="Nfc"/>
                                 <h1 className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                    @AfriqueFes43221
                                 </h1>
                              </a>
                              <a className="flex items-center gap-3">
                                 <img
                                    className="-mx-3 h-5 w-5 md:w-8 md:h-8  "
                                    src={tik.src}
                                    height={60}
                                    width={40}
                                    alt="Nfc"/>
                                 <h1 className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                    @festim.afrique
                                 </h1>
                              </a>
                           </div>


                        </div>
                     </div>

                  </div>
               </div>


               <div className="block md:hidden lg:block relative h-[10%] w-full z-30 flex items-center justify-center">
                  <h1 className="text-sm text-white font-[Poppins] text-center">
                     <Link href="/admin">© 2024 FESTIM Afrique. All Rights Reserved.</Link>
                  </h1>
               </div>


            </div>


         </div>

      </>


   )
}