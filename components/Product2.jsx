const Product2 = () => {
  return (
    <div className="container flex mx-auto py-4 mb-4">
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray shadow-lg">
          <img
            class="w-full h-46 sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="images/5.png"
            alt=""
          />
          <div class="p-6 flex flex-col justify-center">
            <h5 class="text-gray-900 text-xl font-semibold mb-2">
              Setorização de Chats
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Setorize seus chats, envie os chats certos para cada setor do
              sistema.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center px-8">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray shadow-lg">
          <img
            class="w-full h-46 sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="images/6.png"
            alt=""
          />
          <div class="p-6 flex flex-col justify-center">
            <h5 class="text-gray-900 text-xl font-semibold mb-2">
              Relatórios e Dashboards
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Visualize relatórios de atendimentos e veja dashboards sobre seu
              sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
