import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Botbattlr</h3>
          <p>
            A React-based frontend for viewing bot profiles, displaying heart
            rate, survival rate, and shield stats. Data is fetched from a JSON
            file, providing an interactive and visually engaging experience for
            bot enthusiasts.
          </p>
          <a
            href="https://github.com/TechTinke/Oscar-Botbatlr"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Moca Blogg</h3>
          <p>
            A frontend application for browsing blogs by category and viewing
            user-created posts. Built with React, it fetches data from a db.json
            file, offering a clean interface for blog exploration and
            personalized content discovery.
          </p>
          <a
            href="https://github.com/TechTinke/moca_bloGG"
            target="_blank"
            rel="noopener noreferrer"
          >
            View On Github
          </a>
        </div>
        <div className="project-card">
          <h3>Hotel Royale Showcase</h3>
          <p>
            A frontend website displaying a hotel’s culinary dishes, built with
            React. Users can browse menus with vibrant images and descriptions,
            fetched from a JSON file, offering an engaging and appetizing
            experience for guests.
          </p>
          <a
            href="https://hotel-showcase.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
        <div className="project-card">
          <h3>Classic Recipes Platform</h3>
          <p>
            A full-stack platform for browsing, creating, and reviewing classic
            recipes. Built with Flask, SQLite, and React, it features
            user-friendly interfaces, robust APIs, and responsive design. Users
            can explore recipes, submit reviews, and manage content seamlessly,
            showcasing my skills in end-to-end development.
          </p>
          <a
            href="https://github.com/TechTinke/recipes-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            href="https://recipes-frontend-black.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
        <div className="project-card">
          <h3>Community Grants Portal</h3>
          <p>
            A full stack web application for managing community grants, allowing
            users to browse grants, submit applications, provide feedback, and
            manage applications with full CRUD functionality. Built with Flask
            (backend) and React (frontend), deployed on Render (backend) and
            Vercel (frontend).
          </p>
          <a
            href="https://github.com/TechTinke/community-grants-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            href="https://community-grants-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
        <div className="project-card">
          <h3>Grocery CLI</h3>
          <p>
            A CLI application to manage a grocery store’s products, customers,
            sales, and sale items using Python, SQLAlchemy ORM, and Alembic.
          </p>
          <a
            href="https://github.com/TechTinke/grocery-cli"
            target="_blank"
            rel="noopener noreferrer"
          >
            View On Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
