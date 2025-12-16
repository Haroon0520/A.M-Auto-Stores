import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import spareRouter from "./routes/spareRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import "dotenv/config.js";
import orderRouter from "./routes/orderRoute.js";

// Import Stripe and initialize with secret key
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food", spareRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Stripe payment intent create route
app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body; // amount must be sent in paise (e.g., ₹100 = 10000)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in paise
      currency: "inr",
    });

    res.status(200).send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


//mongodb+srv://greatstack:186312@cluster0.ovanjzw.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0