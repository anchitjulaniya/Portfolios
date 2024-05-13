import todolist from "../assets/images/To_Do_List.png"
import texttospeech from "../assets/images/speech_to_Text.png"
import passwordgenerator from "../assets/images/password_generator.png"
import gemini from "../assets/images/gemini.png"
import resumebuilder from "../assets/images/Ai_resume_builder.png"
import pokemon from "../assets/images/pokemon_card.png"
import leaderboard from "../assets/images/leaderBoard.png"
import imagesearchapp from "../assets/images/image_search_app.png"
import hackerrank from "../assets/images/Hackerrank.png"





const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn="">
              All
            </button>
          </li>
          <li className="filter-item">
            <button data-filter-btn="">ReactJs</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn="">JavaScript</button>
          </li>
          <li className="filter-item">
            <button data-filter-btn="">HTML-CSS</button>
          </li>
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select="">
            <div className="select-value" data-selecct-value="">
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item="">All</button>
            </li>
            <li className="select-item">
              <button data-select-item="">ReactJs</button>
            </li>
            <li className="select-item">
              <button data-select-item="">JavaScript</button>
            </li>
            <li className="select-item">
              <button data-select-item="">HTML-CSS</button>
            </li>
          </ul>
        </div>
        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="ReactJs"
          >
            <a
              target="_blank"
              href="https://to-do-list-react-js-by-anchit-and-mohit.vercel.app/"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={todolist}
                  alt="To Do List"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">To Do List</h3>
              <p className="project-category">ReactJs</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="ReactJs"
          >
            <a
              target="_blank"
              href="https://text-to-speech-converter-by-anchit.netlify.app/"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={texttospeech}
                  alt="orizon"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Speech To Text Converter</h3>
              <p className="project-category">ReactJs</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="ReactJs"
          >
            <a
              target="_blank"
              href="https://main--password-generato-by-anchit.netlify.app/"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={passwordgenerator}
                  alt="fundo"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Password Generator</h3>
              <p className="project-category">ReactJs</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="JavaScript"
          >
            <a href="https://anchitjulaniya.github.io/JavaScriptProjects/GeminiClone/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={gemini}
                  alt="brawlhalla"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Gemini Clone</h3>
              <p className="project-category">JavaScript</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="JavaScript"
          >
            <a href="https://anchitjulaniya.github.io/JavaScriptProjects/Interview_Ready_With_AI/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={resumebuilder}
                  alt="dsm."
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">AI Resume Builder</h3>
              <p className="project-category">JavaScript</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="JavaScript"
          >
            <a href="https://anchitjulaniya.github.io/JavaScriptProjects/Pokemon%20Project/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={pokemon}
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Pokemon Card</h3>
              <p className="project-category">JavaScript</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="JavaScript"
          >
            <a href="https://anchitjulaniya.github.io/JavaScriptProjects/LeaderBoard/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={leaderboard}
                  alt="summary"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Cricket Leaderboard</h3>
              <p className="project-category">JavaScript</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="JavaScript"
          >
            <a href="https://anchitjulaniya.github.io/JavaScriptProjects/ImageSearchApp/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={imagesearchapp}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Image Search App</h3>
              <p className="project-category">JavaScript</p>
            </a>
          </li>
          <li
            className="project-item  active"
            data-filter-item=""
            data-category="CSS"
          >
            <a href="https://akanksha-18.github.io/Hackerrank/Akanksha/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline" />
                </div>
                <img
                  src={hackerrank}
                  alt="arrival"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Hackerrank</h3>
              <p className="project-category">HTML, CSS</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
