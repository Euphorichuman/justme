import React from "react";
import "./Skills.scss";

export function Skills() {
  const skillsFrontedWebDevelopment = [
    "Angular",
    "React",
    "Phoenix",
    "Typescript",
    "Javascript",
    "HTML",
    "CSS and SASS",
  ];

  const skillsBackendWebDevelopment = [
    "Node",
    "Express",
    "Python",
    ".NET",
    "Elixir",
  ];

  const skillsDesign = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe XD",
    "Figma"
  ];

  return (
    <div className="skills">
      <div className="skills__title">SKILLS</div>
      <div className="skills__content">
        {/* FRONTEND SKILLS */}
        <div className="skills__content_section">
          <div className="skills__content_section__info">
            <div className="skills__content_section__info__title">
              FRONTEND WEB DEVELOPMENT
            </div>
            <div className="skills__content_section__info__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              architecto laboriosam nisi dicta, accusamus, accusantium
              consectetur nesciunt dolores facere libero modi ab porro nam ea.
              Odio modi cumque aliquid consectetur.
            </div>
          </div>

          <div className="skills__content_section__list">
            {skillsFrontedWebDevelopment.map((skill, i) => (
              <div
                key={i}
                className="skills__content_section__list__item list__item__right"
              >
                <div className="list__item__text hover-primary-color">
                  {skill}
                </div>
                <div className="list__item__text__number outline-btn">{i}</div>
              </div>
            ))}
          </div>
        </div>
        
        <hr className="gray-line" />

        {/* BACKEND SKILLS */}
        <div className="skills__content_section">
          <div className="skills__content_section__list">
            {skillsBackendWebDevelopment.map((skill, i) => (
              <div
                key={i}
                className="skills__content_section__list__item"
              >
                <div className="list__item__text__number outline-btn">{i}</div>
                <div className="list__item__text hover-primary-color">
                  {skill}
                </div>
              </div>
            ))}
          </div>
          <div className="skills__content_section__info">
            <div className="skills__content_section__info__title text-right">
              BACKEND WEB DEVELOPMENT
            </div>
            <div className="skills__content_section__info__content text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              architecto laboriosam nisi dicta, accusamus, accusantium
              consectetur nesciunt dolores facere libero modi ab porro nam ea.
              Odio modi cumque aliquid consectetur.
            </div>
          </div>
        </div>

        <hr className="gray-line" />

        {/* FRONTEND SKILLS */}
        <div className="skills__content_section">
          <div className="skills__content_section__info">
            <div className="skills__content_section__info__title">
              DESIGN TOOLS SKILLS
            </div>
            <div className="skills__content_section__info__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              architecto laboriosam nisi dicta, accusamus, accusantium
              consectetur nesciunt dolores facere libero modi ab porro nam ea.
              Odio modi cumque aliquid consectetur.
            </div>
          </div>

          <div className="skills__content_section__list">
            {skillsDesign.map((skill, i) => (
              <div
                key={i}
                className="skills__content_section__list__item list__item__right"
              >
                <div className="list__item__text hover-primary-color">
                  {skill}
                </div>
                <div className="list__item__text__number outline-btn">{i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
