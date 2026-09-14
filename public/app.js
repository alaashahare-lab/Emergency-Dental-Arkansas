/* ===========================
   App JavaScript
   =========================== */

const translations = {
  en: {
    meta: {
      lang: 'en',
      title: 'Emergency Dental Arkansas',
      description: 'Affordable emergency and after-hours dental care in Little Rock, AR. Open weekends. Walk-ins welcome. Call 501-313-1616.'
    },
    common: {
      toggleMenu: 'Toggle menu',
      callFab: 'Call 501-313-1616',
      supportPrefix: 'Please try again or call us directly at',
      phoneLink: '501-313-1616'
    },
    nav: {
      services: 'Services',
      whyUs: 'Why Us',
      gallery: 'Gallery',
      contact: 'Contact',
      bookNow: 'Book Now'
    },
    hero: {
      badgeHours: 'After-Hours & Weekends',
      badgeSchedule: 'Call To Schedule: Mon-Sun 8am-8pm',
      titleHtml: 'Dental Emergencies<br /><span class="accent">Don\'t Wait for Monday</span>',
      subtitle: 'Affordable emergency dental care available evenings, weekends, and holidays in Little Rock. When pain strikes, we\'re here for you.',
      requestButton: 'Request Appointment',
      callButton: 'Call 501-313-1616',
      trust: [
        'Affordable Pricing',
        'Same-Day Appointments',
        'Experienced Dentists'
      ]
    },
    emergencyBar: {
      title: 'DENTAL EMERGENCY?',
      message: 'Call us now — we offer same-day relief for toothaches, broken teeth & more.',
      disclaimer: 'Same-day appointments are subject to availability. Treatment is provided when clinically appropriate. Some cases may require referral or additional visits.',
      cta: 'Call 501-313-1616'
    },
    services: {
      label: 'What We Treat',
      title: 'Emergency & General Dental Services',
      description: 'From sudden toothaches to routine care, we provide comprehensive dental services at prices you can afford.',
      cards: [
        {
          title: 'Emergency Toothache',
          description: 'Immediate pain relief for severe toothaches caused by infection, decay, or nerve damage.'
        },
        {
          title: 'Broken & Chipped Teeth',
          description: 'Fast repair of cracked, broken, or chipped teeth to restore your smile and prevent further damage.'
        },
        {
          title: 'Dental Abscess / Infection',
          description: 'Urgent treatment for painful dental abscesses and infections before they become serious health risks.'
        },
        {
          title: 'Lost Fillings & Crowns',
          description: 'Quick re-cementing or replacement of lost fillings and crowns to protect exposed teeth.'
        },
        {
          title: 'Extractions',
          description: 'Gentle tooth extractions including wisdom teeth — performed with care to minimize discomfort.'
        },
        {
          title: 'Cleanings & Exams',
          description: 'Routine cleanings, X-rays, and exams scheduled around your busy life — including weekends.'
        }
      ]
    },
    why: {
      label: 'Why Choose Us',
      title: 'Dental Care That Fits Your Life',
      intro: 'We understand that dental emergencies and busy schedules do not respect business hours. That is why Emergency Dental is here when you need us most.',
      items: [
        {
          title: 'Weekend & Evening Hours',
          description: 'Open Saturdays, Sundays, and late evenings so you never have to wait until Monday.'
        },
        {
          title: 'Transparent, Affordable Pricing',
          description: 'No hidden fees. We offer competitive rates and payment plans for uninsured patients.'
        },
        {
          title: 'Same-Day Emergency Appointments',
          description: 'Call us and we will do our best to see you the same day to relieve your pain fast.'
        },
        {
          title: 'Compassionate, Gentle Care',
          description: 'Our experienced team treats every patient with patience, respect, and kindness.'
        }
      ],
      cta: 'Schedule Your Visit',
      imageAlt: 'Modern dental office'
    },
    gallery: {
      label: 'Our Office',
      title: 'A Comfortable, Modern Environment',
      description: 'We have designed our office to be welcoming, clean, and equipped with the latest dental technology.',
      alts: [
        'Dentist examining patient',
        'Dental tools',
        'Dental chair and equipment',
        'Modern dental office reception',
        'Patient smiling after treatment'
      ]
    },
    appointment: {
      label: 'Book an Appointment',
      title: 'Request Your Visit Today',
      description: 'Fill out the form and we will contact you promptly to confirm your appointment time. For immediate emergencies, please call us directly.',
      contact: {
        labels: ['Our Location', 'Call, Text, or Email', 'Hours'],
        hoursHtml: 'Mon–Fri: 6pm – 9pm<br />Sat–Sun: 8am – 7pm',
        mapTitle: 'Emergency Dental Arkansas Location'
      },
      form: {
        labels: {
          name: 'Full Name',
          phone: 'Phone Number',
          email: 'Email Address',
          service: 'Type of Service',
          date: 'Preferred Date',
          time: 'Preferred Time',
          message: 'Additional Notes'
        },
        placeholders: {
          name: 'Jane Smith',
          phone: '501-555-0100',
          email: 'jane@example.com',
          message: 'Describe your symptoms or any questions you have…',
          service: 'Select a service…',
          time: 'Select a time…'
        },
        submit: 'Request Appointment',
        loading: 'Sending…',
        note: 'Your information is private and never shared.',
        successTitle: 'Appointment Request Received!',
        successMessage: 'Thank you! We have received your request and will call or text you shortly to confirm.',
        errorTitle: 'Something went wrong',
        errors: {
          generic: 'Please try again or call us directly at',
          network: 'Network error. Please try again or call us directly at',
          validation: 'Please provide your name, phone number, and service type. Call us directly at',
          rateLimit: 'Too many appointment requests. Please try again later or call us directly at'
        },
        serviceOptions: {
          'emergency-toothache': 'Emergency Toothache',
          'broken-chipped-tooth': 'Broken / Chipped Tooth',
          'dental-abscess-infection': 'Dental Abscess / Infection',
          'lost-filling-crown': 'Lost Filling or Crown',
          'tooth-extraction': 'Tooth Extraction',
          'cleaning-exam': 'Cleaning & Exam',
          'other-not-sure': 'Other / Not Sure'
        },
        timeOptions: {
          'weekday-evening': 'Weekday Evening (6pm–9pm)',
          'weekend-morning': 'Saturday or Sunday Morning (8am–12pm)',
          'weekend-afternoon': 'Saturday or Sunday Afternoon (12pm–4pm)',
          'weekend-evening': 'Saturday or Sunday Evening (4pm–7pm)',
          asap: 'ASAP'
        }
      }
    },
    footer: {
      brand: 'Affordable after-hours and emergency dental care for the Little Rock community. We are here when you need us most.',
      quickLinksTitle: 'Quick Links',
      quickLinks: ['Services', 'Why Choose Us', 'Our Office', 'Book Appointment'],
      contactTitle: 'Contact & Hours',
      hoursLabels: ['Mon – Fri', 'Saturday', 'Sunday', 'Holidays'],
      hoursValues: ['6:00 PM – 9:00 PM', '8:00 AM – 7:00 PM', '8:00 AM – 7:00 PM', 'Call for Hours'],
      disclaimer: 'This website is for informational purposes only. For dental emergencies, call 911 or go to the nearest emergency room if experiencing severe swelling or difficulty breathing.',
      copyright: '&copy; <span id="year"></span> Emergency Dental Arkansas. All rights reserved.'
    }
  },
  es: {
    meta: {
      lang: 'es',
      title: 'Emergency Dental Arkansas',
      description: 'Atencion dental de emergencia y fuera de horario a precios accesibles en Little Rock, AR. Abierto los fines de semana. Se aceptan pacientes sin cita. Llame al 501-313-1616.'
    },
    common: {
      toggleMenu: 'Abrir menu',
      callFab: 'Llamar al 501-313-1616',
      supportPrefix: 'Intente de nuevo o llamenos directamente al',
      phoneLink: '501-313-1616'
    },
    nav: {
      services: 'Servicios',
      whyUs: 'Por que elegirnos',
      gallery: 'Galeria',
      contact: 'Contacto',
      bookNow: 'Reservar'
    },
    hero: {
      badgeHours: 'Fuera de horario y fines de semana',
      badgeSchedule: 'Llame para programar: Lun-Dom 8am-8pm',
      titleHtml: 'Emergencias dentales<br /><span class="accent">No espere hasta el lunes</span>',
      subtitle: 'Atencion dental de emergencia accesible disponible por las tardes, fines de semana y dias festivos en Little Rock. Cuando aparece el dolor, estamos aqui para usted.',
      requestButton: 'Solicitar cita',
      callButton: 'Llamar al 501-313-1616',
      trust: [
        'Precios accesibles',
        'Citas el mismo dia',
        'Dentistas con experiencia'
      ]
    },
    emergencyBar: {
      title: 'EMERGENCIA DENTAL?',
      message: 'Llamenos ahora. Ofrecemos alivio el mismo dia para dolor de muelas, dientes rotos y mas.',
      disclaimer: 'Las citas el mismo dia estan sujetas a disponibilidad. El tratamiento se brinda cuando es clinicamente apropiado. Algunos casos pueden requerir referencia o visitas adicionales.',
      cta: 'Llame al 501-313-1616'
    },
    services: {
      label: 'Que tratamos',
      title: 'Servicios dentales generales y de emergencia',
      description: 'Desde dolores repentinos hasta atencion de rutina, ofrecemos servicios dentales completos a precios accesibles.',
      cards: [
        {
          title: 'Dolor de muela de emergencia',
          description: 'Alivio inmediato para dolores intensos causados por infeccion, caries o dano del nervio.'
        },
        {
          title: 'Dientes rotos o astillados',
          description: 'Reparacion rapida de dientes agrietados, rotos o astillados para restaurar su sonrisa y evitar mas dano.'
        },
        {
          title: 'Absceso o infeccion dental',
          description: 'Tratamiento urgente para abscesos e infecciones dolorosas antes de que se conviertan en un riesgo serio para su salud.'
        },
        {
          title: 'Empastes y coronas perdidos',
          description: 'Recementado o reemplazo rapido de empastes y coronas perdidos para proteger dientes expuestos.'
        },
        {
          title: 'Extracciones',
          description: 'Extracciones dentales suaves, incluidas las muelas del juicio, realizadas con cuidado para reducir molestias.'
        },
        {
          title: 'Limpiezas y examenes',
          description: 'Limpiezas, radiografias y examenes de rutina programados segun su horario, incluso los fines de semana.'
        }
      ]
    },
    why: {
      label: 'Por que elegirnos',
      title: 'Atencion dental que se adapta a su vida',
      intro: 'Entendemos que las emergencias dentales y los horarios ocupados no respetan el horario comercial. Por eso Emergency Dental esta aqui cuando mas nos necesita.',
      items: [
        {
          title: 'Horario nocturno y fines de semana',
          description: 'Abrimos los sabados, domingos y por la noche para que nunca tenga que esperar hasta el lunes.'
        },
        {
          title: 'Precios claros y accesibles',
          description: 'Sin cargos ocultos. Ofrecemos tarifas competitivas y planes de pago para pacientes sin seguro.'
        },
        {
          title: 'Citas de emergencia el mismo dia',
          description: 'Llamenos y haremos todo lo posible por atenderlo el mismo dia para aliviar su dolor rapidamente.'
        },
        {
          title: 'Atencion amable y compasiva',
          description: 'Nuestro equipo con experiencia trata a cada paciente con paciencia, respeto y amabilidad.'
        }
      ],
      cta: 'Programe su visita',
      imageAlt: 'Consultorio dental moderno'
    },
    gallery: {
      label: 'Nuestro consultorio',
      title: 'Un ambiente comodo y moderno',
      description: 'Hemos disenado nuestro consultorio para que sea acogedor, limpio y equipado con la ultima tecnologia dental.',
      alts: [
        'Dentista examinando a un paciente',
        'Instrumentos dentales',
        'Sillon dental y equipo',
        'Recepcion moderna del consultorio dental',
        'Paciente sonriendo despues del tratamiento'
      ]
    },
    appointment: {
      label: 'Reserve una cita',
      title: 'Solicite su visita hoy',
      description: 'Complete el formulario y nos comunicaremos con usted pronto para confirmar su horario. Para emergencias inmediatas, llamenos directamente.',
      contact: {
        labels: ['Nuestra ubicacion', 'Llamar, enviar texto o correo', 'Horario'],
        hoursHtml: 'Lun–Vie: 6pm – 9pm<br />Sab–Dom: 8am – 7pm',
        mapTitle: 'Ubicacion de Emergency Dental Arkansas'
      },
      form: {
        labels: {
          name: 'Nombre completo',
          phone: 'Numero de telefono',
          email: 'Correo electronico',
          service: 'Tipo de servicio',
          date: 'Fecha preferida',
          time: 'Hora preferida',
          message: 'Notas adicionales'
        },
        placeholders: {
          name: 'Ana Garcia',
          phone: '501-555-0100',
          email: 'ana@ejemplo.com',
          message: 'Describa sus sintomas o cualquier pregunta que tenga…',
          service: 'Seleccione un servicio…',
          time: 'Seleccione una hora…'
        },
        submit: 'Solicitar cita',
        loading: 'Enviando…',
        note: 'Su informacion es privada y nunca se comparte.',
        successTitle: 'Solicitud de cita recibida',
        successMessage: 'Gracias. Hemos recibido su solicitud y le llamaremos o enviaremos un mensaje pronto para confirmar.',
        errorTitle: 'Algo salio mal',
        errors: {
          generic: 'Intente de nuevo o llamenos directamente al',
          network: 'Error de red. Intente de nuevo o llamenos directamente al',
          validation: 'Proporcione su nombre, numero de telefono y tipo de servicio. Tambien puede llamarnos directamente al',
          rateLimit: 'Se recibieron demasiadas solicitudes de cita. Intente mas tarde o llamenos directamente al'
        },
        serviceOptions: {
          'emergency-toothache': 'Dolor de muela de emergencia',
          'broken-chipped-tooth': 'Diente roto o astillado',
          'dental-abscess-infection': 'Absceso o infeccion dental',
          'lost-filling-crown': 'Empaste o corona perdida',
          'tooth-extraction': 'Extraccion dental',
          'cleaning-exam': 'Limpieza y examen',
          'other-not-sure': 'Otro / No estoy seguro'
        },
        timeOptions: {
          'weekday-evening': 'Noche entre semana (6pm–9pm)',
          'weekend-morning': 'Sabado o domingo por la manana (8am–12pm)',
          'weekend-afternoon': 'Sabado o domingo por la tarde (12pm–4pm)',
          'weekend-evening': 'Sabado o domingo por la noche (4pm–7pm)',
          asap: 'Lo antes posible'
        }
      }
    },
    footer: {
      brand: 'Atencion dental de emergencia y fuera de horario a precios accesibles para la comunidad de Little Rock. Estamos aqui cuando mas nos necesita.',
      quickLinksTitle: 'Enlaces rapidos',
      quickLinks: ['Servicios', 'Por que elegirnos', 'Nuestro consultorio', 'Reservar cita'],
      contactTitle: 'Contacto y horario',
      hoursLabels: ['Lun – Vie', 'Sabado', 'Domingo', 'Dias festivos'],
      hoursValues: ['6:00 PM – 9:00 PM', '8:00 AM – 7:00 PM', '8:00 AM – 7:00 PM', 'Llame para horarios'],
      disclaimer: 'Este sitio web es solo para fines informativos. Para emergencias dentales, llame al 911 o vaya a la sala de emergencias mas cercana si tiene hinchazon severa o dificultad para respirar.',
      copyright: '&copy; <span id="year"></span> Emergency Dental Arkansas. Todos los derechos reservados.'
    }
  }
};

const supportedLanguages = ['en', 'es'];
const defaultLanguage = (() => {
  const browserLanguage = navigator.language ? navigator.language.toLowerCase() : 'en';
  return browserLanguage.startsWith('es') ? 'es' : 'en';
})();

let currentLanguage = getStoredLanguage() || defaultLanguage;

// ---- Mobile nav ----
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const languageButtons = document.querySelectorAll('.lang-switch__btn');

hamburger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

// Close mobile nav on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ---- Sticky header shadow ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.3)' : '';
}, { passive: true });

// ---- Set min date to today on date picker ----
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}

// ---- Appointment form submission ----
const form = document.getElementById('appointmentForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const formErrorText = document.getElementById('formErrorText');
const supportPhoneMarkup = '<a href="tel:5013131616">501-313-1616</a>';

function getStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem('siteLanguage');
    return supportedLanguages.includes(storedLanguage) ? storedLanguage : null;
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem('siteLanguage', language);
  } catch {
    // Ignore storage restrictions.
  }
}

function updateYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setHtml(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function setLabelText(inputId, value) {
  const labelText = document.querySelector(`label[for="${inputId}"] .label-text`);
  if (labelText) labelText.textContent = value;
}

function setSelectOptions(selectId, placeholder, optionMap) {
  const select = document.getElementById(selectId);
  if (!select) return;

  const currentValue = select.value;
  const placeholderOption = select.querySelector('option[value=""]');
  if (placeholderOption) placeholderOption.textContent = placeholder;

  Array.from(select.options).forEach((option) => {
    if (option.value && optionMap[option.value]) {
      option.textContent = optionMap[option.value];
    }
  });

  if (currentValue) select.value = currentValue;
}

function setIconText(selector, iconClass, value) {
  setHtml(selector, `<i class="${iconClass}"></i> ${value}`);
}

function updateLanguageButtons(language) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function getTranslation(language = currentLanguage) {
  return translations[language] || translations.en;
}

function resolveErrorKey(serverMessage) {
  switch (serverMessage) {
    case 'Please provide your name, phone number, and service type.':
      return 'validation';
    case 'Too many appointment requests. Please try again later.':
      return 'rateLimit';
    default:
      return 'generic';
  }
}

function getServiceLabel(value) {
  return getTranslation().appointment.form.serviceOptions[value] || value;
}

function getTimeLabel(value) {
  return getTranslation().appointment.form.timeOptions[value] || value;
}

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'en';
  const copy = getTranslation();

  document.documentElement.lang = copy.meta.lang;
  document.title = copy.meta.title;
  setAttr('meta[name="description"]', 'content', copy.meta.description);
  setAttr('#hamburger', 'aria-label', copy.common.toggleMenu);
  setAttr('.fab-call', 'aria-label', copy.common.callFab);

  const navLinks = document.querySelectorAll('.nav__link');
  if (navLinks[0]) navLinks[0].textContent = copy.nav.services;
  if (navLinks[1]) navLinks[1].textContent = copy.nav.whyUs;
  if (navLinks[2]) navLinks[2].textContent = copy.nav.gallery;
  if (navLinks[3]) navLinks[3].textContent = copy.nav.contact;
  setText('.nav__cta', copy.nav.bookNow);

  setIconText('.hero__badge--hours', 'fa-solid fa-clock', copy.hero.badgeHours);
  setIconText('.hero__badge--schedule', 'fa-solid fa-phone', copy.hero.badgeSchedule);
  setHtml('.hero__title', copy.hero.titleHtml);
  setText('.hero__subtitle', copy.hero.subtitle);
  setHtml('.hero__actions .btn--primary', '<i class="fa-solid fa-calendar-plus"></i> ' + copy.hero.requestButton);
  setHtml('.hero__actions .btn--outline', '<i class="fa-solid fa-phone"></i> ' + copy.hero.callButton);

  const trustItems = document.querySelectorAll('.trust-item');
  if (trustItems[0]) trustItems[0].innerHTML = '<i class="fa-solid fa-shield-halved"></i> ' + copy.hero.trust[0];
  if (trustItems[1]) trustItems[1].innerHTML = '<i class="fa-solid fa-clock"></i> ' + copy.hero.trust[1];
  if (trustItems[2]) trustItems[2].innerHTML = '<i class="fa-solid fa-star"></i> ' + copy.hero.trust[2];

  setText('.emergency-bar__title', copy.emergencyBar.title);
  const emergencyText = document.querySelector('.emergency-bar__message');
  if (emergencyText) emergencyText.textContent = copy.emergencyBar.message;
  setText('.emergency-bar__disclaimer', copy.emergencyBar.disclaimer);
  setHtml('.emergency-bar__cta', '<i class="fa-solid fa-phone-volume"></i> ' + copy.emergencyBar.cta);

  const sectionHeaders = document.querySelectorAll('.section-header');
  if (sectionHeaders[0]) {
    sectionHeaders[0].querySelector('.section-label').textContent = copy.services.label;
    sectionHeaders[0].querySelector('.section-title').textContent = copy.services.title;
    sectionHeaders[0].querySelector('.section-desc').textContent = copy.services.description;
  }
  if (sectionHeaders[1]) {
    sectionHeaders[1].querySelector('.section-label').textContent = copy.gallery.label;
    sectionHeaders[1].querySelector('.section-title').textContent = copy.gallery.title;
    sectionHeaders[1].querySelector('.section-desc').textContent = copy.gallery.description;
  }

  document.querySelectorAll('.service-card').forEach((card, index) => {
    const service = copy.services.cards[index];
    if (!service) return;
    const title = card.querySelector('h3');
    const description = card.querySelector('p');
    if (title) title.textContent = service.title;
    if (description) description.textContent = service.description;
  });

  setText('#why-us .section-label', copy.why.label);
  setText('#why-us .section-title', copy.why.title);
  setText('.why-intro', copy.why.intro);
  document.querySelectorAll('.why-list li').forEach((item, index) => {
    const whyItem = copy.why.items[index];
    if (!whyItem) return;
    const strong = item.querySelector('strong');
    const span = item.querySelector('span');
    if (strong) strong.textContent = whyItem.title;
    if (span) span.textContent = whyItem.description;
  });
  setText('.why-content .btn--primary', copy.why.cta);
  setAttr('.why-image img', 'alt', copy.why.imageAlt);

  document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    if (copy.gallery.alts[index]) img.alt = copy.gallery.alts[index];
  });

  setText('#appointment .section-label', copy.appointment.label);
  setText('#appointment .section-title', copy.appointment.title);
  setText('.appt-info > p', copy.appointment.description);

  const contactLabels = document.querySelectorAll('.contact-card__item strong');
  if (contactLabels[0]) contactLabels[0].textContent = copy.appointment.contact.labels[0];
  if (contactLabels[1]) contactLabels[1].textContent = copy.appointment.contact.labels[1];
  if (contactLabels[2]) contactLabels[2].textContent = copy.appointment.contact.labels[2];
  const contactHours = document.querySelector('.contact-card__item:last-child span');
  if (contactHours) contactHours.innerHTML = copy.appointment.contact.hoursHtml;
  setAttr('.map-embed iframe', 'title', copy.appointment.contact.mapTitle);

  setLabelText('name', copy.appointment.form.labels.name);
  setLabelText('phone', copy.appointment.form.labels.phone);
  setLabelText('email', copy.appointment.form.labels.email);
  setLabelText('service', copy.appointment.form.labels.service);
  setLabelText('date', copy.appointment.form.labels.date);
  setLabelText('time', copy.appointment.form.labels.time);
  setLabelText('message', copy.appointment.form.labels.message);

  setAttr('#name', 'placeholder', copy.appointment.form.placeholders.name);
  setAttr('#phone', 'placeholder', copy.appointment.form.placeholders.phone);
  setAttr('#email', 'placeholder', copy.appointment.form.placeholders.email);
  setAttr('#message', 'placeholder', copy.appointment.form.placeholders.message);
  setSelectOptions('service', copy.appointment.form.placeholders.service, copy.appointment.form.serviceOptions);
  setSelectOptions('time', copy.appointment.form.placeholders.time, copy.appointment.form.timeOptions);

  submitBtn.querySelector('span').textContent = submitBtn.disabled ? copy.appointment.form.loading : copy.appointment.form.submit;
  setHtml('.form-note', '<i class="fa-solid fa-lock"></i> ' + copy.appointment.form.note);
  setText('#formSuccess strong', copy.appointment.form.successTitle);
  setText('#formSuccess p', copy.appointment.form.successMessage);
  setText('#formError strong', copy.appointment.form.errorTitle);
  if (!formError.hidden) {
    const errorKey = formError.dataset.errorKey || 'generic';
    formErrorText.innerHTML = `${copy.appointment.form.errors[errorKey] || copy.appointment.form.errors.generic} ${supportPhoneMarkup}.`;
  }

  setText('.footer__brand p', copy.footer.brand);
  setText('.footer__links h4', copy.footer.quickLinksTitle);
  const footerLinks = document.querySelectorAll('.footer__links li a');
  copy.footer.quickLinks.forEach((label, index) => {
    if (footerLinks[index]) footerLinks[index].textContent = label;
  });
  setText('.footer__contact h4', copy.footer.contactTitle);

  const hoursRows = document.querySelectorAll('.hours-list > div');
  copy.footer.hoursLabels.forEach((label, index) => {
    const row = hoursRows[index];
    if (!row) return;
    const spans = row.querySelectorAll('span');
    if (spans[0]) spans[0].textContent = label;
    if (spans[1]) spans[1].textContent = copy.footer.hoursValues[index];
  });

  setHtml('.footer__bottom .container > p:first-child', copy.footer.copyright);
  updateYear();
  setText('.footer__disclaimer', copy.footer.disclaimer);

  updateLanguageButtons(currentLanguage);
}

function showMessage(el, show) {
  if (!el) return;
  el.hidden = !show;
  if (show) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showError(errorKey = 'generic', customMessage = '') {
  const copy = getTranslation();
  formError.dataset.errorKey = errorKey;
  formErrorText.innerHTML = customMessage || `${copy.appointment.form.errors[errorKey] || copy.appointment.form.errors.generic} ${supportPhoneMarkup}.`;
  showMessage(formError, true);
}

function setLoading(loading) {
  const copy = getTranslation();
  submitBtn.disabled = loading;
  submitBtn.querySelector('span').textContent = loading ? copy.appointment.form.loading : copy.appointment.form.submit;
  const icon = submitBtn.querySelector('i');
  icon.className = loading ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-calendar-check';
}

function validateForm(data) {
  let valid = true;

  // Clear previous errors
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

  const name = form.querySelector('#name');
  const phone = form.querySelector('#phone');
  const service = form.querySelector('#service');

  if (!data.get('name') || data.get('name').trim().length < 2) {
    name.classList.add('error');
    name.focus();
    valid = false;
  }
  if (!data.get('phone') || data.get('phone').trim().length < 7) {
    phone.classList.add('error');
    if (valid) phone.focus();
    valid = false;
  }
  if (!data.get('service')) {
    service.classList.add('error');
    if (valid) service.focus();
    valid = false;
  }
  return valid;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  if (!validateForm(data)) return;

  setLoading(true);
  showMessage(formSuccess, false);
  showMessage(formError, false);

  const body = Object.fromEntries(data.entries());
  body.service = getServiceLabel(body.service);
  body.time = getTimeLabel(body.time);

  try {
    const response = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      showError(resolveErrorKey(result?.message), result?.message || '');
      return;
    }

    if (result?.success) {
      form.hidden = true;
      showMessage(formSuccess, true);
    } else {
      showError(resolveErrorKey(result?.message), result?.message || '');
    }
  } catch {
    showError('network');
  } finally {
    setLoading(false);
  }
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { lang } = button.dataset;
    if (!supportedLanguages.includes(lang) || lang === currentLanguage) return;
    applyLanguage(lang);
    storeLanguage(lang);
  });
});

applyLanguage(currentLanguage);

// ---- Animate elements into view ----
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .why-list li, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

// Add visible class to trigger animation
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
