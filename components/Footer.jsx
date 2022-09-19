import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-200 w-full">
      <footer className="container px-3 md:px-o mx-auto py-8">
        {" "}
        {/* Container */}
        <h2 className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl flex flex-col items-center text-gray-200">
          <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center">
            {/* :SOCIAL NETWORKS */}
            <div className="py-4 md:w-1/3 flex">
              {/* Facebook */}
              <a
                href="https://pt-br.facebook.com/cyberchatbot.pt"
                className="text-gray-200"
                target="blank"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cyberchatbot/"
                className="ml-3 text-gray-200"
                target="blank"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/"
                className="ml-3 text-gray-200"
                target="blank"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>

            {/* :NAVIGATION */}
            <nav className="py-4 flex flex-wrap justify-center list-none md:w-1/3">
              <li className="p-3 hover:font-semibold">
                <a href="#link">Benefícios</a>
              </li>
              <li className="p-3 hover:font-semibold">
                <a href="#link">Planos</a>
              </li>
              <li className="p-3 hover:font-semibold">
                <a href="#link">Contato</a>
              </li>
            </nav>

            {/* :CONTACT */}
            <div className="flex flex-col items-end md:w-1/3">
              {/* Email */}
              <p className="flex text-xs text-gray-300 font-medium tracking-wide py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="#email">suporte@cyberchatbot.pt</a>
              </p>
              {/* Phone */}
              <p className="flex text-xs text-gray-300 font-bold self-center sm:self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+351 939 121 286</span>
              </p>
            </div>
          </div>

          {/* :COPYRIGHT */}
          <p className="pt-10 text-sm text-gray-300 text-center w-full">
            &copy; 2022, CyberChatBot Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
