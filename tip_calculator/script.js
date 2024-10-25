function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);

  let tipPercent = parseFloat(document.getElementById("tip").value);

  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");

    return;
  }

  if (isNaN(tipPercent) || tipPercent < 10) {
    tipPercent = 10;

    alert("Tip percentage cannot be less than 10%. Defaulting to 10%.");
  }

  const tipAmount = (bill * tipPercent) / 100;

  const total = bill + tipAmount;

  document.getElementById("result").innerText = `tip: $${tipAmount.toFixed(
    2
  )}\nTotal: $${total.toFixed(2)}`;
}
