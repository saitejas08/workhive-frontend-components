import React from 'react';

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

export default function FreelancerCard({ freelancer }: { freelancer: Freelancer }) {
  return (
    <div className="freelancer-card">
      <img src={freelancer.image} alt={freelancer.name} className="profile-img" />
      <div className="freelancer-details">
        <h2 className="name">{freelancer.name}</h2>
        <p className="role">{freelancer.role} - <span className="location">{freelancer.location}</span></p>
        <p className="rating">⭐ {freelancer.rating} | 💲{freelancer.hourlyRate}/hr</p>
        <div className="tags">
          {freelancer.tags.map((tag, index) => (
            <span key={index} className="badge">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
