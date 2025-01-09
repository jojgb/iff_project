import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FinancialState {
  accountType: string;
  budgetAccount: string;
  fixedAssetNumber: string;
  totalTaxGroup: string;
  orderDate: string;
}

const initialState: FinancialState = {
  accountType: "",
  budgetAccount: "",
  fixedAssetNumber: "",
  totalTaxGroup: "",
  orderDate: "",
};

const financialSlice = createSlice({
  name: "financial",
  initialState,
  reducers: {
    setFinancialData: (state, action: PayloadAction<FinancialState>) => {
      state.accountType = action.payload.accountType;
      state.budgetAccount = action.payload.budgetAccount;
      state.fixedAssetNumber = action.payload.fixedAssetNumber;
      state.totalTaxGroup = action.payload.totalTaxGroup;
      state.orderDate = action.payload.orderDate;
    },
  },
});

export const { setFinancialData } = financialSlice.actions;
export default financialSlice.reducer;
