'use client'

import Link from "next/link"
import { useState, FormEvent } from "react"
import { toast } from "sonner"


export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Email:', email) 
    console.log('Password:', password)
    if(email === "aldprogramer@gmail.com" && password === "123456") {
        // Redirecionar para a dashboard
        <Link href="/dashboard" />

        } else {
            toast.error("Dados de acesso inválidos", {
                //description: "Sunday, December 03, 2023 at 9:00 AM",
                className: "b-red-600",
                action: {
                  label: "X",
                  onClick: () => console.log("Undo"),
                },
                position: "top-right",
              })
            
            }
    }

    return (

        <form onSubmit={handleSubmit} className="w-[60%] flex flex-col space-y-6 justify-center ">
            <label>
            <p className="font-semibold mb-2">E-mail</p>
            <input
                name="email"
                className="border-2 border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-red-800"
                placeholder="Insira o seu e-mail"
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </label>
            <label>
            <p className="font-semibold mb-2">Palavra-passe</p>
            <input
                name="password"
                required
                type="password"
                className="border-2 border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-red-800"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </label>

            <Link href={"#"} className="text-blue-700 flex justify-end">Esqueci minha palavra-passe</Link>
            <button 
                className="bg-red-700 text-white rounded-md px-4 py-2 hover:bg-red-800 cursor-pointer font-semibold"
                type="submit">
                Login
            </button>
        </form>
        )
    }