import { useReducer } from "react";

type State = {
  tickets: number;
};

type Action = { type: "ADD" } | { type: "REMOVE" } | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return { tickets: state.tickets + 1 };

    case "REMOVE":
      return { tickets: Math.max(0, state.tickets - 1) };

    case "RESET":
      return { tickets: 0 };

    default:
      return state;
  }
}

export default function Cart() {
  const [state, dispatch] = useReducer(reducer, { tickets: 0 });

  return (
    <div>
      <h2>🎫 Concert Tickets</h2>

      <p>Số vé: {state.tickets}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch({ type: "ADD" })}>Thêm vé</button>

        <button onClick={() => dispatch({ type: "REMOVE" })}>Bớt vé</button>

        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
}
