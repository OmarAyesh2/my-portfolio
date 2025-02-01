interface Translation {
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    scroll: string;
  };
  work: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      graphic: string;
      threeD: string;
      web: string;
    };
  };
  about: {
    title: string;
    description1: string;
    description2: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
    };
  };
  footer: {
    rights: string;
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: {
        line1: "Creating",
        line2: "Digital Magic",
        line3: "That Inspires",
      },
      subtitle: "Multidisciplinary designer crafting memorable experiences through graphic design, 3D art, and web design.",
      cta: {
        primary: "View My Work",
        secondary: "Get in Touch",
      },
      scroll: "Scroll to explore",
    },
    work: {
      title: "Featured Work",
      subtitle: "A selection of my recent projects spanning graphic design, 3D art, and web design.",
      categories: {
        all: "All Work",
        graphic: "Graphic Design",
        threeD: "3D Art",
        web: "Web Design",
      },
    },
    about: {
      title: "About Me",
      description1: "I'm a multidisciplinary designer with over 5 years of experience in creating compelling digital experiences. My work spans across graphic design, 3D art, and web design, allowing me to bring a unique perspective to every project.",
      description2: "I believe in creating designs that not only look beautiful but also solve real problems and deliver meaningful experiences to users.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's work together to create something amazing.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          message: "Tell me about your project...",
        },
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      work: "أعمالي",
      about: "عني",
      contact: "اتصل بي",
    },
    hero: {
      title: {
        line1: "نصنع",
        line2: "سحراً رقمياً",
        line3: "يُلهم",
      },
      subtitle: "مصمم متعدد التخصصات يصنع تجارب لا تُنسى من خلال التصميم الجرافيكي والفن ثلاثي الأبعاد وتصميم الويب.",
      cta: {
        primary: "شاهد أعمالي",
        secondary: "تواصل معي",
      },
      scroll: "اسحب للاستكشاف",
    },
    work: {
      title: "أعمال مميزة",
      subtitle: "مجموعة مختارة من مشاريعي الحديثة في التصميم الجرافيكي والفن ثلاثي الأبعاد وتصميم الويب.",
      categories: {
        all: "جميع الأعمال",
        graphic: "تصميم جرافيك",
        threeD: "فن ثلاثي الأبعاد",
        web: "تصميم ويب",
      },
    },
    about: {
      title: "عني",
      description1: "أنا مصمم متعدد التخصصات مع أكثر من 5 سنوات من الخبرة في إنشاء تجارب رقمية مميزة. يمتد عملي عبر التصميم الجرافيكي والفن ثلاثي الأبعاد وتصميم الويب، مما يتيح لي تقديم منظور فريد لكل مشروع.",
      description2: "أؤمن بإنشاء تصاميم لا تتميز بالجمال فحسب، بل تحل مشكلات حقيقية وتقدم تجارب هادفة للمستخدمين.",
    },
    contact: {
      title: "تواصل معي",
      subtitle: "هل لديك مشروع في ذهنك؟ دعنا نعمل معاً لإنشاء شيء مذهل.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "إرسال الرسالة",
        placeholders: {
          name: "اسمك",
          email: "بريدك@الإلكتروني.com",
          message: "أخبرني عن مشروعك...",
        },
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
    },
  },
};