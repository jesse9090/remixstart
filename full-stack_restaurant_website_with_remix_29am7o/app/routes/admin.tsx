import { json } from '@remix-run/node';
    import { useLoaderData } from '@remix-run/react';

    export async function loader() {
      // Fetch admin data
      return json({ orders: [], reservations: [] });
    }

    export default function Admin() {
      const { orders, reservations } = useLoaderData<typeof loader>();
      
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          {/* Admin interface */}
        </div>
      );
    }
