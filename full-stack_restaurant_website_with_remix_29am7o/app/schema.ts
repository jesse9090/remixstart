import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

    export const users = sqliteTable('users', {
      id: integer('id').primaryKey(),
      email: text('email').notNull().unique(),
      password: text('password').notNull(),
      name: text('name'),
      phone: text('phone'),
      address: text('address')
    });

    export const menuCategories = sqliteTable('menu_categories', {
      id: integer('id').primaryKey(),
      name: text('name').notNull()
    });

    export const menuItems = sqliteTable('menu_items', {
      id: integer('id').primaryKey(),
      categoryId: integer('category_id').references(() => menuCategories.id),
      name: text('name').notNull(),
      description: text('description'),
      price: real('price').notNull(),
      imageUrl: text('image_url')
    });

    export const orders = sqliteTable('orders', {
      id: integer('id').primaryKey(),
      userId: integer('user_id').references(() => users.id),
      total: real('total').notNull(),
      status: text('status').notNull(),
      createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
    });

    export const orderItems = sqliteTable('order_items', {
      id: integer('id').primaryKey(),
      orderId: integer('order_id').references(() => orders.id),
      menuItemId: integer('menu_item_id').references(() => menuItems.id),
      quantity: integer('quantity').notNull(),
      price: real('price').notNull()
    });

    export const reservations = sqliteTable('reservations', {
      id: integer('id').primaryKey(),
      userId: integer('user_id').references(() => users.id),
      date: text('date').notNull(),
      time: text('time').notNull(),
      guests: integer('guests').notNull(),
      status: text('status').notNull()
    });
