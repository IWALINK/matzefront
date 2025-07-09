import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Brand from "../../Components/Brand/Brand";
import { BiEnvelope, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const Footer = () => {
  const [showLegal, setShowLegal] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <>
      {/* Modal Mentions Légales */}
      {showLegal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowLegal(false)}>
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-8 m-4 animate-fadeIn overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-legal-title"
          >
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-black focus:outline-none"
              onClick={() => setShowLegal(false)}
              aria-label="Fermer"
            >
              &times;
            </button>
            <h1 id="modal-legal-title" className="text-2xl font-bold mb-6 text-center font-Garamond">Mentions légales</h1>
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
                href="https://www.local.ch/fr/d/la-matze-geneve/1201-restaurant/8v6vQwQw1QwQwQwQwQwQwQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Vers notre inscription local.ch
              </a>
              <a
                href="https://www.search.ch/directory/company?companyId=8v6vQwQw1QwQwQwQwQwQwQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Vers notre inscription search.ch
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Modal Déclaration relative à la protection des données */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowPrivacy(false)}>
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 m-4 animate-fadeIn overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-privacy-title"
          >
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-black focus:outline-none"
              onClick={() => setShowPrivacy(false)}
              aria-label="Fermer"
            >
              &times;
            </button>
            <h1 id="modal-privacy-title" className="text-2xl font-bold mb-6 text-center font-Garamond">Déclaration relative à la protection des données</h1>
            <div className="prose max-w-none text-gray-800" style={{fontFamily: 'Lora, serif', fontSize: '1rem'}}>
              <h2 className="text-lg font-bold mt-4 mb-2">1. Introduction</h2>
              <p>Dans le présent document, nous vous informons notamment sur l'entité qui est responsable du traitement de vos données, sur les données que nous collectons dans le cadre de la consultation de nos sites internet et de l'utilisation de nos services, sur les finalités pour lesquelles nous traitons ces données ainsi que sur les entités auxquelles nous transmettons vos données, le cas échéant. Nous vous informons en outre sur la durée du traitement de vos données, sur le fondement juridique de ce traitement (dans la mesure où un tel fondement devait s'avérer nécessaire) ainsi que sur les droits que vous pouvez faire valoir à notre égard s'agissant du traitement de vos données. La présente déclaration relative à la protection des données s'applique à toutes vos données dont nous avons déjà connaissance ou qui nous seront transmises à l'avenir. Veuillez noter que nous pouvons adapter la présente déclaration relative à la protection des données à tout moment. La version actuelle publiée sur notre site internet fait foi.</p>
              <p>Sont considérées comme données personnelles toutes les informations qui se rapportent à une personne identifiée ou identifiable (ci-après les «données personnelles»). Sont notamment concernées les informations telles que le nom, l'adresse, le numéro de téléphone, l'adresse électronique et, le cas échéant, les adresses IP ainsi que les ID de l'appareil. Le terme générique «données» au sens de la présente déclaration relative à la protection des données englobe aussi bien les données personnelles que les données anonymisées ou les données ne revêtant pas de caractère personnel. Le terme «traitement», quant à lui, fait référence à tout traitement de données, notamment à la collecte, à l'enregistrement, à l'utilisation, à la transformation, à la diffusion, à la conservation ou à l'effacement de données, quel que soit le moyen ou le procédé utilisé (ci-après le «traitement»).</p>
              <p>Avant de mettre à notre disposition les données personnelles d'autres personnes, veuillez vous assurer que celles-ci ont pris connaissance de la présente déclaration relative à la protection des données, et transmettez-nous leurs données personnelles uniquement si la législation sur la protection des données en vigueur vous y autorise.</p>
              <h2 className="text-lg font-bold mt-4 mb-2">2. Nom et adresse du responsable du traitement</h2>
              <p>Est responsable du traitement des données conformément à la présente déclaration relative à la protection des données :</p>
              <p>NOEMUS Sàrl<br/>Rue Chaponnière 7, Genève, 1201, Switzerland<br/>restolamatze@gmail.com</p>
              <h2 className="text-lg font-bold mt-4 mb-2">3. Catégories de données traitées</h2>
              <p>Lorsque vous visitez notre site internet, que vous utilisez nos services et que vous nous contactez, nous recueillons certaines données. En principe, nous recueillons ces données auprès de vous directement. Peuvent faire partie des données personnelles que nous traitons :</p>
              <ul className="list-disc ml-6">
                <li>les Données qui sont obtenues ou divulguées lors de la visite de notre site Internet ou de l'utilisation de nos services; Sont notamment concernés les adresses IP et MAC ou l'ID de l'appareil utilisé, les cookies, les pages Internet que vous avez consultées et les termes de recherche que vous avez saisis, les entrées dans les boîtes de dialogue, les évaluations, la date, l'heure et la durée des consultations, les clics, les référents/URL de sortie, les informations relatives à la date et à l'heure de l'utilisation, au type de navigateur et d'appareil, au système d'exploitation ainsi qu'au fournisseur de services Internet, ou encore la quantité de données transférées;</li>
                <li>les Données échangées dans le cadre ou en relation avec une prise de contact avec nous, par exemple communication par voie postale, téléphone, email, formulaire de contact, etc. (en particulier nom, coordonnées, sexe, état civil, date de naissance, titre professionnel, photo, collaborateurs, langue, informations de paiement);</li>
                <li>les Données qui sont communiquées lors de l'inscription à une newsletter ou du téléchargement de fichiers (p. ex. logiciels) (en particulier adresse e-mail et nom);</li>
                <li>les Données communiquées dans le cadre de l'établissement de comptes clients en relation avec les commandes effectuées (en particulier nom d'utilisateur, mot de passe, adresse de livraison);</li>
                <li>les Données en lien avec les offres et les contrats conclus (date du contrat, contenu du contrat, produit contractuel, parties au contrat, durée, état du contrat, valeur du contrat, modifications du contrat, coordonnées, personnes de contact, adresses de facturation et de correspondance, etc.);</li>
                <li>les Données communiquées lors de la participation à des concours ou à des sondages, ou à d'autres opérations similaires.</li>
              </ul>
              <h2 className="text-lg font-bold mt-4 mb-2">4. Finalités du traitement</h2>
              <p>Dans la mesure autorisée par la loi, nous traiterons les données personnelles notamment aux fins suivantes :</p>
              <ul className="list-disc ml-6">
                <li>préparation, conclusion, exécution et traitement de contrats;</li>
                <li>offre, développement et amélioration de nos offres, développement de nouveaux services, exploitation, maintenance, optimisation et garantie de la sécurité de nos services et de nos infrastructures;</li>
                <li>gestion des utilisateurs de nos services, contrôles d'identité, connexions et autres authentifications;</li>
                <li>entretien, gestion et développement de nos relations clients, communication avec les clients et les tiers, promotions, publicité et marketing, offre de services personnalisés et de contenus pertinents;</li>
                <li>contrôle de qualité, établissement de statistiques;</li>
                <li>respect des obligations légales ou réglementaires et des règles internes, application du droit, procédures civiles, pénales ou administratives, plaintes, lutte contre les abus, enquêtes et réponse aux demandes des autorités ou des services officiels.</li>
              </ul>
              <h2 className="text-lg font-bold mt-4 mb-2">5. Base juridique</h2>
              <p>Dans la mesure où un fondement juridique est exigé par la législation sur la protection des données en vigueur, nous utilisons les données personnelles aux fins susmentionnées en nous appuyant sur les fondements juridiques suivants :</p>
              <ul className="list-disc ml-6">
                <li>exécution d'un contrat;</li>
                <li>respect des obligations légales;</li>
                <li>consentement obtenu par localsearch ou par un tiers;</li>
                <li>intérêts légitimes de localsearch ou de tiers, en particulier
                  <ul className="list-disc ml-6">
                    <li>offre et fourniture de services;</li>
                    <li>publicité et marketing;</li>
                    <li>entretien des relations et communication avec les utilisateurs;</li>
                    <li>gestion des utilisateurs, contrôles d'identité, connexions;</li>
                    <li>respect des obligations légales ou réglementaires, application du droit, procédures civiles, pénales ou administratives, plaintes, enquêtes et réponse aux demandes des autorités.</li>
                  </ul>
                </li>
              </ul>
              <h2 className="text-lg font-bold mt-4 mb-2">6. Publication et transmission de données</h2>
              <p>Nous pouvons publier et transmettre les données aux termes de dispositions suivantes :</p>
              <h3 className="font-semibold mt-2 mb-1">Sous-traitants des données</h3>
              <p>Nous sommes en droit de mandater des tiers afin qu'ils fournissent certaines prestations (services informatiques, exploitation d'applications, gestion, envoi, etc.) ou traitent et sauvegardent les données personnelles et traiter celles-ci dans le cadre du mandat que nous leur avons confié. Nous obligeons contractuellement les sous-traitants des données à respecter la législation sur la protection des données et à traiter les données de la même manière que nous le faisons. Les sous-traitants des données susceptibles de recevoir des données personnelles peuvent être établis dans n'importe quel pays, notamment en Suisse, en Allemagne, en Israël ainsi qu'aux États-Unis.</p>
              <h3 className="font-semibold mt-2 mb-1">Partenaires contractuels</h3>
              <p>Il se peut que nous transmettions des données à nos partenaires contractuels (partenaires de distribution, prestataires de services, établissements financiers, etc.). Cela a lieu par exemple pour remplir des obligations contractuelles, pour offrir certains services, à des fins de recouvrement et de marketing, pour analyser l'utilisation et le fonctionnement de nos services, systèmes et infrastructures et pour le traitement des paiements. Les acquéreurs ou les parties intéressées par l'acquisition d'unités commerciales, de sociétés ou de parties de sociétés sont également des destinataires potentiels. Les partenaires contractuels peuvent avoir accès aux données personnelles et traiter celles-ci à leurs propres fins (par exemple, pour exécuter leurs contrats ou remplir leurs obligations légales). Ils sont eux aussi tenus de respecter la législation sur la protection des données en vigueur. Les partenaires contractuels susceptibles de recevoir des données personnelles peuvent être établis dans n'importe quel pays, notamment en Suisse, dans les pays de l'UE ou de l'EEE ainsi qu'aux États-Unis.</p>
              <h3 className="font-semibold mt-2 mb-1">Transmission aux autorités</h3>
              <p>Dans certaines situations, nous pouvons communiquer des données aux autorités, aux services officiels et à d'autres tiers. Nous procédons à une telle communication lorsque les autorités ou les services officiels nous le demandent ou lorsque nous estimons y être tenus.</p>
              <h2 className="text-lg font-bold mt-4 mb-2">7. Durée de conservation</h2>
              <p>Nous conservons les données personnelles le temps nécessaire pour remplir l'objectif pour lequel nous les avons recueillies. Certaines données personnelles sont en outre soumises à des obligations de conservation légales de dix années ou plus, que nous respectons. Nous pouvons également conserver les données personnelles au moins pendant les délais de prescription applicables, qui se portent dans de nombreux cas à cinq ou à dix ans. Toutefois, en règle générale, nous effaçons plus tôt, à savoir dès que leur traitement ne présente plus d'intérêt pour nous, les données personnelles qui sont générées dans le cadre de l'utilisation de nos services (protocoles, journaux («logs»), analyses, etc.) et qui ne sont pas soumises à de tels délais de conservation ou de prescription. Les données anonymisées peuvent être conservées plus longtemps. Sous réserve de tout accord contractuel exprès, nous ne sommes pas tenus de conserver les données pendant une durée déterminée.</p>
              <h2 className="text-lg font-bold mt-4 mb-2">8. Sécurité des données</h2>
              <p>Nous recourons à des mesures de sécurité organisationnelles et techniques appropriées afin de protéger vos données contre des manipulations accidentelles ou intentionnelles, contre la perte ou la destruction totale ou partielle ou contre des accès non autorisés par des tiers. Nos mesures de sécurité sont améliorées en permanence en fonction de l'évolution technologique.</p>
              <h2 className="text-lg font-bold mt-4 mb-2">9. Vos droits (droits de la personne concernée)</h2>
              <p>Toute personne concernée dispose d'un droit d'accès aux données personnelles la concernant. Elle a en outre le droit d'exiger que nous rectifiions ou effacions des données personnelles la concernant ou que nous en limitions le traitement et l'utilisation, et peut également s'opposer à un tel traitement des données personnelles. En règle générale, la personne concernée doit néanmoins être en mesure de prouver clairement son identité pour pouvoir exercer ces droits. Si la personne concernée a consenti au traitement des données personnelles, elle peut révoquer son consentement à tout moment. Dans certains cas, la personne concernée a le droit de recevoir les données générées lors de l'utilisation de services en ligne dans un format structuré, couramment utilisé et lisible par machine qui per-mette de continuer à utiliser ces données et de les transmettre. Les demandes relatives à ces droits doivent être adressées à l'adresse susmentionnée. Nous nous réservons le droit de limiter les droits de la personne concernée dans la mesure autorisée par la loi et, par exemple, de ne pas fournir les renseignements complets ou de ne pas effacer des données. En outre, nous attirons votre attention sur le fait que, si vos données personnelles sont effacées, des services ou des parties de services peuvent ne plus être disponibles ou utilisables.</p>
              <p>Toute personne concernée a le droit de déposer une plainte auprès de l'autorité compétente en matière de protection des données. Si le responsable du traitement des données est situé en Suisse, il s'agira du Préposé fédéral à la protection des données et à la transparence. Dans le cas d'un responsable du traitement situé dans la Principauté de Liechtenstein, il s'agit du service de protection des données du Liechtenstein.</p>
              <h2 className="text-lg font-bold mt-4 mb-2">10. Cookies, outils d'analyse Internet et de suivi</h2>
              <p>Nous employons différentes technologies courantes pour collecter, enregistrer et analyser les données lorsque vous visitez notre site internet et utilisez nos services.</p>
              <p>Nous recourons notamment aux cookies, qui permettent d'identifier votre navigateur ou votre appareil. Un cookie est un petit fichier qui est envoyé sur votre ordinateur ou enregistré automatiquement sur votre ordinateur ou votre appareil mobile par le navigateur que vous utilisez. Quand vous accédez une nouvelle fois à un service, celui-ci peut reconnaître votre navigateur ou votre appareil à l'aide des cookies. Les cookies peuvent stocker diverses informations, telles que les préférences des utilisateurs. Nous utilisons des cookies de session. Ils sont nécessaires à l'exécution des fonctions essentielles des services et seront automatiquement supprimés après une utilisation de nos services. Nous utilisons également des cookies temporaires et permanents qui restent enregistrés plus longtemps sur votre ordinateur ou votre appareil mobile. Les informations recueillies au moyen de cookies nous permettent d'améliorer notre site internet et nos services en fonction des souhaits des clients et de vous soumettre des offres sur mesure.</p>
              <p>Néanmoins, vous avez la possibilité de bloquer l'utilisation de cookies ou de les supprimer dans les paramètres de votre navigateur. Veuillez toutefois noter que, si vous bloquez les cookies, vous ne serez peut-être pas en mesure d'utiliser toutes les fonctionnalités d'un service. De même, si vous effacez les cookies, les éventuels cookies d'opt-out que vous avez vous-même enregistrés seront eux aussi effacés. Vous devrez alors réactiver ces cookies d'opt-out lors de votre prochaine utilisation du service concerné. Dans le cas contraire, vous serez identifié comme un nouvel utilisateur et devrez saisir à nouveau vos données.</p>
              <p>Outre les cookies, nous utilisons des outils d'analyse et de suivi Internet pour mesurer et évaluer l'utilisation de notre site internet et de nos services, personnaliser les services et afficher des offres et de la publicité sur mesure. Les traitements de données effectués au moyen de tels outils, généralement mis à disposition par des tiers, sont soumis aux dispositions en matière d'utilisation et de protection des données de ces tiers.</p>
              <p>Conformément à la loi, nous pouvons enregistrer des cookies s'ils sont absolument nécessaires au fonctionnement de ce site. Pour tous les autres types de cookies, nous avons besoin de l'autorisation de l'utilisateur. Ce site utilise différents types de cookies. Certains cookies sont placés par des tiers qui apparaissent sur nos pages. Le consentement peut être modifié ou retiré à tout moment sur notre site.</p>
              <p>Votre consentement s'applique aux domaines suivants : www.restaurant-la-matze.ch</p>
            </div>
          </div>
        </div>
      )}
      {/* <Brand /> */}
      <footer className="">
        {/* footer content */}
        <div className="bg-lightBlack   ">
          <div className="Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 2xl:grid-cols-12 gap-5 lg:gap-3 xl:gap-5 2xl:gap-[30px] pt-14 lg:pt-[100px] justify-items-center">
            {/* Footer Content one. */}
            <div
              className="lg:mt-[-195px] lg:col-span-3 2xl:col-span-4 bg-[#272727] flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" py-6 md:py-7 lg:py-[50px]  px-10 lg:px-5 xl:px-8 2xl:px-9 w-full flex flex-col items-center text-center">
                <img src="/images/home-3/logo.png" alt="" />
                <div className="py-8 2xl:py-[50px] ">
                  <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10">
                    CONTACT INFO
                  </h1>
                  <div className="space-y-4 pt-[30px]  pb-2 2xl:pb-[30px] ">
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] mt-2">
                      <IoLocationSharp
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      <span>
                        LA MATZE<br />
                        Rue Chaponnière 7<br />
                        1201 Genève
                      </span>
                    </p>
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <IoIosCall
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      +41 22 732 79 61
                    </p>
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <BiEnvelope
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      restolamatze@gmail.com
                    </p>
                  </div>
                </div>
                {/* <div>
                  <ul className="flex space-x-3">
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#" className="">
                        <FaFacebookF className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>

                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#">
                        <FaTwitter className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#">
                        <BiLogoLinkedin className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#">
                        <FaPinterestP className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            {/* footer content-2 */}

            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-2 ml-2 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className=" text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase text-center ">
                Liens utiles
              </h1>
              <div className="pt-[30px] pb-0 lg:py-[30px] w-full flex flex-col items-center text-center">
                <ul
                  className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none flex flex-col items-center text-center w-full"
                >
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="#" className="hover:text-khaki underline" onClick={e => { e.preventDefault(); setShowLegal(true); }}>Mentions légales</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="#" className="hover:text-khaki underline" onClick={e => { e.preventDefault(); setShowPrivacy(true); }}>Déclaration relative à la protection des données</Link>
                  </li>
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <Link to="/la-carte">La carte</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* footer content-3 */}

            {/* <div
              className="pt-0 pb-8  lg:col-span-3 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                GALLERY
              </h1>
              <div className="grid grid-cols-3 gap-2 mt-[45px] w-[250px] sm:w-[300px] lg:w-full  content-center ">
                <img src="/images/home-1/gallery-1.jpg" alt="" />
                <img src="/images/home-1/gallery-2.jpg" alt="" />
                <img src="/images/home-1/gallery-3.jpg" alt="" />
                <img src="/images/home-1/gallery-4.jpg" alt="" />
                <img src="/images/home-1/gallery-5.jpg" alt="" />
                <img src="/images/home-1/gallery-6.jpg" alt="" />
              </div>
            </div> */}
            {/* footer content-4 */}

            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-3 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase text-center ">
                NEWSLETTER
              </h1>
              <div className="space-y-4 py-[30px] w-full flex flex-col items-center text-center">
                <p className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] text-center w-full">
                  Subscribe our Newsletter
                </p>
                <form action="" className="space-y-4 flex flex-col items-center text-center w-full">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="placeholder:text-gray placeholder:font-Lora placeholder:font-normal placeholder:text-[15px] text-center h-[56px] w-full px-10 placeholder:leading-[26px] text-[15px] text-gray border-none outline-none focus:outline-none focus:border-khaki focus:ring-0 text-center"
                    required
                  />
                  <button className="btn-subscribe">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center py-5 2xl:py-7 bg-[#161616] text-sm md:text-base text-lightGray font-Lora font-normal flex flex-col md:flex-row justify-center items-center gap-2">
            <span>{` © ${new Date().getFullYear()} , Royella. All Rights Reserved.`}</span>
            <span className="hidden md:inline-block mx-2">|</span>
            {/* <Link to="/mentions-legales" className="hover:text-khaki underline">Mentions légales</Link> */}
            <Link to="#" className="hover:text-khaki underline" onClick={e => { e.preventDefault(); setShowLegal(true); }}>Mentions légales</Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-khaki underline" onClick={e => { e.preventDefault(); setShowPrivacy(true); }}>Déclaration relative à la protection des données</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
