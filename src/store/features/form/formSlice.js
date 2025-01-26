import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    login_Form:{
        module: 'React Mod7',
        username: '',
        email: '',
        password: 'mod7USIP-LENNY'
    },
    inputs_Disabled: false
}
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      updateForm: (state, action) => {
        state.login_Form= action.payload;
      },
      deleteForm: (state) => {
        
        state.login_Form = { 
          username: '', 
          email: '', 
          password: '', 
          module: '' 
      };
      },
      setInputs_Disabled: (state, action) => {
        state.inputs_Disabled = action.payload; // Cambiar el valor de inputsDisabled
    }
    },
  });
  
  export const { updateForm, deleteForm, setInputs_Disabled } = formSlice.actions;
  export default formSlice.reducer;