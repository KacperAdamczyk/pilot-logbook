import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export class Plane {
  @Field((type) => ID)
  id!: string;
  @Field()
  name!: string;
  @Field()
  registration!: string;
}
