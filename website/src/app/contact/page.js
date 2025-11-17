export const metadata = {
  title: "Contact | My Company",
  description: "Contact us for inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <textarea placeholder="Message"></textarea><br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
