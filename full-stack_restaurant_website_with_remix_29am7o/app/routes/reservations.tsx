import { json } from '@remix-run/node';
    import { useLoaderData } from '@remix-run/react';

    export async function loader() {
      // Fetch available reservation times
      return json({ availableTimes: [] });
    }

    export default function Reservations() {
      const { availableTimes } = useLoaderData<typeof loader>();
      
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Make a Reservation</h1>
          {/* Reservation form */}
        </div>
      );
    }
