import { ACTIONS } from "./App";

export default function OperantionButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
