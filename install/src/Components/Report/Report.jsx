// src/components/ReportPage.js

import React from 'react';
import './Report.css'; 

const ReportPage = () => {
  // Sample report data
  const reportData = [
    { ReportID: 'R001', ReportType: 'Sales Report', GeneratedDate: '2025-02-01', Content: 'Total sales for the month: $15,000' },
    { ReportID: 'R002', ReportType: 'Occupancy Report', GeneratedDate: '2025-02-15', Content: 'Occupancy rate: 80%' },
    { ReportID: 'R003', ReportType: 'Customer Feedback', GeneratedDate: '2025-02-20', Content: 'Positive feedback received from 90% of guests' },
  ];

  return (
    <div className="report-page">
      <header>
        <h1>Hotel Reports Management</h1>
      </header>

      <div className="description">
        <p><strong>Description:</strong> Represents various reports generated for analysis.</p>
      </div>

      <table className="report-table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Report Type</th>
            <th>Generated Date</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map(report => (
            <tr key={report.ReportID}>
              <td>{report.ReportID}</td>
              <td>{report.ReportType}</td>
              <td>{report.GeneratedDate}</td>
              <td>{report.Content}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-report-btn">Generate New Report</button>
    </div>
  );
};

export default ReportPage;
