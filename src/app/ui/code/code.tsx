'use client';

import { useState } from "react";
import CodeBlock from "./codeBlock";
import CodeButtons from "./codeButtons";
import { CodeProps } from "./types";

export default function Code ({ languages }: CodeProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].name);
  
  return (
    <>
      <CodeButtons 
        languages={languages} 
        selectedLanguage={selectedLanguage} 
        setSelectedLanguage={setSelectedLanguage}
      />
      <CodeBlock 
        languages={languages}
        selectedLanguage={selectedLanguage}
      />
    </>
    
  )
}