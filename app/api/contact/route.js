import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    const formData = await request.formData();

    const email = formData.get("email");
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `'PORTFOLIO CONTACT' <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIPENT,
            subject: subject + ` - From ${name} (${email})`,
            html: `<p>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: "Message Received" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong! Please try again' }, { status: 500 });
    }
}
