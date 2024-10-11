import React from 'react';
import { motion } from 'framer-motion';
import { Package, Tag, Hash, DollarSign } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: 'Kayak', category: 'Watercraft', quantity: 10, price: 50 },
    { id: 2, name: 'Paddle Board', category: 'Watercraft', quantity: 8, price: 40 },
    { id: 3, name: 'Pedal Boat', category: 'Watercraft', quantity: 5, price: 60 },
    { id: 4, name: 'Jet Ski', category: 'Watercraft', quantity: 3, price: 100 },
  ];

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
            {products.map((product) => (
              <motion.tr 
                key={product.id}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                transition={{ duration: 0.2 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-gray-400 mr-2" />
                    {product.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 text-gray-400 mr-2" />
                    {product.category}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Hash className="h-5 w-5 text-gray-400 mr-2" />
                    {product.quantity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    {product.price}
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

export default Products;