import type React from "react";
const Error : React.FC = () => {
  
  return (
  <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        <img src="https://previews.123rf.com/images/azatvaleev/azatvaleev2206/azatvaleev220600029/187856350-p%C3%A1gina-do-site-n%C3%A3o-encontrada-erro-404-car%C3%A1ter-do-rob%C3%B4-quebrado-mascote-do-chatbot-desativado.jpg" alt="Ilustração de erro 404" className="mx-auto mb-6 rounded-lg"/>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};


export default Error;