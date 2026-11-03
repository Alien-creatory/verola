export default function SoftwareAgencyWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#2563eb,transparent_35%),radial-gradient(circle_at_bottom_left,#9333ea,transparent_30%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Trusted by startups, schools & online businesses
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Build a <span className="text-blue-500">Powerful</span> Online Presence That Drives Sales
            </h1>

            <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
              We design modern websites, business systems, software platforms, branding solutions and digital experiences that help businesses grow faster, attract customers and increase revenue.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-600/30">
                Start Your Project
              </button>

              <button className="border border-white/20 hover:bg-white/10 transition px-7 py-4 rounded-2xl font-semibold text-lg">
                View Portfolio
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-bold">150+</h2>
                <p className="text-gray-400 text-sm mt-2">Projects Delivered</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">98%</h2>
                <p className="text-gray-400 text-sm mt-2">Client Satisfaction</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">24/7</h2>
                <p className="text-gray-400 text-sm mt-2">Support & Maintenance</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-xl shadow-2xl">
              <div className="bg-gray-950 rounded-3xl overflow-hidden border border-white/10">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 h-36 flex flex-col justify-between">
                      <div className="text-sm text-blue-100">Business Growth</div>
                      <div>
                        <h3 className="text-3xl font-black">+240%</h3>
                        <p className="text-sm text-blue-100">Customer engagement</p>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 h-36 flex flex-col justify-between">
                      <div className="text-sm text-gray-400">Traffic Analytics</div>
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-500 rounded-full w-full"></div>
                        <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                        <div className="h-2 bg-blue-500 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-xl">Website Conversion</h3>
                        <p className="text-gray-400 text-sm">Optimized for sales and leads</p>
                      </div>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        Live
                      </span>
                    </div>

                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[82%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-500 font-semibold uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Everything Your Business Needs To Succeed Online
            </h2>
            <p className="text-gray-400 mt-6 text-lg">
              From websites to advanced software systems, we create digital solutions designed to increase visibility, automate operations and maximize profits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Design & Development',
                desc: 'Modern responsive websites designed to convert visitors into paying customers.',
              },
              {
                title: 'Custom Software Systems',
                desc: 'Powerful software tailored to automate business operations and improve efficiency.',
              },
              {
                title: 'Mobile App Development',
                desc: 'High-performance Android and iOS apps built for user engagement and growth.',
              },
              {
                title: 'Branding & Graphics',
                desc: 'Professional logos, visuals and brand identities that stand out in the market.',
              },
              {
                title: 'SEO & Digital Marketing',
                desc: 'Strategic advertising and SEO campaigns that bring traffic and sales.',
              },
              {
                title: 'Website Maintenance',
                desc: 'Reliable updates, backups, support and security for long-term performance.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 transition">
                  ✦
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-500 font-semibold uppercase tracking-widest mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              We Build Digital Products That Actually Generate Results
            </h2>

            <div className="space-y-8 mt-10">
              {[
                'High-converting modern designs',
                'Fast-loading responsive websites',
                'Expert-level marketing strategies',
                'Affordable and scalable solutions',
                'Dedicated customer support',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">{item}</h3>
                    <p className="text-gray-400 mt-2">
                      Designed with business growth and customer experience in mind.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 h-64 flex flex-col justify-end shadow-2xl">
                <h3 className="text-3xl font-black">Smart Systems</h3>
                <p className="text-white/80 mt-2">
                  Automate tasks and save time.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-48 flex flex-col justify-end">
                <h3 className="text-2xl font-bold">Creative Branding</h3>
                <p className="text-gray-400 mt-2">
                  Memorable business identity.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-10">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-48 flex flex-col justify-end">
                <h3 className="text-2xl font-bold">SEO Optimized</h3>
                <p className="text-gray-400 mt-2">
                  Rank higher on search engines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 h-64 flex flex-col justify-end border border-white/10">
                <h3 className="text-3xl font-black">Sales Focused</h3>
                <p className="text-gray-300 mt-2">
                  Every design element encourages conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-500 font-semibold uppercase tracking-widest mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Businesses Love Working With Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              'Our website traffic doubled within weeks after the redesign. The professionalism was outstanding.',
              'The software system automated our operations and saved us countless hours every month.',
              'Their marketing strategy helped us attract more customers and increase sales significantly.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="flex gap-1 text-yellow-400 text-xl mb-6">
                  ★★★★★
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">“{review}”</p>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div>
                    <h3 className="font-bold">Happy Client</h3>
                    <p className="text-gray-400 text-sm">Business Owner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#fff,transparent_30%)]"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready To Grow Your Business Online?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mt-6 max-w-3xl mx-auto leading-relaxed">
            Whether you need a modern website, a custom software solution or a full digital marketing strategy, we are ready to help you dominate your industry.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <button className="bg-black hover:bg-gray-900 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl">
              Book Free Consultation
            </button>

            <button className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-2xl font-semibold text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-black mb-4">NexaTech</h2>
            <p className="text-gray-400 leading-relaxed">
              Premium software and web solutions built to help businesses scale faster in the digital era.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>Software Systems</li>
              <li>Mobile Apps</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: hello@nexatech.com</li>
              <li>Phone: +254 793 553 945</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © 2026 NexaTech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
