import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./router/AppRoutes"
import "@styles/app.scss"
import { ScrollProvider } from "@context/ScrollProvider"

export const App = () => {
  return (
   <>
   <ScrollProvider>
   <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ScrollProvider>
   </>
  )
}
