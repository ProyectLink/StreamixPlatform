import AvatarList from "./components/avatarList/AvatarList"
import "./avatarPages.scss"
function AvatarPages() {
  return (
    <section className="profile-selector">
        <article className="profile-selector__container">
           
                <img className="profile-selector__logo" src="" alt="" />
          
           
                <h1 className="profile-selector__title">¿quien esta viendo ahora?</h1>
            
            <AvatarList></AvatarList>
              {/* component button */}
            <button>administrar perfiles</button>
      
        </article>
    </section>
  )
}

export default AvatarPages
