"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Calendar,
  DollarSign,
  Smartphone,
  ArrowRight,
  Mail,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Shield,
  Globe,
  PieChart,
  Utensils,
  Coffee,
  Home,
  Star,
  User,
  MapPin,
  Phone,
} from "lucide-react";
import { addToWaitlist, WaitlistForm } from "@/actions/waitlist";
import { EstablishmentEmployees, EstablishmentType } from "@prisma/client";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

const ManagPlusLanding = () => {
  const [formData, setFormData] = useState<WaitlistForm>({
    name: "",
    email: "",
    phone: "",
    establishmentName: "",
    establishmentType: EstablishmentType.RESTAURANT,
    establishmentLocation: "",
    establishmentEmployees: EstablishmentEmployees.SMALL,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { success, waitlist } = await addToWaitlist(formData);
      if (success) {
        toast.success("Merci de votre inscription !");
        setIsSubmitted(true);
        setIsLoading(false);
      } else {
        toast.error("Une erreur est survenue !");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleWaitlistSignup = () => {
    // Scroll vers le formulaire
    document?.getElementById("waitlist-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Gestion des ventes",
      description:
        "Tableau de bord clair et en temps réel pour suivre vos performances de vente quotidiennes.",
    },
    // {
    //   icon: <Calendar className="w-8 h-8 text-white" />,
    //   title: "Suivi des réservations",
    //   description:
    //     "Gérez vos réservations et votre relation client depuis une interface centralisée.",
    // },
    {
      icon: <PieChart className="w-8 h-8 text-white" />,
      title: "Rapports financiers",
      description:
        "Générez automatiquement vos rapports financiers et suivez votre rentabilité.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Accessible partout",
      description:
        "Pilotez votre établissement depuis n'importe où, même hors connexion.",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-[#29D497]" />,
      title: "Gain de temps",
      description:
        "Automatisez vos tâches répétitives et concentrez-vous sur l'essentiel.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#29D497]" />,
      title: "Plus de visibilité",
      description:
        "Analysez vos performances en temps réel avec des données précises.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#29D497]" />,
      title: "Optimisation des revenus",
      description:
        "Identifiez les opportunités d'amélioration et maximisez vos profits.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#29D497]" />,
      title: "Simplicité d'usage",
      description:
        "Interface pensée pour le terrain, formation rapide de vos équipes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" width={150} height={100} />
            </Link>
          </div>
          <Button
            onClick={handleWaitlistSignup}
            variant="secondary"
            className="text-white border-white/30 px-6 py-5  backdrop-blur-sm transition-all duration-300"
          >
            Rejoindre la Liste d'Attente
          </Button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="min-h-screen bg-[#08313B] text-white relative overflow-hidden flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#29D497]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#29D497]/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Gérez votre établissement{" "}
                  <span className="text-[#29D497] relative">
                    en toute simplicité
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#29D497]/30 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Manag+ vous aide à centraliser vos ventes, vos réservations et
                  vos finances dans une seule application intuitive. Pilotez
                  votre restaurant, bar ou hôtel avec une efficacité inégalée.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWaitlistSignup}
                  className="bg-[#29D497] hover:bg-[#25c085] text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Rejoindre la Liste d'Attente
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  className="border-2 border-[#29D497] text-[#29D497] hover:bg-[#29D497] hover:text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Voir la démo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#29D497]" />
                  <span className="text-sm text-gray-400">
                    Accès prioritaire au lancement
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#29D497]" />
                  <span className="text-sm text-gray-400">
                    Données sécurisées
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Mockups */}
            <div className="relative flex justify-center">
              {/* Desktop mockup */}
              <Image
                src="/mockup.png"
                alt="Mockup"
                width={3000}
                height={3000}
                className="w-[500px] h-[500px] object-contain"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -left-8 bg-white p-3 rounded-xl shadow-lg animate-bounce">
                <TrendingUp className="w-6 h-6 text-[#29D497]" />
              </div>
              <div className="absolute -bottom-4 right-4 bg-[#29D497] p-3 rounded-xl shadow-lg animate-pulse">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problème / Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problème */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full">
                <span className="text-red-600 text-sm font-semibold">
                  ❌ Le Problème
                </span>
              </div>
              <h2 className="text-4xl font-bold text-[#08313B]">
                Les établissements perdent du temps entre la gestion des ventes,
                des stocks et des clients.
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Jonglage constant entre plusieurs outils et cahiers
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Manque de visibilité sur les performances réelles</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Erreurs de calcul et pertes financières</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Difficultés à prévoir et optimiser l'activité</span>
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <span className="text-green-600 text-sm font-semibold">
                  ✅ La Solution
                </span>
              </div>
              <h2 className="text-4xl font-bold text-[#08313B]">
                Avec Manag+, vous pilotez tout depuis une seule plateforme.
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#29D497] mt-1 flex-shrink-0" />
                  <span>
                    Interface unique pour toutes vos opérations quotidiennes
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#29D497] mt-1 flex-shrink-0" />
                  <span>
                    Tableaux de bord en temps réel pour prendre les bonnes
                    décisions
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#29D497] mt-1 flex-shrink-0" />
                  <span>Calculs automatiques et rapports précis</span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#29D497] mt-1 flex-shrink-0" />
                  <span>
                    Analyses prédictives pour optimiser votre rentabilité
                  </span>
                </p>
              </div>

              <Button
                onClick={handleWaitlistSignup}
                className="bg-[#29D497] hover:bg-[#25c085] text-white px-8 py-4 font-semibold rounded-xl transition-all duration-300"
              >
                Rejoindre la Liste d'Attente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fonctionnalités clés */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#08313B] mb-6">
              Tout ce dont vous avez besoin dans une seule app
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manag+ centralise la gestion complète de votre établissement avec
              des outils pensés pour votre réussite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#29D497] to-[#25c085] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#08313B] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Avantages pour les propriétaires */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#08313B] mb-6">
              Pourquoi choisir Manag+ ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez la gestion de votre établissement et concentrez-vous
              sur ce qui compte vraiment : vos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#29D497]/10 to-[#25c085]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#08313B] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              {/* Stats visualization */}
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#08313B] mb-6 text-center">
                  Impact sur votre établissement
                </h3>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Temps économisé par jour
                    </span>
                    <span className="text-2xl font-bold text-[#29D497]">
                      3h
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Augmentation du CA</span>
                    <span className="text-2xl font-bold text-[#29D497]">
                      +25%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Réduction des erreurs</span>
                    <span className="text-2xl font-bold text-[#29D497]">
                      -80%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Satisfaction client</span>
                    <span className="text-2xl font-bold text-[#29D497]">
                      +40%
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-[#29D497]/10 to-[#25c085]/10 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#29D497] mb-2">
                      ROI
                    </div>
                    <div className="text-sm text-gray-600">
                      Retour sur investissement en moins de 30 jours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="my-12 text-center">
        <div className="bg-gradient-to-r from-[#08313B] to-[#0a3d4a] rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">
            Prêt à révolutionner votre établissement ?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Rejoignez les établissements visionnaires qui attendent le lancement
            de Manag+ et préparez-vous à transformer votre gestion.
          </p>
          <Button
            onClick={handleWaitlistSignup}
            className="bg-[#29D497] hover:bg-[#25c085] text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Rejoindre la Liste d'Attente
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div> */}

      {/* 5. Section Liste d'Attente */}
      <section className="py-24 bg-[#08313B] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#29D497]/10 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-[#29D497]/20 border border-[#29D497]/30 rounded-full">
              <Zap className="w-5 h-5 text-[#29D497] mr-2" />
              <span className="text-[#29D497] font-semibold">
                Lancement Imminent
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Rejoignez la liste d'attente et soyez parmi les premiers à
              découvrir Manag+
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Manag+ arrive bientôt ! Inscrivez-vous dès maintenant pour être
              informé en priorité du lancement et bénéficier d'offres exclusives
              réservées aux premiers utilisateurs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#29D497] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Inscription simple</h3>
                <p className="text-sm text-gray-400">
                  Rejoignez en quelques clics
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#29D497] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Accès prioritaire</h3>
                <p className="text-sm text-gray-400">
                  Soyez les premiers informés
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#29D497] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Offres exclusives</h3>
                <p className="text-sm text-gray-400">
                  Tarifs préférentiels au lancement
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {!isSubmitted ? (
                <Button
                  onClick={handleWaitlistSignup}
                  className="bg-[#29D497] hover:bg-[#25c085] text-white px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Rejoindre la Liste d'Attente
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#29D497]/30">
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#29D497]" />
                    <span className="text-lg font-semibold">
                      Vous êtes inscrit à la liste d'attente !
                    </span>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-400">
                🎯 Places limitées • 🚀 Lancement prévu pour Septembre 2025 • 💝
                Support prioritaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription à la liste d'attente */}
      <section
        id="waitlist-form"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#08313B] mb-4">
              Inscrivez-vous à la liste d'attente
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez dès maintenant et soyez parmi les premiers à découvrir
              Manag+
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-2xl border-0">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#08313B] mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#08313B] mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  {/* Informations établissement */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#08313B] mb-2">
                        <Home className="w-4 h-4 inline mr-2" />
                        Nom de l'établissement *
                      </label>
                      <input
                        type="text"
                        name="establishmentName"
                        required
                        value={formData.establishmentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                        placeholder="Restaurant Le Palmier"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#08313B] mb-2">
                        <Coffee className="w-4 h-4 inline mr-2" />
                        Type d'établissement *
                      </label>
                      <select
                        name="establishmentType"
                        required
                        value={formData.establishmentType}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          handleInputChange(e)
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionner...</option>
                        <option value={EstablishmentType.RESTAURANT}>
                          Restaurant
                        </option>
                        <option value={EstablishmentType.BAR}>Bar</option>
                        <option value={EstablishmentType.MAQUIS}>Maquis</option>
                        <option value={EstablishmentType.LUANGE}>Luange</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#08313B] mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Localisation *
                      </label>
                      <input
                        type="text"
                        name="establishmentLocation"
                        required
                        value={formData.establishmentLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                        placeholder="Abidjan, Cocody"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#08313B] mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#08313B] mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Nombre d'employés
                    </label>
                    <select
                      name="employees"
                      value={formData.establishmentEmployees}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleInputChange(e)
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#29D497] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionner...</option>
                      <option value={EstablishmentEmployees.SMALL}>
                        1 - 5
                      </option>
                      <option value={EstablishmentEmployees.MEDIUM}>
                        6 - 15
                      </option>
                      <option value={EstablishmentEmployees.LARGE}>
                        16 - 30
                      </option>
                      {/* <option value={EstablishmentEmployees.LARGE}>Plus de 30</option> */}
                    </select>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#29D497] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-600">
                        En vous inscrivant, vous acceptez de recevoir des
                        informations sur Manag+ et bénéficierez d'un accès
                        prioritaire lors du lancement officiel.
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="secondary"
                    className="w-full"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Inscription en cours...</span>
                      </div>
                    ) : (
                      <>
                        Rejoindre la Liste d'Attente
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-[#29D497] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#08313B] mb-2">
                      Félicitations ! Vous êtes inscrit !
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Merci <strong>{formData.name}</strong> ! Nous avons bien
                      reçu votre inscription pour{" "}
                      <strong>{formData.establishmentName}</strong>. Vous
                      recevrez un email de confirmation et serez parmi les
                      premiers informés du lancement de Manag+.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-[#29D497]/10 to-[#25c085]/10 rounded-xl p-6">
                    <h4 className="font-semibold text-[#08313B] mb-3">
                      Prochaines étapes :
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 text-left">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-[#29D497] flex-shrink-0" />
                        <span>Email de confirmation envoyé</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-[#29D497] flex-shrink-0" />
                        <span>
                          Accès prioritaire au lancement (Septembre 2025)
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-[#29D497] flex-shrink-0" />
                        <span>
                          Offres exclusives réservées aux early adopters
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo et description */}
            <div className="md:col-span-2 space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Logo" width={150} height={100} />
              </Link>
              <p className="text-gray-400 max-w-md">
                La solution de gestion tout-en-un pour les établissements en
                Côte d'Ivoire. Simplifiez votre quotidien, optimisez vos
                performances.
              </p>
              <div className="flex space-x-4 pt-4">
                <Button
                  onClick={handleWaitlistSignup}
                  className="bg-[#29D497] hover:bg-[#25c085] text-white font-semibold rounded-lg"
                >
                  Rejoindre la Liste d'Attente
                </Button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#29D497]" />
                  <span className="text-sm">contact@managplus.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-[#29D497]" />
                  <span className="text-sm">www.managplus.com</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors block"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors block"
                >
                  Tutoriels
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors block"
                >
                  Support technique
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Conditions d'utilisation
                </a>
              </div>

              <div className="text-sm text-gray-400">
                © 2025 Manag+. Tous droits réservés. Made in Côte d'Ivoire 🇨🇮
              </div>
            </div>
          </div>

          {/* CTA Final */}
        </div>
      </footer>
    </div>
  );
};

export default ManagPlusLanding;
