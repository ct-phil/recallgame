// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserDetails, UserScore } = initSchema(schema);

export {
  UserDetails,
  UserScore
};