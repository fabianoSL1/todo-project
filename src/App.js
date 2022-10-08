import { useReducer } from 'react';
import Bar from './Bar';
import NewTodo from './components/NewTodo';
import TodoItem from './components/TodoItem';

const initial = [
  {
    text: 'todo 1',
    complete: true,
  },
  {
    text: 'todo 2',
    complete: false,
  },
  {
    text: 'todo 3',
    complete: false,
  },
];

function App() {
  const [todoList, dispatch] = useReducer(reducer, initial);

  function handleAdd(text) {
    dispatch({
      type: 'added',
      text: text,
    });
  }

  function handleDelete(text) {
    dispatch({
      type: 'deleted',
      text: text,
    });
  }

  return (
    <div className="font-montserrat max-w-md mx-auto px-4">
      <h1 className="text-3xl text-center text-[#333333] mt-8 font-raleway font-bold">
        #todo
      </h1>

      <Bar />

      <NewTodo handleAdd={handleAdd} />

      {todoList.map(({ text, complete }, key) => (
          <TodoItem
            text={text}
            initial={complete}
            handleDelete={handleDelete}
            key={key}
          />
      ))}
    </div>
  );
}

function reducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          text: action.text,
          complete: false,
        },
      ];
    }
    case 'deleted': {
      return tasks.filter((task) => task.text !== action.text);
    }
    default: {
    }
  }
}
export default App;
