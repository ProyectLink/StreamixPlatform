export const avatar = [{
    id : 1,
    usuario : "abraham",
    perfiles : [{
        id : 1,
        avatarName : "gatito",
        icon : "url/icon"
    }]
}
]

avatar.map(item => item.perfiles[0].avatarName)