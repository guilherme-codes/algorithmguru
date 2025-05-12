import { Samples } from '../ui/code/types';
import { SampleMap } from './code-map';

export const getCodeSample = async (language: string, codeSamples: Samples) => {
  const sample = SampleMap[codeSamples.category][codeSamples.topic][language];

  return sample;
};
