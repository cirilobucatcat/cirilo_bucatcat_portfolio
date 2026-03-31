'use server'

import { ContactFormSchema, FormState } from "@/lib/validators"
import { transporter } from "@/plugins/transporter";

export async function sendEmailMessage(prevState: FormState, formData: FormData) {
    
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to send message',
        }
    }

    try {

        const { name, email, subject, message } = validatedFields.data
        await transporter.sendMail({
            from: `${name}" <${process.env.NEXT_FROM_EMAIL}>`,
            to: process.env.NEXT_FROM_EMAIL,
            replyTo: email,
            subject: subject,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>`,
        });

        return { success: true, message: 'Email has successfully sent!'}
    } catch (err) {
        return { success: false, message: "Error while sending mail:" }
    }
}