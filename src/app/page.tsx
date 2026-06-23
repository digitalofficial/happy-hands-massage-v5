"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Heart,
  Leaf,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Sparkles,
  Users,
  Baby,
  Flame,
  Hand,
  Droplets,
  Award,
  CalendarCheck,
} from "lucide-react";

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}

const services = [
  { icon: Hand, name: "Swedish Massage", description: "Gentle, flowing strokes to relax the entire body and improve circulation.", durations: ["60 min - $85", "90 min - $120"] },
  { icon: Sparkles, name: "Deep Tissue", description: "Targeted pressure to release chronic muscle tension and knots deep within.", durations: ["60 min - $95", "90 min - $135"] },
  { icon: Flame, name: "Hot Stone", description: "Heated basalt stones melt away tension while promoting deep relaxation.", durations: ["60 min - $105", "90 min - $145"] },
  { icon: Award, name: "Sports Massage", description: "Performance-focused therapy for athletes to prevent and treat injuries.", durations: ["60 min - $95", "90 min - $135"] },
  { icon: Baby, name: "Prenatal", description: "Gentle, nurturing massage tailored to the needs of expectant mothers.", durations: ["60 min - $90", "90 min - $125"] },
  { icon: Users, name: "Couples Massage", description: "Share a relaxing experience together in our serene private couples suite.", durations: ["60 min - $170", "90 min - $240"] },
  { icon: Heart, name: "Reflexology", description: "Pressure point therapy on feet and hands to restore balance throughout the body.", durations: ["30 min - $50", "60 min - $80"] },
  { icon: Droplets, name: "Aromatherapy", description: "Essential oil-enhanced massage combining scent therapy with relaxation techniques.", durations: ["60 min - $95", "90 min - $135"] },
];

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "The best massage I've ever had. The therapist knew exactly where my tension was hiding. I left feeling like a new person." },
  { name: "David R.", rating: 5, text: "I've been coming for monthly deep tissue sessions for a year. My chronic back pain is nearly gone. Truly life-changing." },
  { name: "Lisa T.", rating: 5, text: "The couples massage was the perfect anniversary gift. The atmosphere is so peaceful and the staff is incredibly warm." },
];

const benefits = [
  { title: "Stress Relief", description: "Reduce cortisol levels and promote deep mental and physical relaxation." },
  { title: "Pain Management", description: "Alleviate chronic pain, headaches, and muscle tension naturally." },
  { title: "Better Sleep", description: "Improve sleep quality and duration through therapeutic touch." },
  { title: "Flexibility", description: "Increase range of motion and reduce stiffness in joints and muscles." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-soft/90 backdrop-blur-md border-b border-sage/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-[family-name:var(--font-quicksand)] text-2xl font-bold text-sage">
            Happy Hands Massage
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-charcoal/70">
            <a href="#services" className="hover:text-sage transition-colors">Services</a>
            <a href="#pricing" className="hover:text-sage transition-colors">Pricing</a>
            <a href="#benefits" className="hover:text-sage transition-colors">Benefits</a>
            <a href="#testimonials" className="hover:text-sage transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-sage transition-colors">Contact</a>
          </div>
          <a
            href="#booking"
            className="hidden md:flex items-center gap-2 bg-sage text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sage/90 transition-colors"
          >
            <CalendarCheck className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop"
          alt="Spa massage setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Leaf className="w-5 h-5 text-sage" />
            <p className="text-sage tracking-[0.3em] uppercase text-sm">
              Therapeutic Massage in Tucson
            </p>
            <Leaf className="w-5 h-5 text-sage" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-[family-name:var(--font-quicksand)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            style={{ textShadow: "2px 4px 12px rgba(0,0,0,0.5)" }}
          >
            Relax. Restore. Renew.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Professional massage therapy tailored to your body&apos;s needs. Experience the healing power of therapeutic touch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#booking"
              className="bg-sage text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage/90 transition-colors"
            >
              Book Your Session
            </a>
            <a
              href="#services"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-sage hover:text-sage transition-colors"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Strip */}
      <Section className="py-16 px-6 bg-sage/5">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-[family-name:var(--font-quicksand)] font-bold text-lg text-charcoal mb-2">
                {benefit.title}
              </h3>
              <p className="text-charcoal/60 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section className="py-24 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sage tracking-[0.2em] uppercase text-sm mb-4">What We Offer</p>
            <h2 className="font-[family-name:var(--font-quicksand)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
              From gentle relaxation to deep therapeutic work, we offer a full range of massage modalities to meet your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-sage/15 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-sage" />
                </div>
                <h3 className="font-[family-name:var(--font-quicksand)] text-xl font-bold text-charcoal mb-2">
                  {service.name}
                </h3>
                <p className="text-charcoal/60 text-sm mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.durations.map((d) => (
                    <p key={d} className="text-sage font-semibold text-sm">{d}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Highlight */}
      <Section className="py-24 px-6 bg-sage/5" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sage tracking-[0.2em] uppercase text-sm mb-4">Value Packages</p>
            <h2 className="font-[family-name:var(--font-quicksand)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Massage Packages
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Serenity", sessions: "3 Sessions", price: "$235", perSession: "$78/session", desc: "Perfect for trying us out. Save $20 on three 60-minute Swedish massages." },
              { name: "Harmony", sessions: "6 Sessions", price: "$440", perSession: "$73/session", desc: "Our most popular package. Six 60-minute sessions of your choice. Save $70.", featured: true },
              { name: "Bliss", sessions: "10 Sessions", price: "$690", perSession: "$69/session", desc: "Best value for regulars. Ten 60-minute sessions of any modality. Save $160." },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-8 text-center ${
                  pkg.featured
                    ? "bg-sage text-white shadow-xl scale-105"
                    : "bg-white border border-sage/15 shadow-sm"
                }`}
              >
                {pkg.featured && (
                  <span className="bg-white text-sage text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </span>
                )}
                <h3
                  className={`font-[family-name:var(--font-quicksand)] text-2xl font-bold mt-4 mb-1 ${
                    pkg.featured ? "text-white" : "text-charcoal"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.featured ? "text-white/80" : "text-charcoal/60"}`}>
                  {pkg.sessions}
                </p>
                <p className={`text-4xl font-bold mb-1 ${pkg.featured ? "text-white" : "text-sage"}`}>
                  {pkg.price}
                </p>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-white/70" : "text-charcoal/50"}`}>
                  {pkg.perSession}
                </p>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-white/80" : "text-charcoal/60"}`}>
                  {pkg.desc}
                </p>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    pkg.featured
                      ? "bg-white text-sage hover:bg-white/90"
                      : "bg-sage text-white hover:bg-sage/90"
                  }`}
                >
                  Choose {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-24 px-6" id="benefits">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop"
              alt="Peaceful spa environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sage/30" />
          </motion.div>
          <div>
            <p className="text-sage tracking-[0.2em] uppercase text-sm mb-4">Why Massage</p>
            <h2 className="font-[family-name:var(--font-quicksand)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Benefits of Regular Massage
            </h2>
            <p className="text-charcoal/60 text-lg mb-8">
              Massage therapy is more than a luxury. It&apos;s an investment in your health and well-being with proven benefits backed by medical research.
            </p>
            <div className="space-y-4">
              {[
                "Reduces stress, anxiety, and depression",
                "Relieves chronic pain and muscle tension",
                "Improves sleep quality and immune function",
                "Enhances flexibility and range of motion",
                "Lowers blood pressure and heart rate",
                "Accelerates recovery from injuries",
              ].map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-3 h-3 text-sage" />
                  </div>
                  <p className="text-charcoal/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-24 px-6 bg-sage/5" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sage tracking-[0.2em] uppercase text-sm mb-4">Client Love</p>
            <h2 className="font-[family-name:var(--font-quicksand)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-blush fill-blush" />
                  ))}
                </div>
                <p className="text-charcoal/70 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-[family-name:var(--font-quicksand)] font-bold text-charcoal">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Booking / Contact */}
      <Section className="py-24 px-6" id="booking">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div id="contact">
            <p className="text-sage tracking-[0.2em] uppercase text-sm mb-4">Book Today</p>
            <h2 className="font-[family-name:var(--font-quicksand)] text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Schedule Your Session
            </h2>
            <p className="text-charcoal/60 text-lg mb-8">
              Ready to feel your best? Book online or give us a call. Walk-ins welcome based on availability.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Location</h3>
                  <p className="text-charcoal/60">2850 E Speedway Blvd, Suite 108<br />Tucson, AZ 85716</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Hours</h3>
                  <div className="text-charcoal/60 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                  <p className="text-charcoal/60">(520) 555-5678</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white rounded-2xl p-8 shadow-sm border border-sage/10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-charcoal/70 text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-sage/20 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-sage transition-colors"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-charcoal/70 text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-sage/20 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-charcoal/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-sage/20 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-sage transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-charcoal/70 text-sm mb-2">Service</label>
                <select className="w-full border border-sage/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-sage transition-colors">
                  <option>Swedish Massage</option>
                  <option>Deep Tissue</option>
                  <option>Hot Stone</option>
                  <option>Sports Massage</option>
                  <option>Prenatal</option>
                  <option>Couples Massage</option>
                  <option>Reflexology</option>
                  <option>Aromatherapy</option>
                </select>
              </div>
              <div>
                <label className="block text-charcoal/70 text-sm mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full border border-sage/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-sage transition-colors"
                />
              </div>
              <div>
                <label className="block text-charcoal/70 text-sm mb-2">Notes</label>
                <textarea
                  rows={3}
                  className="w-full border border-sage/20 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-sage transition-colors resize-none"
                  placeholder="Any special requests or areas of concern..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-sage text-white py-4 rounded-full font-semibold text-lg hover:bg-sage/90 transition-colors"
              >
                Book Appointment
              </motion.button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-charcoal py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-[family-name:var(--font-quicksand)] text-2xl font-bold text-sage mb-4">
                Happy Hands Massage
              </h3>
              <p className="text-white/60 text-sm">
                Professional massage therapy in Tucson, AZ. Your path to relaxation and wellness starts here.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Swedish Massage</p>
                <p>Deep Tissue</p>
                <p>Hot Stone</p>
                <p>Couples Massage</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>2850 E Speedway Blvd, Suite 108</p>
                <p>Tucson, AZ 85716</p>
                <p>(520) 555-5678</p>
                <p>hello@happyhandsmassage.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Happy Hands Massage. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Built by Digital Official
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
