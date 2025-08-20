"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  UserCheck,
  Mail,
  Globe,
  FileText,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Phone,
} from "lucide-react";

const PrivacyPolicyPage = () => {
  const handleBackToHome = () => {
    // En réalité, ceci devrait naviguer vers la page d'accueil
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      id: "collecte",
      title: "1. Collecte des Informations",
      icon: <UserCheck className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          subtitle: "Informations que nous collectons",
          text: "Nous collectons les informations que vous nous fournissez directement, notamment :",
        },
        {
          list: [
            "Nom, prénom et coordonnées (email, téléphone)",
            "Informations sur votre établissement (nom, type, localisation)",
            "Données d'utilisation de notre plateforme",
            "Informations de gestion (ventes, réservations, clients)",
          ],
        },
        {
          subtitle: "Collecte automatique",
          text: "Nous collectons automatiquement certaines informations lors de votre utilisation de Manag+ :",
        },
        {
          list: [
            "Données techniques (adresse IP, type de navigateur, système d'exploitation)",
            "Données d'utilisation (pages visitées, fonctionnalités utilisées)",
            "Cookies et technologies similaires pour améliorer votre expérience",
          ],
        },
      ],
    },
    {
      id: "utilisation",
      title: "2. Utilisation des Informations",
      icon: <Eye className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "Nous utilisons vos informations personnelles pour :",
        },
        {
          list: [
            "Fournir et améliorer nos services Manag+",
            "Gérer votre compte et vos préférences",
            "Vous envoyer des communications importantes sur le service",
            "Analyser l'utilisation pour optimiser notre plateforme",
            "Assurer la sécurité et prévenir les fraudes",
            "Respecter nos obligations légales et réglementaires",
          ],
        },
        {
          subtitle: "Base légale du traitement",
          text: "Nous traitons vos données sur la base de :",
        },
        {
          list: [
            "Votre consentement explicite",
            "L'exécution de notre contrat de service",
            "Nos intérêts légitimes à améliorer nos services",
            "Le respect de nos obligations légales",
          ],
        },
      ],
    },
    {
      id: "partage",
      title: "3. Partage des Informations",
      icon: <Globe className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :",
        },
        {
          list: [
            "Avec votre consentement explicite",
            "Avec nos prestataires de services (hébergement, paiement, support)",
            "Pour respecter une obligation légale ou une décision de justice",
            "Pour protéger nos droits, notre propriété ou notre sécurité",
          ],
        },
        {
          subtitle: "Prestataires tiers",
          text: "Nos principaux partenaires incluent :",
        },
        {
          list: [
            "Services d'hébergement cloud sécurisé",
            "Processeurs de paiement certifiés",
            "Services d'analyse et d'amélioration (anonymisées)",
            "Support client et communication",
          ],
        },
      ],
    },
    {
      id: "securite",
      title: "4. Sécurité des Données",
      icon: <Lock className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "La sécurité de vos données est notre priorité absolue. Nous mettons en œuvre :",
        },
        {
          list: [
            "Chiffrement SSL/TLS pour toutes les communications",
            "Chiffrement des données sensibles en base",
            "Accès restreint aux données selon le principe du moindre privilège",
            "Surveillance continue et détection d'intrusion",
            "Sauvegardes régulières et sécurisées",
            "Formation régulière de nos équipes sur la sécurité",
          ],
        },
        {
          subtitle: "Localisation des données",
          text: "Vos données sont hébergées dans des centres de données sécurisés situés en Côte d'Ivoire et en Europe, respectant les standards internationaux de sécurité.",
        },
      ],
    },
    {
      id: "droits",
      title: "5. Vos Droits",
      icon: <Shield className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "Conformément aux lois sur la protection des données, vous disposez des droits suivants :",
        },
        {
          list: [
            "Droit d'accès : consulter les données que nous détenons sur vous",
            "Droit de rectification : corriger des données inexactes ou incomplètes",
            "Droit d'effacement : demander la suppression de vos données",
            "Droit à la portabilité : récupérer vos données dans un format standard",
            "Droit d'opposition : vous opposer à certains traitements",
            "Droit de limitation : demander la limitation du traitement",
          ],
        },
        {
          subtitle: "Comment exercer vos droits",
          text: "Pour exercer ces droits, contactez-nous à privacy@managplus.ci avec une pièce d'identité. Nous répondrons dans les 30 jours.",
        },
      ],
    },
    {
      id: "retention",
      title: "6. Conservation des Données",
      icon: <Calendar className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "Nous conservons vos données personnelles uniquement le temps nécessaire :",
        },
        {
          list: [
            "Données de compte : pendant la durée d'utilisation du service + 3 ans",
            "Données financières : 10 ans (obligations comptables)",
            "Données de support : 3 ans après la résolution",
            "Données de marketing : jusqu'à votre désinscription",
            "Logs techniques : 12 mois maximum",
          ],
        },
        {
          subtitle: "Suppression automatique",
          text: "Les données sont automatiquement supprimées à l'expiration des délais, sauf obligation légale contraire.",
        },
      ],
    },
    {
      id: "cookies",
      title: "7. Cookies et Technologies Similaires",
      icon: <FileText className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "Nous utilisons des cookies pour améliorer votre expérience :",
        },
        {
          list: [
            "Cookies essentiels : nécessaires au fonctionnement du service",
            "Cookies de préférence : mémoriser vos choix et paramètres",
            "Cookies d'analyse : comprendre l'utilisation anonyme",
            "Cookies de performance : optimiser les temps de chargement",
          ],
        },
        {
          subtitle: "Gestion des cookies",
          text: "Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur ou via notre centre de préférences.",
        },
      ],
    },
    {
      id: "modifications",
      title: "8. Modifications de cette Politique",
      icon: <AlertTriangle className="w-6 h-6 text-[#29D497]" />,
      content: [
        {
          text: "Nous pouvons mettre à jour cette politique de confidentialité pour refléter :",
        },
        {
          list: [
            "Les évolutions de nos services",
            "Les changements réglementaires",
            "L'amélioration de nos pratiques de protection",
            "Les retours de nos utilisateurs",
          ],
        },
        {
          subtitle: "Notification des changements",
          text: "Nous vous informerons des modifications importantes par email et via notre plateforme 30 jours avant leur prise d'effet.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Header */}
      <header className="bg-[#08313B] text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Button
            onClick={handleBackToHome}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-[#29D497] rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                Politique de Confidentialité
              </h1>
              <p className="text-gray-300">
                Manag+ - Dernière mise à jour : 19 août 2024
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-lg leading-relaxed">
              Chez Manag+, nous nous engageons à protéger votre vie privée et
              vos données personnelles. Cette politique explique comment nous
              collectons, utilisons et protégeons vos informations lorsque vous
              utilisez notre plateforme de gestion d'établissements.
            </p>
          </div>
        </div>
      </header>

      {/* Navigation rapide */}
      <nav className="bg-gray-50 py-4 sticky top-0 z-40 border-b">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-1 overflow-x-auto">
            <span className="text-sm font-semibold text-[#08313B] mr-4 whitespace-nowrap">
              Navigation rapide :
            </span>
            {sections.map((section, index) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                onClick={() =>
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-gray-600 hover:text-[#29D497] hover:bg-[#29D497]/10 whitespace-nowrap"
              >
                {index + 1}. {section.title.split(". ")[1]}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction importante */}
        <Card className="mb-12 border-l-4 border-l-[#29D497] shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-[#29D497] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-[#08313B] mb-4">
                  Notre Engagement
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Manag+</strong> s'engage à respecter votre vie
                    privée et à protéger vos données personnelles conformément
                    aux réglementations en vigueur en Côte d'Ivoire et aux
                    standards internationaux.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Transparence totale
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Sécurité renforcée
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Contrôle utilisateur
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Conformité légale
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sections principales */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#29D497] to-[#25c085] rounded-lg flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-[#08313B]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.subtitle && (
                          <h3 className="text-lg font-semibold text-[#08313B] mb-3">
                            {item.subtitle}
                          </h3>
                        )}
                        {item.text && (
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {item.text}
                          </p>
                        )}
                        {item.list && (
                          <ul className="space-y-2 ml-6">
                            {item.list.map((listItem, listIndex) => (
                              <li
                                key={listIndex}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-4 h-4 text-[#29D497] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">
                                  {listItem}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          ))}
        </div>

        {/* Contact et support */}
        <Card className="mt-16 bg-gradient-to-br from-[#08313B] to-[#0a3d4a] text-white shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#29D497] rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Questions sur cette Politique ?
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
                  Notre équipe est à votre disposition pour répondre à toutes
                  vos questions concernant la protection de vos données
                  personnelles et l'exercice de vos droits.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Mail className="w-8 h-8 text-[#29D497] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-gray-300">privacy@managplus.ci</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Phone className="w-8 h-8 text-[#29D497] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Support</h3>
                  <p className="text-sm text-gray-300">+225 XX XX XX XX XX</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Globe className="w-8 h-8 text-[#29D497] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Site Web</h3>
                  <p className="text-sm text-gray-300">www.managplus.ci</p>
                </div>
              </div>

              <Button
                onClick={handleBackToHome}
                className="bg-[#29D497] hover:bg-[#25c085] text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300"
              >
                Retour à l'accueil
                <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer minimal */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-[#29D497] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M+</span>
            </div>
            <span className="text-lg font-bold">Manag+</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Manag+. Tous droits réservés. Made in Côte d'Ivoire 🇨🇮
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
