'use client'

import Link from "next/link"
import { useState, FormEvent } from "react"
import { toast } from "sonner";


export default function SignInForm () {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('')
    const [organization, setOrganization] = useState('')
    const [phone, setPhone] = useState('')
    const [nif, setNif] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [otp, setOtp] = useState('')

    function handleNextStep() {
        if (name === "" || organization === "") {
            toast.warning("Preencha todos os campos antes de continuar.", {
                position: "bottom-right",
            });
            return;
        }
        setStep(2);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if(otp === "123456" && phone) {
            return <Link href="/complete-profile" />
        } else {
            toast.error("Código OTP Errado", {
                //description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "X",
                  onClick: () => console.log("Undo"),
                },
                position: "top-right",
              })
            
            }
    }

    return (

        <form 
            onSubmit={handleSubmit} 
            className="p-10 flex flex-col items-center space-y-6 border-2 rounded-lg shadow">
            {step === 1 && (
                <>
                <div className="flex justify-start gap-10 items-start">
                    <label>
                        <p className="font-semibold mb-2">Seu Nome</p>
                        <input
                            name="name"
                            className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                            required
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </label>

                    <label>
                        <p className="font-semibold mb-2">Nome da Empresa</p>
                        <input
                            name="organization"
                            className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                            required
                            type="text"
                            value={organization}
                            onChange={e => setOrganization(e.target.value)} />
                    </label>
                </div><div className="flex justify-start gap-10 items-start">
                        <label>
                            <p className="font-semibold mb-2">NIF (Número de Identificação Fiscal)</p>
                            <input
                                name="nif"
                                className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                                required
                                type="text"
                                value={nif}
                                onChange={e => setNif(e.target.value)} />
                        </label>

                        <label>
                            <p className="font-semibold mb-2">E-mail da empresa</p>
                            <input
                                name="email"
                                placeholder="exemplo@empresa.com"
                                required
                                type="emal"
                                className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </label>
                    </div><div className="flex justify-start gap-10 items-start">
                        <label>
                            <p className="font-semibold mb-2">Contacto Telefónico</p>
                            <input
                                name="phone"
                                required
                                type="text"
                                className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                                value={phone}
                                onChange={e => setPhone(e.target.value)} />
                        </label>

                        <label>
                            <p className="font-semibold mb-2">Palavra-passe</p>
                            <input
                                name="password"
                                required
                                type="password"
                                className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    
                    <div className="flex justify-start gap-10 items-center">
                        <label>
                            <p className="font-semibold mb-2">Repita a Palavra-passe</p>
                            <input
                                name="password"
                                required
                                type="password"
                                className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)} />
                        </label>
                        <label className="flex items-center w-72">
                            <input type="checkbox" className="mr-2" />
                            <p className="text-blue-700">Concordo com os <Link href="#">Termos de uso</Link></p>
                        </label>
                    </div>
                    </>
            )}

            {step === 2 && (
                <>
                <div className="flex flex-col  justify-center gap-x-2 items-center">
                    <p>Foi enviado um código de confirmação para o endereço</p><p className="font-semibold">{email}</p>
                    
                    <p>Digite o mesmo no campo abaixo</p>
                </div>
                
                <input
                 name="otp"
                 required
                 type="text"
                 className="border-2 border-gray-300 rounded-md w-72 px-4 py-2 focus:outline-none focus:border-red-800"
                 value={otp}
                 onChange={e => setOtp(e.target.value)}
                
                />
                </>
            )}


            
            {step === 1 ? (
                <button 
                    className="bg-red-700 w-40 text-white rounded-md px-4 p-2 hover:bg-red-800 cursor-pointer font-semibold"
                    onClick={handleNextStep}>
                    Seguinte
                </button>
            ) :
                <button 
                    className="bg-red-700 w-40 text-white rounded-md px-4 p-2 hover:bg-red-800 cursor-pointer font-semibold"
                    type="submit"
                    //onClick={handleSubmit}
                >
                    Finalizar
                </button>
            }
        </form>
        )
    }