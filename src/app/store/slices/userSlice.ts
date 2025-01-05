// src/app/store/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  name: string;
  image: string;
  role: string;
}

interface UserState {
  name: string;
  username: string;
  email: string;
  dob: string;
  "present-address": string;
  "permanent-address": string;
  city: string;
  "postal-code": string;
  country: string;
  transaction: Transaction[];
  "sidebar-status": string;
}

const initialState: UserState = {
  name: "",
  username: "",
  email: "",
  dob: "",
  "present-address": "",
  "permanent-address": "",
  city: "",
  "postal-code": "",
  country: "",
  transaction: [],
  "sidebar-status": "Dashboard",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserProfile: (
      state,
      action: PayloadAction<Partial<Omit<UserState, "transaction">>>,
    ) => {
      const { "sidebar-status": _, ...updatedFields } = action.payload; // Exclude 'sidebar-status'
      return { ...state, ...updatedFields };
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transaction.push(action.payload);
    },
    updateSidebarStatus: (state, action: PayloadAction<string>) => {
      state["sidebar-status"] = action.payload;
    },
  },
});

export const { updateUserProfile, addTransaction, updateSidebarStatus } =
  userSlice.actions;
export default userSlice.reducer;
