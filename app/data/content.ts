export const content = {
    navbar: {
        logo: {
            text: "Orbit",
            accent: "Think"
        },
        links: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Process", href: "/#process" }, // Keeping anchor for homepage scroll
            { label: "Portfolio", href: "/portfolio" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" }
        ],
        cta: {
            label: "Get Started",
            href: "/contact",
            number: "+923394054520"
        }
    },
    hero: {
        tag: "Defying The Laws of Software",
        title: "Orbit",
        titleAccent: "Think",
        // description: "A Collective Force of Immersive Gaming, Mobile Innovation, Scalable Web Systems, and Enterprise AI. We build the impossible.",
        description: "We help startups turn ideas into scalable web & mobile products — fast.",
        cta: "Book Free Strategy Call",
        ctaId: "services",
        number: "+923394054520"
    },
    services: {
        tag: "Intelligent Solutions",
        description: "We provide a comprehensive suite of AI solutions designed to scale. From foundational models to custom deployment.",
        exploreLabel: "Explore Capabilities",
        list: [
            {
                title: 'Immersive Gaming',
                description: 'Unity 2D/3D & VR experiences. Multiplayer servers (Nakama/Photon) for global scalability.',
                iconColor: 'var(--accent-primary)',
                bgColor: 'var(--bg-deep)',
                iconName: 'gamepad' // Mapping name for Lucide/Custom icon
            },
            {
                title: 'Mobile Innovation',
                description: 'Cross-platform Flutter apps with native performance. Geo-fencing, Mapping, and complex integrations.',
                iconColor: 'var(--accent-primary)',
                bgColor: 'var(--bg-deep)',
                iconName: 'smartphone'
            },
            {
                title: 'Web Solutions',
                description: 'Full-stack web architectures using Next.js & React. From high-traffic E-commerce to complex EHR systems.',
                iconColor: 'var(--accent-primary)',
                bgColor: 'var(--bg-deep)',
                iconName: 'globe'
            },
            {
                title: 'Enterprise AI',
                description: 'Custom LLMs, RAG Agents, and Computer Vision for real-time surveillance. Cloud MLOps on Azure/AWS.',
                iconColor: 'var(--accent-primary)',
                bgColor: 'var(--bg-deep)',
                iconName: 'bot'
            }
        ]
    },
    portfolio: {
        tag: "Mission Logs",
        title: "Mission Logs",
        subtitle: "From virtual battlefields to critical healthcare systems, our code powers the most demanding environments.",
        viewProjectLabel: "View Mission",
        ctaButtonLiteral: "Start Your Mission",
        projects: [
            {
                tag: 'VR/Game',
                tagColor: 'var(--accent-primary)',
                title: 'Tower Defence VR',
                description: 'Immersive Oculus VR experience aimed at revolutionizing classic tower defence.',
                gradient: 'linear-gradient(45deg, var(--bg-void), var(--bg-deep))',
                icon: '🎮',
                category: "Immersive Gaming",
                tech: ["Unity 3D", "Oculus SDK", "C#", "Photon"],
                lead: "M Ghulam Murtaza",
                btnStyle: undefined // Fix for TS inference
            },
            {
                tag: 'Mobile',
                tagStyle: { borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', marginBottom: '1rem' },
                title: 'IGU: Real-World Tag',
                description: 'Geo-location based multiplayer mobile game bridging physical and digital worlds.',
                gradient: 'linear-gradient(45deg, var(--bg-void), var(--bg-deep))',
                icon: '📱',
                category: "Mobile Innovation",
                tech: ["Flutter", "Google Maps API", "Firebase"],
                lead: "Owais Uddin Ahmed",
                btnStyle: { color: 'var(--accent-primary)' }
            },
            {
                tag: 'Web & Health',
                tagStyle: { borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', marginBottom: '1rem' },
                title: 'EHR & Patient Monitoring',
                description: 'Secure, HIPAA-compliant platform for managing patient data and clinical workflows.',
                gradient: 'linear-gradient(45deg, var(--bg-void), var(--bg-deep))',
                icon: '🏥',
                category: "Healthcare Platform",
                tech: ["Next.js", "Redux Toolkit", "TypeScript", "HIPAA"],
                lead: "Tulaib Ahmed Siddiqui",
                btnStyle: { color: 'var(--accent-primary)' }
            },
            {
                tag: 'Enterprise AI',
                tagStyle: { borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', marginBottom: '1rem' },
                title: 'VisionX Surveillance',
                description: 'AI-driven computer vision system for real-time threat detection and analytics.',
                gradient: 'linear-gradient(45deg, var(--bg-void), var(--bg-deep))',
                icon: '👁️',
                category: "AI & Computer Vision",
                tech: ["Python", "FastAPI", "OpenCV", "SQL"],
                lead: "Syed Muhammad Mehmam",
                btnStyle: { color: 'var(--accent-primary)' }
            }
        ],
        // Additional projects for the full portfolio page
        allProjects: [
            {
                title: "Tower Defence VR",
                category: "Immersive Gaming",
                description: "A 3D Oculus VR tower defence game with real-time multiplayer logic and immersive battle animations.",
                tech: ["Unity 3D", "Oculus SDK", "C#", "Photon"],
                lead: "M Ghulam Murtaza"
            },
            {
                title: "ForexBoard",
                category: "Gaming Infrastructure",
                description: "2D turn-based multiplayer game backend using Nakama, featuring complex state synchronization.",
                tech: ["Nakama", "Server-Side C#", "Unity"],
                lead: "M Ghulam Murtaza"
            },
            {
                title: "IGU: Real-World Tag",
                category: "Mobile Innovation",
                description: "An innovative outdoor multiplayer tag game with live location tracking and secure controls.",
                tech: ["Flutter", "Google Maps API", "Firebase"],
                lead: "Owais Uddin Ahmed"
            },
            {
                title: "Tasheel FS",
                category: "FinTech Mobile",
                description: "Financial solution for travel agencies streamlining KYC processes and installment management.",
                tech: ["Flutter", "REST APIs", "Secure Storage"],
                lead: "Owais Uddin Ahmed"
            },
            {
                title: "EHR & Patient Monitoring",
                category: "Healthcare Platform",
                description: "HIPAA-compliant Electronic Health Record system with role-based access and real-time monitoring.",
                tech: ["Next.js", "Redux Toolkit", "TypeScript", "HIPAA"],
                lead: "Tulaib Ahmed Siddiqui"
            },
            {
                title: "Volton Solar E-commerce",
                category: "Web Platform",
                description: "Dynamic e-commerce platform for solar products with admin panels and WhatsApp checkout.",
                tech: ["React.js", "Node.js", "MongoDB"],
                lead: "Tulaib Ahmed Siddiqui"
            },
            {
                title: "VisionX Surveillance",
                category: "AI & Computer Vision",
                description: "Real-time AI surveillance for factories detecting violence, crowds, and faces.",
                tech: ["Python", "FastAPI", "OpenCV", "SQL"],
                lead: "Syed Muhammad Mehmam"
            },
            {
                title: "Healthcare AI Chatbot",
                category: "Generative AI",
                description: "LLM-powered chatbot for clinicians to retrieve patient context via natural language prompts.",
                tech: ["LLMs", "LangChain", "Vector DB", "AWS"],
                lead: "Syed Muhammad Mehmam"
            }
        ]
    },
    about: {
        tag: "Who We Are",
        title: "Innovative Solutions",
        titleAccent: "For Your Business",
        missionTitle: "Our Mission",
        missionText: "We deliver cutting-edge technology solutions that empower businesses to scale, innovate, and compete in the digital era. Our commitment is to transform your vision into reality through expert development, strategic planning, and continuous support.",
        teamTitle: "Our Capabilities",
        team: [
            {
                icon: '🎮',
                role: 'Immersive & Gaming',
                desc: 'Expert in crafting engaging 2D/3D games and VR experiences using Unity and real-time multiplayer systems.',
                borderColor: 'var(--accent-primary)',
                roleColor: 'var(--accent-primary)'
            },
            {
                icon: '📱',
                role: 'Mobile Innovation',
                desc: 'Specialized in high-performance cross-platform applications with seamless native integrations.',
                borderColor: 'var(--accent-primary)',
                roleColor: 'var(--accent-primary)'
            },
            {
                icon: '💻',
                role: 'Web & Enterprise',
                desc: 'Building scalable, secure platforms for healthcare, e-commerce, and enterprise-grade systems.',
                borderColor: 'var(--accent-primary)',
                roleColor: 'var(--accent-primary)'
            },
            {
                icon: '🤖',
                role: 'AI & Machine Learning',
                desc: 'Designing cloud-native AI pipelines, computer vision systems, and intelligent automation solutions.',
                borderColor: 'var(--accent-primary)',
                roleColor: 'var(--accent-primary)'
            }
        ],
        cta: "Ready to Transform Your Ideas?",
        ctaText: "Let's discuss how we can help your business grow with innovative technology solutions.",
        stats: [
            { value: "100+", label: "Projects Delivered", color: "var(--accent-primary)" },
            { value: "50+", label: "Happy Clients", color: "var(--accent-primary)" },
            { value: "24/7", label: "Support Available", color: "var(--accent-primary)" }
        ]
    },
    servicesPage: {
        intro: {
            title: "Anti-Gravity",
            titleAccent: "Expertise",
            description: "Four distinct forces combining to lift your vision. From immersive worlds and fluid mobile apps to scalable healthcare systems and enterprise AI."
        },
        sections: [
            {
                title: "Immersive Worlds & Gaming",
                description: "We defy reality by building engaging 2D/3D games and VR experiences. With deep expertise in Unity and real-time multiplayer engines like Nakama and Photon, we create seamless virtual environments that captivate players globally.",
                list: [
                    "Unity 2D/3D & C# Programming",
                    "Real-time Multiplayer Architectures",
                    "VR/AR & Oculus Development"
                ],
                icon: "🎮",
                accentColor: "var(--accent-primary)",
                image: "/images/game-dev.png" // Placeholder
            },
            {
                title: "Mobile Innovation",
                description: "Gravity-defying mobile performance. We craft fluid, cross-platform applications using Flutter and native integrations. From location-based services to complex e-commerce, our apps dominate the App Store and Play Store.",
                list: [
                    "Flutter & Dart Cross-Platform Dev",
                    "Native iOS & Android Integration",
                    "High-Performance UI/UX Implementation"
                ],
                icon: "📱",
                accentColor: "var(--accent-primary)",
                image: "/images/mobile-dev.png"
            },
            {
                title: "Scalable Web & Healthcare",
                description: "Critical systems require rock-solid architecture. We specialize in building secure, HIPAA-compliant healthcare platforms (EHR/EMR) and robust e-commerce solutions using the Next.js ecosystem. We build for the web, without limits.",
                list: [
                    "Next.js, React & TypeScript",
                    "HIPAA Compliant Healthcare Systems",
                    "Enterprise-Grade Frontend Architecture"
                ],
                icon: "💻",
                accentColor: "var(--accent-primary)",
                image: "/images/web-dev.png"
            },
            {
                title: "Enterprise AI & Data",
                description: "Intelligent automation that scales. We design cloud-native AI pipelines, from custom LLM agents and RAG systems to real-time computer vision for surveillance and crowd monitoring.",
                list: [
                    "Generative AI & RAG Agents",
                    "Computer Vision & Surveillance Systems",
                    "Cloud MLOps (Azure/AWS)"
                ],
                icon: "🤖",
                accentColor: "var(--accent-primary)",
                image: "/images/ai-dev.png"
            }
        ]
    },
    process: {
        title: "Mission Trajectory",
        steps: [
            {
                number: "01",
                title: "Ignition",
                description: "We analyze your data landscape and identify high-impact AI opportunities.",
                color: "var(--accent-primary)",
                shadow: "rgba(16, 185, 129, 0.3)"
            },
            {
                number: "02",
                title: "Orbit",
                description: "Our engineers build and train custom models tailored to your specific parameters.",
                color: "var(--accent-primary)",
                shadow: "rgba(16, 185, 129, 0.3)"
            },
            {
                number: "03",
                title: "Velocity",
                description: "Deploy, monitor, and scale. We ensure your AI solution reaches escape velocity.",
                color: "var(--accent-primary)",
                shadow: "rgba(16, 185, 129, 0.3)"
            }
        ]
    },
    contactPage: {
        tag: "Get In Touch",
        title: "Start Your",
        titleAccent: "Transformation"
    },
    footer: {
        logo: {
            text: "Orbit",
            accent: "Think"
        },
        socials: [
            { label: "LinkedIn", href: "#" },
            { label: "Twitter/X", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Instagram", href: "#" }
        ],
        copyright: "© 2026 OrbitThink. All rights reserved.",
        contactEmail: "contact@orbitthink.com"
    }
};

export const initialContent = content;
