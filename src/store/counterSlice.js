import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getTodosAsync = createAsyncThunk(
  'todos/getTodosAsync',
  async () => {
    const resp = 'https://todo.api.devcode.gethired.id/activity-groups?email=ayumichan837@gmail.com'
    return fetch(resp).then((response) => response.json());
  }
);

export const createTodo = createAsyncThunk('todos/addTodosAsync', async (payload) => {
  const resp = 'https://todo.api.devcode.gethired.id/activity-groups'
  return fetch(resp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: payload.email, title: payload.title }),
  }).then(response => response.json())
    .then(json => {
      this.setState({ animation: true });
    });
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: [], status: '' },
  reducers: {},
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.data;
    },
    [createTodo.fulfilled]: (state, action) => {
      console.log(state, action)
      // state.push(action.payload.todos);
    },
  },
})

// Action creators are generated for each case reducer function

export default counterSlice.reducer