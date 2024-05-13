// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';
const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Dr. A.P.J. Abdul Kalam University, Indore
            </h4>
            <span>2018 - 2022</span>
            <p className="timeline-text">
              B.Tech - Computer Science and Engineering - 7.28 CGPA
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Chitransh Convent School, Jirapur
            </h4>
            <span>2017 - 2018</span>
            <p className="timeline-text">12th - MPBOARD - 60.2%</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Swami Vivekanad Public School, Rajgarh
            </h4>
            <span>2015 - 2016</span>
            <p className="timeline-text">10th - CBSE - 9.2 CGPA</p>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">DSA</h5>
              <data value={80}>80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JavaScript</h5>
              <data value={70}>70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">ReactJs</h5>
              <data value={90}>90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Tailwind CSS</h5>
              <data value={50}>50%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "50%" }} />
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
