import CompleteProfileSteps from "@/components/complete-profile/complete-profile-steps";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Completar Perfil - Senje CRM",
    description: "Impacte a vida dos seus clientes",
  };

export default function CompleteProfile () {

  return (
    <section className="flex flex-col justify-center items-center w-full h-full text-[#474747] text-sm">
        
        <CompleteProfileSteps />
        
    </section>
  ) 
}