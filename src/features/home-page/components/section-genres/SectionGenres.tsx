import { CategoryCard, SectionHeader } from "@components/molecules"

export const SectionGenres = () => {
  return (
    <section>
    <SectionHeader title="pruebas" />
    <CategoryCard key="pruebasss" imageUrl="prueba.jpg" title="prueba imagen" isLoading={true}/>
    </section>
  )
}
