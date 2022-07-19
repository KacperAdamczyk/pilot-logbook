import { Query, Resolver } from 'type-graphql';
import { Plane } from '../entities/Plane';

@Resolver(Plane)
export class PlaneResolver {
  @Query((returns) => [Plane])
  planes() {
    return [];
  }
}
