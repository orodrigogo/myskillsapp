import { appSchema } from '@nozbe/watermelondb';

import { skillSchema } from './skillSchema';

export const schemas = appSchema({
  version: 2,
  tables: [skillSchema]
});