# use-modal-state

React hook for easy management of multiple modals using a single state object.

## Install

```
npm install --save @tdkn/use-modal-state
```

## Usage

```jsx
import { useModalState } from "@tdkn/use-modal-state";

const Demo = () => {
  const [modalState, open, close] = useModalState({
    apple: false,
    banana: false,
    orange: false,
  });

  return (
    <>
      <button onClick={() => open("apple")}>open apple</button>
      <button onClick={() => open("banana")}>open banana</button>
      <button onClick={() => open("orange")}>open orange</button>

      {modalState.apple && <Modal onClose={() => close("apple")} />}
      {modalState.banana && <Modal onClose={() => close("banana")} />}
      {modalState.orange && <Modal onClose={() => close("orange")} />}
    </>
  );
};
```

## Why?

Is it beautiful to use so many useState?
(Or do you want to think of a lot of variable names?)

```jsx
import { useState } from "react";

const Demo = () => {
  const [apple, setApple] = useState(false);
  const [banana, setBanana] = useState(false);
  const [orange, setOrange] = useState(false);

  return (
    <>
      <button onClick={() => setApple(true)}>open apple</button>
      <button onClick={() => setBanana(true)}>open banana</button>
      <button onClick={() => setOrange(true)}>open orange</button>

      {apple && <Modal onClose={() => setApple(false)} />}
      {banana && <Modal onClose={() => setBanana(false)} />}
      {orange && <Modal onClose={() => setOrange(false)} />}
    </>
  );
};
```

Do you want strongly-typed autocomplete?

```jsx
import { useState } from "react";

const Demo = () => {
  const [state, setState] = useState({
    apple: false,
    banana: false,
    orange: false,
  });

  const handleOpen = (key: string) => () =>
    setState((prevState) => ({ ...prevState, [key]: true }));

  const handleClose = (key: string) => () =>
    setState((prevState) => ({ ...prevState, [key]: false }));

  return (
    <>
      <button onClick={handleOpen("apple")}>apple</button>
      <button onClick={handleOpen("banana")}>banana</button>
      <button
        onClick={handleOpen(
          "grape" /* -> grape is invalid key, but no ts-errors :( */
        )}
      >
        orange
      </button>

      {state.apple && <Modal onClose={handleClose("apple")} />}
      {state.banana && <Modal onClose={handleClose("banana")} />}
      {state.orange && <Modal onClose={handleClose("orange")} />}
    </>
  );
};
```

## Author

- Shun Tedokon ([@tdkn\_](https://twitter.com/tdkn_))

## License

The MIT License.
