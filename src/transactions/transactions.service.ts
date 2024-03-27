// src/transaction/transaction.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  // Create a new transaction
  async createTransaction(data: Prisma.TransactionCreateInput) {
    return this.prisma.transaction.create({
      data,
    });
  }

  // Get all transactions
  async getAllTransactions() {
    return this.prisma.transaction.findMany();
  }

  // Get a single transaction by ID
  async getTransactionById(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  // Update a transaction
  async updateTransaction(id: string, data: Prisma.TransactionUpdateInput) {
    return this.prisma.transaction.update({
      where: { id },
      data,
    });
  }

  // Delete a transaction
  async deleteTransaction(id: string) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
