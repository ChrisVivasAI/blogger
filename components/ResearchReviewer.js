'use client';

import React, { useState, useEffect } from 'react';

const ResearchReviewer = ({ topic, onApprove }) => {
  const [research, setResearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResearch();
  }, [topic]);

  const fetchResearch = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/conduct-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      if (!response.ok) throw new Error('Failed to fetch research');
      const data = await response.json();
      setResearch(data.research);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApprove(research);
  };

  if (isLoading) return <div>Conducting research...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Review Research</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={research}
          onChange={(e) => setResearch(e.target.value)}
          className="w-full h-64 p-2 border rounded"
          placeholder="Review and edit the research here..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Approve Research
        </button>
      </form>
    </div>
  );
};

export default ResearchReviewer;