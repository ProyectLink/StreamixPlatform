import { RippleButton } from "@components/atoms/Button/GradientButton/RippleButton"
import { CategoryCard } from "@components/molecules/CategoryCard/CategoryCard"
import { Footer } from "@components/organisms/Footer/Footer"


export const HomePage = () => {
  return (
<>

  <RippleButton  >
    Suscribete
  </RippleButton>

  <CategoryCard key="pruebasss" imageUrl="prueba.jpg" title="prueba imagen" isLoading={true}/>

  <Footer/>
  </>
  
  )
}
