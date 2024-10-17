import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmial";
import { client, sender } from "./mailtrap";

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const recipients = [{ email }];
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Verify your email",
            html:htmlContent.replace("{verificationToken}", verificationToken),
            category: "Email Verification",
        })
    } catch (error) {
       
        throw new Error("failed to send  verification email");

    }
}
export const sendWelcomeEmail = async (email: string, name: string) => {
    const recipients = [{ email }];
    const htmlContent = generateWelcomeEmailHtml(name);
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Welcome to our Plattters",
            html:htmlContent,
           template_variables:{
            company_info_name: "Platters",
            name:name
           }
        })
    } catch (error) {
       
        throw new Error("failed to send  Welcome email");

    }
}

export const sendPasswordResetEmail = async (email: string, resetUrl: string) => {
    const recipients = [{ email }];
    const htmlContent = generatePasswordResetEmailHtml(resetUrl);
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Reset your password",
            html:htmlContent,
          category: "Reset Password ",
        })
    } catch (error) {
        
        throw new Error("Failed to send Reset  Password reset success email");

    }
}

export const sendResetSuccessEmail = async (email: string) => {
    const recipients = [{ email }];
    const htmlContent = generateResetSuccessEmailHtml();
    try {
        const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Password Reset  successfully ",
            html:htmlContent,
          category: "Password Reset",
        })
    } catch (error) {
       
        throw new Error("failed to send  Welcome email");

    }
}