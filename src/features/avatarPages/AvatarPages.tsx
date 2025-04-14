import AvatarList from "./components/avatarList/AvatarList"
import "./avatarPages.scss"
import streamixLogo from "@assets/logofooter.svg"
import { ButtonHoverInfo } from "@components/atoms"
function AvatarPages() {
  return (
    <section className="profile-selector">
        <article className="profile-selector__container">
           
                <img className="profile-selector__logo" src={streamixLogo} alt="streamix" />
          
           
                <h1 className="profile-selector__title">¿quien esta viendo ahora?</h1>
            
            <AvatarList></AvatarList>
              {/* component button */}
              <ButtonHoverInfo> Administrar Perfiles </ButtonHoverInfo>
           
        </article>
    </section>
  )
}

export default AvatarPages
