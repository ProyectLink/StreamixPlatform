import AvatarItems from "../avatarItems/AvatarItems"
import { avatar } from "../../data/avatar"
import { useState } from "react"
import { AvatarProps } from "../../props"

function AvatarList() {
const [profileAvatar , setProfileAvatar] = useState <AvatarProps[]>(avatar)


  return (
    <section className="container-perfil">
      {profileAvatar.map(({id , usuario , perfiles})=> (
        <AvatarItems
        key={id}
        usuario={usuario}
        icon={perfiles.icon}
        />
      )) }
    </section>
  )
}

export default AvatarList
