import SignInForm from "@/components/signin/SignInForm";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Criar Conta - Senje CRM",
    description: "Impacte a vida dos seus clientes",
  };
export default function CreateAccount () {
  return (
    <section className="flex content-center w-full h-full text-[#474747] text-sm">

        <div className="flex justify-center items-center flex-col w-full h-full">
            <div className="text-end font-bold text-2xl mb-10">
                SENJECRM LOGO
            </div>
            <div className="flex flex-col mb-10 space-y-4 justify-center items-center">
                <h1 className="text-xl font-semibold">Criar Conta</h1>
                <p>Crie já a sua conta e começe a cuidar melhor dos seus clientes</p>
            </div>
            
            <SignInForm />

            <div className="justify-center items-center text-center p-10 flex w-72 ">
                <Link href="/login" className="text-blue-600 hover:underline">
                    Voltar ao Login
                </Link>
            </div>
        </div>
    </section>
  ) 
}