import "./avatarItems.scss"

function AvatarItems({usuario , icon } : {usuario : string , icon : string}) {
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
