import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';

const Clients: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const clients = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '456-789-0123' },
    { id: 4, name: 'Bob Williams', email: 'bob@example.com', phone: '789-012-3456' },
  ];

  const SkeletonLoader = ({ className }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Clients</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Phone</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <SkeletonLoader className="h-8 w-8 rounded-full mr-2" />
                        <SkeletonLoader className="h-4 w-24" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-32" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-24" />
                    </td>
                  </tr>
                ))
              : clients.map((client) => (
                  <motion.tr 
                    key={client.id}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        {client.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        {client.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        {client.phone}
                      </div>
                    </td>
                  </motion.tr>
                ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Clients;