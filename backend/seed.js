require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('./src/config/db');
const User = require('./src/models/User');
const House = require('./src/models/House');

const run = async () => {
  await connectDB();
  await User.deleteMany({});
  await House.deleteMany({});

  const pw = await bcrypt.hash('password123', 10);

  const users = await User.create([
    { name: 'Client One', email: 'client1@example.com', password: pw, role: 'client' },
    { name: 'Client Two', email: 'client2@example.com', password: pw, role: 'client' },
    { name: 'Customer One', email: 'customer1@example.com', password: pw, role: 'customer' }
  ]);

  const houses = await House.create([
    {
      title: 'Spacious 2-Bed Flat in London',
      description: 'Central London flat, near tube station, furnished.',
      location: 'London',
      price: 1800,
      rooms: 2,
      photos: ['https://images.unsplash.com/photo-1560184897-e0a145b8f30b?w=1200'],
      videos: [],
      owner: users[0]._id
    },
    {
      title: 'Cozy Studio in Manchester',
      description: 'Quiet neighborhood, close to university.',
      location: 'Manchester',
      price: 650,
      rooms: 1,
      photos: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200'],
      videos: [],
      owner: users[1]._id
    },
    {
      title: 'Family Home in Birmingham',
      description: '3 bed house with small garden.',
      location: 'Birmingham',
      price: 1200,
      rooms: 3,
      photos: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200'],
      videos: [],
      owner: users[0]._id
    }
  ]);

  console.log('Seeded users:', users.map(u => ({ email: u.email, id: u._id })));
  console.log('Seeded houses:', houses.map(h => ({ title: h.title, id: h._id })));
  process.exit(0);
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});
