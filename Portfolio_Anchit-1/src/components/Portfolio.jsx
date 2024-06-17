import React, { useState } from 'react';

import todolist from "../assets/images/To_Do_List.png";
import texttospeech from "../assets/images/speech_to_Text.png";
import passwordgenerator from "../assets/images/password_generator.png";
import gemini from "../assets/images/gemini.png";
import resumebuilder from "../assets/images/Ai_resume_builder.png";
import pokemon from "../assets/images/pokemon_card.png";
import leaderboard from "../assets/images/leaderBoard.png";
import imagesearchapp from "../assets/images/image_search_app.png";
import hackerrank from "../assets/images/Hackerrank.png";
import Amazon from '../assets/images/Amazon_Clone.png';

const projects = [
  {
    category: "ReactJs",
    url: "https://amazon-clone-blue-nu.vercel.app/",
    imgSrc: Amazon,
    imgAlt: "Amazon Clone",
    title: "Amazon Clone Project",
  },
  {
    category: "ReactJs",
    url: "https://to-do-list-react-js-by-anchit-and-mohit.vercel.app/",
    imgSrc: todolist,
    imgAlt: "To Do List",
    title: "To Do List",
  },
  {
    category: "ReactJs",
    url: "https://text-to-speech-converter-by-anchit.netlify.app/",
    imgSrc: texttospeech,
    imgAlt: "Speech To Text Converter",
    title: "Speech To Text Converter",
  },
  {
    category: "ReactJs",
    url: "https://main--password-generato-by-anchit.netlify.app/",
    imgSrc: passwordgenerator,
    imgAlt: "Password Generator",
    title: "Password Generator",
  },
  {
    category: "JavaScript",
    url: "https://anchitjulaniya.github.io/JavaScriptProjects/GeminiClone/",
    imgSrc: gemini,
    imgAlt: "Gemini Clone",
    title: "Gemini Clone",
  },
  {
    category: "JavaScript",
    url: "https://anchitjulaniya.github.io/JavaScriptProjects/Interview_Ready_With_AI/",
    imgSrc: resumebuilder,
    imgAlt: "AI Resume Builder",
    title: "AI Resume Builder",
  },
  {
    category: "JavaScript",
    url: "https://anchitjulaniya.github.io/JavaScriptProjects/Pokemon%20Project/",
    imgSrc: pokemon,
    imgAlt: "Pokemon Card",
    title: "Pokemon Card",
  },
  {
    category: "JavaScript",
    url: "https://anchitjulaniya.github.io/JavaScriptProjects/LeaderBoard/",
    imgSrc: leaderboard,
    imgAlt: "Cricket Leaderboard",
    title: "Cricket Leaderboard",
  },
  {
    category: "JavaScript",
    url: "https://anchitjulaniya.github.io/JavaScriptProjects/ImageSearchApp/",
    imgSrc: imagesearchapp,
    imgAlt: "Image Search App",
    title: "Image Search App",
  },
  {
    category: "HTML-CSS",
    url: "https://akanksha-18.github.io/Hackerrank/Akanksha/",
    imgSrc: hackerrank,
    imgAlt: "Hackerrank",
    title: "Hackerrank",
  },
];

const categories = ["All", "ReactJs", "JavaScript", "HTML-CSS"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button 
                className={category === selectedCategory ? "active" : ""} 
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box">
          <button className="filter-select" data-select="">
            <div className="select-value" data-select-value="">
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          <ul className="select-list">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button data-select-item="" onClick={() => handleFilterClick(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="project-list">
          {filteredProjects.map(({ category, url, imgSrc, imgAlt, title }) => (
            <li className="project-item active" data-filter-item="" data-category={category} key={title}>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img src={imgSrc} alt={imgAlt} loading="lazy" />
                </figure>
                <h3 className="project-title">{title}</h3>
                <p className="project-category">{category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
