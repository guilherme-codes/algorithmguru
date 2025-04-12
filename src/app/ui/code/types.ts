import { Dispatch, SetStateAction } from "react";

export type Languages = Array<{ name: string; ext: string }> 


export type CodeButtonsProps = { 
  languages: Languages
  selectedLanguage: string
  setSelectedLanguage: Dispatch<SetStateAction<string>>
}

export type CodeProps = {
  languages: Languages
}

export type CodeBlockProps = {
  languages: Languages
  selectedLanguage: string
}