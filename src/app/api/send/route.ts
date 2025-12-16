import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = Email.safeParse(body);

    if (!parsed.success) {
      return Response.json({ error: parsed.error?.message }, { status: 400 });
    }

    const data = parsed.data;

    const { data: resendData, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.NEXT_PUBLIC_EMAIL_TO!],
      subject: "New Contact Message",
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
