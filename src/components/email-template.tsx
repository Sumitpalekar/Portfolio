import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "1rem" }}>
    <h2>New message from {fullName}</h2>
    <p><strong>Email:</strong> {email}</p>
    <blockquote>{message}</blockquote>
  </div>
);
