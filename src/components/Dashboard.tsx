import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingBag, Package, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Clients', value: 1250, icon: Users, color: 'bg-blue-500' },
    { title: 'Active Rentals', value: 48, icon: ShoppingBag, color: 'bg-green-500' },
    { title: 'Available Products', value: 75, icon: Package, color: 'bg-yellow-500' },
    { title: 'Revenue (This Month)', value: '$15,750', icon: DollarSign, color: 'bg-purple-500' },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 7000 },
  ];

  const popularProducts = [
    { name: 'Kayak', value: 35 },
    { name: 'Paddle Board', value: 25 },
    { name: 'Jet Ski', value: 20 },
    { name: 'Pedal Boat', value: 15 },
    { name: 'Canoe', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const recentActivities = [
    { id: 1, message: 'New client John Doe registered', time: '2 hours ago' },
    { id: 2, message: 'Kayak #5 rented by Jane Smith', time: '4 hours ago' },
    { id: 3, message: 'Maintenance scheduled for Jet Ski #2', time: '1 day ago' },
    { id: 4, message: 'New product category "Snorkeling Gear" added', time: '2 days ago' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-blue-600">Dashboard</h2>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`${stat.color} rounded-lg shadow-md p-4 text-white`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Popular Products Chart */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Popular Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={popularProducts}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {popularProducts.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        className="bg-white rounded-lg shadow-md p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <ul className="space-y-3">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex items-start space-x-3 text-sm">
              <AlertCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p>{activity.message}</p>
                <p className="text-gray-500">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Quick Actions or Tips */}
      <motion.div
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <TrendingUp className="mr-2 text-blue-500" />
          Quick Tips
        </h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Check weather forecast to plan for busy days</li>
          <li>Ensure all safety equipment is properly maintained</li>
          <li>Consider running a promotion for less popular items</li>
          <li>Follow up with clients for feedback and reviews</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;