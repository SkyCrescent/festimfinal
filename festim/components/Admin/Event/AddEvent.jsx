"use client"
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Image from "next/image";
import picture from "@/public/picture.png";
import logo from "@/public/113.png";
//import  f from  "../../pages/api/tare"
export default function AddEvent({modal, SetModal}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [isSubmit,SetIsSubmit] = useState(false)
   const [selectedFile2, setSelectedFile2] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);
   const [Errors,SetErrors] = useState({})
   const [loading , SetLoading ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [Focus ,SetFocus ] = useState(false)
   const [values, setValues] = useState({
      name: "",
      dateD : "",
      dateF:"",
      contenu:"",
     // couleur:"",
      media :"",
     // etat:''

   });

   const input = [
      { id: 1, name: "name", type: "text", placeholder: "Nom",value: values.name   ,label: "Nom de l'evenement", className: "text-[9px] md:text-[15px] relative h-[90%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         img: ``,
         error:  values.name === ""? 'Veuillez signifier le nom' :null
      },
      { id: 3, name: "dateD",type: "date",minDate : "2024-02-10",value: values.dateD  ,maxDate : "2028-12-10", placeholder: "Debut de l'evenement", label: "Debut de l'evenement", className:"text-[9px] md:text-[15px] relative h-[90%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 "
,
         error: values.dateD ? null : 'Quel jour votre evenement commence?' , img: `` },

      { id: 4, name: "dateF",type: "date",minDate : "2024-02-10",value: values.dateF  ,maxDate : "2028-12-10", placeholder: "birthday", label: "Fin de l'evenement", className: "text-[9px] md:text-[15px] relative h-[90%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",

         error: values.dateF ? null : 'Quel jour votre evenelent se termine?' , img: `` },
      { id: 5, name: "contenu", type: "text", placeholder: "Concept",value: values.contenu ,label: "Concept de l'evenement", className: "text-[9px] md:text-[15px] relative h-[90%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         img: ``,
         error:  values.contenu ==="" ?'Quel est le concept de cette evenement' :null
      }
   ]

   const handleSummit = () => {
      SetIsSubmit(true);

      const valuesNotEmpty = Object.values(values).every(value => value !== "");

      if (valuesNotEmpty ) {
         addData();
      } else {
         console.log("Veuillez remplir tous les champs avant de soumettre le formulaire.");
         // Ajoutez ici la logique pour afficher un message d'erreur ou une notification à l'utilisateur.
      }
   };

   const comeBack = () =>{

      setValues({
         name: "",
         dateD : "",
         dateF:"",
         contenu:"",
         //couleur:"",
         media :null,
         //etat:''
      });

      setSelectedFile(null)
      SetModal(false)
   }
   const handleFileChange = async (event) => {
      const fileInput = event.target;
      const selectedFile1 = fileInput.files[0];

      if (selectedFile1) {
         // Vérifier si le fichier est une image en vérifiant l'extension
         const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
         const fileNameParts = selectedFile1.name.split(".");
         const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

         if (allowedExtensions.includes(fileExtension)) {
            // Si c'est une image, mettre à jour les valeurs avec le fichier sélectionné
            setSelectedFile(selectedFile1);
            //SetselectedImage4(true);
            console.log("Fichier sélectionné :", selectedFile1.name);

            try {
               const formData = new FormData();
               formData.append('file', selectedFile1);
               // Envoi de la requête POST avec Axios vers le serveur
               const response = await axios.post('/../../pages/api/tare/', formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data'
                  }
               });
               console.log('File uploaded successfully:', response.data);
               // Mise à jour de la valeur media avec le chemin du fichier
               setValues((prevValues) => ({
                  ...prevValues,
                  media: `media/events/${selectedFile1.name}`,
               }));
               console.log("sdsd",values.media)
            } catch (error) {
               console.error('Error uploading file:', error);
            }
         } else {
            // Si ce n'est pas une image, ne rien faire
            console.log("Le fichier sélectionné n'est pas une image");
         }
      } else {
         // Si aucun fichier n'est sélectionné, réinitialiser les valeurs
         setSelectedFile(null);
         setValues((prevValues) => ({
            ...prevValues,
            media: "",
         }));
         //SetselectedImage4(false);
         console.log("Aucun fichier sélectionné");
      }
   };




   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/evenements/get_allEvent.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
            SetLoading(true)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };

   useEffect(() => {
      console.log(values);
   }, []);

   useEffect(() => {
      console.log(values);
   }, [values]);
   const addData = async () => {
      try {
         // Vérifiez que tous les champs requis sont remplis
         if (values.name && values.dateD && values.dateF && values.contenu && values.media) {
            const formData = new FormData();
            formData.append('nom', values.name);
            formData.append('date_debut', values.dateD);
            formData.append('date_fin', values.dateF); // Assurez-vous que le champ fichier a le bon nom
            formData.append('concept_devellope', values.contenu); // Assurez-vous que le champ fichier a le bon nom
            //formData.append('couleur', values.couleur); // Assurez-vous que le champ fichier a le bon nom
            formData.append('photo', values.media); // Assurez-vous que le champ fichier a le bon nom
            //formData.append('etat', values.etat); // Assurez-vous que le champ fichier a le bon nom

            // Effectuez la requête HTTP en utilisant Axios
            const response = await axios.post(`${apiUrl}/evenements/add_Event.php`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });
            console.log("Truc ajouté avec succès ", response);
         }
         getData()
         comeBack()
      } catch (error) {
         console.error(error);
         // setLoading(false);
      }
   };
   const handleChange = (e) => {
      const { name, value } = e.target;
      let formattedValue = '';
      let cleanedValue = '';
      let cleanedAddress = '';
      // Mise à jour de la valeur dans l'état global values directement

      if (name === 'contenu') {

         // Supprimer les caractères spéciaux pour l'adresse
         //cleanedAddress = value.replace(/[^a-zA-Z\s]/g, '');
         cleanedAddress = value.replace(/[^\w\s]/gi, '');
         //cleanedAddress = cleanedAddress.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, [name]: cleanedAddress });
      }else if (name === 'name') {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^\w\s]/gi, '');
         //cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      } else {
         // Pour les autres champs, mettre à jour simplement la valeur sans formatage
         setValues({ ...values, [name]: value });
      }
   };

   return(
      <>


            <div    className={`fixed top-0 left-0 z-30 bg-black/70 w-screen h-screen overflow-y-auto transition duration-300 ease-in-out`}
            >
               <div className="w-full h-[83%]  flex justify-center my-8 md:my-96 lg:my-10">
                  <div className="flex flex-col mt-4  md:mt-36  lg:mt-0  items-center justify-center  shadow-xl bg-white border border-black/70 mx-auto h-[85%] lg:h-[95%] w-[95%]  md:h-[50%] md:w-[90%]  lg:w-[65%]  ">
                     {/*//le pc c a partir de md par defaut c le phone*/}
                        <div className=" w-[100%] h-[100%] p-2   ">
                           <div className="text-black text-center  font-[arial] font-semibold text-[20px] uppercase ">Saisissez les Informations du Nouvel Evenements</div>
                           <div className="flex justify-between   w-[100%] h-[75%]  ">

                              <img
                                  src={logo.src}
                                  alt={`Logo `}
                                  width="190"
                                  height="190"
                                  className="  relative  h-[138%] -left-2 w-[3%] -top-16 md:-top-10 rounded "
                              />
                              <div className="w-[100%] h-[80%] md:h-[100%] flex justify-between  ">
                                 <div className="   relative w-[45%] h-[55%] md:w-[50%] md:h-[80%]   ">
                                    <label
                                        htmlFor="imageInput"
                                        className=
                                            "relative w-[100%] md:w-[30%] lg:w-[80%] h-[98%] md:h-[70%] lg:h-[108%] mx-auto md:mt-8 lg:mt-3 top bg-transparent border border-black/40 hover:border-green-600 rounded-full flex items-center justify-center cursor-pointer group"

                                    >
                                       <input
                                           type="file"
                                           id="imageInput"
                                           name="file"
                                           accept=".jpg, .jpeg, .png ,video/*"
                                           className="sr-only"
                                           onChange={handleFileChange}
                                       />
                                       <div
                                           className={selectedFile ? "hidden" : "relative h-[100%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"}>
                                          <Image
                                              src={picture.src}
                                              alt={`Logo `}
                                              width="600"
                                              height="600"
                                              className="object-contain object-center w-8 h-8 text-gray-600  "
                                          />
                                          <div className="text-gray-400 text-center opacity-100 z-10"> Importer le
                                             media
                                          </div>
                                       </div>
                                       {selectedFile && (
                                           selectedFile2 === "video/mp4" ?
                                               <video
                                                   src={URL.createObjectURL(selectedFile)}
                                                   controls
                                                   onMouseEnter={(event) => {
                                                      event.target.play();
                                                   }}
                                                   onMouseLeave={(event) => {
                                                      event.target.pause();
                                                   }}
                                                   alt="Vidéo sélectionnée"
                                                   className="relative h-[100%]  w-[100%] rounded-full  z-40"
                                               ></video> :
                                               <img
                                                   src={URL.createObjectURL(selectedFile)}
                                                   alt="Image sélectionnée"
                                                   className="relative h-[100%]  w-[100%]   z-40"
                                               />
                                       )}
                                    </label>
                                    {isSubmit && !values.media ? (
                                        <div className="text-[70%] text-red-600 text-center">Veuillez sélectionner un
                                           fichier pour ce poste</div>
                                    ) : null}
                                 </div>
                                 <div
                                     className=" w-[70%] md:w-[50%] h-[100%]  flex-row -space-y-2   mx-auto ">
                                    {input.map((inputs) => (
                                        <div className="rounded-md h-[25%] mx-auto    " key={inputs.id}>

                                           <label
                                               className="text-[14px] font-semibold h-1 text-green-600 ">{inputs.label}</label>
                                           <div className="relative h-[58%]">
                                              <input
                                                  placeholder={inputs.placeholder}
                                                  type={inputs.type}
                                                  min={inputs.minDate}
                                                  max={inputs.maxDate}
                                                  name={inputs.name}
                                                  onFocus={() => SetFocus(true)}
                                                  onBlur={() => SetFocus(false)}
                                                  className={inputs.className}
                                                  onChange={(e) => handleChange(e)}
                                                  value={inputs.value}
                                                  defaultValue={inputs.defaultValue}
                                              />
                                              {inputs.img ? (
                                                  <img src={inputs.img} alt=""
                                                       className="absolute right-3 top-[22%] cursor-pointer"
                                                       width={20} height={20} onClick={() => showChar(inputs.id)}/>
                                              ) : null}
                                           </div>
                                           <div>
                                              {/*{ Errors[inputs.name]  ? (<> <div className="text-[75%] text-red-600"> {inputs.error} </div> </> ): null  }*/}
                                              {isSubmit && inputs.error ? (
                                                  <div className="text-[70%] text-red-600">{inputs.error}</div>
                                              ) : null}
                                           </div>


                                        </div>

                                    ))}

                                 </div>

                              </div>


                           </div>
                           <div
                               className="relative flex items-center justify-center -top-16 md:top-0 space-x-4 md:space-x-6  w-[100%] h-[20%]   ">
                              <button
                                  className="w-[40%] h-[70%] md:w-[20%] lg:w-[20%] lg:h-[50%] bg-green-600 hover:bg-green-700 text-white transition duration-300 transform hover:scale-105   rounded-md font-normal"
                                  onClick={handleSummit}>Valider
                              </button>
                              <button
                                  className="w-[40%] h-[70%] md:w-[20%] lg:w-[20%] lg:h-[50%] bg-red-500 hover:bg-red-800 text-white transition duration-300 transform hover:scale-105  rounded-md font-normal"
                                  onClick={comeBack}>Annuler
                              </button>
                           </div>

                        </div>
                  </div>

               </div>
            </div>

      </>
   )
}