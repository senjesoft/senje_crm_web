import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Login - Senje CRM",
    description: "Impacte a vida dos seus clientes",
  };
export default function Login () {
  return (
    <section className="flex justify-between items-center w-full h-full text-[#474747] text-sm">
         <div className="flex bg-blue-600 w-screen h-screen">
            <Image src={"/loginbanner.jpg"} alt="Banner Login Senje CRM" width={700} height={100} />
        </div>

        <div className="p-10 flex justify-center items-center flex-col w-full h-full">
            <div className="text-end font-bold text-2xl mb-10 -mt-10">
                SENJECRM LOGO
            </div>
            <div className="flex flex-col mb-10 space-y-4 justify-center items-center">
                <h1 className="text-xl font-semibold">Iniciar Sessão</h1>
                <p>Faça login com os seus dados de acesso</p>
            </div>
            <LoginForm />

            <p className="mt-10">Ainda não tem conta?</p>
            <Link href="/create-account" className="text-blue-600">Cria conta</Link>
        </div>
    </section>
  ) 
}