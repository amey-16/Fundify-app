import { motion } from "framer-motion";

const features = [
  {
    title: "Project Showcase",
    description: "Share your innovative ideas with a global community",
    icon: "🚀",
  },
  {
    title: "Secure Funding",
    description: "Connect with investors who believe in your vision",
    icon: "💰",
  },
  {
    title: "Community Support",
    description: "Get feedback and support from like-minded innovators",
    icon: "🤝",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-700 p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 