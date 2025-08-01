module.exports= {
  customers: [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
  ],

  accounts: [
    {
      id: "1",
      customer_id: "1",
      accountNumber: "ACC123",
      balance: 1000.10,
      currency: "USD",
    },
    {
      id: "2",
      customer_id: "1",
      accountNumber: "ACC124",
      balance: 500.30,
      currency: "USD",
    },
    {
      id: "3",
      customer_id: "2",
      accountNumber: "ACC456",
      balance: 2500.50,
      currency: "EUR",
    },
  ],

  transections: [
    {
      id: "1",
      account_id: "1",
      type: "DEBIT",
      amount: 100.10,
      description: "Grocery",
      date: "2025-07-29",
    },
    {
      id: "1",
      account_id: "1",
      type: "DEBIT",
      amount: 10,
      date: "2025-07-29",
    },
    {
      id: "2",
      account_id: "1",
      type: "CREDIT",
      amount: 200.50,
      description: "Refund",
      date: "2025-07-28",
    },
    {
      id: "3",
      account_id: "2",
      type: "DEBIT",
      amount: 50.30,
      description: "Transport",
      date: "2025-07-27",
    },
    {
      id: "4",
      account_id: "3",
      type: "CREDIT",
      amount: 1000.70,
      description: "Salary",
      date: "2025-07-26",
    },
  ],
}


