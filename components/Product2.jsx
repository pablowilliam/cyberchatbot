const Product2 = () => {
  return (
    <div className="container flex mx-auto py-4 mt-4 justify-between">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray shadow-lg mx-2">
        <img
          className="w-full h-48 sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="images/5.png"
          alt=""
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-semibold mb-2">
            Setorização de Chats
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Setorize seus chats, envie os chats certos para cada setor do
            sistema.
          </p>
        </div>
      </div>
      <div className="flex justify-between rounded-lg mx-2">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray shadow-lg">
          <img
            className="w-full h-48 sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="images/6.png"
            alt=""
          />
          <div className="p-6 flex flex-col justify-center">
            <h5 className="text-gray-900 text-xl font-semibold mb-2">
              Relatórios e Dashboards
            </h5>
            <p className="text-gray-700 text-base mb-4">
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
