import AvatarList from "./components/avatarList/AvatarList"
function AvatarPages() {
  return (
    <section>
        <article>
            <section> 
                <img src="" alt="streaMixPhoto" />
            </section>
            <article>
                <h1>¿quien esta viendo ahora?</h1>
            </article>
            <AvatarList></AvatarList>
        <section>
            <button>administrar perfiles</button>
        </section>
        </article>
    </section>
  )
}

export default AvatarPages
