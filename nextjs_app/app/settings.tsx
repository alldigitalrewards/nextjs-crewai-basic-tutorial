import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';



const SettingsPage: React.FC = () => {
  const markdownContent = `
# Company Research Agents

## __init__
- **searchInternetTool**: SerperDevTool()
- **youtubeSearchTool**: YoutubeVideoSearchTool()
- **llm**: ChatOpenAI(model="gpt-4-turbo-preview")

## research_manager(companies: List[str], positions: List[str]) -> Agent
- **Role**: Company Research Manager
- **Goal**: Generate a list of JSON objects containing the URLs for up to ten recent blog articles and the URL and title for up to ten recent YouTube interviews, for each position in each company.
  - Companies: \${companies}
  - Positions: \${positions}
- **Important**:
  - The final list of JSON objects must include all companies and positions. Do not leave any out.
  - If you can't find information for a specific position, fill in the information with the word "MISSING".
  - Do not generate fake information. Only return the information you find. Nothing else!
  - Do not stop researching until you find the requested information for each position in each company.
  - All the companies and positions exist so keep researching until you find the information for each one.
  - Make sure each researched position for each company contains up to ten blog articles and up to ten YouTube interviews.
- **Backstory**: As a Company Research Manager, you are responsible for aggregating all the researched information into a list.
- **Tools**: searchInternetTool, youtubeSearchTool
- **Verbose**: True
- **Allow Delegation**: True

## company_research_agent() -> Agent
- **Role**: Company Research Agent
- **Goal**: Look up the specific positions for a given company and find URLs for up to ten recent blog articles and the URL and title for up to ten recent YouTube interviews for each person in the specified positions. It is your job to return this collected information in a JSON object.
- **Backstory**: As a Company Research Agent, you are responsible for looking up specific positions within a company and gathering relevant information.
- **Important**:
  - Once you've found the information, immediately stop searching for additional information.
  - Only return the requested information. NOTHING ELSE!
  - Make sure you find the person's name who holds the position.
  - Do not generate fake information. Only return the information you find. Nothing else!
- **Tools**: searchInternetTool, youtubeSearchTool
- **Verbose**: True
`;

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <div>
        <h1>Settings</h1>
        <pre>{markdownContent}</pre>
      </div>
    </>
  );
};

export default SettingsPage;