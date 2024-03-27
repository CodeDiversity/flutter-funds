// src/transaction/dto/update-transaction.input.ts
import { Field, InputType, ID, Float, PartialType } from '@nestjs/graphql';
import { CreateTransactionInput } from './create-transaction.input';

@InputType()
export class UpdateTransactionInput extends PartialType(
  CreateTransactionInput,
) {
  @Field(() => ID)
  id: string;

  // You can override any field from CreateTransactionInput to make it required/optional specifically for updates
  // For example, making `title` optional during an update:
  // @Field({ nullable: true })
  // title?: string;
}
