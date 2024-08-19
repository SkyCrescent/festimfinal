'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import picture from "@/public/picture.png";
import close from '@/public/icons/multiply.png'
import axios from "axios";

export default function AddReservation({NumReservation ,SetReservation,handleClickButton8}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [Errors,SetErrors] = useState({})
   const [isSubmit,SetIsSubmit] = useState(false)
   const [selectedFile, setSelectedFile] = useState(null);
   const [finish, setFinish] = useState(false);

   const [selectedImage1 , SetselectedImage1] = useState(false)

   const [values, setValues] = useState({
      nom: "",
      prenom:"",
      phone:"",
      adresse : "",
      ville:"",
      email:"",
      media:"",
      id:NumReservation,
      pays:"",
      genre:"",
      proffession : "",
      fonction:""

   });
   const input1 = [
      {
         id: 1,
         name: "nom",
         type: "text",
         placeholder: "Nom",
         value: values.nom,
         label: "Votre Nom ",
         className:
            "text-[9px] md:text-[16px] relative h-[90%] w-[90%]  text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600",
         error: values.nom === "" ? 'Veuillez indiquer le nom de votre école' : null
      },
      {
         id: 2,
         name: "prenom",
         type: "text",
         placeholder: "Prenom ",
         value: values.prenom,
         label: "Votre Prenom",
         className:
            "text-[9px] md:text-[16px] relative h-[90%] w-[90%] text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600",
         error: values.prenom === "" ? 'Veuillez indiquer l\'adresse de votre école' : null
      },
      {
         id: 3,
         name: "phone",
         value: values.phone,
         type: "text",
         placeholder: "Contact",
         label: "Vos contact",
         className:
            "text-[9px] md:text-[16px] relative h-[90%] w-[90%] text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600",
         error: values.phone === "" ? 'Veuillez renseigner votre numéro de téléphone' : null
      }
   ];
   const input2 = [
      {
         id: 1,
         name: "adresse",
         type: "text",
         placeholder: "adresse",
         value: values.adresse,
         label: "Votre adresse",
         className:
            "text-[9px] md:text-[16px] relative h-[88%] w-[90%] text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600",
         error: values.adresse === "" ? 'Veuillez indiquer le nom de votre école' : null
      }
      ,
      {
         id: 2,
         name: "ville",
         type: "text",
         placeholder: "ville ",
         value: values.ville,
         label: "Votre ville de residence",
         className:
            "text-[9px] md:text-[15px] relative w-[94%] h-[88%] py-2 px-4 text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 h-8 focus:outline-none focus:border-green-600",
         error: values.ville === "" ? 'Veuillez indiquer votre prénom' : null
      } ,
      {
         id: 3,
         name: "email",
         type: "text",
         placeholder: "mail",
         value: values.email,
         label: "Votre adresse Mail",
         className:
            "text-[9px] md:text-[15px] relative w-[94%] h-[88%] py-2 px-4 text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 h-8 focus:outline-none focus:border-green-600",
         error: values.email === "" ? 'Veuillez indiquer votre prénom' : null
      }
   ];
   const input3 = [

      {
         id: 1,
         name: "pays",
         type: "text",
         placeholder: "Pays ",
         value: values.pays,
         label: "Votre Pays de résidence",
         className:
            "text-[9px] md:text-[15px] relative w-[100%] h-[88%] py-2 px-4 text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 h-8 focus:outline-none focus:border-green-600",

         error: values.pays === "" ? 'Veuillez indiquer votre prénom' : null
      } ,

      {
         id: 2,
         name: "genre",
         type: "select",
         placeholder: "sexe",
         value: values.genre,
         label: "Votre Genre",
         className:
            "text-[9px] md:text-[16px] relative h-[80%] w-[100%] text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600",

         options: [
            { value: 0, text: "" },
            { value: "Masculin", text: "Masculin"},
            { value: "Feminin", text: "Féminin" },
         ],
         error: values.genre === "" ? 'Veuillez indiquer le nom de votre école' : null
      },
      {
         id: 3,
         name: "proffession",
         type: "text",
         placeholder: "Proffesion",
         value: values.proffession,
         label: "Votre Proffesion",
         className:
            "text-[9px] md:text-[15px] relative w-[100%] h-[88%] py-2 px-4 text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 h-8 focus:outline-none focus:border-green-600",
         error: values.proffession === "" ? 'Veuillez indiquer votre prénom' : null
      },
      {
         id: 4,
         name: "fonction",
         type: "text",
         placeholder: "Fonction",
         value: values.fonction,
         label: "Votre Fonction",
         className:
            "text-[9px] md:text-[15px] relative w-[100%] h-[88%] py-2 px-4 text-black border rounded-[10px] border-black/40 bg-transparent py-2 px-4 h-8 focus:outline-none focus:border-green-600",
         error: values.fonction === "" ? 'Veuillez indiquer votre prénom' : null
      }
   ];


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
            SetselectedImage1(true);
            console.log("Fichier sélectionné :", selectedFile1.name);

            try {
               const formData = new FormData();
               formData.append('file', selectedFile1);
               // Envoi de la requête POST avec Axios vers le serveur
               const response = await axios.post('/../../pages/api/', formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data'
                  }
               });
               console.log('File uploaded successfully:', response.data);
               // Mise à jour de la valeur media avec le chemin du fichier
               setValues((prevValues) => ({
                  ...prevValues,
                  media: `media/concerned/${selectedFile1.name}`,
               }));
               //setSelectedFile2(selectedFile1.type)
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
            media: "", // Réinitialise la valeur media s'il n'y a pas de fichier sélectionné
         }));
         SetselectedImage1(false);
         console.log("Aucun fichier sélectionné");
      }
   };



   //Les champs
   const handleChange = (e) => {
      const { name, value } = e.target;
      let formattedValue = '';
      let cleanedValue = '';
      let cleanedAddress = '';
      if (name === 'phone') {
         if (value === '') {
            // Si le champ est vide, réinitialiser les valeurs
            setValues({ ...values, [name]: '' });
         } else {
            // Supprimer tous les caractères non numériques
            const cleaned = value.replace(/\D/g, '');
            // Ajouter les deux premiers chiffres (06)
            formattedValue += cleaned.substring(0, 2) + '/';
            // Ajouter le groupe de trois chiffres suivant (650)
            formattedValue += cleaned.substring(2, 5) + '/';
            // Ajouter les deux derniers chiffres (07)
            formattedValue += cleaned.substring(5, 7) + '/';
            // Ajouter les deux derniers chiffres (97)
            formattedValue += cleaned.substring(7, 9);
            // Mettre à jour l'état avec la valeur formatée
            setValues({ ...values, [name]: formattedValue });
         }
      }else if (name === 'adresse') {

         // Supprimer les caractères spéciaux pour l'adresse
         cleanedAddress = value.replace(/[^\w\s]/gi, '');
         cleanedAddress = value.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, [name]: cleanedAddress });
      }else if (name === 'nom'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }else if (name === 'prenom'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }

      else if (name === 'pays'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }


      else if (name === 'proffession'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         // cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }


      else if (name === 'fonction'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         // cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }
      else {
         // Pour les autres champs, mettre à jour simplement la valeur sans formatage
         setValues({ ...values, [name]: value });
      }
   };

   const handleChange2 = (e) => {
      const { name, value } = e.target;
      let formattedValue = '';
      let cleanedValue = '';
      let cleanedAddress = '';

      if (name === 'adresse') {

         // Supprimer les caractères spéciaux pour l'adresse
         cleanedAddress = value.replace(/[^\w\s]/gi, '');
         cleanedAddress = cleanedAddress.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, [name]: cleanedAddress });
      }else if (name === 'ville'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         //cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }else if (name === 'email'  ) {
         // Supprimer les caractères spéciaux pour l'adresse
         cleanedAddress = value.replace(/[^\w\s]/gi, '');
         //cleanedAddress = cleanedAddress.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, [name]: cleanedAddress });
      } else {
         // Pour les autres champs, mettre à jour simplement la valeur sans formatage
         setValues({ ...values, [name]: value });

      }
   };

   //Les champs de l'eleve 1

   useEffect(() => {
      console.log("recteur",values);
      // console.log(study1);
   }, [()=>{handleChange()}]);


   const addData = async () => {

      try {
         // Vérifiez que tous les champs requis sont remplis
         if (values.nom && values.adresse && values.phone && values.media) {
            const formData = new FormData();
            formData.append('nom', values.nom);
            formData.append('prenom', values.prenom);
            formData.append('contact', values.phone);
            formData.append('adresse', values.adresse);
            formData.append('ville', values.ville);
            formData.append('email', values.email);
            formData.append('photo', values.media);
            formData.append('id_evenement', values.id);
            formData.append('pays', values.pays);
            formData.append('genre', values.genre);
            formData.append('profession', values.proffession);
            formData.append('fonction', values.fonction);


            const response = await axios.post(`${apiUrl}/Concerned/add_interesse.php`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });
            setFinish(true)
            console.log("Truc ajouté avec succès ", response);
            handleClickButton8()
            SetReservation(false)

            setValues({
               nom: "",
               prenom:"",
               phone:"",
               adresse : "",
               ville:"",
               email:"",
               media:"",
               id:"",
               pays:"",
               genre:"",
               proffession : "",
               fonction:""

            });
         }
         // Reset form fields after successful submission

      } catch (error) {
         console.error(error);
      }
   };

   const addData2 = async () => {

      try {
         // Vérifiez que tous les champs requis sont remplis
         if (values.nom && values.adresse && values.phone && values.media) {
            const formData = new FormData();
            formData.append('nom', values.nom);
            formData.append('prenom', values.prenom);
            formData.append('contact', values.phone);
            formData.append('adresse', values.adresse);
            formData.append('ville', values.ville);
            formData.append('email', values.email);
            formData.append('photo', values.media);
            formData.append('id_evenement', values.id);


            formData.append('pays', values.pays);
            formData.append('genre', values.genre);
            formData.append('profession', values.proffession);
            formData.append('fonction', values.fonction);


            const response = await axios.post(`${apiUrl}/Concerned/add_interesse.php`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });
            setFinish(true)
            console.log("Truc ajouté avec succès ", response);

            setValues({
               nom: "",
               prenom:"",
               phone:"",
               adresse : "",
               ville:"",
               email:"",
               media:"",
               id:"",
               pays:"",
               genre:"",
               proffession : "",
               fonction:""

            });
         }
         // Reset form fields after successful submission

      } catch (error) {
         console.error(error);
      }
   };


   const handleSummit = () => {
      SetIsSubmit(true);

      const valuesNotEmpty = Object.values(values).every(value => value !== "");

      if (valuesNotEmpty) {
         addData();

      } else {
         console.log("Veuillez remplir tous les champs avant de soumettre le formulaire.");
         // Ajoutez ici la logique pour afficher un message d'erreur ou une notification à l'utilisateur.
      }
   };


   const handleSummit2 = () => {
      SetIsSubmit(true);

      const valuesNotEmpty = Object.values(values).every(value => value !== "");

      if (valuesNotEmpty) {
         addData2();
         router.push(`/presentation/festim`)

      } else {
         console.log("Veuillez remplir tous les champs avant de soumettre le formulaire.");
         // Ajoutez ici la logique pour afficher un message d'erreur ou une notification à l'utilisateur.
      }
   };

   const [loading , SetLoading] = useState(false )
   setTimeout(()=>{
      // SetAlldisplay(false)
      SetLoading (true)
   },80)

   useEffect(() => {
      console.log(NumReservation)
   }, []);

   return(


      <>


         <div
            className={`fixed top-0 left-0 z-30 bg-black/70 w-screen h-screen overflow-y-auto transition duration-300 ease-in-out`}
         >
            <div className="w-full h-[90%] flex justify-center my-8 md:my-96 lg:my-8">
               <div
                  className={` relative  flex justify-evenly h-[100%] w-[98%] md:w-[86%] bg-white border border-gray-700  shadow rounded-lg p-2 ${loading ? 'scale-x-100 scale-y-100 opacity-100' : 'scale-x-0 scale-y-0 opacity-0'}  transition duration-500    `}>


                  {/*<span onClick={() => {*/}
                  {/*   SetReservation(false)*/}
                  {/*}}>   dsddsf {NumReservation}  </span>*/}

                  <div
                     className=" absolute right-0 top-0 h-[4%] md:h-[10%] w-[8%] md:w-[6%] items-center justify-center ">
                     <img
                        src={close.src}
                        alt="Image sélectionnée"
                        className="relative h-[110%] cursor-pointer mx-auto w-[100%] z-40"
                        onClick={() => {
                           SetReservation(false)
                        }}
                     />
                  </div>


                  <div
                     className="relative h-[100%] w-[30%] hidden md:block  z-20  font-bold text-2xl  flex  uppercase">
                     <div
                        className="   relative items-center justify-center h-[70%] w-[100%]  flex-col md:flex-row top-44 left-4 cursor-default  ">
                        <div
                           className="relative h-auto w-[100%]  font-[Gotham] uppercase  text-lg md:text-3xl lg:text-5xl  text-blue-500 ">

                           <span className="text-black lg:text-[55px]  font-[Poppins] "> Formulaire</span>
                           <br></br>
                           <span className="text-green-500 lg:text-[50px]">de</span>
                           <br></br>
                           <span className="text-green-700 lg:text-[40px]">reservation</span>
                        </div>
                     </div>


                     <div className="relative w-[100%] h-[20%] md:h-[30%] text-sm items-center -left-4 -top-24 flex md:justify-evenly ">
                        <button
                           className="relative  md:w-[90%] lg:w-[80%] h-[80%] md:h-[60%] lg:h-[30%] bg-sky-700 hover:bg-green-800 text-white text-center transition duration-300 transform hover:scale-105 px-4 py-2 rounded-md font-normal"
                           onClick={handleSummit}>
                           Confirmer ma reservation
                        </button>



                     </div>


                  </div>


                  <div
                     className="flex flex-col lg:flex-col top-12 md:top-0  rounded-md md:p-1  mx-auto w-[80%] md:w-[65%] h-[98%]    ">
                     <div
                        className="relative w-[125%] -left-10 md:left-0 md:w-[100%] h-[30%] md:h-[48%]  space-y-2 md:space-y-0   ">

                        <div className=" w-full h-[85%] p-2 flex  justify-between   ">
                           <div className=" w-[50%] md:w-[30%] h-[100%]  flex items-center justify-center  ">
                              <div className="flex-col  items-center justify-center relative w-[105%] h-[110%]  ">
                                 <label
                                    htmlFor="imageInput"
                                    className={isSubmit && !selectedImage1 ?
                                       "relative w-[100%] md:w-[50%] lg:w-[100%] h-[98%] md:h-[80%] lg:h-[98%] md:mt-8 lg:mt-0 bg-transparent border border-red-600  rounded-full flex items-center justify-center cursor-pointer group "
                                       : "relative w-[100%]md:w-[30%] lg:w-[95%] h-[98%] md:h-[70%] lg:h-[100%] md:mt-8 lg:mt-0 bg-transparent border border-black/40 hover:border-green-600 rounded-full flex items-center justify-center cursor-pointer group"}
                                 >
                                    <input
                                       type="file"
                                       id="imageInput"
                                       name="file"
                                       accept=".jpg, .jpeg, .png"
                                       className="sr-only"
                                       onChange={handleFileChange}

                                    />
                                    <div
                                       className={selectedFile ? "hidden" : "relative h-[100%] inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"}>
                                       <Image
                                          src={picture.src}
                                          alt={`Logo `}
                                          width="600"
                                          height="600"
                                          className="object-contain object-center w-8 h-8 text-gray-600  "
                                       />
                                       <div
                                          className="text-black text-xs font-normal rounded text-center opacity-100 z-10"> Importer
                                          votre photo
                                       </div>
                                    </div>
                                    {selectedFile && (
                                       <img
                                          src={URL.createObjectURL(selectedFile)}
                                          alt="Image sélectionnée"
                                          className="relative h-[100%]  w-[100%]  rounded-full   z-40"
                                       />
                                    )}
                                 </label>

                              </div>
                           </div>

                           <div className="md:w-[70%] h-[100%] p-2 flex items-center justify-center  ">


                              <div
                                 className=" w-[50%] md:w-[55%] h-[120%] flex-row items-center justify-center p-1 -space-y-2 ">
                                 {input1.map((item) => (
                                    <div key={item.id} className="items-center relative h-[40%] lg:h-[43%] w-[100%]  ">
                                       {
                                          <div className="rounded-md  mx-auto relative h-[90%] w-[100%]" key={item.id}>
                                             <label
                                                className="text-[9px] md:text-[12px]  font-semibold text-black  relative h-[30%] w-[50%]">{item.label}</label>

                                             <div className=" relative h-[60%] w-[100%]   ">
                                                <input
                                                   placeholder={item.placeholder}
                                                   name={item.name}
                                                   className={isSubmit && item.error ? "text-[9px] md:text-[16px] relative h-[90%] w-[90%] text-black border rounded-[10px] border-red-500 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600"

                                                      : item.className}
                                                   type={item.type}
                                                   onChange={(e) => handleChange(e)}
                                                   value={item.value}
                                                />

                                             </div>
                                             <div>
                                             </div>

                                          </div>
                                       }
                                       {/*</div>*/}
                                    </div>
                                 ))}

                              </div>
                              <div
                                 className=" w-[50%] md:w-[50%] h-[120%]  flex-row items-center justify-center p-1 -space-y-2 ">
                                 {input2.map((item) => (
                                    <div key={item.id}
                                         className="items-center relative h-[40%] lg:h-[43%] w-[120%] md:w-[100%]     ">
                                       {
                                          <div className="rounded-md  mx-auto relative h-[90%] w-[100%]" key={item.id}>
                                             <label
                                                className="text-[9px] md:text-[12px]  font-semibold text-black  relative h-[30%] w-[100%] ">{item.label}</label>

                                             <div className=" relative h-[60%] w-[100%]   ">
                                                <input
                                                   placeholder={item.placeholder}
                                                   name={item.name}
                                                   className={isSubmit && item.error ?
                                                      "text-[9px] md:text-[16px] relative h-[90%] w-[90%]  text-black border rounded-[10px] border-red-600 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600"
                                                      : item.className}
                                                   type={item.type}
                                                   onChange={(e) => handleChange2(e)}
                                                   value={item.value}
                                                />

                                             </div>
                                             <div>
                                             </div>

                                          </div>
                                       }
                                       {/*</div>*/}
                                    </div>
                                 ))}

                              </div>


                           </div>


                        </div>
                     </div>


                     <div className="relative -left-8 md:left-0 w-[120%] md:w-[100%]  h-[48%] md:h-[58%] -top-4   ">
                        {input3.map((item) => (
                           <div key={item.id}
                                className="-left-8 md:left-24  relative h-[24%] top-2    w-[120%] md:w-[80%]  mx-auto   ">

                              {item.type === 'select' ? (
                                    <div className="h-[80%] w-[80%] mx-auto  cursor-pointer">
                                       <label
                                          className="text-[9px] md:text-[12px] font-[poppins] font-semibold text-black  relative h-[30%] w-[50%]">{item.label}</label>
                                       <select
                                          key={item.id}
                                          className={isSubmit && item.error ?
                                             "text-[9px] md:text-[16px] relative h-[80%] w-[100%] text-black border rounded-[10px] border-red-500 bg-transparent py-2 px-4 focus:outline-none focus:border-green-600"
                                             : item.className}
                                          name={item.name}
                                          onChange={handleChange /* Remplacez cela par votre logique */}
                                          value={values.genre || ""}
                                       >

                                          {input3[1].options.map((option) => (
                                             <option
                                                key={option.value}
                                                value={option.text}
                                             >
                                                <div className="flex items-center text-center mx-auto">
                                                   {option.text}
                                                </div>
                                             </option>
                                          ))}

                                       </select>

                                       {/*<div>*/}
                                       {/*   {isSubmit && item.error ? (*/}
                                       {/*      <div className="text-[70%] text-red-600 ">{item.error}</div>*/}
                                       {/*   ) : null}*/}
                                       {/*</div>*/}
                                    </div>
                                 ) :
                                 (
                                    <div
                                       className="rounded-md  relative h-[80%] md:h-[100%] w-[80%] mx-auto   "
                                       key={item.id}>
                                       <label
                                          className="text-[9px] md:text-[12px] font-[poppins] font-semibold text-black  relative h-[30%] w-[50%]">{item.label}</label>

                                       <div className="relative w-[100%] h-[70%]  ">
                                          <input
                                             placeholder={item.placeholder}
                                             name={item.name}
                                             className={isSubmit && item.error ?
                                                "text-[9px] md:text-[15px] relative w-[100%] h-[88%] py-2 px-4 text-black border rounded-[10px] border-red-500 bg-transparent py-2 px-4 h-8 focus:outline-none focus:border-green-600"
                                                : item.className}
                                             type={item.type}
                                             onChange={(e) => handleChange(e)}
                                             value={item.value}
                                             // defaultValue = {item.defaultValue}
                                          />
                                       </div>
                                       <div>

                                       </div>

                                    </div>
                                 )


                              }


                              {/*</div>*/}
                           </div>
                        ))}


                     </div>

                     <div
                        className="relative block md:hidden w-[100%] h-[20%] md:h-[30%] text-sm items-center left-10 -top-10 flex md:justify-evenly ">
                        <button
                           className="relative  md:w-[90%] lg:w-[80%] h-[40%] md:h-[60%] lg:h-[30%] bg-sky-700 hover:bg-green-800 text-white text-center transition duration-300 transform hover:scale-105 px-4 py-2 rounded-md font-normal"
                           onClick={handleSummit}>
                           Confirmer ma reservation
                        </button>


                     </div>


                  </div>


               </div>

            </div>

         </div>


      </>
   )
}