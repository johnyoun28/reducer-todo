import React from 'react';

export const initialTodoState = {
  todo: [
    {
      item: 'learn reducers',
      completed: false,
      id: 1,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          ...state,
          item: action.payload,
          completed: false,
          id: new Date(),
        },
      ];
    case 'TOGGLE_TODO':
      const toggle = state.todo.map((item) => {
        if (action.payload === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return {
        ...state,
        todo: toggle,
      };

    default:
      return state;
  }
};
