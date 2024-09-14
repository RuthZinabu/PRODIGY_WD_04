import mongoose from 'mongoose';
import connectDB from "@/app/lib/mongodb"
import Contact from "@/app/models/contact"
import { NextResponse } from "next/server";


export async function POST(req){
    const {  firstName,
        lastName,
        email,
        phone,
        message }  = await req.json();

         try{
          await connectDB()
          await Contact.create({firstName,lastName, email, phone, message})

          return NextResponse.json({
            msg: ["Message sent successfuly"], success: true
          })
         }catch(error){
            if (error instanceof mongoose.Error.ValidationError){
                let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
             console.log(errorList)
            return NextResponse.json({ msg: errorList })
            }else {
                return NextResponse.json({ msg: "Unable to send message."})
            }
         }

 
}