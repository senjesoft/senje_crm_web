'use client'
import { Building2Icon, CircleDollarSignIcon, CircleCheckBigIcon, LayoutDashboardIcon, BookUserIcon, ChartNoAxesCombinedIcon, MessageSquareWarningIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/app/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Tarefas",
    url: "/app/tarefas",
    icon: CircleCheckBigIcon,
  },
  {
    title: "Negócios",
    url: "/app/negocios",
    icon: CircleDollarSignIcon,
  },
  {
    title: "Empresas",
    url: "/app/empresas",
    icon: Building2Icon,
  },
  {
    title: "Pessoas",
    url: "/app/pessoas",
    icon: BookUserIcon,
  },
  {
    title: "Relatórios",
    url: "/app/relatorios",
    icon: ChartNoAxesCombinedIcon,
  },
]

export function AppSidebar() {

  const pathname = usePathname()
  const isActive = (path: string) =>
    pathname === path ? 'text-[#0120FF] font-bold' : 'text-gray-900' // Verificar rota ativa

  
  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <SidebarHeader className="p-4 border-b-2">
          <p className="text-3xl font-bold text-center">Senje CRM Logo</p>
        </SidebarHeader>

        <SidebarGroup className="mb-20">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="h-10 text-md hover:text-blue-600 active:text-blue-600" asChild>
                    <Link href={item.url} className={`${isActive(item.url)}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarFooter className="p-4">
          <p className="text-sm text-gray-600 mb-2">Versão 0.1.0 (beta)</p>
          <Link href="#" className="flex gap-x-1 text-sm text-blue-600">
              <MessageSquareWarningIcon /> 
              <p className="text-sm text-gray-600">Feedback</p>
          </Link>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
