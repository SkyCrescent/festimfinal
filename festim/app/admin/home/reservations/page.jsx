"use client"
import Image from 'next/image';
import { useState, useEffect } from "react";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import logo from "@/public/AFFICHE FESTTM AFRIQUE 2024copie2.png";
import Link from "next/link";
import house from "@/public/icons/home_127px.png";
import present from "@/public/icons/layout_127px.png";
import concept from "@/public/icons/term_127px.png";
import '@/styles/Page.css'
import Pied from "@/components/Pied";
import off from "@/public/icons/shutdown_127px.png";

export default function page(){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const router = useRouter();
   const [loading , SetLoading ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all data
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all data
   const [Tosearch , Setsearch] = useState("")
   const [MyId , SetId] = useState(0)
   const [options , SetOptions] = useState(null)
   const [ formPost , SetPost ] = useState(false)
   const [formSchool , SetSchool] = useState(false)
   const [formDelete , SetDelete] = useState(false)
   const [focus6 , SetFocus6] = useState(false)
   const [values, setValues] = useState({
      service : ""
   });
   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/evenements/get_allEvent.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
           // SetNumber(response.data.recu.length)
            SetLoading(true)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };
   const getData2 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/Concerned/get_allConcerned.php`)
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("ici",response.data.recu)
            setFilteredData2(response.data.recu)
            SetLoading(true)

         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };
   useEffect(() => {
      getData2()
      getData()
     // console.log("ddd",id)
   }, []);


   const deletData = async (MyId) => {
      // console.log(MyId)
      try {
         const formData = new FormData();
         // Effectuez la requête HTTP en utilisant Axios
         const response = await axios.post(`${apiUrl}/School/delete_school.php?id=${MyId}`, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         //console.log("Truc ajouté avec succès ", response);

         const response2 = await axios.post(`${apiUrl}/Study/deleteBySchool.php?id=${MyId}`, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });
         SetDelete(false)
         getData()
         // console.log("Truc ajouté avec succès ", response2);

      } catch (error) {
         console.error(error);
      }
   };
   return(
      <>

         <div className="relative w-[100%] h-auto bg-white">
            <nav
               className="relative w-[100%] md:w-full h-[8%] md:h-[10%] lg:h-[16%] flex items-center    justify-evenly    text-md  decoration-amber-500 shadow-xl ">
               <div
                  className="hidden  relative w-[30%] md:w-[10%] lg:w-[30%] h-[100%] lg:flex items-center md:mx-12 lg:mx-6">
                  <div className="relative h-[100%] bg-green-900 -mx-14 top-0 w-[4%] md:w-[8%] lg:w-[13%] ">

                  </div>
                  <div
                     className="relative h-[100%] mx-8 md:mx-6 lg:mx-12 -top-6 md:-top-0 lg:-top-2 w-[50%] md:w-[800%] lg:w-[50%] ">
                     <img
                        src={logo.src}
                        alt={`Logo `}
                        width="190"
                        height="190"
                        className=" object-center   "
                     />
                  </div>

               </div>

               <div
                  className=" relative w-[90%] mx-auto  md:w-[100%] lg:w-[80%] flex flex-col font-normal md:font-bold md:mx-1  ">
                  <div className="hidden md:block">
                     <ul
                        className="   lg:px-1 m-8 md:m-3 lg:m-8 flex justify-between items-center text-blue-900 flex-row gap-6 md:gap-6 lg:gap-6 ">
                        <li className="hover:text-blue-500 "><Link href="/admin/home/actu">Actualites</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="/admin/home/"> Evénement </Link>
                        </li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link
                           href="/admin/home/reservations"> Réservations</Link></li>


                        <li className="hover:text-blue-500 "><Link href="/admin">Deconnexion</Link></li>

                     </ul>
                  </div>
                  <div
                     className=" md:hidden   relative h-24 w-[100%] mx-auto  flex justify-between items-center text-blue-900 flex-row gap-6">
                     <img
                        src={present.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/admin/home/actu`);
                        }}
                     />
                     <img
                        src={house.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/admin/home/`);
                        }}
                     />
                     <img
                        src={concept.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`#`);
                        }}
                     />


                     <img
                        src={off.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/admin`);
                        }}
                     />

                  </div>

               </div>


            </nav>

            {/*<MyImage/>*/}
            <div className="hidden md:block relative w-[100%]  h-[12%]  pt-9 flex  items-center justify-center ">
               <div className="relative h-[70%]  w-[35%] ">
               </div>
               <div className="relative h-[70%]  w-[40%]  ">
                  <div className="relative w-[100%] ">
                     <select
                        onFocus={() => SetFocus6(true)}
                        onBlur={() => SetFocus6(false)}
                        name="service"
                        className={"text-large relative w-[100%] text-gray-700 border rounded-lg bg-white/90 border-gray-300 py-2 px-4 h-12 focus:outline-none focus:border-blue-500"}
                        onChange={(e) =>  setValues(prevValues => ({
                           ...prevValues,
                           service:(e.target.value)
                        }))}
                         value={values.service}
                     >
                        <br></br>
                        <option value=""></option>
                        {filteredData.map((option) => (
                           <option key={option.id} value={option.id}>
                              {option.nom}
                           </option>
                        ))}

                     </select>
                     <span
                        className={(focus6 || values.service ) ? "absolute left-3 p-1 w-auto top-6 px-1 text-xs font-black text-blue-900 -translate-y-9 duration-300" : "absolute tracking-wide pointer-events-none duration-300 left-0 top-3 px-5 text-sky-700"}>
                                 Evénements de FESTIM
                                </span>
                  </div>
               </div>
            </div>

            <br></br>
            <div className="hidden md:block overflow-y-auto scrollbar-hidden relative h-[100%]  w-[100%]   ">
               <div className="relative top-2 h-auto content-container overflow-hidden ">
                  <div className="w-full shadow-lg h-auto ">
                     <div className="grid grid-cols-12 text-xs p-2 md:p-4  bg-blue-500 md:uppercase">
                        <h2 className="text-white font-[Poppins] col-span-1">Photo</h2>
                        <h2 className="text-white font-[Poppins] col-span-1 ">Nom</h2>
                        <h2 className="text-white font-[Poppins] col-span-2 ">Prenom</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Adresse</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Contact</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Ville</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Mail</h2>


                     </div>
                     {
                        loading
                           ? (
                              filteredData2 .map((subItem, subIndex) => (
                                 <div
                                    className={subIndex % 2 === 0 ? 'bg-transparent border-b border-blue-400  cursor-pointer font-medium text-black hover:bg-gray-100 ' : 'bg-transparent text-black border-b border-blue-400 font-medium cursor-pointer hover:bg-gray-100'}>
                                    <li key={subIndex}
                                        className={`border-b border-blue-400 py-3 px-2 md:px-3  grid grid-cols-12 
                                  ${subIndex % 2 === 0 ? "bg-transparent" : "bg-transparent"} text-black  md:font-[Poppins] cursor-pointer items-center hover:bg-gray-200 `
                                        }
                                       // onMouseEnter={() => SetOptions(subIndex)}
                                       // onMouseLeave={() => SetOptions(null)}
                                    >
                                       <a className="relative w-40 h-16 md:h-18 "> <img src={`/${subItem.photo}`}
                                                                                        alt={`Media ${subItem.id}`}
                                                                                        className="relative h-[100%] w-[40%] md:w-[40%] rounded-full   "/>
                                       </a>
                                       <a className="col-span-1 md:h-8">{subItem.nom}</a>
                                       <a className="col-span-2 mx-1 md:h-8 ">{subItem.prenom}</a>
                                       <a className="col-span-2 md:-mx-8 h-8">{subItem.adresse}</a>
                                       <a className="col-span-2 md:-mx-8h-8">{subItem.contact}</a>
                                       <a className="col-span-2 md:-mx-6 h-8">{subItem.ville}</a>
                                       <a className="col-span-2 md:-mx-8 h-8">{subItem.email}</a>
                                    </li>

                                    {/* Ajoutez d'autres informations ici si nécessaire */}
                                 </div>
                              ))
                           )
                           : (
                              <div className="flex items-center justify-center p-12 bg-transparent text-xl">
                                 <div
                                    className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
                              </div>
                           )
                     }
                  </div>

               </div>
            </div>


         </div>


         <br></br>
         <br></br>
         <br></br>


         <div className=" relative h-[30%] w-full ">


            <Pied/>


         </div>
         {
            formDelete ? (
               <div className="fixed top-0 left-0 z-50 bg-black/70 w-screen h-screen overflow-y-auto">
                  <div className="w-full flex justify-center my-52 md:my-96 lg:my-52">
                     <div
                        className={`flex relative w-[80%] flex items-center justify-center md:w-[90%] lg:w-[30%] bg-sky-100 shadow rounded-lg p-6 `}>
                        <div className="flex flex-col items-center justify-center mx-10  space-y-6">
                           <div className="flex flex-col items-center justify-center">
                              <h2 className={`w-[124%] text-center`}>Vous allez supprimer cette ecole </h2>
                              <h2>en ete vous sure </h2>
                           </div>
                           <button className={`bg-red-500 text-white rounded w-64 h-10 hover:bg-red-400`}
                                   onClick={() => {
                                      deletData(MyId)
                                   }}>Supprimer
                           </button>
                           <button className={`bg-blue-500 text-white rounded w-64 h-10 hover:bg-blue-400`}
                                   onClick={() => {
                                      SetDelete(false)
                                   }}>Annuler
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ) : null
         }

      </>
   )
}