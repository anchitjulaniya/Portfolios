import profile_photo from "../assets/images/profile_photo.jpeg";




const Aside = () => {
  return (
    <aside className="sidebar" data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            alt="Anchit Julaniya"
            src={profile_photo}
            style={{
              borderRadius: "50%",
            }}
            width="80"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Anchit Julaniya">
            Anchit Julaniya
          </h1>
          <p className="title">Web developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn="">
          <span>Show Contacts</span>
          <ion-icon name="chevron-down" />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                className="contact-link"
                href="mailto:AnchitJulaniyaOfficial@example.com"
              >
                AnchitJulaniyaOfficial@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a className="contact-link" href="tel:+917354348662">
                +91-7354348662
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">Oct 24, 2000</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Jail Road, Rajgarh</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a className="social-link" href="https://github.com/anchitjulaniya">
              <ion-icon name="logo-github" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              href="www.linkedin.com/in/anchit-julaniya-b13632175"
            >
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="#">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
