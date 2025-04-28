'use client'

import React, { useState } from "react";
import Image from 'next/image';
import { FiSearch, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownMobileOpen, setDropdownMobileOpen] = useState(false);

    return (
        <header className="bg-red-300 shadow-md px-4 py-3 sticky top-0 z-50 font-poppins">
            <div className="flex items-center justify-between max-w-7xl mx-auto gap-8">
                {/* Logo e Nome */}
                <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-12 md:w-16">
                        <Image 
                            className="object-contain"
                            src="/logo.png" 
                            alt="logo"
                            width={64}
                            height={64}
                        />
                    </div>
                    <span className="text-lg md:text-2xl font-extrabold text-red-600 tracking-tight">Ereceita</span>
                </div>

                {/* Botão do Menu Mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-base font-semibold text-black">
                    {["Frango", "Carnes", "Massas", "Bolos", "Doces", "Pães"].map((item, idx) => (
                        <a 
                            key={idx} 
                            href="#" 
                            className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-full text-center shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300"
                        >
                            {item}
                        </a>
                    ))}

                    {/* Outras Receitas */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                       <button type="button" className="btn btn-success">Primary</button>

                        <AnimatePresence>
                            {showDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-wrap gap-2 text-sm z-10 min-w-[300px] max-w-[500px]"
                                >
                                    {[ 
                                        "Arroz e Risotos", "Lanches e Salgados", "Entradas e Petiscos",
                                        "Peixes e Frutos do Mar", "Pães", "Bebidas", "Molhos e Patês",
                                        "Saladas e Acompanhamentos", "Sopas e Caldos", "Especiais"
                                    ].map((item, idx) => (
                                        <a 
                                            key={idx}
                                            href="#"
                                            className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-full text-center shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300 min-w-[140px]"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Busca + Botão Entrar */}
                <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-6">
                    <div className="flex items-center border border-gray-300 bg-white rounded-full px-4 py-2 w-40 md:w-56 xl:w-64">
                        <FiSearch className="text-gray-400 mr-2" />
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                    </div>
                    <button className="btn btn-primary">Clique</button>
                </div>
            </div>

            {/* Menu Mobile Expandido */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-4 px-2"
                    >
                        <div className="flex flex-col gap-3">
                            {["Frango", "Carnes", "Massas", "Bolos", "Doces", "Pães"].map((item, idx) => (
                                <a 
                                    key={idx} 
                                    href="#" 
                                    className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-full text-center shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300"
                                >
                                    {item}
                                </a>
                            ))}

                            {/* Dropdown Mobile */}
                            <div>
                                <button
                                    className="w-full flex justify-between items-center bg-white border border-red-600 text-red-600 rounded-full px-4 py-2 mt-2 shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300"
                                    onClick={() => setDropdownMobileOpen(!dropdownMobileOpen)}
                                >
                                    Outras receitas
                                    <FiChevronDown size={20} />
                                </button>

                                <AnimatePresence>
                                    {dropdownMobileOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-2 gap-2 mt-2 text-sm"
                                        >
                                            {[
                                                "Arroz e Risotos", "Lanches e Salgados", "Entradas e Petiscos",
                                                "Peixes e Frutos do Mar", "Pães", "Bebidas", "Molhos e Patês",
                                                "Saladas e Acompanhamentos", "Sopas e Caldos", "Especiais"
                                            ].map((item, idx) => (
                                                <a 
                                                    key={idx}
                                                    href="#"
                                                    className="bg-white border border-red-600 text-red-600 px-3 py-2 rounded-full text-center shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300"
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Campo de busca */}
                            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mt-4 bg-white">
                                <FiSearch className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="outline-none text-sm w-full bg-transparent"
                                />
                            </div>

                            {/* Botão Entrar */}
                            <button className="btn btn-primary">Clique</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
