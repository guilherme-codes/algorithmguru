export interface CodeSampleMap {
  [language: string]: {
    [topic: string]: {
      [sampleName: string]: string;
    };
  };
}
