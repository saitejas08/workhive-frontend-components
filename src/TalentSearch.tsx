import React, { useState } from "react";
import "./TalentSearch.css";

const TalentSearch = () => {
  const [results, setResults] = useState([
    {
      id: 1,
      name: "Ali R.",
      title: "CRM | Data Entry | Lead Generation | Web Research | HubSpot",
      location: "Pakistan",
      rate: "$9.99/hr",
      success: "89% Job Success",
      description:
        "Top Rated Freelancer with $70k+ Earned, 200+ jobs, and 11,500+ Hours completed on Upwork...",
      tags: [
        "Lead Generation",
        "List Building",
        "Data Cleaning",
        "Data Entry",
        "Online Research",
      ],
    },
    {
      id: 2,
      name: "Mahendra C.",
      title: "WordPress Developer | WordPress Elementor Expert | Figma to WordPress",
      location: "India",
      rate: "$15/hr",
      success: "97% Job Success",
      description: "$100K+ earned. Experienced in WordPress SEO, plugins, themes...",
      tags: ["WordPress", "SEO Plugin", "Elementor", "Landing Page", "Theme"],
    },
  ]);

  return (
    <div className="talent-search">
      {/* Advanced Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Advanced Search</button>
      </div>

      <div className="main-content">
        {/* Filter Area */}
        <div className="filters">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Talent Badge</h4>
            <label>
              <input type="checkbox" /> Top Rated Plus
            </label>
            <label>
              <input type="checkbox" /> Top Rated
            </label>
            <label>
              <input type="checkbox" /> Rising Talent
            </label>
          </div>
          <div className="filter-section">
            <h4>Location</h4>
            <select>
              <option value="">Select talent location</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
          <div className="filter-section">
            <h4>Talent Type</h4>
            <label>
              <input type="radio" name="talent-type" /> Freelancers & Agencies
            </label>
            <label>
              <input type="radio" name="talent-type" /> Freelancers
            </label>
            <label>
              <input type="radio" name="talent-type" /> Agencies
            </label>
          </div>
        </div>

        {/* Search Results */}
        <div className="results">
          {results.map((result) => (
            <div key={result.id} className="result-card">
              <h3>{result.name}</h3>
              <p className="title">{result.title}</p>
              <p className="location">{result.location}</p>
              <p className="rate">{result.rate}</p>
              <p className="success">{result.success}</p>
              <p className="description">{result.description}</p>
              <div className="tags">
                {result.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function TalentSearchComponent() {
    return (
      <div className="TalentSearch">
        <TalentSearch />
      </div>
    );
}

export default TalentSearchComponent;
