import React from "react";

/* Dummy data (kept in the same file for minimal files)
   This matches the assignment requirement: "Place all the dummy data in javascript objects and arrays." */
const categories = [
  { id: 1, title: "Generative AI", subtitle: "AI Tools & Workflows", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=60" },
  { id: 2, title: "IT Certifications", subtitle: "Certify your skills", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=60" },
  { id: 3, title: "Data Science", subtitle: "Data, ML & Analytics", img: "https://images.unsplash.com/photo-1526378722666-1b25e4a1f8c6?w=800&q=60" }
];

const courses = [
  { id: 1, title: "AI for Everyone", author: "John Doe", price: "EGP 349.99", rating: 4.7, img: "https://images.unsplash.com/photo-1581091870622-3c6f9e9f9b71?w=800&q=60" },
  { id: 2, title: "Intro to Agents & AI", author: "Jane Smith", price: "EGP 349.99", rating: 4.6, img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=60" },
  { id: 3, title: "AI Foundations", author: "Alex K", price: "EGP 349.99", rating: 4.8, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=60" },
  { id: 4, title: "Salesforce Dev Guide", author: "Mark Gray", price: "EGP 349.99", rating: 4.5, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=60" }
];

const trustedLogos = [
  { id: 1, alt: "Volkswagen", url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Volkswagen_logo_2019.svg" },
  { id: 2, alt: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { id: 3, alt: "Cisco", url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Cisco_logo.svg" },
  { id: 4, alt: "Vimeo", url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Vimeo_Logo.svg" },
  { id: 5, alt: "P&G", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Procter_%26_Gamble_logo.svg" },
  { id: 6, alt: "Citi", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Citi.svg" }
];

/* Small presentational components */
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">udemy</div>
        <div className="search">
          <input placeholder="Search for anything" />
        </div>
        <nav className="nav">
          <button className="link plain">Log in</button>
          <button className="primary">Sign up</button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Jump into learning — for less</h1>
        <p>For a limited time, courses start at just EGP 259.99 for new learners.</p>
        <div>
          <button className="primary">Sign up now</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-card">[Illustration]</div>
      </div>
    </section>
  );
}

function CategoryCarousel() {
  return (
    <section className="categories">
      <div className="section-left">
        <h2>Learn essential career and life skills</h2>
        <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
      </div>
      <div className="cards">
        {categories.map((c) => (
          <div key={c.id} className="card">
            <img src={c.img} alt={c.title} />
            <div className="card-body">
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureBanner() {
  return (
    <section className="feature">
      <div className="feature-left">
        <h2>Reimagine your career in the AI era</h2>
        <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
        <button className="plain">Learn more</button>
      </div>
      <div className="feature-right">
        <div className="visual">[Visual cards]</div>
      </div>
    </section>
  );
}

function CoursesRow() {
  return (
    <section className="courses">
      <h2>Skills to transform your career and life</h2>
      <div className="course-grid">
        {courses.map((c) => (
          <div key={c.id} className="course-card">
            <img src={c.img} alt={c.title} />
            <div className="course-body">
              <h3>{c.title}</h3>
              <p className="meta">{c.author}</p>
              <p className="price">{c.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedCompanies() {
  return (
    <section className="trusted">
      <div className="trusted-inner">
        <p className="trusted-text">Trusted by over 170,000 companies and millions of learners around the world</p>
        <div className="logos">
          {trustedLogos.map((l) => (
            <div key={l.id} className="logo-item">
              <img src={l.url} alt={l.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <CategoryCarousel />
        <FeatureBanner />
        <CoursesRow />
        <TrustedCompanies />
      </main>
      <footer className="footer">
        <p>Mini Udemy clone — implemented for Lab 6 assignment.</p>
      </footer>
    </div>
  );
}
