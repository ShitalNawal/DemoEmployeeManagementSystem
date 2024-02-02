"use client"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const handleclick: any = () =>{
    router.push("/login")
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500	">
     <div className="text-4xl  font-extrabold text-white" >
      <h3>Employee Details Management System</h3>
     </div>
     <p className="text-lg text-center text-black-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt itaque reprehenderit doloremque quasi magnam error repudiandae eveniet aperiam minus neque velit molestiae saepe maiores, voluptates ratione sed recusandae porro!</p>

     <button 
     type="submit"
     className="text-white font-bold py-2 px-4 rounded border bg-orange-400 hover:bg-orange-500"
     onClick={handleclick}
     >
      Employee Details
      
      </button>
      
    </main>
  );
}
