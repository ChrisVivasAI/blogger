'use client';

import React, { useState } from 'react';

const BlogEditor = ({ initialDraft, onApprove }) => {
  const [draft, setDraft] = useState(initialDraft);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApprove(draft);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Edit Blog Draft</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="w-full h-96 p-2 border rounded"
          placeholder="Edit the blog draft here..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Approve Draft
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;