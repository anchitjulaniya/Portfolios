import React, { useState } from 'react';

import todolist from "../assets/images/To_Do_List.png";
import passwordgenerator from "../assets/images/password_generator.png";
import gemini from "../assets/images/gemini.png";
import resumebuilder from "../assets/images/Ai_resume_builder.png";
import pokemon from "../assets/images/pokemon_card.png";
import leaderboard from "../assets/images/leaderBoard.png";
import imagesearchapp from "../assets/images/image_search_app.png";
import hackerrank from "../assets/images/Hackerrank.png";
import Amazon from '../assets/images/Amazon_Clone.png';
import geekfoods from '../assets/images/geekfoods.png';
import ComfyStore from '../assets/images/comfystore.png';
import cart from '../assets/images/cart.png'
import translator from '../assets/images/translator.png'
import grocerybud from '../assets/images/grocerybud.png'
import aiimagegenerator from '../assets/images/aiimagegenerator.png'
import textutils from '../assets/images/textutils.png'
import imageeditor from '../assets/images/imageeditor.png'
import budgetplanner from '../assets/images/budgetplanner.png'
import speechtotext from '../assets/images/speechtotext.png'
import Rozgar from '../assets/images/Rozgar.png'
import Sampoorna_Siksha from '../assets/images/Sampoorna_Siksha.png'

// import  from '../assets/images/'

const projects = [
  
  {
    category: "MERN Stack",
    url: "#",
    imgSrc: Sampoorna_Siksha,
    imgAlt: "Sampoorna Siksha",
    title: "Sampoorna Siksha Project(freelancing)(In Progress)",
  },
  {
    category: "MERN Stack",
    url: "https://rozgar-dashboard-frontend.onrender.com/",
    imgSrc: Rozgar,
    imgAlt: "Rozgar Freelancing Project",
    title: "Rozgar Project(Freelancing)",
  },
  {
    category: "ReactJs",
    url: "https://amazon-clone-blue-nu.vercel.app/",
    imgSrc: Amazon,
    imgAlt: "Amazon Clone",
    title: "Amazon Clone Project",
  },
  {
    category: "ReactJs",
    url: "https://comfy-shopping-by-anchit.netlify.app/",
    imgSrc: ComfyStore,
    imgAlt: "ComfyStore",
    title: "Comfy Store Project",
  },
  {
    category: "ReactJs",
    url: "https://geeksfood-by-anchit.vercel.app/",
    imgSrc: geekfoods,
    imgAlt: "Geek Foods",
    title: "Geek Foods Project",
  },
  {
    category: "ReactJs",
    url: "https://cart-by-anchit.netlify.app/",
    imgSrc: cart,
    imgAlt: "Cart",
    title: "Cart",
  },
  {
    category: "ReactJs",
    url: "https://translator-by-anchit123.netlify.app/",
    imgSrc: translator,
    imgAlt: "Text-converter-image",
    title: "Text Convertor Project",
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
    url: "https://ai-image-generator-by-anchit.netlify.app/",
    imgSrc: aiimagegenerator,
    imgAlt: "AI Image Generator",
    title: "AI Image Generator",
  },
  {
    category: "ReactJs",
    url: "https://main--textutils-by-anchit.netlify.app/",
    imgSrc: textutils,
    imgAlt: "Textutils",
    title: "Text Utils",
  },
  {
    category: "ReactJs",
    url: "https://image-editor-app-by-anchit.netlify.app/",
    imgSrc: imageeditor,
    imgAlt: "AI Image Generator",
    title: "Image Editor App",
  },
  {
    category: "ReactJs",
    url: "https://budgetplanner-by-anchit.netlify.app/",
    imgSrc: budgetplanner,
    imgAlt: "Budget Planner Image",
    title: "Budget Planner",
  },
  {
    category: "ReactJs",
    url: "https://text-to-speech-converter-by-anchit.netlify.app/",
    imgSrc: speechtotext,
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
    category: "ReactJs",
    url: "https://grocery-bud-by-anchit.netlify.app/",
    imgSrc: grocerybud,
    imgAlt: "Grocery-bud-image",
    title: "GroceryBud Project",
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
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
    setIsSelectOpen(false); // Close the select box after selection
  };

  const handleSelectClick = () => {
    console.log(isSelectOpen);
    setIsSelectOpen(!isSelectOpen); // Toggle the select box
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
          <button className="filter-select" data-select="" onClick={handleSelectClick}>
            <div className="select-value" data-select-value="">
              {selectedCategory}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          {isSelectOpen && (
            <ul className="select-list">
              {categories.map((category) => (
                <li className="select-item" key={category}>
                  <button data-select-item="" onClick={() => handleFilterClick(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
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
