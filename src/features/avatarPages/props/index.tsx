import { JSX } from "react";

 export interface ChildrenElement {
    children : JSX.Element
}
export interface AvatarProps {
    id : number
    usuario : string
    perfiles : Perfile
}

export interface Perfile {
    id : number
    avatarName : string
    icon : string
}