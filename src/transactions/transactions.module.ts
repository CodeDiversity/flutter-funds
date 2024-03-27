// src/transaction/transaction.module.ts
import { Module } from '@nestjs/common';
import { TransactionResolver } from './transactions.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionService } from './transactions.service';

@Module({
  providers: [TransactionResolver, TransactionService, PrismaService],
})
export class TransactionsModule {}
