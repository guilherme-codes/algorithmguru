'use client';
import { useState } from "react";

type CodeButtonsProps = { 
  languages: Array<{ name: string; ext: string }> 
}

export default function CodeButtons({ languages }: CodeButtonsProps) {  
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].name);

  return (
    <div className="flex gap-3">
      {languages.map((language, i) => (
        <button 
          key={language.name} 
          className={
          `code-button ${language.name} ${language.name === selectedLanguage ? 'code-button--active' : ''}`
          }
          
        >
          <img className="h-[53px] w-[53px]" src={`/img/${language.name}.svg`} alt="Code" />
        </button>
      ))}
    </div>
  )
}