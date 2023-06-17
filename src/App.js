import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tax, setTax] = useState(10);
  const [quantity, setQuantity] = useState(1);
  const [totalTax, setTotalTax] = useState(0);

  function handleTaxModification(e) {
    setBill(e.target.value);
  }

  function handleTaxChange(e) {
    let value = e.target.value;
    setTax(value);
  }

  function quantityInc() {
    setQuantity((oldQuantity) => oldQuantity + 1);
  }

  function quantityDec() {
    if (quantity > 0) {
      setQuantity((oldQuantity) => oldQuantity - 1);
    }
  }

  function finalTax() {
    // const abc = tax.replace('%', '');
    const percentage = tax / 100;
    const result = (bill * quantity * percentage).toFixed(2);
    setTotalTax(result);
  }

  useEffect(() => {
    finalTax();
  }, [bill, tax, quantity]);

  return (
    <div>
      <label>Bill Total</label>
      <input
        type="text"
        placeholder={"0.00"}
        value={bill}
        onChange={handleTaxModification}
      />
      <label>Tax</label>
      <input
        type="text"
        placeholder={"0.00"}
        value={tax}
        onChange={handleTaxChange}
      />
      <div className="summary">
        <div className="quantity">
          <label>Quantity</label>
          <div className="quantity-control">
            <button onClick={quantityDec}>-</button>
            <span>{quantity}</span>
            <button onClick={quantityInc}>+</button>
          </div>
        </div>

        <div className="result">
          <label>Total Tax</label>
          <span>{totalTax}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
