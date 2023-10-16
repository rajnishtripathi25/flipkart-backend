const nodemailer = require('nodemailer');

const sendMail = async (req) => {

    const items = req.cartProducts;
    let Quantity = 0;
    let Total = 0;

  
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                th {
                    background-color: #00f;
                    color: white;
                }
            </style>
        </head>
        <body>
            <h1>Order Confirmation</h1>
    
            <p>Dear ${req.name},</p>
    
            <p>Thank you for your order. We are excited to confirm your recent purchase. Here are the details of your order:</p>
    
            <table>
                <thead>
                    <tr>
                        <th>Name of Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map((data) => {
                        Quantity += data.quantity;
                        Total += data.price.cost * data.quantity;
                        return `
                            <tr>
                                <td>${data.title.shortTitle}</td>
                                <td>${data.quantity}</td>
                                <td>₹${data.price.cost * data.quantity}</td>
                            </tr>
                        `;
                    }).join('')}
                    <tr>
                        <td>Subtotal</td>
                        <td>${Quantity}</td>
                        <td>₹${Total}</td>
                    </tr>
                </tbody>
            </table>
    
            <p>Order Total: ₹${Total}</p>
    
            <p>Shipping Address:</p>
            <p>${req.address}</p>
    
            <p>Payment Method: card</p>
    
            <p>Your order is now being processed, and you will receive a notification once it has been shipped. If you have any questions or need further assistance, please feel free to contact our customer support team at [Customer Support Email].</p>
    
            <p>Thank you for shopping with us!</p>
    
            <p>Sincerely,<br>[Flipkart Team]</p>
        </body>
        </html>
    `;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rajnish.tripathi@unthinkable.co',
                pass: 'Rajnish@25',
            },
        });

        const info = await transporter.sendMail({
            from: 'rajnish.tripathi@unthinkable.co',
            to: req.email,
            subject: 'Order Confirmed',
            html: html,
        });

        console.log("Message sent: %s", info.messageId);

    } catch (err) {
        console.error(err);

    }
};

module.exports = sendMail;
