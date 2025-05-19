import React from 'react';

function Invoice() {
  // Mock invoice data - replace with actual data from your state management
  const invoiceData = {
    invoiceNumber: 'INV-2023-001',
    date: new Date().toLocaleDateString(),
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St, City, Country'
    },
    items: [
      { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
      { id: 2, name: 'Product 2', price: 29.99, quantity: 1 }
    ],
    subtotal: 69.97,
    tax: 7.00,
    total: 76.97
  };

  const printInvoice = () => {
    window.print();
  };

  return (
    <div className="invoice-page">
      <div className="invoice-actions">
        <button onClick={printInvoice}>Print Invoice</button>
      </div>
      <div className="invoice" id="printable-invoice">
        <div className="invoice-header">
          <h2>Invoice</h2>
          <div>
            <p><strong>Invoice #:</strong> {invoiceData.invoiceNumber}</p>
            <p><strong>Date:</strong> {invoiceData.date}</p>
          </div>
        </div>
        
        <div className="customer-info">
          <h3>Customer Information</h3>
          <p>{invoiceData.customer.name}</p>
          <p>{invoiceData.customer.email}</p>
          <p>{invoiceData.customer.address}</p>
        </div>
        
        <div className="invoice-items">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="invoice-summary">
          <p><strong>Subtotal:</strong> ${invoiceData.subtotal.toFixed(2)}</p>
          <p><strong>Tax:</strong> ${invoiceData.tax.toFixed(2)}</p>
          <p className="total"><strong>Total:</strong> ${invoiceData.total.toFixed(2)}</p>
        </div>
        
        <div className="invoice-footer">
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    </div>
  );
}

export default Invoice;