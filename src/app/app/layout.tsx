import { cookies } from "next/headers"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../../components/AppSidebar"
import Header from "@/components/header/header"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-screen">
        <Header />
        {children}
        <p className="text-gray-600 text-sm text-center mt-10">&copy; Copyright 2025 - Todos Direitos Reservados a Senjesoft - Tecnologia e Inovação (SU), Lda</p>
      </main>
    </SidebarProvider>
  )
}
