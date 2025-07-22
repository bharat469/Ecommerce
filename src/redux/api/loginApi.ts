import { auth } from "@/src/config/firebaseConfig"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"


interface payloadData{
    email:string,
    password:string
}

export const EmailPasswordApi=async(payload:payloadData)=>{
    try{
        const emailAuthenticated = await signInWithEmailAndPassword(auth,payload.email,payload.password)
        if(emailAuthenticated){
            console.log(emailAuthenticated,'EMAIL IS AUTHENTICATED 🔥🔥🔥🔥')
            return emailAuthenticated
        }

    }
    catch(error){
        if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error('Unknown error occurred');
          }
    }
}
export const SiginEmailPasswordApi=async(payload:payloadData)=>{
    try{
        const emailAuthenticated = await createUserWithEmailAndPassword(auth,payload.email,payload.password)
        if(emailAuthenticated){
            console.log(emailAuthenticated,'EMAIL IS AUTHENTICATED 🔥🔥🔥🔥')
            return emailAuthenticated
        }

    }
    catch(error){
        if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error('Unknown error occurred');
          }
    }
}