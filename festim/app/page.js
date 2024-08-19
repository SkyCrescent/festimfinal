"use client"
import React, {useEffect} from 'react';
import {useState} from "react";
import  logo from '../public/Sans titre2.png'
import afrique from '../public/111 - Copie2.png'
import whar from '../public/icons/whatsapp_127px.png'
import inst from'../public/icons/instagram_127px.png'
import fb from '../public/icons/facebook_circled_127px.png'
import x from "../public/X-Logo2.png"
import tik from '../public/icons/tiktok_127px.png'
import mail from "../public/icons/gmail_127px.png"
import WelcomePage from "../components/WelcomePage"
import  affiche from '@/public/MASCOTTE 2.jpg'
import adresse from "@/public/icons/location_127px.png"
import Image from 'next/image'
import {useRouter} from "next/navigation";
import Style from "@/styles/bubble.css"
export default function Home() {
  const [etat , SetEtat ] = useState(1)
  const router = useRouter();

  const [loading , SetLoading] = useState(false )
  const [ comegreen , SetComegreen ] = useState(false)  // Le centre define enorme et vert



  const [ showInsta ,setShowInsta  ] = useState(false)
  const [ showFb ,setShowFb  ] = useState(false)
  const [ showWhat ,setShowWhat  ] = useState(false)

  const [ next ,setnext  ] = useState(false)
  useEffect(() => {
    SetLoading(true)
    // const timeoutId =
    //
    setTimeout(() => {
      setShowInsta(true);
    }, 800);

    setTimeout(() => {
      setShowFb(true);
    }, 900);


    setTimeout(() => {
      setShowWhat(true);
    }, 1000);

    setTimeout(() => {
      setnext(true);
    }, 3500);




    // Cleanup function to clear the timeout when the component unmounts
    // return () => clearTimeout(timeoutId);
  }, []);



  return (


     <>

       <div className="relative w-[100%] h-screen bg-white/100 ">
         {/*<div className="absolute  z-10  w-screen h-screen opacity-75 "></div>*/}

         <div className={  next ? "hidden" :"absolute top-0 w-full h-screen opacity-100  "}>

           <div className="relative h-[10%]  flex justify-between items-end  ">
             {/*<div className="relative w-[6%] h-[100%]  ">*/}
             {/*   <Image*/}
             {/*      src={logo.src}*/}
             {/*      alt={`Logo `}*/}
             {/*      width="600"*/}
             {/*      height="600"*/}
             {/*      className=" relative w-[100%] h-[100%] opacity-100     "*/}
             {/*   />*/}
             {/*</div>*/}

           </div>

           <div
              className="relative h-[79%]   w-[100%] md:w-[70%] mx-auto items-center justify-center md:flex md:justify-between md:items-start">
             <div className="relative w-[80%] mx-auto  md:w-[50%] lg:w-[80%] h-[100%] md:mx-6 lg:mx-36 ">
               <div id="nfc"
                    className=" relative  flex items-center rounded-full  justify-center top-0 h-[100%] w-[99%] bod mx-auto   text-3xl">
                 <div className="relative w-full h-full  mx-auto">
                   <div
                      className={loading ? `transition duration-1000 opacity-100 h-full w-full md:-mx-32 md:w-9/10 md:h-98` : "z-30 scale-50 opacity-0"}>
                     <img
                        src={affiche.src}
                        alt="Logo"
                        width={400}
                        height={400}
                        className="object-contain object-center w-full h-full"
                     />
                   </div>
                 </div>

                 {/**/}
                 {/*<div*/}
                 {/*   className={showBobblue ? ` block ${showGreenn ? "bg-green-600" : showBlue ? "bg-blue-600" : showBlack ? "bg-black" : null} transition duration-1000 opacity-100   scale-x-100 scale-y-100 circle ` : `hidden  mx-auto `}></div>*/}

               </div>


             </div>
             <div
                className="hidden md:block absolute space-y-8 md:top-28 lg:-top-3 w-12 h-80 md:right-[230px] lg:right-[240px]">
               <div
                  className={`${showInsta ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={inst.src} alt={`Logo `} width="600" height="600"
                        className="relative w-full h-full opacity-100"/>
                 <a href="https://www.instagram.com/festival_dimages_dafrique"
                    className="font-bold whitespace-normal break-words">instagram.com/festival_dimages_dafrique</a>
               </div>
               <div
                  className={`${showFb ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={fb.src} alt={`Logo `} width="600" height="600"
                        className="relative w-full h-full opacity-100"/>
                 <a href="https://www.instagram.com/festival_dimages_dafrique"
                    className="font-bold whitespace-normal break-words">facebook.com/festimbrazza</a>
               </div>
               <div
                  className={`${showWhat ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={whar.src} alt={`Logo `} width="600" height="600"
                        className="relative w-full h-full opacity-100"/>
                 <p className="font-bold whitespace-nowrap">+242 06 440 08 81</p>
               </div>
               {/* suite */}
               <div
                  className={`${showWhat ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={mail.src} alt={`Logo `} width="600" height="600"
                        className="relative w-full h-full opacity-100"/>
                 <a href="festimafrique@gmail.com" className="font-bold whitespace-nowrap">festimafrique@gmail.com</a>
               </div>
               <div
                  className={`${showWhat ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={x.src} alt={`Logo `} width="600" height="600"
                        className="relativew-[80%] h-[60%] opacity-100"/>
                 <p className="font-bold whitespace-nowrap"> @AfriqueFes43221</p>
               </div>
               <div
                  className={`${showWhat ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={tik.src} alt={`Logo `} width="600" height="600"
                        className="relative w-full h-full opacity-100"/>
                 <p className="font-bold whitespace-nowrap"> @festim.afrique</p>
               </div>

               <div
                  className={`${showWhat ? 'transition duration-1000 opacity-100 translate-x-0' : '-translate-x-2 opacity-0'} w-[100%] h-[15%] flex items-center justify-start space-x-3 mx-auto`}>
                 <img src={adresse.src} alt={`Logo `} width="600" height="600"
                        className="relative w-full h-full opacity-100"/>
                 <p className="font-bold whitespace-nowrap"> 15 Avenue de l'Amitié </p>
               </div>

             </div>


           </div>


           <div className=" hidden md:block relative h-[11%] flex justify-between items-end  ">
             <div className="relative w-[10%] md:w-[20%] lg:w-[10%] h-[100%] items-center ">
               <img
                  src={afrique.src}
                  alt={`Logo `}
                  width="600"
                  height="600"
                  className=" object-cover absolute h-36 bottom-0  opacity-100     "
               />
             </div>

           </div>

         </div>

         {/*<div className="relative w-[98%] md:w-full  h-full md:h-[30%] space-y-2 p-2 ">
                             <div className="flex items-center gap-6 md:gap-3">
                                <img
                                   className="h-4 w-4 md:w-4 md:h-4  "
                                   src={whar.src}
                                   height={60}
                                   width={50}
                                   alt="Nfc"/>
                                <h1 className="text-xs w-full   md:text-lg text-white  ">
                                   +242 06 440 08 81
                                </h1>

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
                                   instagram.com/festival_dimages_dafrique
                                </a>
                             </a>


                             <a className="flex items-center gap-3">
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
                                className="flex items-center gap-3">

                                <img
                                   className="-mx-1 h-5 w-5 md:w-6 md:h-6  "
                                   src={fb.src}
                                   height={60}
                                   width={40}
                                   alt="Nfc"/>
                                <a href="https://www.facebook.com/festimbrazza?mibextid=ZbWKwL"
                                   className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                   facebook.com/festimbrazza?mibextid=ZbWKwL
                                </a>
                             </a>
                             <a className="flex items-center gap-3">
                                <img
                                   className="-mx-3 h-5 w-5 md:w-9 md:h-6  "
                                   src={x.src}
                                   height={60}
                                   width={40}
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
                          */}


         <div className={next ? "absolute top-0 z-40 h-screen w-screen md:w-screen  " : "hidden"}>
           <WelcomePage/>
         </div>


       </div>


     </>
  )
}
