const openingHours = [
  ['Mån', '11.00-20.00'],
  ['Tis', '11.00-20.00'],
  ['Ons', '11.00-20.00'],
  ['Tor', '11.00-20.00'],
  ['Fre', '11.00-21.00'],
  ['Lör', '12.00-21.00'],
  ['Sön', '12.00-20.00'],
]

function Contact() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="contact-info">
          <section>
            <h2>Öppettider</h2>
            <table>
              <tbody>
                {openingHours.map(([day, hours]) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <div className="contact-link">
            <span>Kontakta oss på: 090-52077</span>
            <a className="link-button" href="tel:09052077">
              Ring oss!
            </a>
          </div>
        </div>

        <div className="location-info">
          <a
            className="link-button"
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x467c5bfdd0604081:0xe64bd6e5c6bf7b76"
            target="_blank"
            rel="noreferrer"
          >
            Hitta oss här!
          </a>
          <img className="map" src="/images/map.png" alt="Karta till Fatima Sushi Bar" />
        </div>
      </div>
      <div className="copyright">Trademark Fatima.co</div>
    </footer>
  )
}

export default Contact
