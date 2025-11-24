import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="relative h-[60vh] w-full bg-stone-200 mb-24">
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2000&auto=format&fit=crop"
          alt="Studio atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Our Story</h1>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-4xl mx-auto space-y-24">
        
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
             <h2 className="text-3xl font-serif">Founded on Simplicity</h2>
             <p className="text-stone-600 leading-relaxed">
               Kanso was born from a desire to strip away the unnecessary. In Japanese aesthetics, 
               'Kanso' refers to simplicity and the elimination of clutter. We take this philosophy 
               to heart in everything we design.
             </p>
           </div>
           <div className="relative aspect-square bg-stone-100">
             <Image 
               src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000&auto=format&fit=crop"
               alt="Wood texture detail"
               fill
               className="object-cover"
             />
           </div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
           <div className="relative aspect-square bg-stone-100 md:order-2">
             <Image 
               src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000&auto=format&fit=crop"
               alt="Design team working"
               fill
               className="object-cover"
             />
           </div>
           <div className="space-y-6 md:order-1">
             <h2 className="text-3xl font-serif">Sustainable Craft</h2>
             <p className="text-stone-600 leading-relaxed">
               We believe that true luxury lies in sustainability. Our wood is responsibly sourced, 
               our fabrics are natural, and our partners share our commitment to ethical production.
               We build furniture meant to last generations, not seasons.
             </p>
           </div>
        </section>

      </div>
    </div>
  );
}

