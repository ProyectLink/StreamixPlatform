import "./avatarItems.scss"
import { IAvatarItems } from "@features/avatarPages/index"
function AvatarItems({usuario , icon } : IAvatarItems) {
  return (
   <section className="profile-avatar">
    <div className="profile-avatar__background" >
          <img className="profile-avatar__image" src={icon} alt={`${usuario} avatar`} />
    </div>
         <span className="profile-avatar__user">{usuario}</span>
   </section>
  )
}

export default AvatarItems
