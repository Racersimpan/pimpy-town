function Contact() {
  return (
    <section className="contact-page">
      <h1>Kontakta oss</h1>
      <form className="mail-form">
        <label htmlFor="name">Namn:</label>
        <input id="name" type="text" name="name" />

        <label htmlFor="email">E-mail:</label>
        <input id="email" type="email" name="email" />

        <label htmlFor="comment">Skriv här:</label>
        <textarea id="comment" name="comment" />

        <button className="mail-button" type="submit">
          Skicka
        </button>
      </form>
      <div className="copyright">Trademark Fatima.co</div>
    </section>
  )
}

export default Contact
