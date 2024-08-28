const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const validator = require('validator'); // To validate email and phone

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection (if needed for other parts of your app)
mongoose.connect('mongodb://localhost:27017/your-database-name', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ranureddy18@gmail.com',
        pass: 'ykrtlwjqaabiijqr' // Use your app password
    }
});

// Results Endpoint (existing)
app.post('/api/results', async (req, res) => {
    const { email, score } = req.body;

    // Define the email content
    const mailOptions = {
        from: 'mBolden <ranureddy18@gmail.com>',
        to: email,
        subject: 'Your Survey Results and Template',
        text: `Thank you for completing the survey! Your score is ${score}. Please find our free Action Plan Template attached.`,
        attachments: [
            {
                filename: 'IC_Action_Plan_Template.pdf',
                path: './internal-communication-audit-action plan template.pdf' // Path to your template file
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});


// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validate email and phone formats
    if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    if (!validator.isNumeric(phone)) {
        return res.status(400).json({ success: false, message: 'Phone number must contain only digits' });
    }

    const mailOptions = {
        from: 'mBolden <ranureddy18@gmail.com>',
        to: 'ranureddy18@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
            <h3>You have a new contact form submission:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong><br/>${message}</p>
            <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error.message);
        res.status(500).json({ success: false, message: `Error sending message: ${error.message}` });
    }
});

// Basic Route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
