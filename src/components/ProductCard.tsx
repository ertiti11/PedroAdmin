// src/components/ProductCard.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchProducts } from '../utils/api'; // Ajusta la ruta según tu estructura de carpetas

interface Product {
    url_imagen: string;
    nombre: string;
    tipo: string;
    precio_por_hora: string;
    descripcion: string;
}

interface ProductCardProps {
    loading: boolean;
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ loading, product }) => {
    const SkeletonLoader = ({ className }: { className?: string }) => (
        <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
    );

    return (
        <>
            {loading ? (
                <SkeletonLoader className="h-64" />
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-white shadow-md rounded-lg overflow-hidden p-4'
                >
                    <img src={product.url_imagen} alt={product.nombre} />
                    <div>
                        <h2>{product.nombre}</h2>
                        <span>{product.tipo}</span>
                        <span>{product.precio_por_hora}</span>
                        <p>{product.descripcion}</p>
                    </div>
                </motion.div>
            )}
        </>
    );
};