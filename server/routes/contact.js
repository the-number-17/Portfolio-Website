const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const Contact = require('../models/Contact'); // Uncomment when MongoDB is set up

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // For future implementation: Save to database
    /*
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    const savedContact = await newContact.save();
    */

    // Send email notification (uncomment and configure when ready to use)
    /*
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    */

    // For now, just return success
    return res.status(200).json({ success: true, msg: 'Message received' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, msg: 'Server error' });
  }
});

module.exports = router; 