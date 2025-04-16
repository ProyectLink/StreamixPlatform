
import { Footer } from "@components/organisms"
import { SectionGenres } from "./components/section-genres/SectionGenres"
import { ButtonHoverInfo } from "@components/atoms/Button/button-hover-information/ButtonHoverInfo"
import { CardMovie } from "@components/molecules/card-movie/CardMovie"
import { Navbar } from "@components/organisms/navbar/Navbar"


export const HomePage = () => {
  return (
<>
<Navbar  />
{/* <CardMovie /> */}
  {/* <ButtonHoverInfo> 
    
    aaa
    </ButtonHoverInfo> */}
 <SectionGenres/>
 
  <Footer/>
  </>
  
  )
}
