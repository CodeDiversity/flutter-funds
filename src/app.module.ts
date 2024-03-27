import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { GraphqlModule } from './graphql/graphql.module';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [TransactionsModule, GraphqlModule],
  providers: [PrismaService],
})
export class AppModule {}
