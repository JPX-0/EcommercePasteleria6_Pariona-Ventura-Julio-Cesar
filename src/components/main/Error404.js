import e404 from "../../assets/error404.webp"

const Error404 = () => {
  return (
    <section class="error__figure">
      <p className="main__title">¡Ups! Página no encontrada</p>
      <img src={e404} alt="Error, página no encontrada" class="error__img" />
    </section>
  )
}
export default Error404;