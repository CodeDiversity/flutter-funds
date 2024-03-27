// src/transaction/dto/create-transaction.input.ts
import { Field, InputType, Float } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {
  @Field()
  title: string;

  @Field(() => Float)
  amount: number;

  // Add any other fields you expect to receive when creating a transaction
}
