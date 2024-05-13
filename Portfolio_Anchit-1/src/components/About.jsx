import icondesign from "../assets/images/icon-design.svg"
import icondev from "../assets/images/icon-dev.svg"
import computer from "../assets/images/computer.png"
import versioncontrol from "../assets/images/version-control.png"





const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          "I'm a frontend developer proficient in HTML, CSS, Tailwind CSS,
          JavaScript, and React. With mastery in these frontend technologies,
          I'm passionate about crafting seamless and engaging user experiences."
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={icondesign}
                alt="design icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={icondev}
                alt="Web development icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={computer}
                alt="mobile app icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Programming</h4>
              <p className="service-item-text">
                Leveraging code to build innovative solutions and solve complex
                problems.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src={versioncontrol}
                alt="camera icon"
                width={60}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Version Control</h4>
              <p className="service-item-text">
                Collaborating seamlessly and tracking changes with precision for
                streamlined development workflows.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
