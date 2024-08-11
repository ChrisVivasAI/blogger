'use client';

import React, { useState } from 'react';
import IdeaSelector from './IdeaSelector';
import ResearchReviewer from './ResearchReviewer';
import BlogEditor from './BlogEditor';
import FinalDraftReviewer from './FinalDraftReviewer';
import { writeBlogPost } from '@/lib/agents/Writer';

const MultiAgentSystem = () => {
  const [stage, setStage] = useState('prompt');
  const [prompt, setPrompt] = useState('');
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [research, setResearch] = useState('');
  const [blogDraft, setBlogDraft] = useState('');
  const [finalDraft, setFinalDraft] = useState('');
  const [error, setError] = useState(null);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    setStage('idea');
  };

  const handleIdeaSelection = (idea) => {
    setSelectedIdea(idea);
    setStage('research');
  };

  const handleResearchApproval = async (approvedResearch) => {
    setResearch(approvedResearch);
    try {
      const draft = await writeBlogPost(selectedIdea, approvedResearch);
      setBlogDraft(draft);
      setStage('writing');
    } catch (error) {
      console.error('Error generating blog draft:', error);
      setError('Failed to generate blog draft. Please try again.');
    }
  };

  const handleBlogApproval = (approvedBlog) => {
    setBlogDraft(approvedBlog);
    setStage('revision');
  };

  const handleFinalApproval = (approvedFinalDraft) => {
    setFinalDraft(approvedFinalDraft);
    setStage('published');
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
          <button 
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setError(null)}
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
      )}

      {stage === 'prompt' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Enter Blog Topic</h2>
          <form onSubmit={handlePromptSubmit} className="space-y-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a topic for your blog post"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Generate Ideas
            </button>
          </form>
        </div>
      )}

      {stage === 'idea' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select an Idea</h2>
          <IdeaSelector prompt={prompt} onSelect={handleIdeaSelection} />
        </div>
      )}

      {stage === 'research' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Review Research</h2>
          <ResearchReviewer topic={selectedIdea} onApprove={handleResearchApproval} />
        </div>
      )}

      {stage === 'writing' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Edit Blog Draft</h2>
          <BlogEditor initialDraft={blogDraft} research={research} onApprove={handleBlogApproval} />
        </div>
      )}

      {stage === 'revision' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Review Final Draft</h2>
          <FinalDraftReviewer finalDraft={blogDraft} onApprove={handleFinalApproval} />
        </div>
      )}

      {stage === 'published' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Blog Published!</h2>
          <p>Your blog post has been successfully published.</p>
          <button
            onClick={() => setStage('prompt')}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Create Another Blog Post
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiAgentSystem;