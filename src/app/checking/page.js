
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ErrorMessage from "./errorMessage";
import Link from "next/link";
import { Button } from "@mui/base";
export default async function Checking (){
    const {getUser}=getKindeServerSession();
    const user=await getUser();
        
    return(
        <>
           {

            // (!user)?<ErrorMessage/>:redirect("/checking/pay")
            (!user)?<ErrorMessage/>:<Link href="https://payments-test.cashfree.com/links/m6qjeou88hd0" style={{textDecoration:"none",color:"black"}}>pay</Link>

            
           }

           
        </>
    )
}