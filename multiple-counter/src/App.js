import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';
import SimpleCounter from './Components/SimpleCounter';

// const initialState = [
//   {
//     id: 1,
//     count: 0,
//   },
//   {
//     id: 2,
//     count: 0,
//   },
// ];

function App() {
  // const [state, setState] = useState(initialState);

  // const increment = (id) => {
  //   const updatedCounter = state.map((c) => {
  //     if (c.id === id) {
  //       return {
  //         ...c,
  //         count: c.count + 1,
  //       };
  //     }
  //     return { ...c };
  //   });
  //   setState(updatedCounter);
  // };
  // const decrement = (id) => {
  //   const updatedCounter = state.map((c) => {
  //     if (c.id === id) {
  //       return {
  //         ...c,
  //         count: c.count - 1,
  //       };
  //     }
  //     return { ...c };
  //   });
  //   setState(updatedCounter);
  // };

  // const totalCount = () => {
  //   return state.reduce((pre, count) => pre + count.count, 0);
  // }

  return (
    <Provider store={store}>
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div class="max-w-md mx-auto mt-10 space-y-5">
          <SimpleCounter />
          <SimpleCounter />
          <SimpleCounter />
          {/* {state.map((count) => (
          <Counter
            key={count.id}
            id={count.id}
            count={count.count}
            increment={increment}
            decrement={decrement}
          />
        ))}
        {/* <Stats count={totalCount()} /> */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
