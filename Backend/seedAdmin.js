// seedAdmin.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const AdminUser = require('./Admin/models/AdminUser');

dotenv.config(); // Load your .env file

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const existing = await AdminUser.findOne({ email: 'info@naavinetwork.ai' });
    if (existing) {
      console.log('Admin already exists');
      return process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('%Test*(1987!', 10); //example for password

    const admin = new AdminUser({
      email: 'info@naavinetwork.ai',
      password: hashedPassword,
    });

    await admin.save();
    console.log('✅ Admin user created');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding admin:', err);
    process.exit(1);
  }
};

seedAdmin();
