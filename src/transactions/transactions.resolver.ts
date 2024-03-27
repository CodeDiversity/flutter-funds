import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Transaction } from './entities/transaction.entity'; // Assuming you have defined this
import { TransactionService } from './transactions.service';
import { CreateTransactionInput } from './dto/create-transaction.input';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Mutation(() => Transaction)
  async createTransaction(
    @Args('createTransactionInput')
    createTransactionInput: CreateTransactionInput,
  ) {
    return this.transactionService.createTransaction(createTransactionInput);
  }

  @Query(() => [Transaction], { name: 'transactions' })
  findAll() {
    return this.transactionService.getAllTransactions();
  }
}
