import React, { useState, ChangeEvent } from 'react';
import './searchPage.css';
import FreelancerCard from './FreelancerCard';
import { motion } from 'framer-motion';

interface Freelancer {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  hourlyRate: number;
  tags: string[];
  image: string;
}

const sampleData: Freelancer[] = [
  { id: 1, name: 'John Doe', role: 'Frontend Developer', location: 'United States', rating: 4.9, hourlyRate: 50, tags: ['React', 'JavaScript', 'CSS'], image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Jane Smith', role: 'Backend Developer', location: 'Canada', rating: 4.8, hourlyRate: 60, tags: ['Node.js', 'Express', 'MongoDB'], image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Sam Wilson', role: 'UI/UX Designer', location: 'United Kingdom', rating: 4.7, hourlyRate: 45, tags: ['Figma', 'Sketch', 'Prototyping'], image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Anna Johnson', role: 'Full Stack Developer', location: 'Germany', rating: 5.0, hourlyRate: 75, tags: ['React', 'Node.js', 'GraphQL'], image: 'https://via.placeholder.com/100' },
];

export default function SearchPage(): JSX.Element {
  const [query, setQuery] = useState<string>('');

  const filteredResults = sampleData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.role.toLowerCase().includes(query.toLowerCase()) ||
    item.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <h1 className="title">Find the Best Freelancers</h1>
      <input
        type="text"
        placeholder="Search by name, role, or skills..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="freelancer-list">
        {filteredResults.length > 0 ? (
          filteredResults.map((freelancer) => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FreelancerCard freelancer={freelancer} />
            </motion.div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
}
