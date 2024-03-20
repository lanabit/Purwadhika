'use client'
import { create, combine } from "zustand";
import { createAuthSlice, getProductList } from "./auth"; 

export const useZustandStores = create((...a) => ({
  ... createAuthSlice(...a)
}));

export const useZustandProductList = create((...a) => ({
  ... getProductList(...a)
}));