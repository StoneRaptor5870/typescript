import NewTodo from './components/NewTodo';
import Todos from './components/Todo';
import TodosContextProvider from './store/todo-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;