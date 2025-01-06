import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    inventoryItems: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories.splice(action.payload, 1);
    },
    incrementCategoryNumber: (state, action) => {
      const category = state.categories.find(
        (category, index) => index === action.payload
      );
      if (category) {
        category.number += 1;
      }
    },
    decrementCategoryNumber: (state, action) => {
      const category = state.categories.find(
        (category, index) => index === action.payload
      );
      if (category) {
        category.number -= 1;
      }
    },
    // Updated reducers for inventory items with categoryId
    addInventoryItem: (state, action) => {
      const { categoryId, name, imageUrl } = action.payload;
      const existingItem = state.inventoryItems.find(
        (item) => item.name === name && item.categoryId === categoryId
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.inventoryItems.push({ name, imageUrl, categoryId, quantity: 1 });
      }
    },
    incrementInventoryQuantity: (state, action) => {
      const { name, categoryId } = action.payload;
      const item = state.inventoryItems.find(
        (item) => item.name === name && item.categoryId === categoryId
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementInventoryQuantity: (state, action) => {
      const { name, categoryId } = action.payload;
      const item = state.inventoryItems.find(
        (item) => item.name === name && item.categoryId === categoryId
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.inventoryItems = state.inventoryItems.filter(
            (item) => item.name !== name || item.categoryId !== categoryId
          );
        }
      }
    },
  },
});

export const {
  addCategory,
  removeCategory,
  incrementCategoryNumber,
  decrementCategoryNumber,
  addInventoryItem,
  incrementInventoryQuantity,
  decrementInventoryQuantity,
} = categorySlice.actions;

export default categorySlice.reducer;
