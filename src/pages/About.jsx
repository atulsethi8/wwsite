import { motion } from 'framer-motion'
import { Users, Heart, Globe, Award, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Families" },
    { icon: Heart, number: "200+", label: "Romantic Couples" },
    { icon: Globe, number: "25+", label: "Countries Explored" },
    { icon: Award, number: "5+", label: "Years of Excellence" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every itinerary is crafted with your specific needs and preferences in mind."
    },
    {
      icon: Users,
      title: "Family-Focused",
      description: "We understand Indian family dynamics and create experiences that bring everyone together."
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Go beyond tourist spots and experience authentic local culture and traditions."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We partner only with the best hotels, guides, and service providers worldwide."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-teal-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Wander Wyze Holidays
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are passionate about creating unforgettable travel experiences for Indian families and couples, 
              combining luxury, adventure, and cultural immersion in every journey we plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Wander Wyze Holidays was born from a simple belief: every Indian family and couple 
                  deserves to experience the world's wonders without the stress of planning.
                </p>
                <p>
                  Our founders, having traveled extensively with their own families, understood the unique challenges 
                  Indian travelers face - from dietary preferences to cultural considerations, from family dynamics to 
                  budget constraints.
                </p>
                <p>
                  Today, we've helped over 500 families and 200 couples create memories that last a lifetime, 
                  from romantic Maldives getaways to adventurous Kenya safaris, from cultural Bali journeys to 
                  luxurious Dubai experiences.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wander Wyze Team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every experience we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Wander Wyze?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We understand Indian travelers like no one else
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Customized itineraries for Indian preferences",
              "24/7 support during your entire journey",
              "Local Indian guides and translators",
              "Vegetarian and Jain meal options",
              "Family-friendly accommodations",
              "Competitive pricing with transparent costs"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                <span className="text-white/90">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
