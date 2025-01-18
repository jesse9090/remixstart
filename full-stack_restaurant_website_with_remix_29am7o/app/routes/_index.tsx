import { json } from '@remix-run/node';
    import { useLoaderData } from '@remix-run/react';
    import { db } from '../db.server';
    import { menuCategories, menuItems } from '../schema';

    export async function loader() {
      const categories = await db.select().from(menuCategories).all();
      const items = await db.select().from(menuItems).all();
      return json({ categories, items });
    }

    export default function Index() {
      const { categories, items } = useLoaderData<typeof loader>();
      
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
          {categories.map(category => (
            <div key={category.id} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items
                  .filter(item => item.categoryId === category.id)
                  .map(item => (
                    <div key={item.id} className="border p-4 rounded-lg">
                      <h3 className="text-xl font-medium">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-lg font-semibold mt-2">${item.price.toFixed(2)}</p>
                      <button 
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
