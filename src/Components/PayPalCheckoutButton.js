import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const PayPalCheckoutButton = () => {
  const { cart } = useContext(CartContext); 
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const initialOptions = {
    "client-id": "Aeet93xA8l5D_meN3r_f8lHOjXNUo3-CjSZozfJ0p1p4Za_zp5lFICAvmkQTpyNWtW8YsdX6uGlF9nd",
    currency: "USD",
    intent: "capture",
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
      
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toFixed(2), 
                },
              },
            ],
          });
        }}
        onApprove={handleApprove}
        onError={(err) => {
          console.error("PayPal Checkout Error:", err);
          alert("An error occurred during the transaction.");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckoutButton;
