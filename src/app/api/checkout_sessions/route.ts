






// import { NextResponse } from "next/server";
// import Stripe from "stripe";


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { cartItems } = await req.json();

//     const lineItems = cartItems.map((item: any) => ({
//       price_data: {
//         currency: "USD",
//         product_data: {
//           name: item.title,
//         },
//         unit_amount: item.price * 100, // Stripe accepts amount in cents
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (error: any) {
//     // console.error("Stripe Session Error:", error);
//     // return NextResponse.json({ error: error.message }, { status: 500 });
//     console.error("Stripe Error:", error);
// return NextResponse.json({ error: error.message }, { status: 500 });

//   }
// }















