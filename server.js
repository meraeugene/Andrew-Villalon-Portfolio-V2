import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import nodemailer from "nodemailer";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  try {
    // Destructure user input from the request body
    let { name, email, message } = req.body;

    // Trim whitespace from input fields
    name = name.trim();
    email = email.trim();
    message = message.trim();

    // Check for empty input fields
    if (name === "" || email === "" || message === "") {
      res.status(400).json({ message: "Input fields are empty" });
      return;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      res.status(400).json({
        message: "Invalid email format.",
      });
      return;
    }

    const mailOptions = {
      from: "villalon.andrew123@gmail.com",
      to: "villalon.andrew123@gmail.com",
      subject: "New Contact Form Submission",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: #fff;">
        <h2 style="color: #333;">Contact Form Submission</h2>
        <div style="margin-top: 20px;">
          <p style="margin-bottom: 10px;"><strong style="color: #333;">Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong style="color: #333;">Email:</strong> ${email}</p>
          <p style="margin-bottom: 10px;"><strong style="color: #333;">Message:</strong></p>
          <p style="margin-bottom: 20px;">${message}</p>
        </div>
        <p style="font-size: 12px; color: #888; margin-top: 20px;">This email was sent from the contact form on your portfolio.</p>
      </div>
    `,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else if (success) {
        console.log("Nodemailer is running ");
      }
    });

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: `Thank you, ${name}! Your message has been sent successfully.`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
});

app.listen(port, () => console.log(`Server running on port ${port} `));
