import React from "react";
import { PositionInfo } from "@/hooks/useCrewJob";
import CopyToClipboardButton from "@/components/CopyToClipboardButton";

interface FinalOutputProps {
  positionInfoList: PositionInfo[];
}

export const FinalOutput: React.FC<FinalOutputProps> = ({
  positionInfoList,
}) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const generateOutputText = () => {
    return positionInfoList.map((position) => {
      const company = capitalizeFirstLetter(position.company);
      const positionName = capitalizeFirstLetter(position.position);
      const name = position.name;
      const blogArticles = position.blog_articles_urls.join('\n');
      const interviews = position.youtube_interviews_urls.map((video) => `${video.name}: ${video.url}`).join('\n');
      return `Company: ${company}\nPosition: ${positionName}\nName: ${name}\nBlog Articles URLs:\n${blogArticles}\nYouTube Interviews:\n${interviews}`;
    }).join('\n\n');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold my-2">Final Output</h2>
        <CopyToClipboardButton textToCopy={generateOutputText()} />
      </div>
      <div className="flex-grow overflow-auto border-2 border-gray-300 p-2">
        {positionInfoList.length === 0 ? (
          <p>No job result yet.</p>
        ) : (
          positionInfoList.map((position, index) => (
            <div key={index} className="mb-4">
              <div className="ml-4">
                <p>
                  <strong>Company:</strong>{" "}
                  {capitalizeFirstLetter(position.company)}
                </p>
                <p>
                  <strong>Position:</strong>{" "}
                  {capitalizeFirstLetter(position.position)}
                </p>
                <p>
                  <strong>Name:</strong> {position.name}
                </p>
                <div>
                  <strong>Blog Articles URLs:</strong>
                  <ul>
                    {position.blog_articles_urls.length > 0 ? (
                      position.blog_articles_urls.map((url, urlIndex) => (
                        <li key={urlIndex}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 underline"
                          >
                            {url}
                          </a>
                        </li>
                      ))
                    ) : (
                      <p>None</p>
                    )}
                  </ul>
                </div>
                <div>
                  <strong>YouTube Interviews:</strong>
                  <ul>
                    {position.youtube_interviews_urls.map(
                      (video, videoIndex) => (
                        <li key={videoIndex}>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 underline"
                          >
                            {video.name}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

