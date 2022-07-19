import { buildSchemaSync } from 'type-graphql';
import { PlaneResolver } from './resolvers/PlaneResolver';

const schema = buildSchemaSync({
  resolvers: [PlaneResolver],
});

export { schema };
