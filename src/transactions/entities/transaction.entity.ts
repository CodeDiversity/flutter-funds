// src/transaction/entities/transaction.entity.ts

import { Field, ObjectType, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Transaction {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Float)
  amount: number;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
