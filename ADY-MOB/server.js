import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rufataliyev006@gmail.com",
    pass: "ofrt sngm uscj lzzi",
  },
});

app.post("/send-email", async (req, res) => {
  const { fullname, email, phone, trip, totalPrice } = req.body;

  const seats = trip?.seats?.length
    ? trip.seats.join(", ")
    : "No seats selected";

  const mailOptions = {
    from: '"ADY" <rufataliyev006@gmail.com>',
    to: email,
    subject: "Your Ticket Information",
    html: `
      <div style="font-family: 'Arial', sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
        <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
          
          <div style="background: linear-gradient(135deg, #1d5c87, #3b7db3); padding: 20px; text-align: center; color: #ffffff; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Train Ticket Confirmation</h1>
            <p style="margin: 5px 0 0;">Thank you for traveling with us!</p>
          </div>

          <div style="padding: 20px;">
            <h2 style="text-align: center; color: #1d5c87;">Ticket Details</h2>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #f4f4f9; border-radius: 5px; overflow: hidden;">
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">Full Name:</td>
                <td style="padding: 10px;">${fullname}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">Phone Number:</td>
                <td style="padding: 10px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">From:</td>
                <td style="padding: 10px;">${trip.from}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">To:</td>
                <td style="padding: 10px;">${trip.to}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">Date:</td>
                <td style="padding: 10px;">${trip.date}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">Time:</td>
                <td style="padding: 10px;">${trip.time}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">Seats:</td>
                <td style="padding: 10px;">${seats}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; background-color: #3b7db3; color: #ffffff;">Total Price:</td>
                <td style="padding: 10px;">${totalPrice}₼</td>
              </tr>
            </table>

            <div style="text-align: center; margin-top: 20px;">
              <h3 style="color: #28a745;">Payment Successful! ✅</h3>
              <p>Your payment has been successfully processed. Your ticket is confirmed!</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p>We wish you a pleasant journey! 🚆</p>
              <p>
                Contact us at
                <a href="mailto:alievrufat380@gmail.com" style="color: #1d5c87;">
                  alievrufat380@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div style="background: #1d5c87; color: white; text-align: center; padding: 10px; border-radius: 0 0 10px 10px;">
            <p style="margin: 0;">Thank you for choosing us!</p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
