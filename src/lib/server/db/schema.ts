import type { InferSelectModel } from 'drizzle-orm';
import { pgTable, text, timestamp, boolean, integer, pgEnum, serial } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false).notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull()
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' })
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull()
});

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull()
});

export const product = pgTable('product', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  purity: integer('purity').notNull(),
  weight: integer('weight').notNull(),
  uom: text('uom').notNull()
});

export type Product = InferSelectModel<typeof product>;

export const orderStatusEnum = pgEnum('order_status', [
  'booked',
  'pending_payment',
  'pending_delivery',
  'alloted',
  'cancelled'
]);

export type OrderStatus = (typeof orderStatusEnum.enumValues)[number];

export const order = pgTable('order', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .notNull()
    .references(() => product.id),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  quantity: integer('quantity').notNull(),
  rate: integer('rate').notNull(),
  status: orderStatusEnum().notNull()
});

export type Order = InferSelectModel<typeof order>;

export const bankAccount = pgTable('bankAccount', {
  id: serial('id').primaryKey(),
  bankName: text('bank_name').notNull(),
  accountNumber: text('account_number').notNull(),
  ifscCode: text('ifsc_code').notNull(),
  branch: text('branch').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id)
});

export type BankAccount = InferSelectModel<typeof bankAccount>;
