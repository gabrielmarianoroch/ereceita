'use client';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#E84C3D] text-white py-12 px-4">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        
        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
          />
        </div>

        {/* Início */}
        <div>
          <h3 className="font-semibold mb-2">Início</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Cursos</li>
            <li>Downloads</li>
          </ul>
        </div>

        {/* Sobre-nós */}
        <div>
          <h3 className="font-semibold mb-2">Sobre-nós</h3>
          <ul className="space-y-1">
            <li>Informações da Empresa</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="font-semibold mb-2">Suporte</h3>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Telefones</li>
            <li>Chat</li>
          </ul>
        </div>

        {/* Social + Botão */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">

            <a href="#"><img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" /></a>
          </div>
          <button className="bg-[#2e2e2e] px-6 py-2 rounded-full text-white hover:bg-[#808080] transition-all">
            Contato
          </button>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center mt-10 text-xs text-gray-400">
        © 2025 Ereceita. Todos os direitos reservados.
      </div>
    </footer>
  );
}