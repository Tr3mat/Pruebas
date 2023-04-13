const form = document.querySelector('form');
const table = document.querySelector('#amortizationTable');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const loanAmount = parseFloat(document.querySelector('#loanAmount').value);
  const interestRate = parseFloat(document.querySelector('#interestRate').value) / 100 / 12;
  const loanTerm = parseInt(document.querySelector('#loanTerm').value);

  const payment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
  let balance = loanAmount;
  let totalInterest = 0;

  table.innerHTML = `
    <tr>
      <th>Mes</th>
      <th>Pago mensual</th>
      <th>Interés</th>
      <th>Capital</th>
      <th>Balance</th>
    </tr>
  `;

  for (let i = 1; i <= loanTerm; i++) {
    const interest = balance * interestRate;
    const principal = payment - interest;
    balance -= principal;
    totalInterest += interest;

    table.innerHTML += `
      <tr>
        <td>${i}</td>
        <td>$${payment.toFixed(2)}</td>
        <td>$${interest.toFixed(2)}</td>
        <td>$${principal.toFixed(2)}</td>
        <td>$${balance.toFixed(2)}</td>
      </tr>
    `;
  }

  table.innerHTML += `
    <tr>
      <td>Total</td>
      <td></td>
      <td>$${totalInterest.toFixed(2)}</td>
      <td>$${(loanAmount + totalInterest).toFixed(2)}</td>
      <td></td>
    </tr>
  `;
});