'use client';

import Image from "next/image";
import { CodeButtonsProps } from "./types";

export default function CodeButtons({ languages, selectedLanguage, setSelectedLanguage }: CodeButtonsProps) {  

  return (
    <div className="flex gap-3">
      {languages.map((language) => (
        <button 
          key={language.name} 
          className={
          `code-button ${language.name} ${language.name === selectedLanguage ? 'code-button--active' : ''}`
          }
          onClick={() => setSelectedLanguage(language.name)}
        >
            <Image
              src={`/img/${language.name}.svg`} 
              width={53}
              height={53}
              alt="Array Visualization"
              style={{ width: "53px", height: "53px" }}
            />
            
        </button>
      ))}
    </div>
  )
}