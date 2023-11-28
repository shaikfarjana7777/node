const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const Form = require('./models/form'); 
const cors = require('cors'); 

const app = express();
const port = 3000; 

app.use(cors()); 

app.use(bodyParser.json());


app.post('/submit-form', async (req, res) => {
  try {
    
    const { 
      Fullname,
      Firstname,
      DOB,
      Email } = req.body;

    
    const newFormEntry = await Form.create({
      Fullname,
      Firstname,
      DOB,
      Email
    });

    
    res.status(201).json(newFormEntry);
  } catch (error) {
    
    console.error('Error handling form submission:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/fetch-data', async (req, res) => {
  try {
    
    const data = await Form.findAll({
      order: [['createdAt', 'DESC']], 
    });

    
    res.status(200).json(data);
  } catch (error) {
    
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/fetch-updated-data', (req, res) => {
  const clientVersion = req.query.version; 
  const updatedData = fetchDataSinceVersion(clientVersion); 
  res.json(updatedData);
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


sequelize.sync().then(() => {
  console.log('Database is connected');
});
