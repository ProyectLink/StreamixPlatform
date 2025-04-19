import AvatarItems  from "../avatarItems/AvatarItems"
import AvatarAdd from "../avatarAdd/AvatarAdd"
import { avatar } from "@features/avatarPages/data/avatar"
import { useState } from "react"
import { AvatarProps } from "../../props"
import iconDefault from "@assets/Union.svg"
import "./avatarList.scss"

function AvatarList() {
const [profileAvatar , setProfileAvatar] = useState <AvatarProps[]>(avatar || [])

let accountCreated = profileAvatar.map( ({id , usuario , perfiles}) => (
<AvatarItems
key={id}
usuario={usuario}
icon={perfiles.icon}
/>
))

  return (
    <section className="container-perfil">
      {accountCreated}
     {profileAvatar.length < 2 && <AvatarAdd
      text="Nueva Cuenta"
      icon={iconDefault}
      />}
    </section>
  )
}

export default AvatarList
