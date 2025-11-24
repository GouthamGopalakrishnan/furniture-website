import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <div className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
       <header className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h1>
        <p className="text-stone-500 text-lg">
          Have a question about a product or need design advice? We're here to help.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium uppercase tracking-wide text-stone-500">First Name</label>
                <input type="text" id="firstName" className="border-b border-stone-300 py-2 focus:outline-none focus:border-black transition-colors" placeholder="Jane" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium uppercase tracking-wide text-stone-500">Last Name</label>
                <input type="text" id="lastName" className="border-b border-stone-300 py-2 focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium uppercase tracking-wide text-stone-500">Email</label>
              <input type="email" id="email" className="border-b border-stone-300 py-2 focus:outline-none focus:border-black transition-colors" placeholder="jane@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium uppercase tracking-wide text-stone-500">Message</label>
              <textarea id="message" rows={4} className="border-b border-stone-300 py-2 focus:outline-none focus:border-black transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full mt-4">Send Message</Button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-xl font-serif mb-4">Showroom</h3>
            <p className="text-stone-600 leading-relaxed">
              123 Design District Blvd<br/>
              New York, NY 10013<br/>
              United States
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Hours</h3>
            <p className="text-stone-600 leading-relaxed">
              Mon - Fri: 10am - 7pm<br/>
              Sat - Sun: 11am - 5pm
            </p>
          </div>

          <div>
             <h3 className="text-xl font-serif mb-4">Contact</h3>
             <p className="text-stone-600 leading-relaxed">
               hello@kanso.com<br/>
               +1 (555) 123-4567
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

