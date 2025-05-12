// ts
import tsArraySample from '@/app/data-structures/arrays/code/typescript';
import tsStackSample from '@/app/data-structures/stacks/code/typescript';
// go
import goStackSample from '@/app/data-structures/stacks/code/go';
import { CodeSampleMap } from './types';


export const SampleMap = {
  'data-structures': {
    arrays: {
      typescript: tsArraySample,
    },
    stacks: {
      typescript: tsStackSample,
      go: goStackSample,
    },
  }
} as CodeSampleMap;

