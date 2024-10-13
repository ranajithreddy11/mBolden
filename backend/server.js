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
        user: '',
        pass: '' // Use your app password
    }
});

// Results Endpoint (existing)
app.post('/api/results', async (req, res) => {
    const { email, score } = req.body;

    // Determine the description based on the score
    let description = '';
    if (score >= 16 && score <= 20) {
        description = 'is Excellent. Your internal communications are well-developed and effective.';
    } else if (score >= 11 && score <= 15) {
        description = "is Good, but there's room for improvement. Consider reviewing specific areas for enhancement.";
    } else if (score >= 0 && score <= 10) {
        description = 'needs Improvement. A comprehensive internal communications diagnostic is recommended.';
    } else {
        return res.status(400).send('Invalid score');
    }

    // Define the email content
    const mailOptions = {
        from: 'mBolden <email>',
        to: email,
        subject: 'Your Survey Results and Template',
        text: `Based on your replies, your Internal Communications Audit score was ${score} / 20 points, which is an indication that internal communications in your company ${description}
        
Please find our free Action Plan Template attached.`,
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
        from: 'mBolden <email>',
        to: 'email',
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
