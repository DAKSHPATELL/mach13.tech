import { NextResponse } from "next/server";

// You'll need to install an email provider, e.g.: npm install resend
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // --- Basic Validation ---
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // --- TODO: Send Email ---
    // This is where you'd use your email provider.
    // I've commented out the Resend example below.
    /*
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // TODO: Update this
      to: ["info@mach13.tech"], // TODO: Update this
      subject: `New Contact Form Submission from ${name}`,
      react: (
        <div>
          <h1>New Message from ${name}</h1>
          <p>Email: ${email}</p>
          <hr />
          <p>${message}</p>
        </div>
      ),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: "Error sending message." }, { status: 500 });
    }
    */
    // --- End of TODO ---

    // For now, we'll just simulate a successful send
    console.log("Received contact form submission:", { name, email, message });

    // Send success response
    return NextResponse.json({ success: true, message: "Your message has been sent!" });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
