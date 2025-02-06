// "use client";

// import { useState } from "react";

// export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
//   const [loading, setLoading] = useState(false);

//   const handleCheckout = async () => {
//     setLoading(true);
//     const response = await fetch("/api/checkout_sessions", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cartItems }),
//     });

//     const { url } = await response.json();
//     window.location.href = url;
//     setLoading(false);
//   };

//   return (
//     <button
//       onClick={handleCheckout}
//       disabled={loading}
//       className="w-full max-w-[1440px] mx-auto bg-blue-500 text-white px-4 py-2 rounded"
//     >
//       {loading ? "Redirecting..." : "Place Order"}
//     </button>
//   );
// }

















"use client";
import { useState } from "react";

export default function CheckoutButton({ cartItems }: { cartItems: any[] }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe checkout
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Redirecting..." : "Place Order"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

