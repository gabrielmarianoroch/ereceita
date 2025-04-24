'use client'

import React, { useState } from "react";
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { Button } from "@/components/ui/button"


export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="bg-red-300 shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            
            {/*Logo e Nome*/}
            <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-24 fill">
                    <Image 
                        className="w-24 bg-red-500 object-contain"
                        src="/logo.png" 
                        alt="logo"
                        width={96}
                        height={40}>
                    </Image>
                </div>

            <span className='text-2xl font-bold text-red-600'>
                Ereceita
            </span>
            </div>
            
            {/*Menu*/}
                        <nav className="hidden lg:flex justify-center items-center gap-4 text-sm font-medium text-black flex-grow">
                <a href="#">Frango</a>
                <a href="#">Carnes</a>
                <a href="#">Massas</a>
                <a href="#">Bolos</a>
                <a href="#">Doces</a>
                <a href="#">Pães</a>

        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="text-red-600 hover:underline">Outras receitas ▾</button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-4 grid grid-cols-2 gap-2 text-sm z-10">
                <a href="#">Arroz e Risotos</a>
                <a href="#">Lanches e Salgados</a>
                <a href="#">Entradas e Petiscos</a>
                <a href="#">Peixes e Frutos do Mar</a>
                <a href="#">Pães</a>
                <a href="#">Bebidas</a>
                <a href="#">Molhos e Patês</a>
                <a href="#">Saladas e Acompanhamentos</a>
                <a href="#">Sopas e Caldos</a>
                <a href="#">Especiais</a>
            </div>
          )}
        </div>
            </nav>

                        {/*Barra de busca e botão de login*/}
                        <div className="flex items-center gap-3 flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto">
                <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-full md:w-64">
                <FiSearch className="text-gray-500 mr-2" />
          <input
                type="text"
                placeholder="Buscar receita..."
                className="outline-none text-sm w-full"
          />
                </div>
            </div>
            <Button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition">
                Entrar
            </Button>

        </header>

    )

}