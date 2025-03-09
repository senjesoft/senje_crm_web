import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"



export default function Header () {
    return (
        <header className="w-full bg-blue-950 items-center flex justify-between p-4 mb-10">
            
            <div className="items-center text-start p-2 flex gap-x-4">
                <SidebarTrigger className="cursor-pointer"/>
                <p className="font-semibold text-white text-sm">Empresa X</p>
            </div>


            <div className="flex gap-x-4">

                <div className="flex flex-col gap-x-4 text-end">
                    <p className="text-white text-sm font-semibold">Aldmiro de Jesus Pasagem</p>
                    <p className="text-white text-[12px]">Administrador</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    
                        <Avatar className="border-2 border-white cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AP</AvatarFallback>
                        </Avatar>
                        
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">
                            Perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Planos de Assinatura
                        </DropdownMenuItem>
                        
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Gestão de utilizadores</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem className="cursor-pointer">Utilizadores</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">Grupos de Utilizadores</DropdownMenuItem>
                                
                            </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem className="cursor-pointer">
                            Departamentos
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Equipas
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                            Definições
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Suporte</DropdownMenuItem>
                        <DropdownMenuItem disabled>API (Brevemente)</DropdownMenuItem>
                        <DropdownMenuItem disabled>Integrações (Brevemente)</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 hover:text-red-600 cursor-pointer">
                           <Link href="/login">Sair</Link> 
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </header>
     )
     }