import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Tag, Hash, DollarSign } from 'lucide-react';
import {ProductCard} from './ProductCard';
const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    { id: 1, name: 'Kayak', category: 'Watercraft', quantity: 10, price: 50 },
    { id: 2, name: 'Paddle Board', category: 'Watercraft', quantity: 8, price: 40 },
    { id: 3, name: 'Pedal Boat', category: 'Watercraft', quantity: 5, price: 60 },
    { id: 4, name: 'Jet Ski', category: 'Watercraft', quantity: 3, price: 100 },
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
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Products</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Price</th>
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
                      <SkeletonLoader className="h-4 w-12" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <SkeletonLoader className="h-4 w-16" />
                    </td>
                  </tr>
                ))
              : products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Products;