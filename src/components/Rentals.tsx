import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Package, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rentals: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const rentals = [
    { id: 1, client: 'John Doe', product: 'Kayak', startDate: '2024-03-15', endDate: '2024-03-17' },
    { id: 2, client: 'Jane Smith', product: 'Paddle Board', startDate: '2024-03-16', endDate: '2024-03-18' },
    { id: 3, client: 'Alice Johnson', product: 'Pedal Boat', startDate: '2024-03-17', endDate: '2024-03-19' },
    { id: 4, client: 'Bob Williams', product: 'Jet Ski', startDate: '2024-03-18', endDate: '2024-03-20' },
  ];

  const rentalStats = [
    { name: 'Kayak', rentals: 12 },
    { name: 'Paddle Board', rentals: 19 },
    { name: 'Pedal Boat', rentals: 8 },
    { name: 'Jet Ski', rentals: 15 },
    { name: 'Canoe', rentals: 6 },
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
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Rentals</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Rental Statistics</h3>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          {loading ? (
            <SkeletonLoader className="h-full w-full" />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rentalStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rentals" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">End Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-24" />
                    </td>
                  </tr>
                ))
              : rentals.map((rental) => (
                  <motion.tr 
                    key={rental.id}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        {rental.client}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-gray-400 mr-2" />
                        {rental.product}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        {rental.startDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        {rental.endDate}
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

export default Rentals;