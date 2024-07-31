import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import {PageWrapper} from '../../styles/global/default'
import Footer from "../footer/Footer"

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header/>
      {/* Conteúdo principal */}
      <main style={{
        minHeight: "100vh"
      }}>

        <Outlet/>

      </main>

      {/* Fim do conteúdo principal */}
      <Footer/>
    </PageWrapper>
  )
}

export default BaseLayout