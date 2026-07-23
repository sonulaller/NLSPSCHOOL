import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden h-[400px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0!2d76.3!3d29.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew+Little+Star+Public+School+Kasan!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=New+Little+Star+Public+School,+Kichhana+Road,+Kasan,+Kaithal,+Haryana+136044"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Little Star Public School Location"
            />
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Campus Address</h4>
                <p className="text-muted-foreground">New Little Star Public School<br />Kichhana Road, Kasan<br />Kaithal, Haryana 136044</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Phone</h4>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Email</h4>
                <p className="text-muted-foreground">newlittlestarkasan@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Working Hours</h4>
                <p className="text-muted-foreground">Monday – Saturday: Open · Closes 2:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
