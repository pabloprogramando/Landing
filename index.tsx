/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

declare var Typed: any;

const translations = {
    en: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | AI for your business",
        productsLink: "Our Lab",
        homeLink: "Home",
        productsPageTitle: "Autotask Solutions | Our Products",
        productsPageHeading: "Our Products & Solutions",
        productsPageSubtitle: "Explore the AI-powered tools we've built to drive efficiency and innovation.",
        productsCat1: "AI CHATBOTS & RAG",
        product1_2: "WhatsApp Conversational Agent",
        product1_3: "RAG Knowledge Base Engine",
        product1_4: "Instagram AI Chatbot",
        product1_5: "AI Agents",
        productsCat2: "DATA PROCESSING & EXTRACTION",
        product2_1: "Automated PDF Invoice Extractor",
        product2_2: "Website & API Scraper",
        product2_3: "AI Web Researcher",
        productsCat3: "LEAD GENERATION & SALES AUTOMATION",
        product3_1: "Lead Generation, Scoring & Communication",
        product3_2: "Cold Email Icebreaker Generator",
        product3_3: "Google Maps Lead Scraper",
        productsCat4: "CORE TOOLS & INTEGRATIONS",
        product4_1: "Google Calendar Event Agent",
        product4_2: "Supabase Chat Memory Manager",
        product4_3: "BigQuery Data Agent",
        heroTypedItems: [
            '<span class="highlight">A</span>utomation.',
            '<span class="highlight">A</span>rtificial.'
        ],
        heroIntelligenceStatic: '<span class="highlight">I</span>ntelligence.',
        heroSubtitle: "Activate Your Business's AI Potential.",
        scheduleCall: "Schedule a call",
        accessDemo: "Try our Chatbot",
        servicesTitle: "Our Solutions Portfolio",
        servicesCat1Title: "Automation & Optimization",
        servicesCat1Prod1Title: "Automation Pack for Startups/SMEs",
        servicesCat1Prod1Desc: "Your first step to efficiency. We automate your 3 most repetitive processes.",
        servicesCat1Prod2Title: "Intelligent Data Extractor (PDFs & Websites)",
        servicesCat1Prod2Desc: "We transform your documents and websites into structured data, without errors.",
        servicesCat1Prod3Title: "Systems & API Integration",
        servicesCat1Prod3Desc: "We make all your applications (CRM, ERP, etc.) communicate with each other.",
        servicesCat2Title: "Conversational Agents & RAG",
        servicesCat2Prod1Title: "Psychology & Mental Health Chatbot",
        servicesCat2Prod1Desc: "An empathetic and secure assistant, designed with psychological principles to offer support.",
        servicesCat2Prod2Title: "RAG Knowledge Base Engine",
        servicesCat2Prod2Desc: "We turn your documents into an expert brain that your systems can consult.",
        servicesCat2Prod3Title: "Instagram AI Chatbot",
        servicesCat2Prod3Desc: "Engage your audience and automate sales directly on Instagram, 24/7.",
        servicesCat3Title: "Growth Engines",
        productsCat3TitleUpdated: "Growth Engines (Sales & Marketing)",
        servicesCat3Prod1Title: "B2B Lead Generation Engine",
        servicesCat3Prod1Desc: "A machine that finds, enriches, and qualifies high-quality leads while you sleep.",
        servicesCat3Prod2Title: "Cold Email 'Icebreaker' Generator",
        servicesCat3Prod2Desc: "We use AI to create personalized outreach messages that triple your response rate.",
        servicesCat3Prod3Title: "Intelligent CRM",
        servicesCat3Prod3Desc: "Unify your database with AI for a 360° customer view.<br>Automatic package recommendations.<br>AI Chatbot to answer inquiries about dates and quotes.",
        servicesCat4Title: "Advanced AI & Consulting",
        productsCat4Prod1Title: "Consulting on Cutting-Edge AI Models",
        productsCat4Prod1Desc: "We help you choose and implement the best models on the market (GPT-4o, Gemini 1.5, Llama 3, Claude 3) for your specific needs.",
        servicesCat4Prod1Title: "AI for the Legal Sector (LegalTech)",
        servicesCat4Prod1Desc: "We transform thousands of pages of laws and contracts into an expert you can ask questions.",
        servicesCat4Prod2Title: "AI Image Analysis (Computer Vision)",
        servicesCat4Prod2Desc: "We automate image review for your business processes.",
        servicesCat4Prod3Title: "Arterial Plaque Detection (HealthTech - R&D)",
        servicesCat4Prod3Desc: "(In Research) - A Machine Learning model to assist in the early detection of cardiovascular risk.",
        servicesCat4Prod4Title: "BigQuery Data Agent",
        servicesCat4Prod4Desc: "We allow you to 'talk to your data' and get instant insights.",
        servicesCat4Prod5Title: "Predictive Analysis with AI",
        servicesCat4Prod5Desc: "Demand forecasting to optimize bookings.<br>Identification of clients with high repurchase probability.<br>Churn prediction models to act proactively.",
        researchTitle: "Our R&D Lab: Co-creating the Future of AI",
        researchSubtitle: "We are constantly exploring the frontier of AI to solve tomorrow's problems. These are some of the areas we are actively working on:",
        researchCard1Cat: "HealthTech - Assisted Diagnosis",
        researchCard1Title: "Arterial Plaque Detection (R&D)",
        researchCard1Desc: "Active research in Computer Vision models (CNN) for detecting atheromas in angioplasty and stroke images, aiming to assist neurological and cardiological diagnosis.",
        researchCard2Cat: "FinTech - Predictive Analysis",
        researchCard2Title: "Predictive Models for Stock Analysis",
        researchCard2Desc: "Exploring the application of AI to analyze market sentiment and technical data, with the goal of generating investment insights.",
        researchCard3Cat: "Logistics - Time Optimization",
        researchCard3Title: "Supply Chain Optimization",
        researchCard3Desc: "Applying mathematical and machine learning models to predict arrival times and optimize logistics routes, based on our team's experience.",
        researchCard4Cat: "LegalTech - Document Understanding",
        researchCard4Title: "RAG on Extensive Legal Corpora",
        researchCard4Desc: "Perfecting our RAG technology to allow legal professionals to make natural language queries on thousands of pages of laws and contracts.",
        contactTitle: "Let's build something brilliant together.",
        contactSubtitle: "Tell us about your project, and we'll get back to you shortly.",
        contactNamePlaceholder: "Your Name",
        contactEmailPlaceholder: "Your Email",
        contactPhonePlaceholder: "Your Phone (Optional)",
        contactMessagePlaceholder: "Your idea, project, or question...",
        contactSubmitButton: "Send Message",
        contactFormSending: "Sending...",
        contactFormSuccess: "Message sent successfully! We'll get back to you soon.",
        contactFormError: "Something went wrong. Please try again.",
        teamTitle: "Meet Our Team",
        teamSubtitle: "We are a dedicated team of AI enthusiasts committed to delivering excellence.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Data Scientist",
        teamMember1Desc: "Passionate about uncovering insights from data and building intelligent systems. Expertise in machine learning and statistical modeling.",
        teamMember2Name: "Pablo",
        teamMember2Title: "AI Developer",
        teamMember2Desc: "Focused on developing and deploying scalable AI applications. Skilled in software engineering and MLOps.",
        ctaTitle: "Ready to start?",
        ctaSubtitle: "Let's talk about how AI can boost your business.",
        footerCopyright: "© 2025 Autotask Solutions. All rights reserved.",
        contactUsLink: "Contact Us",
        privacyPolicyLink: "Privacy Policy",
        termsOfServiceLink: "Terms & Conditions"
    },
    es: {
        logo: '<span class="logo-highlight">A</span>utotask <span class="logo-highlight">S</span>olutions',
        pageTitle: "Autotask Solutions | IA para tu empresa",
        productsLink: "Nuestro Laboratorio",
        homeLink: "Inicio",
        productsPageTitle: "Autotask Solutions | Nuestras Soluciones",
        productsPageHeading: "Nuestras Soluciones",
        productsPageSubtitle: "Explora las herramientas impulsadas por IA que hemos construido para impulsar la eficiencia y la innovación.",
        productsCat1: "AI CHATBOTS & RAG",
        product1_2: "Agente Conversacional de WhatsApp",
        product1_3: "Motor de Base de Conocimiento RAG",
        product1_4: "Chatbot de IA para Instagram",
        product1_5: "Agentes de IA",
        productsCat2: "PROCESAMIENTO Y EXTRACCIÓN DE DATOS",
        product2_1: "Extractor Automatizado de Facturas PDF",
        product2_2: "Scraper de Sitios Web y API",
        product2_3: "Investigador Web con IA",
        productsCat3: "GENERACIÓN DE LEADS Y AUTOMATIZACIÓN DE VENTAS",
        product3_1: "Generación, Puntuación y Comunicación de Leads",
        product3_2: "Generador de Rompehielos para Correos en Frío",
        product3_3: "Scraper de Leads de Google Maps",
        productsCat4: "HERRAMIENTAS E INTEGRACIONES PRINCIPALES",
        product4_1: "Agente de Eventos de Google Calendar",
        product4_2: "Gestor de Memoria de Chat de Supabase",
        product4_3: "Agente de Datos de BigQuery",
        heroTypedItems: [
            '<span class="highlight">A</span>utomatización.',
            '<span class="highlight">A</span>rtificial.'
        ],
        heroIntelligenceStatic: '<span class="highlight">I</span>nteligencia.',
        heroSubtitle: "Activa el Potencial de IA de tu Negocio.",
        scheduleCall: "Agendar una llamada",
        accessDemo: "Prueba nuestro Chatbot",
        servicesTitle: "Nuestro Portafolio de Soluciones",
        servicesCat1Title: "Automatización y Optimización",
        servicesCat1Prod1Title: "Pack de Automatización para Startups/PyMEs",
        servicesCat1Prod1Desc: "Tu primer paso a la eficiencia. Automatizamos tus 3 procesos más repetitivos.",
        servicesCat1Prod2Title: "Extractor de Datos Inteligente (PDFs y Webs)",
        servicesCat1Prod2Desc: "Transformamos tus documentos y webs en datos estructurados, sin errores.",
        servicesCat1Prod3Title: "Integración de Sistemas y APIs",
        servicesCat1Prod3Desc: "Hacemos que todas tus aplicaciones (CRM, ERP, etc.) se comuniquen entre sí.",
        servicesCat2Title: "Agentes Conversacionales y RAG",
        servicesCat2Prod1Title: "Chatbot de Psicología y Salud Mental",
        servicesCat2Prod1Desc: "Un asistente empático y seguro, diseñado con principios de psicología para ofrecer apoyo.",
        servicesCat2Prod2Title: "Motor de Base de Conocimiento RAG",
        servicesCat2Prod2Desc: "Convertimos tus documentos en un cerebro experto que tus sistemas pueden consultar.",
        servicesCat2Prod3Title: "Chatbot de IA para Instagram",
        servicesCat2Prod3Desc: "Interactúa con tu audiencia y automatiza ventas directamente en Instagram, 24/7.",
        servicesCat3Title: "Motores de Crecimiento",
        productsCat3TitleUpdated: "Motores de Crecimiento (Ventas y Marketing)",
        servicesCat3Prod1Title: "Motor de Generación de Leads B2B",
        servicesCat3Prod1Desc: "Una máquina que encuentra, enriquece y califica leads de alta calidad mientras duermes.",
        servicesCat3Prod2Title: "Generador de \"Rompehielos\" para Correos en Frío",
        servicesCat3Prod2Desc: "Usamos IA para crear mensajes de contacto personalizados que triplican tu tasa de respuesta.",
        servicesCat3Prod3Title: "CRM Inteligente",
        servicesCat3Prod3Desc: "Unificar base de datos para un historial 360° del cliente.<br>Recomendaciones automáticas de paquetes.<br>Chatbot para responder consultas sobre fechas y presupuestos.",
        servicesCat4Title: "IA Avanzada y Consultoría",
        productsCat4Prod1Title: "Consultoría en Modelos de IA de Vanguardia",
        productsCat4Prod1Desc: "Te ayudamos a elegir e implementar los mejores modelos del mercado (GPT-4o, Gemini 1.5, Llama 3, Claude 3) para tus necesidades específicas.",
        servicesCat4Prod1Title: "IA para el Sector Legal (LegalTech)",
        servicesCat4Prod1Desc: "Transformamos leyes y contratos de miles de páginas en un experto al que puedes hacerle preguntas.",
        servicesCat4Prod2Title: "Análisis de Imágenes con IA (Computer Vision)",
        servicesCat4Prod2Desc: "Automatizamos la revisión de imágenes para tus procesos de negocio.",
        servicesCat4Prod3Title: "Detección de Ateromas en Arterias (HealthTech - I+D)",
        servicesCat4Prod3Desc: "(En Investigación) - Un modelo de Machine Learning para asistir en la detección temprana de riesgo cardiovascular.",
        servicesCat4Prod4Title: "Agente de Datos para BigQuery",
        servicesCat4Prod4Desc: "Te permitimos \"hablar con tus datos\" y obtener insights instantáneos.",
        servicesCat4Prod5Title: "Análisis Predictivo con IA",
        servicesCat4Prod5Desc: "Predicción de demanda para optimizar reservas.<br>Identificación de clientes con probabilidad de recompra.<br>Modelos de predicción de cancelación para accionar a tiempo.",
        researchTitle: "Nuestro Laboratorio de I+D: Co-creando el Futuro de la IA",
        researchSubtitle: "Estamos constantemente explorando la frontera de la IA para resolver los problemas del mañana. Estas son algunas de las áreas en las que estamos trabajando activamente:",
        researchCard1Cat: "HealthTech - Diagnóstico Asistido",
        researchCard1Title: "Detección de Placas Arteriales (I+D)",
        researchCard1Desc: "Investigación activa en modelos de Computer Vision (CNN) para la detección de ateromas en imágenes de angioplastias y ACVs, con el objetivo de asistir al diagnóstico neurológico y cardiológico.",
        researchCard2Cat: "FinTech - Análisis Predictivo",
        researchCard2Title: "Modelos Predictivos para Análisis de Acciones",
        researchCard2Desc: "Explorando la aplicación de IA para analizar sentimiento de mercado y datos técnicos, con el objetivo de generar insights de inversión.",
        researchCard3Cat: "Logística - Optimización de Tiempos",
        researchCard3Title: "Optimización de Cadenas de Suministro",
        researchCard3Desc: "Aplicando modelos matemáticos y de machine learning para predecir tiempos de llegada y optimizar rutas logísticas, basándonos en la experiencia de nuestro equipo.",
        researchCard4Cat: "LegalTech - Comprensión de Documentos",
        researchCard4Title: "RAG sobre Corpus Legales Extensos",
        researchCard4Desc: "Perfeccionando nuestra tecnología RAG para permitir a profesionales del derecho hacer consultas en lenguaje natural sobre miles de páginas de leyes y contratos.",
        contactTitle: "Construyamos algo brillante juntos.",
        contactSubtitle: "Cuéntanos sobre tu proyecto y te responderemos a la brevedad.",
        contactNamePlaceholder: "Tu Nombre",
        contactEmailPlaceholder: "Tu Email",
        contactPhonePlaceholder: "Tu Teléfono (Opcional)",
        contactMessagePlaceholder: "Tu idea, proyecto o pregunta...",
        contactSubmitButton: "Enviar Mensaje",
        contactFormSending: "Enviando...",
        contactFormSuccess: "¡Mensaje enviado! Nos pondremos en contacto contigo pronto.",
        contactFormError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        teamTitle: "Conoce a Nuestro Equipo",
        teamSubtitle: "Somos un equipo dedicado de entusiastas de la IA comprometidos con la excelencia.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Científico de Datos",
        teamMember1Desc: "Apasionado por descubrir insights en los datos y construir sistemas inteligentes. Experto en machine learning y modelado estadístico.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Desarrollador de IA",
        teamMember2Desc: "Enfocado en desarrollar y desplegar aplicaciones de IA escalables. Hábil en ingeniería de software y MLOps.",
        ctaTitle: "¿Listo para empezar?",
        ctaSubtitle: "Hablemos de cómo la IA puede impulsar tu negocio.",
        footerCopyright: "© 2025 Autotask Solutions. Todos los derechos reservados.",
        contactUsLink: "Contáctanos",
        privacyPolicyLink: "Política de Privacidad",
        termsOfServiceLink: "Términos y Condiciones"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Internationalization
    const setLanguage = () => {
        const userLang = (navigator.language || 'en').split('-')[0];
        const lang = translations[userLang] ? userLang : 'en';
        
        document.documentElement.lang = lang;
        
        // For Spanish, "Inteligencia" should come before the typed words.
        const heroH1 = document.querySelector('.hero-section h1');
        if (heroH1 && lang === 'es') {
            const typedSpan = document.getElementById('hero-typed');
            const staticSpan = heroH1.querySelector('[data-i18n-key="heroIntelligenceStatic"]');
            // Check if spans exist and if they are in the default order
            if (typedSpan && staticSpan && heroH1.children[0] && heroH1.children[0].isSameNode(typedSpan)) {
                // Move static span before typed span
                heroH1.insertBefore(staticSpan, typedSpan);
                // Ensure there is a space between them
                staticSpan.after(' ');
            }
        }
        
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            const translationValue = translations[lang]?.[key];

            if (key && typeof translationValue !== 'undefined' && !Array.isArray(translationValue)) {
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
            if (key && translations[lang][key] && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
                el.placeholder = translations[lang][key];
            }
        });
    };
    
    setLanguage();

    // Typed.js Initialization
    const initTyped = () => {
        const typedElement = document.getElementById('hero-typed');
        if (typedElement && typeof Typed !== 'undefined') {
            const userLang = (navigator.language || 'en').split('-')[0];
            const lang = translations[userLang] ? userLang : 'en';
            const typedStrings = translations[lang]?.heroTypedItems || translations['en'].heroTypedItems;
            
            new Typed(typedElement, {
                strings: typedStrings,
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 4000,
                startDelay: 300,
                loop: true,
                showCursor: true,
                cursorChar: '|',
            });
        }
    };
    initTyped();

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

    // Sync toggle with the class set by the inline script
    setTheme(htmlElement.classList.contains('dark-mode'));

    themeToggle.addEventListener('change', () => {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Mobile menu logic
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const header = document.querySelector('.main-header');
    if (hamburgerMenu && header) {
        hamburgerMenu.addEventListener('click', () => {
            const isNavOpen = header.classList.toggle('nav-open');
            document.body.classList.toggle('body-no-scroll', isNavOpen);
        });
    }

    // SPA-like navigation
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        const productsPage = document.getElementById('products-page');
        const privacyPage = document.getElementById('privacy-policy-page');
        const termsPage = document.getElementById('terms-of-service-page');

        const pages = [mainContent, productsPage, privacyPage, termsPage].filter(p => p !== null) as HTMLElement[];

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

            if (href === 'products.html') {
                e.preventDefault();
                showPage(productsPage);
            } else if (href === 'privacy-policy.html') {
                e.preventDefault();
                showPage(privacyPage);
            } else if (href === 'terms-of-service.html') {
                e.preventDefault();
                showPage(termsPage);
            } else if (href === 'index.html' || link.classList.contains('logo') || link.classList.contains('home-link-btn')) {
                e.preventDefault();
                showPage(mainContent);
            } else if (href && href.endsWith('#contact')) {
                e.preventDefault();
                const isMainContentVisible = mainContent.style.display !== 'none';
                if (isMainContentVisible) {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    // Manually close nav if it's just a scroll action
                    if (header && header.classList.contains('nav-open')) {
                        header.classList.remove('nav-open');
                        document.body.classList.remove('body-no-scroll');
                    }
                } else {
                    showPage(mainContent, 'contact');
                }
            }
        });

        // Click-based dropdown logic for Hero section
        const dropdownContainer = document.querySelector('.dropdown-container');
        if (dropdownContainer) {
            const dropdownToggle = dropdownContainer.querySelector('a.btn');

            if (dropdownToggle) {
                dropdownToggle.addEventListener('click', (e) => {
                    // Prevent SPA navigation from firing for this specific button
                    if(dropdownToggle.getAttribute('href') === 'products.html') {
                        e.preventDefault();
                    }
                    dropdownContainer.classList.toggle('is-open');
                });
            }

            document.addEventListener('click', (e) => {
                if (dropdownContainer.classList.contains('is-open') && !dropdownContainer.contains(e.target as Node)) {
                    dropdownContainer.classList.remove('is-open');
                }
            });

            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && dropdownContainer.classList.contains('is-open')) {
                    dropdownContainer.classList.remove('is-open');
                }
            });
        }
    }
    
    // Contact form submission handler
    const initializeContactForm = (formId: string, statusId: string) => {
        const contactForm = document.getElementById(formId) as HTMLFormElement;
        if (!contactForm) return;

        const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
        const formStatus = document.getElementById(statusId) as HTMLElement;
        const userLang = (navigator.language || 'en').split('-')[0];
        const lang = translations[userLang] ? userLang : 'en';

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!submitButton || !formStatus) return;

            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = translations[lang]['contactFormSending'];
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
                    formStatus.textContent = translations[lang]['contactFormSuccess'];
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
                formStatus.textContent = translations[lang]['contactFormError'];
                formStatus.classList.add('form-status-error');
                console.error('There was a problem with the fetch operation:', error);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    };

    initializeContactForm('contact-form', 'form-status');
    initializeContactForm('contact-form-products', 'form-status-products');


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
});
