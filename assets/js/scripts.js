const translations = {
    ru: {
        home: "Главная",
        service: "Услуги",
        contacts: "Контакты",
        contactus: "Связаться с нами",
        welcome: "Добро пожаловать в Muxosib Servis!",
        content: "Мы предоставляем передовые решения в области информационных технологий и кибербезопасности.",
        network:"Сети и серверы",
        networkDes:"Создание надежной и масштабируемой IT-инфраструктуры.",
        skyTech:"Облачные технологии",
        skyTechDes:"Оптимизация на платформах AWS, Azure и Google Cloud.",
        cybersecurity:"Кибербезопасность",
        cybersecurityDes:"Обеспечение безопасности ваших данных и предотвращение атак.",
        automaticaly:"Автоматизация",
        automaticalyDes:"Автоматизация IT процессов для повышения скорости и эффективности.",
        title1:"Услуги",
        analisys:"Анализ и цифровизация процессов",
        analisysDes:"Разработка требований и цифровизация бизнес-процессов",
        information:"Информационные системы",
        informationDes:"Проектирование и внедрение ИТ-решений для автоматизации",
        development:"Разработка ПО",
        developmentDes:"Создание программных решений для цифровизации",
        itConsulting:"ИТ-консалтинг и кибербезопасность",
        itConsultingDes:"Консультации по ИТ и защите данных",
        informationTech: "Политика информационной безопасности",
        informationTechDes:"Разработка и внедрение систем защиты",
        document:"Документация",
        documentDes:"Создание нормативной и техдокументации для ИС",
        business:"Бизнес-аналитика",
        businessDes:"Внедрение BI-систем для стратегических решений",
        ai:"Анализ с AI и ML",
        aiDes:"Использование ИИ и машинного обучения для отчетности и бизнес-анализа",
        mobile:"Мобильные приложения",
        mobileDes:"Разработка удобных и функциональных приложений для разных платформ",
        title2:"Контакты",
        ourContact:"Свяжитесь с нами",
        address:"Адрес",
        address1:"Город Ташкент, район Мирзо-Улугбек, улица Муминов, 4А",
        phone:"Телефон",
        email:"Электронная почта",
        send:"Отправить",
        footerCon:"«Muxosib servis» была основана 27 апреля 2007 года в форме общества с ограниченной ответственностью (в дальнейшем - Компания).",
        title3:"Полезные ссылки",
        aiTxt:"Искусственный интеллект",
        moblieDev:"Мобильная разработка",
        webDev:"Веб-разработка",
        security:"Все права защищены"
    },
    uz: {
        home: "Bosh sahifa",
        service: "Xizmatlar",
        contacts: "Bog'lanish",
        contactus: "Biz bilan aloqa",
        welcome: "Muxosib servisga Xush kelibsiz!",
        content: "Biz axborot texnologiyalari va kiberxavfsizlik sohasida ilg‘or yechimlarni taqdim etamiz.",
        network:"Tarmoqlar va serverlar",
        networkDes:"Ishonchli va kengaytiriladigan IT-infratuzilmani yaratish.",
        skyTech: "Bulutli texnologiyalar",
        skyTechDes:"AWS, Azure va Google Cloud platformalarida optimallashtirish.",
        cybersecurity:"Kiberxavfsizlik",
        cybersecurityDes:"Ma’lumotlaringiz xavfsizligini ta’minlash va hujumlarning oldini olish.",
        automaticaly:"Avtomatlashtirish",
        automaticalyDes:"Tezlik va samaradorlikni oshirish uchun IT-jarayonlarni avtomatlashtirish.",
        title1:"Xizmatlar",
        analisys:"Jarayonlarni tahlil qilish va raqamlashtirish",
        analisysDes:"Talablarni ishlab chiqish va biznes jarayonlarini raqamlashtirish",
        information:"Axborot tizimlari",
        informationDes:"Avtomatlashtirish uchun IT-yechimlarini loyihalash va joriy etish",
        development:"Dasturiy ta'minot ishlab chiqish",
        developmentDes:"Raqamlashtirish uchun dasturiy yechimlarni yaratish",
        itConsulting:"IT-konsalting va kiberxavfsizlik",
        itConsultingDes:"IT bo‘yicha maslahatlar va ma’lumotlarni himoya qilish",
        informationTech:"Axborot xavfsizligi siyosati",
        informationTechDes:"Himoya tizimlarini ishlab chiqish va joriy etish",
        document:"Hujjatlashtirish",
        documentDes:"Axborot tizimlari uchun normativ va texnik hujjatlarni yaratish",
        business:"Biznes tahlil",
        businessDes:"Strategik qarorlar qabul qilish uchun BI-tizimlarini joriy etish",
        ai:"AI va ML yordamida tahlil qilish",
        aiDes:"Hisobot va biznes tahlili uchun sun'iy intellekt (AI) va mashinaviy o‘rganish (ML) dan foydalanish",
        mobile:"Mobil ilovalar",
        mobileDes:"Mobil platformalar uchun qulay va funksional ilovalarni ishlab chiqish",
        title2:"Bog'lanish",
        ourContact:"Biz bilan bog‘laning",
        address:"Manzil",
        address1:"Toshkent shahri, Mirzo Ulug‘bek tumani, Muminov ko‘chasi, 4A",
        phone:"Telefon",
        email:"Elektron pochta",
        send:"Yuborish",
        footerCon:"«Muxosib Servis» 2007-yil 27-aprelda mas'uliyati cheklangan jamiyat shaklida (keyingi o‘rinlarda – Kompaniya) tashkil etilgan.",
        title3:"Foydali havolalar",
        aiTxt:"Sun'iy intellekt",
        mobileDev:"Mobil dasturlash",
        webDev:"Veb dasturlash",
        security:"Barcha xuquqlar himoyalangan"
    }
};

function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);

  
    document.querySelectorAll(".home").forEach(element => {
        element.textContent = translations[lang].home;
    });
    document.querySelectorAll(".service").forEach(element => {
        element.textContent = translations[lang].service;
    });
    document.querySelectorAll(".contacts").forEach(element => {
        element.textContent = translations[lang].contacts;
    });
    document.getElementById("contactus").textContent = translations[lang].contactus;
    document.getElementById("welcome").textContent = translations[lang].welcome;
    document.getElementById("content").textContent = translations[lang].content;
    document.getElementById("network").textContent = translations[lang].network;
    document.getElementById("networkDes").textContent = translations[lang].networkDes;
    document.getElementById("skyTech").textContent = translations[lang].skyTech;
    document.getElementById("skyTechDes").textContent = translations[lang].skyTechDes;
    document.querySelectorAll(".cybersecurity").forEach(element => {
        element.textContent = translations[lang].cybersecurity;
    });
    document.getElementById("cybersecurityDes").textContent = translations[lang].cybersecurityDes;
    document.getElementById("automaticaly").textContent = translations[lang].automaticaly;
    document.getElementById("automaticalyDes").textContent = translations[lang].automaticalyDes;
    document.querySelectorAll(".title1").forEach(element => {
        element.textContent = translations[lang].title1;
    });
    document.getElementById("analisys").textContent = translations[lang].analisys;
    document.getElementById("analisysDes").textContent = translations[lang].analisysDes;
    document.getElementById("information").textContent = translations[lang].information;
    document.getElementById("informationDes").textContent = translations[lang].informationDes;
    document.getElementById("development").textContent = translations[lang].development;
    document.getElementById("developmentDes").textContent = translations[lang].developmentDes;
    document.getElementById("itConsulting").textContent = translations[lang].itConsulting;
    document.getElementById("itConsultingDes").textContent = translations[lang].itConsultingDes;
    document.getElementById("informationTech").textContent = translations[lang].informationTech;
    document.getElementById("informationTechDes").textContent = translations[lang].informationTechDes;
    document.getElementById("document").textContent = translations[lang].document;
    document.getElementById("documentDes").textContent = translations[lang].documentDes;
    document.getElementById("business").textContent = translations[lang].business;
    document.getElementById("businessDes").textContent = translations[lang].businessDes;
    document.getElementById("ai").textContent = translations[lang].ai;
    document.getElementById("aiDes").textContent = translations[lang].aiDes;
    document.getElementById("mobile").textContent = translations[lang].mobile;
    document.getElementById("mobileDes").textContent = translations[lang].mobileDes;
    document.getElementById("title2").textContent = translations[lang].title2;
    document.getElementById("ourContact").textContent = translations[lang].ourContact;
    document.getElementById("address").textContent = translations[lang].address;
    document.querySelectorAll(".address1").forEach(element => {
        element.textContent = translations[lang].address1;
    });
    document.querySelectorAll(".phone").forEach(element => {
        element.textContent = translations[lang].phone;
    });
    document.querySelectorAll(".email").forEach(element => {
        element.textContent = translations[lang].email;
    });
    document.getElementById("send").textContent = translations[lang].send;
    document.getElementById("footerCon").textContent = translations[lang].footerCon;
    document.getElementById("title3").textContent = translations[lang].title3;
    document.getElementById("aiTxt").textContent = translations[lang].aiTxt;
    document.getElementById("mobileDev").textContent = translations[lang].mobileDev;
    document.getElementById("webDev").textContent = translations[lang].webDev;
    document.getElementById("security").textContent = translations[lang].security;
}


document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "ru"; 
    changeLanguage(savedLang);
});
