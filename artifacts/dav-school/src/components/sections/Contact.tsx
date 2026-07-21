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
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-medium">Interactive Map Integration</p>
                <p className="text-sm">Kasan, Haryana</p>
              </div>
            </div>
            {/* Visual overlay to look like a map */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Campus Address</h4>
                <p className="text-muted-foreground">New Little Star Public School<br />Kasan, Haryana<br />India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Phone</h4>
                <p className="text-muted-foreground">+91-1746-222333<br />+91-98765-43210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Email</h4>
                <p className="text-muted-foreground">newlittlestarkasan@gmail.com<br />info@newlittlestarkasan.edu.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-1">Working Hours</h4>
                <p className="text-muted-foreground">Monday - Saturday: 8:00 AM to 2:30 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
