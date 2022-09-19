const Product1 = () => {
  return (
    <div className="container flex mx-auto py-4">
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray shadow-lg">
          <img
            class="w-full h-46 sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="images/3.png"
            alt=""
          />
          <div class="p-6 flex flex-col justify-center">
            <h5 class="text-gray-900 text-xl font-semibold mb-2">
              Um Funcionário 24/7/365
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Trabalhando para você 24 horas por dia, 7 dias por semana e 365
              dias no ano.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center px-8">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray shadow-lg">
          <img
            class="w-full h-46 sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="images/4.png"
            alt=""
          />
          <div class="p-6 flex flex-col justify-center">
            <h5 class="text-gray-900 text-xl font-semibold mb-2">
              Histórico de Atendimentos
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Verifique todo o histórico das conversas e tenha tudo sempre em
              mãos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
