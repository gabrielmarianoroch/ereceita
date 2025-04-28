'use client'

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#E84C3D] text-white py-10 px-4 font-poppins">
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 text-sm">
        
        {/* Logo */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="Logo Ereceita"
            width={100}
            height={50}
            className="object-contain"
          />
          <p className="text-xs text-gray-100">Receitas práticas para todos os momentos!</p>
        </div>

        {/* Início */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Início</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Cursos</li>
            <li className="hover:underline cursor-pointer">Downloads</li>
          </ul>
        </div>

        {/* Sobre nós */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Sobre nós</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Informações da Empresa</li>
            <li className="hover:underline cursor-pointer">Contato</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Suporte</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Telefones</li>
            <li className="hover:underline cursor-pointer">Chat</li>
          </ul>
        </div>

        {/* Redes Sociais + Botão */}
        <div className="flex flex-col gap-6 items-start">
          <div className="flex gap-5">
            <a href="#" className="hover:scale-110 transition-all">
              <Image 
                src="/facebook-icon.png"
                alt="Facebook" 
                width={30}
                height={30}
                className="object-contain"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-all">
              <Image 
                src="/instagram-icon.png"
                alt="Instagram" 
                width={30}
                height={30}
                className="object-contain"
              />
            </a>
          </div>

          <button className="bg-white text-[#E84C3D] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 active:scale-95 transition-all">
            Entrar em Contato
          </button>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center mt-10 text-xs text-gray-200">
        © 2025 Ereceita. Todos os direitos reservados.
      </div>
    </footer>
  );
}