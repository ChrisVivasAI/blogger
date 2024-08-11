'use client';

import React, { useState, useEffect } from 'react';

const IdeaSelector = ({ prompt, onSelect }) => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchIdeas = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/generate-ideas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        });
        if (!response.ok) throw new Error('Failed to fetch ideas');
        const data = await response.json();
        if (isMounted) {
          setIdeas(data.ideas);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };

    fetchIdeas();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (isLoading) return <div>Loading ideas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      {ideas.map((idea, index) => (
        <button
          key={index}
          onClick={() => onSelect(idea)}
          className="w-full text-left p-4 bg-white hover:bg-gray-100 border rounded shadow"
        >
          <h3 className="font-bold">Idea {index + 1}</h3>
          <h4 className="font-medium">{idea.title}</h4>
          <p>{idea.description}</p>
        </button>
      ))}
    </div>
  );
};

export default IdeaSelector;