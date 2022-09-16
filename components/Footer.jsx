import React from "react";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-gray-50 h-1/2 w-full py-6 pl-4">
        <div className="container flex md:flex-row flex-col justify-between items-start mx-auto">
          <div className="py-5">
            <img
              src="/images/logo.png"
              className="mr-3 h-24 sm:h-24"
              alt="logo"
            />
          </div>
          <div className="flex flex-col py-5">
            <Link href="/" passHref>
              <a className="text-gray-500 text-md pb-2 font-semibold hover:text-cyan-700 cursor-pointer">
                Início
              </a>
            </Link>
            <Link href="/contato" passHref>
              <a className="text-gray-500 text-md pb-2 font-semibold hover:text-cyan-700 cursor-pointer">
                Contato
              </a>
            </Link>
          </div>
          <div className="py-5">
            <ul>
              <p className="text-gray-600 text-lg font-semibold pb-6">
                <span>Acompanhe nas redes sociais</span>
              </p>
              <div className="flex gap-6">
                <div className="text-2x1 cursor-pointer hover:text-cyan-700">
                  <Link href="https://www.instagram.com" passHref>
                    <a>
                      <FaInstagram />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 cursor-pointer hover:text-cyan-700">
                  <Link href="https://www.facebook.com" passHref>
                    <a>
                      <FaFacebook />
                    </a>
                  </Link>
                </div>
                <div
                  className="text-2x1 cursor-pointer hover:text-cyan-700"
                  target="blank"
                >
                  <Link href="https://www.twitter.com" passHref>
                    <a>
                      <FaTwitter />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 cursor-pointer hover:text-cyan-700">
                  <Link href="https://www.linkedin.com" passHref>
                    <a>
                      <FaLinkedin />
                    </a>
                  </Link>
                </div>
                <div className="text-2x1 cursor-pointer hover:text-cyan-700">
                  <Link href="https://www.youtube.com" passHref>
                    <a>
                      <FaYoutube />
                    </a>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-5 bg-cyan-700 items-center">
        <h1 className="text-white text-sm text-center">
          CyberChat © 2022 . Todos os direitos reservados.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
