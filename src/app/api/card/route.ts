// api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      cardName: "Eddy Cusuma",
      amount: "$5,756",
      cardNumber: "3778 **** **** 1234",
      expiryDate: "12/22",
    },
    {
      id: 2,
      cardName: "Eddy Cusuma",
      amount: "$4,600",
      cardNumber: "4882 **** **** 4321",
      expiryDate: "08/23",
    },
    {
      id: 3,
      cardName: "John Doe",
      amount: "$3,200",
      cardNumber: "5123 **** **** 5678",
      expiryDate: "03/24",
    },
    {
      id: 4,
      cardName: "Jane Smith",
      amount: "$7,100",
      cardNumber: "4111 **** **** 1111",
      expiryDate: "06/25",
    },
  ];

  return NextResponse.json(data);
}
