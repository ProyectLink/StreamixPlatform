import AvatarItems from "../avatarItems/AvatarItems"
import { avatar } from "../../data/avatar"
import { useState } from "react"
import { AvatarProps } from "../../props"
import iconDefault from "@assets/Union.svg"
import "./avatarList.scss"

function AvatarList() {
const [profileAvatar , setProfileAvatar] = useState <AvatarProps[]>([])


  return (
    <section className="container-perfil">
      {profileAvatar.length !== 0 ? 
      profileAvatar.map(({id , usuario , perfiles})=> (
        <AvatarItems
        key={id}
        usuario={usuario}
        icon={perfiles.icon}
        />
      )) 
    : <AvatarItems 
    usuario="Nueva Cuenta"
    icon={iconDefault}
    />
    }
    </section>
  )
}

export default AvatarList
