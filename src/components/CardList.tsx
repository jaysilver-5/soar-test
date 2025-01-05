"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

// Define the type for the card data
interface CardData {
  id: number;
  cardName: string;
  amount: string;
  cardNumber: string;
  expiryDate: string;
}

const CardList: React.FC = () => {
  const [cardData, setCardData] = useState<CardData | null>(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchCardData = async () => {
      try {
        const response = await fetch("/api/card");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CardData[] = await response.json();
        setCardData(data[0]); // Use the first card object
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  // Safe rendering guard: If cardData is null, render a loading indicator
  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full overflow-x-scroll scrollbar-hide space-x-4 3xl:space-x-8">
      <Card
        mode="dark"
        cardName={cardData?.cardName || "Loading..."}
        amount={cardData?.amount || "$0"}
        cardNumber={cardData?.cardNumber || "**** **** **** ****"}
        expiryDate={cardData?.expiryDate || "MM/YY"}
      />

      <Card
        mode="dark"
        cardName={cardData?.cardName || "Loading..."}
        amount={cardData?.amount || "$0"}
        cardNumber={cardData?.cardNumber || "**** **** **** ****"}
        expiryDate={cardData?.expiryDate || "MM/YY"}
      />
    </div>
  );
};

export default CardList;
