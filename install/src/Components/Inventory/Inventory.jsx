import React from 'react';
import './Inventory.css'; 

const InventoryPage = () => {
  // Sample inventory data
  const inventoryData = [
    { InventoryID: '001', ItemName: 'Toiletries', Quantity: 250, Description: 'Shampoos, Soaps, and Towels' },
    { InventoryID: '002', ItemName: 'Linens', Quantity: 150, Description: 'Bed Sheets and Pillow Cases' },
    { InventoryID: '003', ItemName: 'Cleaning Supplies', Quantity: 100, Description: 'Floor Cleaners, Disinfectants, and Brushes' }
  ];

  return (
    <div className="inventory-page">
      <header>
        <h1>Hotel Inventory Management</h1>
      </header>

      <div className="description">
        <p><strong>Description:</strong> Manages hotel inventory items (e.g., toiletries, linens).</p>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Inventory ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map(item => (
            <tr key={item.InventoryID}>
              <td>{item.InventoryID}</td>
              <td>{item.ItemName}</td>
              <td>{item.Quantity}</td>
              <td>{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-item-btn">Add New Item</button>
    </div>
  );
};

export default InventoryPage;
