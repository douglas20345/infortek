// Autor: Marcelo Douglas
// Desenvolvido por: Sr. Wachelo


import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";

// Metadados para a página
export const metadata = {
  title: 'Página 404 da Infortek',
  description: 'Desenvolvido por Marcelo Douglas',
}

// Componente principal para a página 404
export default function NotFound() {
  return (
    // Componente de layout contendo seções de navegação e erro
    <Layout>
      <BreadcrumbSection header='Página 404' title='404'/>
      <ErrorSection type='Página'/>
    </Layout>
  )
}
