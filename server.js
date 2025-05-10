const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'rationqueuesystem',
  port: 3306 
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});



app.post('/api/booked-details', (req, res) => {
  const { bookingId, bookingDate, products, slot, shop, totalAmount } = req.body;

  console.log('Received booking details:', req.body); 

  const query = `
    INSERT INTO Bookeddetails (booking_id, booking_date, products, slot, shop, total_amount)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [bookingId, bookingDate, JSON.stringify(products), slot, shop, totalAmount], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted successfully:', result);
    res.status(200).send('Booked details added successfully');
  });
});

app.get('/api/booked-details', (req, res) => {
  const query = 'SELECT * FROM Bookeddetails';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }

    // Parse the products field for each result
    const parsedResults = results.map(row => ({
      ...row,
      products: JSON.parse(row.products || '[]') 
    }));

    res.status(200).json(parsedResults);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

