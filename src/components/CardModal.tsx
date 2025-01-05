import React, { useEffect, useState } from "react";
import Card from "./Card";

interface CardData {
  id: number;
  cardName: string;
  amount: string;
  cardNumber: string;
  expiryDate: string;
}

interface CardModalProps {
  showModal: boolean;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ showModal, onClose }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    if (showModal) {
      const fetchCards = async () => {
        try {
          const response = await fetch("/api/card");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: CardData[] = await response.json();
          setCards(data); // Store all cards in state
        } catch (error) {
          console.error("Error fetching cards:", error);
        }
      };

      fetchCards();
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      {/* Modal Content */}
      <div className="relative bg-white 3xl:w-[700px] w-[90%] rounded-lg shadow-lg p-5 text-center">
        <h2 className="text-black font-bold text-lg">Your Cards</h2>
        <div className="w-full overflow-x-auto scrollbar-hide mt-4">
          <div className="flex space-x-6 justify-start items-center">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                mode={index % 2 === 0 ? "dark" : "light"} // Alternating dark and light modes
                cardName={card.cardName}
                amount={card.amount}
                cardNumber={card.cardNumber}
                expiryDate={card.expiryDate}
              />
            ))}
          </div>
        </div>
        <button
          className="mt-4 px-5 py-2 bg-black text-white rounded-lg hover:bg-[#3461B2]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CardModal;
