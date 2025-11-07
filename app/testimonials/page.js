'use client';
import SectionHeader from '../components/SectionHeader';

const testimonials = [
  { name: "Priya & Arjun", msg: "Our wedding was magical! The team made everything perfect." },
  { name: "Ramesh", msg: "Professional and reliable. My corporate event was a huge success!" },
  { name: "Divya", msg: "They turned my daughter’s birthday into a fairytale celebration!" },
];

export default function TestimonialsPage() {
  return (
    <section className="bg-gray-950 text-white min-h-screen pt-32 pb-20 px-6">
      <SectionHeader 
        title="Testimonials"
        subtitle="Hear from our happy clients who made their events truly V.I.P."
      />
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-gold/10 transition-shadow">
            <p className="text-gray-300 italic mb-3">“{t.msg}”</p>
            <p className="text-gold font-semibold">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
