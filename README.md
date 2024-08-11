# AI Blog Creator

Blog Creator is an AI-powered multi-agent system that assists in creating high-quality blog posts. It streamlines the process from idea generation to final publication, leveraging OpenAI and Perplexity APIs for content creation and research.

## Features

- AI-powered blog post idea generation
- Automated research using Perplexity API
- AI-assisted blog writing and revision
- Multi-stage content creation process
- User-friendly interface for reviewing and editing at each stage

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or Yarn package manager
- OpenAI API key
- Perplexity API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/hgab-studios-blog-creator.git
   cd hgab-studios-blog-creator
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your API keys:
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_PERPLEXITY_API_KEY=your_perplexity_api_key_here
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Follow the on-screen prompts to create your blog post:
   - Enter a topic
   - Select from generated ideas
   - Review and edit research
   - Edit the blog draft
   - Review the final draft
   - Publish the blog post

## Project Structure

```
hgab-studios-blog-creator/
├── app/
│   ├── api/
│   │   ├── conduct-research/
│   │   ├── generate-ideas/
│   │   └── write-blog/
│   ├── dashboard/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── BlogEditor.js
│   ├── FinalDraftReviewer.js
│   ├── IdeaSelector.js
│   ├── MultiAgentSystem.js
│   └── ResearchReviewer.js
├── lib/
│   ├── agents/
│   │   ├── IdeaGenerator.js
│   │   ├── Researcher.js
│   │   └── Writer.js
│   └── apis/
│       ├── openai.js
│       └── perplexity.js
├── public/
├── styles/
├── .env.local
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
└── README.md
```

## Contributing

Contributions to the HGAB Studios Blog Creator are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contact

If you have any questions or feedback, please reach out to us at [solutios@chrisvivas.ai](mailto:solutions@chrisvivas.ai).

## Acknowledgements

- [OpenAI](https://openai.com/) for their powerful language models
- [Perplexity AI](https://www.perplexity.ai/) for their research capabilities
- [Next.js](https://nextjs.org/) for the React framework
- All contributors who have helped shape this project