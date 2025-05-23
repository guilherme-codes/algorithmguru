'use client';

import { useState } from "react";
import CodeBlock from "./codeBlock";
import CodeButtons from "./codeButtons";
import { CodeProps } from "./types";

export default function Code ({ codeSamples }: CodeProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(codeSamples.languages[0].name);
  
  return (
    <>
      <CodeButtons 
        languages={codeSamples.languages} 
        selectedLanguage={selectedLanguage} 
        setSelectedLanguage={setSelectedLanguage}
      />
      <CodeBlock 
        samples={codeSamples}
        selectedLanguage={selectedLanguage}
      />
    </>
    
  )
}