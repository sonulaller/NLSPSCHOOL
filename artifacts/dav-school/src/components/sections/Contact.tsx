import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">Get in touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Google Map */}
          <div className="flex flex-col gap-3">
            <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[380px] shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=New+Little+Star+Public+School+Kasan+Kaithal+Haryana&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Little Star Public School Location"
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=New+Little+Star+Public+School,+Balu+Road,+Kasan,+Kaithal,+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-secondary hover:underline"
            >
              <ExternalLink size={14} />
              View on Google Maps
            </a>
          </div>

          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin size={20} className="sm:hidden" />
                <MapPin size={24} className="hidden sm:block" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-primary mb-1">Campus Address</h4>
                <p className="text-muted-foreground text-sm sm:text-base">New Little Star Public School<br />Kichhana Road, Kasan<br />Kaithal, Haryana</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone size={20} className="sm:hidden" />
                <Phone size={24} className="hidden sm:block" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-primary mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm sm:text-base">Coming Soon</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail size={20} className="sm:hidden" />
                <Mail size={24} className="hidden sm:block" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-primary mb-1">Email</h4>
                <p className="text-muted-foreground text-sm sm:text-base break-all">{`newlittlestarkasan@gmail.com`}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock size={20} className="sm:hidden" />
                <Clock size={24} className="hidden sm:block" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg text-primary mb-1">Working Hours</h4>
                <p className="text-muted-foreground text-sm sm:text-base">Monday – Saturday: Open · Closes 2:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
