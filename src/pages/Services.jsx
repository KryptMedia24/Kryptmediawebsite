import AnimateOnScroll from '../components/AnimateOnScroll';
import services from '../data/services.json';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}   