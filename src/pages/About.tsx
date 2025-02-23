import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About SuperMart</h1>
          <p className="text-xl text-gray-600">Your trusted neighborhood supermarket since 2020</p>
        </motion.div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide our customers with the highest quality groceries at the best prices, while
              ensuring a convenient and enjoyable shopping experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Award className="text-emerald-600 mr-3" />
                <span>Quality and freshness guaranteed</span>
              </li>
              <li className="flex items-center">
                <Users className="text-emerald-600 mr-3" />
                <span>Customer satisfaction is our priority</span>
              </li>
              <li className="flex items-center">
                <Heart className="text-emerald-600 mr-3" />
                <span>Community-focused approach</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "SuperMart has transformed how I shop for groceries. The quality and service are
                  exceptional!"
                </p>
                <div className="font-semibold">Happy Customer #{index}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'CEO & Founder' },
              { name: 'Jane Smith', role: 'Operations Director' },
              { name: 'Mike Johnson', role: 'Customer Relations' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;