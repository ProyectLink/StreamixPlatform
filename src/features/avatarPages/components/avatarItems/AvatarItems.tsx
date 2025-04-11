

function AvatarItems({usuario , icon } : {usuario : string , icon : string}) {
  return (
   <section className="profile-avatar">
          <img className="profile-avatar__image" src={icon} alt={`${usuario} avatar`} />
         <span className="profile-avatar__user">{usuario}</span>
   </section>
  )
}

export default AvatarItems
