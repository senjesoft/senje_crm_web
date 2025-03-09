'use client'
import { useState } from "react";




export default function CompleteProfileSteps () {
    const [step, setStep] = useState(1);

    function accessAccount () {
       window.location.href = "/app/dashboard"
    }



  return (
    <section className="flex flex-col justify-center items-center w-full h-full text-[#474747] text-sm">
        
        <h1 className="text-2xl font-semibold mb-6 mt-10">Complete seu perfil</h1>
        <p className="text-sm">Para começar, precisamos de algumas informações sobre você e sua empresa</p>
        
        {step === 1 && (
           <div className="flex p-20 items-start flex-col w-[50%] h-full">
           <p className="bg-blue-600 p-1 px-3 rounded-full text-white font-semibold mb-6">Passo 1 de 4</p>

           <h2 className="text-xl font-semibold mb-2">Qual é a sua experiência com CRM?</h2>

               <div role="radiogroup">
                   <label>
                       <input type="radio"
                       name="profileType"
                       value="individual"
                       checked={true} 
                       />
                       <span className="ml-2">Já usei um CRM e tenho conhecimentos sólidos</span>
                       <br />
                       <input type="radio"
                       name="profileType"
                       value="business" 
                       />
                       <span className="ml-2">Nunca usei um CRM</span>
                   </label>
           </div>

           <h2 className="text-xl font-semibold mb-2 mt-6">Qual é o seu cargo?</h2>
           <select className="w-full h-10 border border-gray-300 rounded-md px-2">
               <option value="option1">Empresário / CEO</option>
               <option value="option2">Director Comercial</option>
               <option value="option3">Gestor de Vendas</option>
               <option value="option4">Gestor de Marketing</option>
               <option value="option5">Profissional de TI</option>
               <option value="option6">Outro</option>
           </select>
           
           <button
           onClick={() => setStep(2)}
           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
               Continuar
           </button>
       </div>
        )}

        {step === 2 && (
           <div className="flex p-20 items-start flex-col w-[50%] h-full">
           <p className="bg-blue-600 p-1 px-3 rounded-full text-white font-semibold mb-6">Passo 2 de 4</p>

           <h2 className="text-xl font-semibold mb-2">Qual é ramo de actuação da sua empresa</h2>
           <select className="w-full h-10 border border-gray-300 rounded-md px-2">
               <option value="option1">Tecnologias</option>
               <option value="option2">Comércio geral</option>
               <option value="option3">Beleza e Estética</option>
               <option value="option4">Saúde e Bem-Estar</option>
               <option value="option5">Formação Profissinal / Educação</option>
               <option value="option6">Outro</option>
           </select>
              

           <h2 className="text-xl font-semibold mb-2 mt-6">Quantos funcionários tem?</h2>
           <select className="w-full h-10 border border-gray-300 rounded-md px-2">
               <option value="option1">de 2 a 5</option>
               <option value="option2">De 6 a 10</option>
               <option value="option3">De 11 a 20</option>
               <option value="option4">+ de 20</option>
           </select>
           
           <div className="flex gap-10 w-full justify-between">
                <button
                onClick={() => setStep(1)}
                className="text-blue-600 border-blue-700 border-2 font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
                    Voltar
                </button>

                <button
                onClick={() => setStep(3)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
                    Continuar
                </button>
           </div>
       </div>
        )}

        {step === 3 && (
           <div className="flex p-20 items-start flex-col w-[50%] h-full">
           <p className="bg-blue-600 p-1 px-3 rounded-full text-white font-semibold mb-6">Passo 3 de 4</p>

           <h2 className="text-xl font-semibold mb-2">O que pretende melhorar/resolver com o uso do SenjeCRM?</h2>
           <select className="w-full h-10 border border-gray-300 rounded-md px-2">
               <option value="option1">Gestão Comercial</option>
               <option value="option2">Atendimento ao Cliente</option>
               <option value="option3">Beleza e EOrganização de Contactos</option>
               <option value="option4">Oportunidades de Negócio</option>
               <option value="option5">Formação Profissinal / Educação</option>
               <option value="option6">Outro</option>
           </select>

            <div className="flex gap-10 w-full justify-between">
                <button
                onClick={() => setStep(2)}
                className="text-blue-600 border-blue-6 border-2 font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
                    Voltar
                </button>

                <button
                onClick={() => setStep(4)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
                    Continuar
                </button>
           </div>
       </div>
        )}

        {step === 4 && (
           <div className="flex p-20 items-start flex-col w-[50%] h-full">
           <p className="bg-blue-600 p-1 px-3 rounded-full text-white font-semibold mb-6">Pass 4 de 4</p>

           <h2 className="text-xl font-semibold mb-2">Como  nos conheceu?</h2>
           <select className="w-full h-10 border border-gray-300 rounded-md px-2 mb-6">
               <option value="option1">Pelas Redes Sociais(Facebook, Linkedin, Instagram)</option>
               <option value="option2">Pelo Website</option>
               <option value="option3">Por indicação (Amigo, familiar, colega, parceiro de negócios)</option>
               <option value="option4">Indicação de um influenciador</option>
               <option value="option5">Evento</option>
               <option value="option6">Busca pela internet</option>
           </select>

           <h2 className="text-xl font-semibold mb-2">Qual é seu WhatsApp?</h2>
           <label className="w-full">
                <input
                    name="password"
                    required
                    type="password"
                    className="border-2 w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-red-800"
                    />
            </label>
            <label className="flex items-center w-full gap-2 mt-6">
                <input type="checkbox"/>
                <p className="text-blue-700 cursor-pointer">Quero ser contactado pelo WhatsApp</p>
            </label>

            <div className="flex gap-10 w-full justify-between">
                <button
                onClick={() => setStep(3)}
                className="text-blue-600 border-blue-600 border-2 font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
                    Voltar
                </button>

                <button
                onClick={() => accessAccount()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer rounded-md w-full h-10 mt-6">
                    Acessar a minha conta
                </button>
           </div>
       </div>
        )}


        
    </section>
  ) 
}