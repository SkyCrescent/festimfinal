import { writeFile } from 'fs/promises'
import  { NextResponse } from "next/server";
//import axios, {AxiosHeaders as Buffer} from "axios";

//import f from "../../../public/media/concerned"

export async function POST(req){
   const data = await  req.formData()
   const file = data.get('file');
   if(!file){
      return NextResponse.json ({"msg":"pas de image",success:false})
   }
   const byteData = await file.arrayBuffer();
   const buffers = Buffer.from (byteData)
   const path = `./public/media/concerned/${file.name}`
   await  writeFile(path,buffers)
   return NextResponse.json({"msg":"c bn ",success:true})
}