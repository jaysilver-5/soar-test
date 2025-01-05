import { NextResponse } from "next/server";

const mockUsers = [
  { id: 1, name: "Livia Bator", role: "CEO", imgSrc: "/livia.png" },
  { id: 2, name: "Randy Press", role: "Director", imgSrc: "/randy.png" },
  { id: 3, name: "Workman", role: "Designer", imgSrc: "/workman.png" },
  { id: 4, name: "Joshua U.", role: "FE Mang..", imgSrc: "/randy.png" },
  { id: 5, name: "Randy Press", role: "Director", imgSrc: "/livia.png" },
  { id: 6, name: "Workman", role: "Designer", imgSrc: "/workman.png" },
];

export async function GET() {
  return NextResponse.json(mockUsers);
}
