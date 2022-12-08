import React from "react";

const Pricing1 = () => {
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="self-center flex-shrink-0 mr-2 h-5 w-5 text-sky-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="self-center flex-shrink-0 mr-2 h-5 w-5 text-gray-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div id="plans" className="bg-cyan w-full mt-10">
      <div className="container flex mx-auto py-10 px-5 flex flex-col items-center font-body">
        {" "}
        {/* Container */}
        {/* :TITLE */}
        <div className="mb-10 text-center text-white">
          <h1 className="font-title py-4 text-4xl font-black tracking-wider antialiased">
            Nossos planos
          </h1>
          <p className="text-xl mt-3">
            Confira abaixo os nossos planos e teste grátis por 7 dias.
          </p>
        </div>
        {/* :PRICING TABLES */}
        <div className="grid grid-cols-3 gap-6 max-w-7xl">
          {/* ::Offer 1 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray text-gray-600 rounded-2xl shadow-xl">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">
              Mensal
            </h2>
            {/* Price */}
            <div className="p-4 flex items-baseline">
              <h3 className="font-title text-5xl font-bold ">€ 15</h3>
            </div>
            {/* Divide line */}
            <span className="w-28 h-1.5 bg-sky-600 rounded-3xl" />
            {/* Features */}
            <ul className="my-12 flex flex-col">
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Atendentes ilimitados.
              </li>
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Clientes ilimitados.
              </li>
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Suporte para instalação.
              </li>
              <li className="mb-4 inline-flex ">
                <CheckIcon />
                Configuração de filas de chatbot.
              </li>
              <li className="mb-4 inline-flex ">
                <CheckIcon />
                Domínio personalizado.
              </li>
            </ul>
            {/* Subscribe */}
            <button className="animate-pulse py-2 px-10 rounded-3xl bg-cyan text-lg text-gray font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky">
              <a href="https://wa.me/351939121286?text=Gostaria%20de%20saber%20mais%20sobre%20o%20CyberChatBot%20Plano%20Mensal">
                Assinar plano
              </a>
            </button>
          </div>

          {/* ::Offer 2 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray text-gray-600 rounded-2xl shadow-xl">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">
              Semestral
            </h2>
            {/* Price */}
            <div className="p-4 flex items-baseline">
              <h3 className="font-title text-5xl font-bold ">€ 81</h3>
            </div>
            {/* Divide line */}
            <span className="w-28 h-1.5 bg-sky-600 rounded-3xl" />
            {/* Features */}
            <ul className="my-12 flex flex-col">
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Atendentes ilimitados.
              </li>
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Clientes ilimitados.
              </li>
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Suporte para instalação.
              </li>
              <li className="mb-4 inline-flex ">
                <CheckIcon />
                Configuração de filas de chatbot.
              </li>
              <li className="mb-4 inline-flex ">
                <CheckIcon />
                Domínio personalizado.
              </li>
            </ul>{" "}
            {/* Subscribe */}
            <button className="animate-pulse py-2 px-10 rounded-3xl bg-cyan text-lg text-gray font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky">
              <a href="https://wa.me/351939121286?text=Gostaria%20de%20saber%20mais%20sobre%20o%20CyberChatBot%20Plano%20Semestral">
                Assinar plano
              </a>
            </button>
          </div>

          {/* ::Offer 3 */}
          <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray text-gray-600 rounded-2xl shadow-xl">
            {/* Offer name */}
            <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">
              Anual
            </h2>
            {/* Price */}
            <div className="p-4 flex items-baseline">
              <h3 className="font-title text-5xl font-bold ">€ 144</h3>
            </div>
            {/* Divide line */}
            <span className="w-28 h-1.5 bg-sky-600 rounded-3xl" />
            {/* Features */}
            <ul className="my-12 flex flex-col">
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Atendentes ilimitados.
              </li>
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Clientes ilimitados.
              </li>
              <li className="mb-4 inline-flex">
                <CheckIcon />
                Suporte para instalação.
              </li>
              <li className="mb-4 inline-flex ">
                <CheckIcon />
                Configuração de filas de chatbot.
              </li>
              <li className="mb-4 inline-flex ">
                <CheckIcon />
                Domínio personalizado.
              </li>
            </ul>{" "}
            {/* Subscribe */}
            <button className="animate-pulse py-2 px-10 rounded-3xl bg-cyan text-lg text-gray font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky">
              <a href="https://wa.me/351939121286?text=Gostaria%20de%20saber%20mais%20sobre%20o%20CyberChatBot%20Plano%20Anual">
                Assinar plano
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing1;
