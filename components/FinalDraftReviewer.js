'use client';

import React, { useState } from 'react';

const FinalDraftReviewer = ({ finalDraft, onApprove }) => {
  const [draft, setDraft] = useState(finalDraft);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApprove(draft);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Review Final Draft</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: draft }} />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Approve and Publish
        </button>
      </form>
    </div>
  );
};

export default FinalDraftReviewer;