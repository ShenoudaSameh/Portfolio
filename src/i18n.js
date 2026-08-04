import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hi, I'm",
        title: 'Front-End & React Developer',
        description: 'Crafting modern, accessible, and high-performance web experiences with React, responsive glassmorphism UIs, and optimal web architecture.',
        getInTouch: 'Get In Touch',
        downloadCv: 'Download CV',
      },
      about: {
        title: 'About Me',
        description: 'I am a passionate Front-End and React Developer specializing in building high-performance Single Page Applications, interactive UI components, dynamic multi-language interfaces, and clean, scalable code architecture.',
        stat1: 'Years Coding',
        stat2: 'Projects Built',
        stat3: 'Responsive Design',
      },
      skills: { title: 'Skills & Technologies' },
      services: { title: 'Services' },
      projects: { title: 'Featured Projects' },
      contact: {
        title: 'Contact Me',
        subtitle: "Let's Work Together",
        description: 'Feel free to reach out via the form below or directly through phone, email, or WhatsApp.',
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        messageLabel: 'Your Message',
        sendBtn: 'Send Message',
        phoneHeader: 'Phone Numbers',
        emailHeader: 'Email Address',
      },
      footer: {
        rights: 'All rights reserved.',
        quickConnect: 'Quick Connect via WhatsApp',
      },
      alerts: {
        cvUnderConstruction: 'The CV file is currently under construction and will be available for download soon!',
        formSubmitted: 'Thank you! Your message has been sent successfully.',
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من أنا',
        skills: 'المهارات',
        services: 'الخدمات',
        projects: 'المشاريع',
        contact: 'تواصل معي',
      },
      hero: {
        greeting: 'مرحباً، أنا',
        title: 'مطور واجهات إمامية و React',
        description: 'أقوم ببناء تطبيقات ويب حديثة، سريعة، ومتجاوبة باستخدام أفضل معايير React وتصميمات الـ Glassmorphism التفاعلية.',
        getInTouch: 'تواصل معي',
        downloadCv: 'تحميل السيرة الذاتية',
      },
      about: {
        title: 'عنِّي',
        description: 'مطور واجهات إمامية (Front-End & React) متمرس في بناء تطبيقات الويب ذات الكفاءة العالية، إدارة الحالات المعقدة، وتصميم واجهات متعددة اللغات تتوافق مع أعلى معايير الأداء والوصول.',
        stat1: 'سنوات خبرة',
        stat2: 'مشاريع منفذة',
        stat3: 'تصميم متجاوب',
      },
      skills: { title: 'المهارات والتقنيات' },
      services: { title: 'الخدمات' },
      projects: { title: 'أبرز المشاريع' },
      contact: {
        title: 'تواصل معي',
        subtitle: 'لنعمل معاً',
        description: 'يمكنك التواصل معي مباشرة عبر النموذج أدناه، أو عبر الهاتف والبريد الإلكتروني والواتساب.',
        nameLabel: 'الاسم',
        emailLabel: 'البريد الإلكتروني',
        messageLabel: 'رسالتك',
        sendBtn: 'إرسال الرسالة',
        phoneHeader: 'أرقام الهاتف',
        emailHeader: 'البريد الإلكتروني',
      },
      footer: {
        rights: 'جميع الحقوق محفوظة.',
        quickConnect: 'تواصل سريع عبر الواتساب',
      },
      alerts: {
        cvUnderConstruction: 'ملف السيرة الذاتية قيد التحديث حالياً وسيكون متاحاً للتحميل قريباً!',
        formSubmitted: 'شكراً لك! تم إرسال رسالتك بنجاح.',
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        services: 'Services',
        projects: 'Projets',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Bonjour, je suis',
        title: 'Développeur Front-End & React',
        description: 'Création d’expériences web modernes, accessibles et performantes avec React et interfaces glassmorphism réactives.',
        getInTouch: 'Me Contacter',
        downloadCv: 'Télécharger CV',
      },
      about: {
        title: 'À propos de moi',
        description: 'Développeur Front-End spécialisé dans les architectures React modernes, les interfaces multilingues dynamiques et l’optimisation des performances web.',
        stat1: 'Années d’expérience',
        stat2: 'Projets Réalisés',
        stat3: 'Design Adaptatif',
      },
      skills: { title: 'Compétences & Technologies' },
      services: { title: 'Services' },
      projects: { title: 'Projets en Vedette' },
      contact: {
        title: 'Contactez-moi',
        subtitle: 'Travaillons Ensemble',
        description: 'N’hésitez pas à me contacter via le formulaire ci-dessous ou directement par téléphone ou e-mail.',
        nameLabel: 'Votre Nom',
        emailLabel: 'Votre E-mail',
        messageLabel: 'Votre Message',
        sendBtn: 'Envoyer le message',
        phoneHeader: 'Téléphones',
        emailHeader: 'E-mail',
      },
      footer: {
        rights: 'Tous droits réservés.',
        quickConnect: 'Contact rapide via WhatsApp',
      },
      alerts: {
        cvUnderConstruction: 'Le fichier CV est actuellement en cours de construction et sera bientôt disponible !',
        formSubmitted: 'Merci ! Votre message a été envoyé avec succès.',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;