/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

declare var Typed: any;

const translations = {
    en: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | AI & Automation",
        solutionsLink: "Solutions",
        homeLink: "Home",
        productsPageTitle: "Autotask Solutions | Our Solutions",
        productsPageHeading: "Our Solutions",
        productsPageSubtitle: "Explore the AI-powered tools we've built to drive efficiency and innovation.",
        heroTitle: "Add Intelligence to Your Existing Systems.",
        heroSubtitle: "We build AI modules that plug into your current operation to boost your sales, logistics, and efficiency.",
        scheduleCall: "Schedule a call",
        accessDemo: "Try our Chatbot",
        exploreSolutions: "Explore Solutions",
        servicesCat1Title: "Automation & Optimization",
        servicesCat1Prod1Title: "Automation Pack for Startups/SMEs",
        servicesCat1Prod1Desc: "Your first step to efficiency. We automate your 3 most repetitive processes.",
        servicesCat1Prod2Title: "Intelligent Data Extractor (PDFs & Websites)",
        servicesCat1Prod2Desc: "We transform your documents and websites into structured data, without errors.",
        servicesCat1Prod3Title: "Systems & API Integration",
        servicesCat1Prod3Desc: "We make all your applications (CRM, ERP, etc.) communicate with each other.",
        servicesCat2Title: "Chatbots",
        servicesCat2Prod1Title: "Psychology & Mental Health Chatbot",
        servicesCat2Prod1Desc: "An empathetic and secure assistant, designed with psychological principles to offer support.",
        servicesCat2Prod2Title: "RAG Knowledge Base Engine",
        servicesCat2Prod2Desc: "We turn your documents into an expert brain that your systems can consult.",
        servicesCat2Prod3Title: "Instagram AI Chatbot",
        servicesCat2Prod3Desc: "Engage your audience and automate sales directly on Instagram, 24/7.",
        servicesCat3Title: "Lead Generation & Sales Automation",
        servicesCat3Prod1Title: "Intelligence Search & Lead Generation Machine",
        servicesCat3Prod1Desc: "A machine that finds, enriches, and qualifies high-quality leads.",
        servicesCat3Prod2Title: "Cold Email 'Icebreaker' Generator",
        servicesCat3Prod2Desc: "We use AI to create personalized outreach messages that triple your response rate.",
        servicesCat4Title: "Advanced AI & Consulting",
        productsCat4Prod1Title: "Consulting on Cutting-Edge AI Models",
        productsCat4Prod1Desc: "We help you choose and implement the best models on the market (GPT-4o, Gemini 1.5 Advanced, Llama 3, and Claude 3.5 Sonnet) for your specific needs.",
        researchTitle: "Machine Learning: Vision, Predictive, Recommendation Systems",
        researchSubtitle: "We build and deploy custom ML models for Computer Vision, Predictive Analysis, and Recommendation Engines.",
        researchCard1Cat: "HealthTech - Assisted Diagnosis",
        researchCard1Title: "Arterial Plaque Detection (R&D)",
        researchCard1Desc: "Active research in Computer Vision models (CNN) for detecting atheromas in angioplasty and stroke images, aiming to assist neurological and cardiological diagnosis.",
        researchCard2Cat: "FinTech - Predictive Analysis",
        researchCard2Title: "Predictive Models for Stock Analysis",
        researchCard2Desc: "Exploring the application of AI to analyze market sentiment and technical data, with the goal of generating investment insights.",
        researchCard3Cat: "Logistics - Time Optimization",
        researchCard3Title: "Supply Chain Optimization",
        researchCard3Desc: "Applying mathematical and machine learning models to predict arrival times and optimize logistics routes, based on our team's experience.",
        researchCard4Cat: "E-commerce & Content",
        researchCard4Title: "Recommendation Systems",
        researchCard4Desc: "We develop sophisticated recommendation engines that learn user preferences to deliver personalized product or content suggestions, increasing engagement and sales.",
        contactActionSubtitle: "Or, write to us and we’ll get back to you shortly.",
        contactNamePlaceholder: "Your Name",
        contactEmailPlaceholder: "Your Email",
        contactPhonePlaceholder: "Your Phone (Optional)",
        contactMessagePlaceholder: "Your idea, project, or question...",
        contactSubmitButton: "Send Message",
        contactFormSending: "Sending...",
        contactFormSuccess: "Message sent successfully! We'll get back to you soon.",
        contactFormError: "Something went wrong. Please try again.",
        contactOrEmail: 'Or email us at <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "Meet Our Team",
        teamSubtitle: "A unique fusion of AI architecture and end-to-end engineering.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "AI Specialist, Data Scientist & Industrial Engineer",
        teamMember1Desc: "+7 years of experience in ML projects. Specializes in AI Agents, RAG, and fine-tuning models to solve complex business challenges.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Software & Automation Engineer",
        teamMember2Desc: "+5 years of experience. Expert in designing and deploying robust AI chatbots and N8N automation workflows.",
        ctaTitle: "Ready to start?",
        footerCopyright: "© 2025 Autotask Solutions. All rights reserved.",
        contactUsLink: "Contact Us",
        privacyPolicyLink: "Privacy Policy",
        termsOfServiceLink: "Terms & Conditions"
    },
    es: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | AI & Automation",
        solutionsLink: "Soluciones",
        homeLink: "Inicio",
        productsPageTitle: "Autotask Solutions | Nuestras Soluciones",
        productsPageHeading: "Nuestras Soluciones",
        productsPageSubtitle: "Explora las herramientas impulsadas por IA que hemos construido para potenciar la eficiencia y la innovación.",
        heroTitle: "Añada Inteligencia a sus Sistemas Existentes.",
        heroSubtitle: "Construimos módulos de IA que se conectan a su operación actual para potenciar sus ventas, logística y eficiencia.",
        scheduleCall: "Agendar una llamada",
        accessDemo: "Probar nuestro Chatbot",
        exploreSolutions: "Explorar Soluciones",
        servicesCat1Title: "Automatización y Optimización",
        servicesCat1Prod1Title: "Pack de Automatización para Startups/PyMEs",
        servicesCat1Prod1Desc: "Tu primer paso a la eficiencia. Automatizamos tus 3 procesos más repetitivos.",
        servicesCat1Prod2Title: "Extractor de Datos Inteligente (PDFs y Webs)",
        servicesCat1Prod2Desc: "Transformamos tus documentos y webs en datos estructurados, sin errores.",
        servicesCat1Prod3Title: "Integración de Sistemas y APIs",
        servicesCat1Prod3Desc: "Hacemos que todas tus aplicaciones (CRM, ERP, etc.) se comuniquen entre sí.",
        servicesCat2Title: "Chatbots",
        servicesCat2Prod1Title: "Chatbot de Psicología y Salud Mental",
        servicesCat2Prod1Desc: "Un asistente empático y seguro, diseñado con principios de psicología para ofrecer apoyo.",
        servicesCat2Prod2Title: "Motor de Base de Conocimiento RAG",
        servicesCat2Prod2Desc: "Convertimos tus documentos en un cerebro experto que tus sistemas pueden consultar.",
        servicesCat2Prod3Title: "Chatbot de IA para Instagram",
        servicesCat2Prod3Desc: "Interactúa con tu audiencia y automatiza ventas directamente en Instagram, 24/7.",
        servicesCat3Title: "Generación de Leads y Automatización de Ventas",
        servicesCat3Prod1Title: "Máquina de Búsqueda Inteligente y Generación de Leads",
        servicesCat3Prod1Desc: "Una máquina que encuentra, enriquece y califica leads de alta calidad.",
        servicesCat3Prod2Title: "Generador de \"Rompehielos\" para Correos en Frío",
        servicesCat3Prod2Desc: "Usamos IA para crear mensajes de contacto personalizados que triplican tu tasa de respuesta.",
        servicesCat4Title: "IA Avanzada y Consultoría",
        productsCat4Prod1Title: "Consultoría en Modelos de IA de Vanguardia",
        productsCat4Prod1Desc: "Te ayudamos a elegir e implementar los mejores modelos del mercado (GPT-4o, Gemini 1.5 Advanced, Llama 3 y Claude 3.5 Sonnet) para tus necesidades específicas.",
        researchTitle: "Machine Learning: Visión, Sistemas Predictivos y de Recomendación",
        researchSubtitle: "Construimos y desplegamos modelos de ML a medida para Visión por Computadora, Análisis Predictivo y Motores de Recomendación.",
        researchCard1Cat: "HealthTech - Diagnóstico Asistido",
        researchCard1Title: "Detección de Placas Arteriales (I+D)",
        researchCard1Desc: "Investigación activa en modelos de Computer Vision (CNN) para la detección de ateromas en imágenes de angioplastias y ACVs, con el objetivo de asistir al diagnóstico neurológico y cardiológico.",
        researchCard2Cat: "FinTech - Análisis Predictivo",
        researchCard2Title: "Modelos Predictivos para Análisis de Acciones",
        researchCard2Desc: "Explorando la aplicación de IA para analizar sentimiento de mercado y datos técnicos, con el objetivo de generar insights de inversión.",
        researchCard3Cat: "Logística - Optimización de Tiempos",
        researchCard3Title: "Optimización de Cadenas de Suministro",
        researchCard3Desc: "Aplicando modelos matemáticos y de machine learning para predecir tiempos de llegada y optimizar rutas logísticas, basándonos en la experiencia de nuestro equipo.",
        researchCard4Cat: "E-commerce y Contenido",
        researchCard4Title: "Sistemas de Recomendación",
        researchCard4Desc: "Desarrollamos sofisticados motores de recomendación que aprenden las preferencias del usuario para ofrecer sugerencias personalizadas de productos o contenido, aumentando la interacción y las ventas.",
        contactActionSubtitle: "O escríbenos y te responderemos a la brevedad.",
        contactNamePlaceholder: "Tu Nombre",
        contactEmailPlaceholder: "Tu Email",
        contactPhonePlaceholder: "Tu Teléfono (Opcional)",
        contactMessagePlaceholder: "Tu idea, proyecto o pregunta...",
        contactSubmitButton: "Enviar Mensaje",
        contactFormSending: "Enviando...",
        contactFormSuccess: "¡Mensaje enviado! Nos pondremos en contacto contigo pronto.",
        contactFormError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        contactOrEmail: 'O envíanos un email a <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "Conoce a Nuestro Equipo",
        teamSubtitle: "Una fusión única de arquitectura de IA e ingeniería de extremo a extremo.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Especialista en IA, Científico de Datos e Ingeniero Industrial",
        teamMember1Desc: "+7 años de experiencia en proyectos de ML. Se especializa en Agentes de IA, RAG y ajuste fino de modelos para resolver complejos desafíos empresariales.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Ingeniero de Software y Automatización",
        teamMember2Desc: "+5 años de experiencia. Experto en diseñar y desplegar chatbots de IA robustos y flujos de trabajo de automatización N8N.",
        ctaTitle: "¿Listo para empezar?",
        footerCopyright: "© 2025 Autotask Solutions. Todos los derechos reservados.",
        contactUsLink: "Contáctanos",
        privacyPolicyLink: "Política de Privacidad",
        termsOfServiceLink: "Términos y Condiciones"
    },
    de: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | AI & Automation",
        solutionsLink: "Lösungen",
        homeLink: "Startseite",
        productsPageTitle: "Autotask Solutions | Unsere Lösungen",
        productsPageHeading: "Unsere Lösungen",
        productsPageSubtitle: "Entdecken Sie die KI-gestützten Tools, die wir entwickelt haben, um Effizienz und Innovation voranzutreiben.",
        heroTitle: "Fügen Sie Intelligenz in Ihre bestehenden Systeme ein.",
        heroSubtitle: "Wir entwickeln KI-Module, die sich in Ihren laufenden Betrieb integrieren, um Ihren Vertrieb, Ihre Logistik und Ihre Effizienz zu steigern.",
        scheduleCall: "Anruf vereinbaren",
        accessDemo: "Testen Sie unseren Chatbot",
        exploreSolutions: "Lösungen entdecken",
        servicesCat1Title: "Automatisierung & Optimierung",
        servicesCat1Prod1Title: "Automatisierungspaket für Startups/KMU",
        servicesCat1Prod1Desc: "Ihr erster Schritt zur Effizienz. Wir automatisieren Ihre 3 sich am häufigsten wiederholenden Prozesse.",
        servicesCat1Prod2Title: "Intelligenter Datenextraktor (PDFs & Websites)",
        servicesCat1Prod2Desc: "Wir wandeln Ihre Dokumente und Websites fehlerfrei in strukturierte Daten um.",
        servicesCat1Prod3Title: "System- & API-Integration",
        servicesCat1Prod3Desc: "Wir sorgen dafür, dass alle Ihre Anwendungen (CRM, ERP usw.) miteinander kommunizieren.",
        servicesCat2Title: "Chatbots",
        servicesCat2Prod1Title: "Psychologie & Psychische Gesundheit Chatbot",
        servicesCat2Prod1Desc: "Ein empathischer und sicherer Assistent, der nach psychologischen Prinzipien entwickelt wurde, um Unterstützung zu bieten.",
        servicesCat2Prod2Title: "RAG Wissensdatenbank-Engine",
        servicesCat2Prod2Desc: "Wir verwandeln Ihre Dokumente in ein Expertengehirn, das Ihre Systeme konsultieren können.",
        servicesCat2Prod3Title: "KI-Chatbot für Instagram",
        servicesCat2Prod3Desc: "Interagieren Sie mit Ihrem Publikum und automatisieren Sie Verkäufe direkt auf Instagram, rund um die Uhr.",
        servicesCat3Title: "Lead-Generierung & Vertriebsautomatisierung",
        servicesCat3Prod1Title: "Intelligente Such- & Lead-Generierungsmaschine",
        servicesCat3Prod1Desc: "Eine Maschine, die hochwertige Leads findet, anreichert und qualifiziert.",
        servicesCat3Prod2Title: "Kalt-E-Mail 'Icebreaker' Generator",
        servicesCat3Prod2Desc: "Wir verwenden KI, um personalisierte Outreach-Nachrichten zu erstellen, die Ihre Antwortrate verdreifachen.",
        servicesCat4Title: "Fortgeschrittene KI & Beratung",
        productsCat4Prod1Title: "Beratung zu den neuesten KI-Modellen",
        productsCat4Prod1Desc: "Wir helfen Ihnen bei der Auswahl und Implementierung der besten Modelle auf dem Markt (GPT-4o, Gemini 1.5 Advanced, Llama 3 und Claude 3.5 Sonnet) für Ihre spezifischen Bedürfnisse.",
        researchTitle: "Machine Learning: Bilderkennung, Vorhersage, Empfehlungssysteme",
        researchSubtitle: "Wir erstellen und implementieren benutzerdefinierte ML-Modelle für Computer Vision, prädiktive Analysen und Empfehlungsmaschinen.",
        researchCard1Cat: "HealthTech - Assistierte Diagnose",
        researchCard1Title: "Arterielle Plaqueden-Detektion (F&E)",
        researchCard1Desc: "Aktive Forschung an Computer-Vision-Modellen (CNN) zur Erkennung von Atheromen in Angioplastie- und Schlaganfallbildern zur Unterstützung der neurologischen und kardiologischen Diagnose.",
        researchCard2Cat: "FinTech - Prädiktive Analyse",
        researchCard2Title: "Prädiktive Modelle zur Aktienanalyse",
        researchCard2Desc: "Erforschung der Anwendung von KI zur Analyse der Marktstimmung und technischer Daten mit dem Ziel, Anlageerkenntnisse zu generieren.",
        researchCard3Cat: "Logistik - Zeitoptimierung",
        researchCard3Title: "Optimierung der Lieferkette",
        researchCard3Desc: "Anwendung mathematischer und maschineller Lernmodelle zur Vorhersage von Ankunftszeiten und zur Optimierung von Logistikrouten auf der Grundlage der Erfahrung unseres Teams.",
        researchCard4Cat: "E-Commerce & Inhalt",
        researchCard4Title: "Empfehlungssysteme",
        researchCard4Desc: "Wir entwickeln anspruchsvolle Empfehlungsmaschinen, die Benutzerpräferenzen lernen, um personalisierte Produkt- oder Inhaltsvorschläge zu liefern und so das Engagement und den Umsatz zu steigern.",
        contactActionSubtitle: "Oder schreiben Sie uns, und wir melden uns in Kürze bei Ihnen.",
        contactNamePlaceholder: "Ihr Name",
        contactEmailPlaceholder: "Ihre E-Mail",
        contactPhonePlaceholder: "Ihr Telefon (Optional)",
        contactMessagePlaceholder: "Ihre Idee, Ihr Projekt oder Ihre Frage...",
        contactSubmitButton: "Nachricht senden",
        contactFormSending: "Wird gesendet...",
        contactFormSuccess: "Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.",
        contactFormError: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
        contactOrEmail: 'Oder senden Sie uns eine E-Mail an <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "Lernen Sie unser Team kennen",
        teamSubtitle: "Eine einzigartige Fusion aus KI-Architektur und End-to-End-Engineering.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "KI-Spezialist, Datenwissenschaftler & Wirtschaftsingenieur",
        teamMember1Desc: "+7 Jahre Erfahrung in ML-Projekten. Spezialisiert auf KI-Agenten, RAG und Feinabstimmung von Modellen zur Lösung komplexer geschäftlicher Herausforderungen.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Software- & Automatisierungsingenieur",
        teamMember2Desc: "+5 Jahre Erfahrung. Experte in der Konzeption und Bereitstellung robuster KI-Chatbots und N8N-Automatisierungsworkflows.",
        ctaTitle: "Bereit anzufangen?",
        footerCopyright: "© 2025 Autotask Solutions. Alle Rechte vorbehalten.",
        contactUsLink: "Kontakt",
        privacyPolicyLink: "Datenschutzrichtlinie",
        termsOfServiceLink: "Nutzungsbedingungen"
    },
    fr: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | IA & Automatisation",
        solutionsLink: "Solutions",
        homeLink: "Accueil",
        productsPageTitle: "Autotask Solutions | Nos Solutions",
        productsPageHeading: "Nos Solutions",
        productsPageSubtitle: "Découvrez les outils basés sur l'IA que nous avons conçus pour stimuler l'efficacité et l'innovation.",
        heroTitle: "Ajoutez de l'Intelligence à Vos Systèmes Existants.",
        heroSubtitle: "Nous créons des modules d'IA qui s'intègrent à votre opération actuelle pour dynamiser vos ventes, votre logistique et votre efficacité.",
        scheduleCall: "Planifier un appel",
        accessDemo: "Essayer notre Chatbot",
        exploreSolutions: "Découvrir les Solutions",
        servicesCat1Title: "Automatisation & Optimisation",
        servicesCat1Prod1Title: "Pack d'Automatisation pour Startups/PME",
        servicesCat1Prod1Desc: "Votre premier pas vers l'efficacité. Nous automatisons vos 3 processus les plus répétitifs.",
        servicesCat1Prod2Title: "Extracteur de Données Intelligent (PDFs & Sites Web)",
        servicesCat1Prod2Desc: "Nous transformons vos documents et sites web en données structurées, sans erreurs.",
        servicesCat1Prod3Title: "Intégration de Systèmes & APIs",
        servicesCat1Prod3Desc: "Nous faisons communiquer toutes vos applications (CRM, ERP, etc.) entre elles.",
        servicesCat2Title: "Chatbots",
        servicesCat2Prod1Title: "Chatbot de Psychologie & Santé Mentale",
        servicesCat2Prod1Desc: "Un assistant empathique et sécurisé, conçu avec des principes psychologiques pour offrir un soutien.",
        servicesCat2Prod2Title: "Moteur de Base de Connaissances RAG",
        servicesCat2Prod2Desc: "Nous transformons vos documents en un cerveau expert que vos systèmes peuvent consulter.",
        servicesCat2Prod3Title: "Chatbot IA pour Instagram",
        servicesCat2Prod3Desc: "Interagissez avec votre public et automatisez les ventes directement sur Instagram, 24h/24 et 7j/7.",
        servicesCat3Title: "Génération de Leads & Automatisation des Ventes",
        servicesCat3Prod1Title: "Machine de Recherche Intelligente & Génération de Leads",
        servicesCat3Prod1Desc: "Une machine qui trouve, enrichit et qualifie des leads de haute qualité.",
        servicesCat3Prod2Title: "Générateur de 'Brise-glace' pour E-mails à Froid",
        servicesCat3Prod2Desc: "Nous utilisons l'IA pour créer des messages de prospection personnalisés qui triplent votre taux de réponse.",
        servicesCat4Title: "IA Avancée & Conseil",
        productsCat4Prod1Title: "Conseil sur les Modèles d'IA de Pointe",
        productsCat4Prod1Desc: "Nous vous aidons à choisir et à mettre en œuvre les meilleurs modèles du marché (GPT-4o, Gemini 1.5 Advanced, Llama 3 et Claude 3.5 Sonnet) pour vos besoins spécifiques.",
        researchTitle: "Machine Learning : Vision, Systèmes Prédictifs et de Recommandation",
        researchSubtitle: "Nous construisons et déployons des modèles de ML personnalisés pour la Vision par Ordinateur, l'Analyse Prédictive et les Moteurs de Recommandation.",
        researchCard1Cat: "HealthTech - Diagnostic Assisté",
        researchCard1Title: "Détection de Plaque Artérielle (R&D)",
        researchCard1Desc: "Recherche active sur les modèles de Vision par Ordinateur (CNN) pour la détection d'athéromes dans les images d'angioplastie et d'AVC, visant à aider le diagnostic neurologique et cardiologique.",
        researchCard2Cat: "FinTech - Analyse Prédictive",
        researchCard2Title: "Modèles Prédictifs pour l'Analyse Boursière",
        researchCard2Desc: "Exploration de l'application de l'IA pour analyser le sentiment du marché et les données techniques, dans le but de générer des perspectives d'investissement.",
        researchCard3Cat: "Logistique - Optimisation du Temps",
        researchCard3Title: "Optimisation de la Chaîne d'Approvisionnement",
        researchCard3Desc: "Application de modèles mathématiques et d'apprentissage automatique pour prédire les heures d'arrivée et optimiser les itinéraires logistiques, en s'appuyant sur l'expérience de notre équipe.",
        researchCard4Cat: "E-commerce & Contenu",
        researchCard4Title: "Systèmes de Recommandation",
        researchCard4Desc: "Nous développons des moteurs de recommandation sophistiqués qui apprennent les préférences des utilisateurs pour fournir des suggestions de produits ou de contenus personnalisés, augmentant l'engagement et les ventes.",
        contactActionSubtitle: "Ou écrivez-nous et nous vous répondrons rapidement.",
        contactNamePlaceholder: "Votre Nom",
        contactEmailPlaceholder: "Votre E-mail",
        contactPhonePlaceholder: "Votre Téléphone (Facultatif)",
        contactMessagePlaceholder: "Votre idée, projet ou question...",
        contactSubmitButton: "Envoyer le Message",
        contactFormSending: "Envoi en cours...",
        contactFormSuccess: "Message envoyé avec succès ! Nous vous recontacterons bientôt.",
        contactFormError: "Une erreur s'est produite. Veuillez réessayer.",
        contactOrEmail: 'Ou envoyez-nous un e-mail à <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "Rencontrez Notre Équipe",
        teamSubtitle: "Une fusion unique d'architecture IA et d'ingénierie de bout en bout.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Spécialiste IA, Data Scientist & Ingénieur Industriel",
        teamMember1Desc: "+7 ans d'expérience dans les projets de ML. Spécialisé dans les Agents IA, le RAG et l'ajustement fin de modèles pour résoudre des défis commerciaux complexes.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Ingénieur Logiciel & Automatisation",
        teamMember2Desc: "+5 ans d'expérience. Expert dans la conception et le déploiement de chatbots IA robustes et de flux d'automatisation N8N.",
        ctaTitle: "Prêt à commencer ?",
        footerCopyright: "© 2025 Autotask Solutions. Tous droits réservés.",
        contactUsLink: "Contactez-nous",
        privacyPolicyLink: "Politique de Confidentialité",
        termsOfServiceLink: "Termes & Conditions"
    },
    zh: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>solutions',
        pageTitle: "Autotask Solutions | AI & Automation",
        solutionsLink: "解决方案",
        homeLink: "首页",
        productsPageTitle: "Autotask Solutions | 我们的解决方案",
        productsPageHeading: "我们的解决方案",
        productsPageSubtitle: "探索我们为提高效率和创新而构建的人工智能工具。",
        heroTitle: "为您的现有系统增添智能。",
        heroSubtitle: "我们构建的人工智能模块可接入您当前的运营，以提升您的销售、物流和效率。",
        scheduleCall: "安排通话",
        accessDemo: "试用我们的聊天机器人",
        exploreSolutions: "探索解决方案",
        servicesCat1Title: "自动化与优化",
        servicesCat1Prod1Title: "初创/中小企业自动化包",
        servicesCat1Prod1Desc: "您迈向效率的第一步。我们为您自动化3个最重复的流程。",
        servicesCat1Prod2Title: "智能数据提取器（PDF和网站）",
        servicesCat1Prod2Desc: "我们将您的文档和网站无误地转换为结构化数据。",
        servicesCat1Prod3Title: "系统与API集成",
        servicesCat1Prod3Desc: "我们让您所有的应用程序（CRM、ERP等）互通有无。",
        servicesCat2Title: "聊天机器人",
        servicesCat2Prod1Title: "心理学与心理健康聊天机器人",
        servicesCat2Prod1Desc: "一个富有同情心且安全的助手，根据心理学原理设计，提供支持。",
        servicesCat2Prod2Title: "RAG知识库引擎",
        servicesCat2Prod2Desc: "我们将您的文档变成一个专家大脑，您的系统可以随时咨询。",
        servicesCat2Prod3Title: "Instagram人工智能聊天机器人",
        servicesCat2Prod3Desc: "直接在Instagram上与您的受众互动并自动化销售，全天候服务。",
        servicesCat3Title: "潜在客户生成与销售自动化",
        servicesCat3Prod1Title: "智能搜索与潜在客户生成机器",
        servicesCat3Prod1Desc: "一台寻找、丰富和筛选高质量潜在客户的机器。",
        servicesCat3Prod2Title: "冷邮件“破冰船”生成器",
        servicesCat3Prod2Desc: "我们使用人工智能创建个性化的外联信息，使您的回复率增加三倍。",
        servicesCat4Title: "高级人工智能与咨询",
        productsCat4Prod1Title: "前沿人工智能模型咨询",
        productsCat4Prod1Desc: "我们帮助您根据您的特定需求，选择和实施市场上最好的模型（GPT-4o, Gemini 1.5 Advanced, Llama 3, and Claude 3.5 Sonnet）。",
        researchTitle: "机器学习：视觉、预测、推荐系统",
        researchSubtitle: "我们为计算机视觉、预测分析和推荐引擎构建和部署定制的机器学习模型。",
        researchCard1Cat: "健康科技 - 辅助诊断",
        researchCard1Title: "动脉斑块检测（研发中）",
        researchCard1Desc: "积极研究计算机视觉模型（CNN）用于检测血管成形术和中风图像中的动脉粥样硬化，旨在辅助神经和心脏诊断。",
        researchCard2Cat: "金融科技 - 预测分析",
        researchCard2Title: "股票分析预测模型",
        researchCard2Desc: "探索应用人工智能分析市场情绪和技术数据，以产生投资见解。",
        researchCard3Cat: "物流 - 时间优化",
        researchCard3Title: "供应链优化",
        researchCard3Desc: "根据我们团队的经验，应用数学和机器学习模型预测到达时间并优化物流路线。",
        researchCard4Cat: "电子商务与内容",
        researchCard4Title: "推荐系统",
        researchCard4Desc: "我们开发先进的推荐引擎，学习用户偏好以提供个性化的产品或内容建议，从而提高用户参与度和销售额。",
        contactActionSubtitle: "或者，写信给我们，我们会尽快回复您。",
        contactNamePlaceholder: "您的姓名",
        contactEmailPlaceholder: "您的电子邮件",
        contactPhonePlaceholder: "您的电话（可选）",
        contactMessagePlaceholder: "您的想法、项目或问题...",
        contactSubmitButton: "发送消息",
        contactFormSending: "发送中...",
        contactFormSuccess: "消息发送成功！我们会尽快与您联系。",
        contactFormError: "出错了。请重试。",
        contactOrEmail: '或者发送邮件至 <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "认识我们的团队",
        teamSubtitle: "人工智能架构与端到端工程的独特融合。",
        teamMember1Name: "Joaquín",
        teamMember1Title: "人工智能专家、数据科学家与工业工程师",
        teamMember1Desc: "超过7年的机器学习项目经验。专注于人工智能代理、RAG和模型微调，以解决复杂的业务挑战。",
        teamMember2Name: "Pablo",
        teamMember2Title: "软件与自动化工程师",
        teamMember2Desc: "超过5年的经验。精通设计和部署强大的AI聊天机器人和N8N自动化工作流。",
        ctaTitle: "准备好开始了吗？",
        footerCopyright: "© 2025 Autotask Solutions. 版权所有。",
        contactUsLink: "联系我们",
        privacyPolicyLink: "隐私政策",
        termsOfServiceLink: "服务条款"
    },
    pt: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | AI & Automation",
        solutionsLink: "Soluções",
        homeLink: "Início",
        productsPageTitle: "Autotask Solutions | Nossas Soluções",
        productsPageHeading: "Nossas Soluções",
        productsPageSubtitle: "Explore as ferramentas alimentadas por IA que construímos para impulsionar a eficiência e a inovação.",
        heroTitle: "Adicione Inteligência aos Seus Sistemas Existentes.",
        heroSubtitle: "Construímos módulos de IA que se integram à sua operação atual para impulsionar suas vendas, logística e eficiência.",
        scheduleCall: "Agendar uma chamada",
        accessDemo: "Experimente nosso Chatbot",
        exploreSolutions: "Explorar Soluções",
        servicesCat1Title: "Automação e Otimização",
        servicesCat1Prod1Title: "Pacote de Automação para Startups/PMEs",
        servicesCat1Prod1Desc: "Seu primeiro passo para a eficiência. Automatizamos seus 3 processos mais repetitivos.",
        servicesCat1Prod2Title: "Extrator de Dados Inteligente (PDFs e Websites)",
        servicesCat1Prod2Desc: "Transformamos seus documentos e websites em dados estruturados, sem erros.",
        servicesCat1Prod3Title: "Integração de Sistemas e APIs",
        servicesCat1Prod3Desc: "Fazemos com que todas as suas aplicações (CRM, ERP, etc.) se comuniquem entre si.",
        servicesCat2Title: "Chatbots",
        servicesCat2Prod1Title: "Chatbot de Psicologia e Saúde Mental",
        servicesCat2Prod1Desc: "Um assistente empático e seguro, projetado com princípios de psicologia para oferecer apoio.",
        servicesCat2Prod2Title: "Motor de Base de Conhecimento RAG",
        servicesCat2Prod2Desc: "Transformamos seus documentos em um cérebro especialista que seus sistemas podem consultar.",
        servicesCat2Prod3Title: "Chatbot de IA para Instagram",
        servicesCat2Prod3Desc: "Envolva seu público e automatize vendas diretamente no Instagram, 24/7.",
        servicesCat3Title: "Geração de Leads e Automação de Vendas",
        servicesCat3Prod1Title: "Máquina de Busca Inteligente e Geração de Leads",
        servicesCat3Prod1Desc: "Uma máquina que encontra, enriquece e qualifica leads de alta qualidade.",
        servicesCat3Prod2Title: "Gerador de 'Quebra-gelo' para E-mails Frios",
        servicesCat3Prod2Desc: "Usamos IA para criar mensagens de contato personalizadas que triplicam sua taxa de resposta.",
        servicesCat4Title: "IA Avançada e Consultoria",
        productsCat4Prod1Title: "Consultoria em Modelos de IA de Ponta",
        productsCat4Prod1Desc: "Ajudamos você a escolher e implementar os melhores modelos do mercado (GPT-4o, Gemini 1.5 Advanced, Llama 3 e Claude 3.5 Sonnet) para suas necessidades específicas.",
        researchTitle: "Machine Learning: Visão, Preditivo e Sistemas de Recomendação",
        researchSubtitle: "Construímos e implementamos modelos de ML personalizados para Visão Computacional, Análise Preditiva e Motores de Recomendação.",
        researchCard1Cat: "HealthTech - Diagnóstico Assistido",
        researchCard1Title: "Detecção de Placas Arteriais (P&D)",
        researchCard1Desc: "Pesquisa ativa em modelos de Visão Computacional (CNN) para detectar ateromas em imagens de angioplastia e AVC, visando auxiliar o diagnóstico neurológico e cardiológico.",
        researchCard2Cat: "FinTech - Análise Preditiva",
        researchCard2Title: "Modelos Preditivos para Análise de Ações",
        researchCard2Desc: "Explorando a aplicação de IA para analisar o sentimento do mercado e dados técnicos, com o objetivo de gerar insights de investimento.",
        researchCard3Cat: "Logística - Otimização de Tempo",
        researchCard3Title: "Otimização da Cadeia de Suprimentos",
        researchCard3Desc: "Aplicando modelos matemáticos e de aprendizado de máquina para prever tempos de chegada e otimizar rotas logísticas, com base na experiência de nossa equipe.",
        researchCard4Cat: "E-commerce e Conteúdo",
        researchCard4Title: "Sistemas de Recomendação",
        researchCard4Desc: "Desenvolvemos motores de recomendação sofisticados que aprendem as preferências do usuário para fornecer sugestões personalizadas de produtos ou conteúdo, aumentando o engajamento e as vendas.",
        contactActionSubtitle: "Ou escreva para nós e retornaremos em breve.",
        contactNamePlaceholder: "Seu Nome",
        contactEmailPlaceholder: "Seu Email",
        contactPhonePlaceholder: "Seu Telefone (Opcional)",
        contactMessagePlaceholder: "Sua ideia, projeto ou pergunta...",
        contactSubmitButton: "Enviar Mensagem",
        contactFormSending: "Enviando...",
        contactFormSuccess: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        contactFormError: "Algo deu errado. Por favor, tente novamente.",
        contactOrEmail: 'Ou envie um e-mail para <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "Conheça Nossa Equipe",
        teamSubtitle: "Uma fusão única de arquitetura de IA e engenharia de ponta a ponta.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Especialista em IA, Cientista de Dados e Engenheiro Industrial",
        teamMember1Desc: "+7 anos de experiência em projetos de ML. Especializado em Agentes de IA, RAG e ajuste fino de modelos para resolver desafios de negócios complexos.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Engenheiro de Software e Automação",
        teamMember2Desc: "+5 anos de experiência. Especialista em projetar e implementar chatbots de IA robustos e fluxos de trabalho de automação N8N.",
        ctaTitle: "Pronto para começar?",
        footerCopyright: "© 2025 Autotask Solutions. Todos os direitos reservados.",
        contactUsLink: "Fale Conosco",
        privacyPolicyLink: "Política de Privacidade",
        termsOfServiceLink: "Termos e Condições"
    },
    ca: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | IA & Automatització",
        solutionsLink: "Solucions",
        homeLink: "Inici",
        productsPageTitle: "Autotask Solutions | Les Nostres Solucions",
        productsPageHeading: "Les Nostres Solucions",
        productsPageSubtitle: "Explora les eines impulsades per IA que hem construït per potenciar l'eficiència i la innovació.",
        heroTitle: "Afegeix Intel·ligència als Teus Sistemes Existents.",
        heroSubtitle: "Construïm mòduls d'IA que es connecten a la teva operació actual per potenciar les teves vendes, logística i eficiència.",
        scheduleCall: "Programa una trucada",
        accessDemo: "Prova el nostre Chatbot",
        exploreSolutions: "Explora Solucions",
        servicesCat1Title: "Automatització i Optimització",
        servicesCat1Prod1Title: "Pack d'Automatització per a Startups/PIMES",
        servicesCat1Prod1Desc: "El teu primer pas cap a l'eficiència. Automatitzem els teus 3 processos més repetitius.",
        servicesCat1Prod2Title: "Extractor de Dades Intel·ligent (PDFs i Webs)",
        servicesCat1Prod2Desc: "Transformem els teus documents i webs en dades estructurades, sense errors.",
        servicesCat1Prod3Title: "Integració de Sistemes i APIs",
        servicesCat1Prod3Desc: "Fem que totes les teves aplicacions (CRM, ERP, etc.) es comuniquin entre si.",
        servicesCat2Title: "Xatbots",
        servicesCat2Prod1Title: "Xatbot de Psicologia i Salut Mental",
        servicesCat2Prod1Desc: "Un assistent empàtic i segur, dissenyat amb principis de psicologia per oferir suport.",
        servicesCat2Prod2Title: "Motor de Base de Coneixement RAG",
        servicesCat2Prod2Desc: "Convertim els teus documents en un cervell expert que els teus sistemes poden consultar.",
        servicesCat2Prod3Title: "Xatbot d'IA per a Instagram",
        servicesCat2Prod3Desc: "Interactua amb la teva audiència i automatitza vendes directament a Instagram, 24/7.",
        servicesCat3Title: "Generació de Leads i Automatització de Vendes",
        servicesCat3Prod1Title: "Màquina de Cerca Intel·ligent i Generació de Leads",
        servicesCat3Prod1Desc: "Una màquina que troba, enriqueix i qualifica leads d'alta qualitat.",
        servicesCat3Prod2Title: "Generador de 'Trencaglaç' per a Correus en Fred",
        servicesCat3Prod2Desc: "Utilitzem IA per crear missatges de contacte personalitzats que tripliquen la teva taxa de resposta.",
        servicesCat4Title: "IA Avançada i Consultoria",
        productsCat4Prod1Title: "Consultoria en Models d'IA d'Avantguarda",
        productsCat4Prod1Desc: "T'ajudem a triar i implementar els millors models del mercat (GPT-4o, Gemini 1.5 Advanced, Llama 3 i Claude 3.5 Sonnet) per a les teves necessitats específiques.",
        researchTitle: "Machine Learning: Visió, Sistemes Predictius i de Recomanació",
        researchSubtitle: "Construïm i despleguem models de ML a mida per a Visió per Computadora, Anàlisi Predictiva i Motors de Recomanació.",
        researchCard1Cat: "HealthTech - Diagnòstic Assistit",
        researchCard1Title: "Detecció de Plaques Arterials (R+D)",
        researchCard1Desc: "Recerca activa en models de Visió per Computadora (CNN) per a la detecció d'ateromes en imatges d'angioplàsties i ICTUS, amb l'objectiu d'assistir al diagnòstic neurològic i cardiològic.",
        researchCard2Cat: "FinTech - Anàlisi Predictiva",
        researchCard2Title: "Models Predictius per a Anàlisi d'Accions",
        researchCard2Desc: "Explorant l'aplicació d'IA per analitzar el sentiment del mercat i dades tècniques, amb l'objectiu de generar insights d'inversió.",
        researchCard3Cat: "Logística - Optimització de Temps",
        researchCard3Title: "Optimització de Cadenes de Subministrament",
        researchCard3Desc: "Aplicant models matemàtics i d'aprenentatge automàtic per predir temps d'arribada i optimitzar rutes logístiques, basant-nos en l'experiència del nostre equip.",
        researchCard4Cat: "E-commerce i Contingut",
        researchCard4Title: "Sistemes de Recomanació",
        researchCard4Desc: "Desenvolupem sofisticats motors de recomanació que aprenen les preferències de l'usuari per oferir suggeriments personalitzats de productes o contingut, augmentant la interacció i les vendes.",
        contactActionSubtitle: "O escriu-nos i et respondrem aviat.",
        contactNamePlaceholder: "El Teu Nom",
        contactEmailPlaceholder: "El Teu Correu Electrònic",
        contactPhonePlaceholder: "El Teu Telèfon (Opcional)",
        contactMessagePlaceholder: "La teva idea, projecte o pregunta...",
        contactSubmitButton: "Enviar Missatge",
        contactFormSending: "Enviant...",
        contactFormSuccess: "Missatge enviat amb èxit! Ens posarem en contacte amb tu aviat.",
        contactFormError: "Hi ha hagut un error. Si us plau, torna-ho a provar.",
        contactOrEmail: 'O envia\'ns un correu a <a href="mailto:info@autotasksolutions.site">info@autotasksolutions.site</a>',
        teamTitle: "Coneix el Nostre Equip",
        teamSubtitle: "Una fusió única d'arquitectura d'IA i enginyeria de cap a cap.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Especialista en IA, Científic de Dades i Enginyer Industrial",
        teamMember1Desc: "+7 anys d'experiència en projectes de ML. S'especialitza en Agents d'IA, RAG i ajust fi de models per resoldre complexos reptes empresarials.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Enginyer de Programari i Automatització",
        teamMember2Desc: "+5 anys d'experiència. Expert en dissenyar i desplegar xatbots d'IA robustos i fluxos de treball d'automatització N8N.",
        ctaTitle: "A punt per començar?",
        footerCopyright: "© 2025 Autotask Solutions. Tots els drets reservats.",
        contactUsLink: "Contacta'ns",
        privacyPolicyLink: "Política de Privacitat",
        termsOfServiceLink: "Termes i Condicions"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher') as HTMLSelectElement;
    
    // Internationalization
    const setLanguage = (langCode?: string) => {
        let lang = langCode;

        if (!lang) {
            const savedLang = localStorage.getItem('language');
            const userLang = (navigator.language || 'en').split('-')[0];
            lang = savedLang || (translations[userLang] ? userLang : 'en');
        }

        if (!translations[lang]) {
            lang = 'en'; // Fallback to English
        }

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        if (langSwitcher.value !== lang) {
            langSwitcher.value = lang;
        }
        
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (!key) return;
            const translationValue = (translations[lang] || translations['en'])?.[key];

            if (typeof translationValue !== 'undefined' && !Array.isArray(translationValue)) {
                const isHtml = /<[a-z][\s\S]*>/i.test(translationValue);
                if (isHtml) {
                    el.innerHTML = translationValue;
                } else {
                    el.textContent = translationValue;
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder-key');
            if (key && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
                el.placeholder = (translations[lang] || translations['en'])[key];
            }
        });
    };
    
    langSwitcher.addEventListener('change', () => {
        setLanguage(langSwitcher.value);
    });
    
    // Initial language setup
    setLanguage();


    // Theme switcher logic
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;
    const htmlElement = document.documentElement;

    const setTheme = (isDarkMode: boolean) => {
        if (isDarkMode) {
            htmlElement.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            htmlElement.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    setTheme(htmlElement.classList.contains('dark-mode'));

    themeToggle.addEventListener('change', () => {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Mobile menu logic
    const hamburgerMenu = document.getElementById('hamburger-menu') as HTMLButtonElement;
    const header = document.querySelector('.main-header');
    if (hamburgerMenu && header) {
        hamburgerMenu.addEventListener('click', () => {
            const isNavOpen = header.classList.toggle('nav-open');
            document.body.classList.toggle('body-no-scroll', isNavOpen);
            hamburgerMenu.setAttribute('aria-expanded', isNavOpen.toString());
        });
    }

    // SPA-like navigation
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        const privacyPage = document.getElementById('privacy-policy-page');
        const termsPage = document.getElementById('terms-of-service-page');

        const pages = [mainContent, privacyPage, termsPage].filter(p => p !== null) as HTMLElement[];

        const showPage = (pageToShow: HTMLElement | null, scrollTargetId?: string) => {
            if (!pageToShow) return;
            pages.forEach(p => {
                p.style.display = (p === pageToShow) ? 'block' : 'none';
            });
            
            if (scrollTargetId) {
                setTimeout(() => {
                    document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            } else {
                window.scrollTo(0, 0);
            }
            
            if (header && header.classList.contains('nav-open')) {
                header.classList.remove('nav-open');
                document.body.classList.remove('body-no-scroll');
            }
        };

        // Unified SPA navigation handler
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (!link) return;

            const href = link.getAttribute('href');
            const isMainContentVisible = mainContent.style.display !== 'none';
            
            const closeNav = () => {
                 if (header && header.classList.contains('nav-open')) {
                    header.classList.remove('nav-open');
                    document.body.classList.remove('body-no-scroll');
                }
            }
            
            if (!href) return;

            if (href === 'privacy-policy.html') {
                e.preventDefault();
                showPage(privacyPage);
            } else if (href === 'terms-of-service.html') {
                e.preventDefault();
                showPage(termsPage);
            } else if (href === 'index.html' || link.classList.contains('logo') || link.classList.contains('home-link-btn')) {
                e.preventDefault();
                showPage(mainContent);
            } else if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                 if (isMainContentVisible) {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    closeNav();
                } else {
                    showPage(mainContent, targetId);
                }
            }
        });
    }
    
    // Contact form submission handler
    const initializeContactForm = (formId: string, statusId: string) => {
        const contactForm = document.getElementById(formId) as HTMLFormElement;
        if (!contactForm) return;

        const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
        const formStatus = document.getElementById(statusId) as HTMLElement;
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!submitButton || !formStatus) return;

            const lang = document.documentElement.lang || 'en';
            const currentTranslations = translations[lang] || translations['en'];

            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = currentTranslations['contactFormSending'];
            formStatus.textContent = '';
            formStatus.className = '';

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message'),
            };

            try {
                const response = await fetch('https://n8n-app.agreeableriver-225df3a2.westus.azurecontainerapps.io/webhook/9bfaf4bf-38ae-4d83-b90b-8b87da297e6d', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    formStatus.textContent = currentTranslations['contactFormSuccess'];
                    formStatus.classList.add('form-status-success');
                    contactForm.reset();
                     setTimeout(() => {
                         formStatus.textContent = '';
                         formStatus.className = '';
                    }, 5000);
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                formStatus.textContent = currentTranslations['contactFormError'];
                formStatus.classList.add('form-status-error');
                console.error('There was a problem with the fetch operation:', error);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    };

    initializeContactForm('contact-form', 'form-status');


    // Modal logic for scheduling a call
    const scheduleModal = document.getElementById('schedule-modal') as HTMLElement;
    const scheduleButtons = document.querySelectorAll('.schedule-call-btn');
    const closeModalButton = document.querySelector('.modal-close') as HTMLElement;


    if (scheduleModal && closeModalButton) {
        const openModal = () => {
            scheduleModal.style.display = 'block';
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            scheduleModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        };

        scheduleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        closeModalButton.addEventListener('click', closeModal);

        scheduleModal.addEventListener('click', (e) => {
            if (e.target === scheduleModal) {
                closeModal();
            }
        });
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && scheduleModal.style.display === 'block') {
                closeModal();
            }
        });
    }

    // Parallax scroll effect for hero background
    const animatedBg = document.querySelector('.animated-bg') as HTMLElement;
    if (animatedBg) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            const offsetY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    animatedBg.style.transform = `translateY(${offsetY * 0.5}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Scroll to top button logic
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn') as HTMLButtonElement;
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});