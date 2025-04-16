import { secureHeapUsed } from "crypto"
import "./avatarAdd.scss"
import { IAvatarAdd } from "@features/avatarPages/index"
const AvatarAdd = ({text , icon} : IAvatarAdd) => {
  return (
   <section className="profile-AddAvatar">
    <article className="profile-AddAvatar__image">
      <img className="profile-AddAvatar__icon" src={icon} alt="" />
    </article>
    <span className="profile-AddAvatar__text">{text}</span>
   </section>
  )
}

export default AvatarAdd
