import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./router/AppRoutes"
import "@styles/app.scss"

export const App = () => {
  return (
   <>
   <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
   </>
  )
}
