'use client';

import { CodeButtonsProps } from "./types";

export default function CodeButtons({ languages, selectedLanguage, setSelectedLanguage }: CodeButtonsProps) {  

  return (
    <div className="flex gap-3">
      {languages.map((language, i) => (
        <button 
          key={language.name} 
          className={
          `code-button ${language.name} ${language.name === selectedLanguage ? 'code-button--active' : ''}`
          }
          onClick={() => setSelectedLanguage(language.name)}
        >
          <img className="h-[53px] w-[53px]" src={`/img/${language.name}.svg`} alt="Code" />
        </button>
      ))}
    </div>
  )
}