import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Users, ShoppingBag, Package, List, Anchor, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import Rentals from './components/Rentals';
import Products from './components/Products';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <motion.nav 
          className="w-64 bg-blue-600 text-white shadow-lg"
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4">
            <h1 className="text-2xl font-bold flex items-center">
              <Anchor className="mr-2" /> Nautical Rentals
            </h1>
          </div>
          <ul className="space-y-2 p-4">
            {[
              { to: "/", icon: Home, text: "Dashboard" },
              { to: "/clients", icon: Users, text: "Clients" },
              { to: "/rentals", icon: ShoppingBag, text: "Rentals" },
              { to: "/products", icon: Package, text: "Products" },
              { to: "/categories", icon: List, text: "Categories" },
            ].map((item, index) => (
              <motion.li key={item.to} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to={item.to} className="flex items-center p-2 rounded hover:bg-blue-700 transition-colors duration-200">
                  <item.icon className="mr-2" />
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;