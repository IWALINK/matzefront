import React from "react";

const LegalNotice = () => (
  <div className="min-h-screen bg-[#f8f6ef] flex flex-col items-center py-12 px-4">
    <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold mb-6 text-center font-Garamond">Mentions légales</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Nom de l'entreprise :</h2>
        <p>La Matze</p>
        <h2 className="text-lg font-semibold mt-4 mb-2">Adresse postale :</h2>
        <p>Rue Chaponnière 7 - 1201 Genève</p>
        <h2 className="text-lg font-semibold mt-4 mb-2">Téléphone :</h2>
        <p>+41 22 732 79 61</p>
        <h2 className="text-lg font-semibold mt-4 mb-2">Email :</h2>
        <p>restolamatze@gmail.com</p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Informations juridiques</h2>
        <p className="mb-2">
          Ce site Internet utilise des cookies. Les cookies sont de petits fichiers textes qui sont enregistrés sur votre ordinateur, lors de la visite du site, de façon temporaire ou durable. Le but des cookies est en particulier d’analyser l’utilisation du site, en vue d’une exploitation statistique, ainsi que d’améliorations continues. Les cookies peuvent être à tout moment désactivés dans les paramètres de votre navigateur web, partiellement ou en totalité. En désactivant les cookies, certaines fonctionnalités de ce site peuvent éventuellement ne plus être disponibles.
        </p>
      </div>
      <div className="mb-6 text-sm text-gray-500 text-center">
        © 2018 Réalisé par localsearch.ch
      </div>
      <div className="flex flex-col items-center gap-2">
        <a
          href="https://www.localsearch.ch/fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Vers notre inscription local.ch
        </a>
      </div>
    </div>
  </div>
);

export default LegalNotice; 