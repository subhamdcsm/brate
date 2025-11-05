import { query } from '$app/server';
import { eq } from 'drizzle-orm';
import { db } from './server/db';
import { bankAccount, user } from './server/db/schema';

export const getBankAccount = query(async () => {
  const users = await db.select().from(user).where(eq(user.name, 'Goldfinity Jewels Pvt Ltd'));
  const userid = users[0].id;
  const bankAccounts = await db.select().from(bankAccount).where(eq(bankAccount.userId, userid));
  return bankAccounts;
});
