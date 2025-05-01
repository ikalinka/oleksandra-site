export default function ContactPage() {
    return (
      <main className="min-h-screen p-8 text-center">
        <h1 className="text-3xl font-bold text-purple-700">Contact</h1>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          You can reach me via Instagram, Telegram, or by email.
        </p>
        <div className="mt-6 space-y-2 text-purple-700 font-medium">
          <p>📬 Email: <a href="mailto:oleksandra.kalinka@gmail.com" className="underline">oleksandra.kalinka@gmail.com</a></p>
          <p>📷 Instagram: <a href="https://instagram.com/coachkalinka" target="_blank" className="underline">@coachkalinka</a></p>
          <p>📲 Telegram: <a href="https://t.me/Oleksandra_Kalinka" target="_blank" className="underline">@Oleksandra_Kalinka</a></p>
        </div>
      </main>
    );
  }
  