import { Dispatch, SetStateAction } from "react";

export type Languages = Array<{ name: string; ext: string }> 


export type CodeButtonsProps = { 
  languages: Languages
  selectedLanguage: string
  setSelectedLanguage: Dispatch<SetStateAction<string>>
}

export type Samples = {
  category: string,
  topic: string,
  languages: Languages
}

export type CodeProps = {
  codeSamples: Samples 
}

export type CodeBlockProps = {
  samples: Samples
  selectedLanguage: string
}