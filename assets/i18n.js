(() => {
  'use strict';
  // Keep Spanish as the source; the URL carries the selected language, without cookies.
  const en = new URLSearchParams(location.search).get('lang') === 'en';
  const dictionary = {
  "+2,6K": "+2.6K",
  "Sábado 19.09": "Saturday 19.09",
  "Nomade x AURA · Run & Pilates & Brunch & DJ & Coffee Party. Welcome to the Morning Club: una mañana entera de movimiento y música en Murcia.": "Nomade x AURA · Run & Pilates & Brunch & DJ & Coffee Party. Welcome to the Morning Club: a whole morning of movement and music in Murcia.",
  "Hora": "Time",
  "Lugar": "Location",
  "15€ · carrera con breathwork": "€15 · run with breathwork",
  "30€ · Pilates Sculpt, plazas muy limitadas": "€30 · Pilates Sculpt, very limited spaces",
  "Incluye": "Includes",
  "Brunch completo, after con Coffee y sorteos 🧡": "Full brunch, coffee after-party and giveaways 🧡",
  "Negro": "Black",
  "Trae": "Bring",
  "Toalla y botella de agua si haces pilates": "A towel and a water bottle if you are doing pilates",
  "Al reservar eliges equipo: Runners o Movers 🧡": "Choose your team when booking: Runners or Movers 🧡",
  "Próximamente": "Coming soon",
  "El próximo evento Nomade se anuncia primero en el grupo de WhatsApp.": "The next Nomade event will be announced in the WhatsApp group first.",
  "Formato": "Format",
  "Running + pilates + social after": "Running + pilates + social after-party",
  "Dónde": "Where",
  "Frente al mar, en un rincón nuevo": "By the sea, somewhere new",
  "Únete al grupo y entérate antes que nadie 🧡": "Join the group and be the first to know 🧡",
  "Sábado 18.07": "Saturday 18.07",
  "Vol. 3 · The Morning Move. Run al amanecer, Pilates Sculpt y after frente al mar en Collados Beach.": "Vol. 3 · The Morning Move. Sunrise run, Pilates Sculpt and a seaside after-party at Collados Beach.",
  "Run 5K o Pilates Sculpt + brunch": "5K run or Pilates Sculpt + brunch",
  "Sábado 04.07": "Saturday 04.07",
  "Vol. 2 · Run & Pilates & DJ. 6K al atardecer, Pilates Sculpt sold out y after con DJ.": "Vol. 2 · Run & Pilates & DJ. A sunset 6K, sold-out Pilates Sculpt and an after-party with a DJ.",
  "Sábado 20.06": "Saturday 20.06",
  "Vol. 1 · Lanzamiento. El primero. Donde empezó todo 🧡": "Vol. 1 · Launch. The first one. Where it all began 🧡",
  "Domingo 06.09": "Sunday 06.09",
  "Nomade x NOW Running. 5 km por Cabo de Palos y, a la vuelta, brunch y DJ set. La primera vez que corremos con el club de Cartagena.": "Nomade x NOW Running. A 5 km run through Cabo de Palos, followed by brunch and a DJ set. Our first run with the club from Cartagena.",
  "8:30 recepción · 9:00 salida": "8:30 check-in · 9:00 start",
  "Entrada": "Ticket",
  "Recorrido": "Route",
  "Brunch con café, tostada y fruta, DJ set, sorteos y sorpresas 🧡": "Brunch with coffee, toast and fruit, a DJ set, giveaways and surprises 🧡",
  "Toalla y bañador si te apetece un baño al acabar": "A towel and swimwear if you fancy a dip afterwards",
  "Lo hacemos con NOW Running, de Cartagena 🧡": "Together with NOW Running, from Cartagena 🧡",
  "70 personas": "70 people",
  "Martes 25.08": "Tuesday 25.08",
  "Social Run & Sunset. Lo hacemos con Barré Murcia: 5 km al atardecer en dos grupos y after en Maloca.": "Social Run & Sunset. Together with Barré Murcia: a sunset 5 km in two groups and an after-party at Maloca.",
  "· punto de encuentro": "· meeting point",
  "10€ · con consumición en el after": "€10 · includes a drink at the after-party",
  "5K en dos grupos": "5K in two groups",
  "Ritmos": "Paces",
  "Iniciación 6:00-7:00 · pros 5:00": "Beginner 6:00–7:00 · advanced 5:00",
  "Después": "Afterwards",
  "After en Maloca 🧡": "After-party at Maloca 🧡",
  "Agotado. Evento conjunto de Nomade y Barré Murcia 🧡": "Sold out. A joint event with Nomade and Barré Murcia 🧡",
  "más de 30 nomaders": "over 30 nomaders",
  "Martes 18.08": "Tuesday 18.08",
  "Night Run en Cabo de Palos. Running nocturno con la comunidad y after en La Cangreja.": "Night Run in Cabo de Palos. A night run with the community and an after-party at La Cangreja.",
  "8€ · con consumición": "€8 · includes a drink",
  "7K para todos los niveles": "7K for all levels",
  "Iniciación 6:30-7:30 · social 5:30-6:00": "Beginner 6:30–7:30 · social 5:30–6:00",
  "Consumición, sorteos y sorpresas 🧡": "A drink, giveaways and surprises 🧡",
  "Bañador y toalla si te apetece": "Swimwear and a towel if you fancy a dip",
  "30 runners + after agotado": "30 runners + after-party sold out",
  "Miércoles 12.08": "Wednesday 12.08",
  "Eclipse Running. El sol se pone eclipsado sobre el Mar Menor con un 98% tapado: lo vemos juntos con gafas homologadas y, cuando se va, salimos a correr.": "Eclipse Running. The sun sets over the Mar Menor with 98% covered by the eclipse: we watch together with certified eclipse glasses, then head out for a run after sunset.",
  "19:30 · el eclipse empieza a las 19:41": "19:30 · the eclipse starts at 19:41",
  "· en la arena": "· on the sand",
  "10€ · gafas + carrera + consumición": "€10 · eclipse glasses + run + drink",
  "Máximo": "Peak eclipse",
  "20:35, con el 98% del sol tapado": "20:35, with 98% of the sun covered",
  "5K u 8K": "5K or 8K",
  "Iniciación 6:30-7:00 · intermedio 5:30-6:00 · 8K 5:30-6:00": "Beginner 6:30–7:00 · intermediate 5:30–6:00 · 8K 5:30–6:00",
  "After en la playa con baño, picoteo y música 🧡": "Beach after-party with a swim, snacks and music 🧡",
  "Bañador y toalla": "Swimwear and a towel",
  "Solo after": "After-party only",
  "6€ · sin correr: gafas, bebidas, sorteos y baño de noche": "€6 · no run: eclipse glasses, drinks, giveaways and a night swim",
  "Inscripciones cerradas: running y entrada de solo after, las dos agotadas. El próximo se anuncia primero en el grupo de WhatsApp 🧡": "Registration closed: both running and after-party-only tickets sold out. The next event will be announced in the WhatsApp group first 🧡",
  "Martes 04.08": "Tuesday 04.08",
  "Night Run en La Dominique. Running todos los martes, cada semana en una ubicación: la próxima se anuncia aquí y en Instagram.": "Night Run at La Dominique. Running every Tuesday, somewhere different each week: the next location will be announced here and on Instagram.",
  "7€ · con consumición": "€7 · includes a drink",
  "Iniciación · intermedio · tirada larga": "Beginner · intermediate · long run",
  "Nos quedamos en La Dominique 🧡": "We stay on at La Dominique 🧡",
  "listas cerradas": "registration closed",
  "Miércoles 29.07": "Wednesday 29.07",
  "Night Run. Running nocturno con after y cena en la Cangreja para quien se quedó.": "Night Run. A night run with an after-party and dinner at La Cangreja for those who stayed.",
  "7€ · con bebida": "€7 · includes a drink",
  "5K o 8K": "5K or 8K",
  "20 personas": "20 people",
  "Sábado 29.08": "Saturday 29.08",
  "Pilates Sculpt Exclusive by Nomade en el rooftop de Cetina Hotels, Cabo de Palos. La edición más especial de la temporada.": "Pilates Sculpt Exclusive by Nomade on the rooftop at Cetina Hotels, Cabo de Palos. Our most special edition of the season.",
  "8:30 a 11:00": "8:30–11:00",
  "Cetina Hotels · Cabo de Palos, en el rooftop": "Cetina Hotels · Cabo de Palos, on the rooftop",
  "35€ nomaders · 40€ general": "€35 nomaders · €40 standard",
  "Clase": "Class",
  "Pilates Sculpt + meditación guiada con breathwork": "Pilates Sculpt + guided meditation with breathwork",
  "Desayuno buffet del hotel, todas juntas 🧡": "Hotel breakfast buffet, all together 🧡",
  "Además": "Plus",
  "Sorteos y regalos para todas": "Giveaways and gifts for everyone",
  "Toalla y botella de agua": "A towel and a water bottle",
  "Último evento de la temporada. Rooftop lleno y desayuno hasta las 12 🧡": "The last event of the season. A full rooftop and breakfast until noon 🧡",
  "Jueves 27.08": "Thursday 27.08",
  "Barré & Breakfast & Skincare en La Dominique. Una edición distinta a la de cada jueves: barra, desayuno y un rato de skincare.": "Barré & Breakfast & Skincare at La Dominique. A twist on our usual Thursday: barre, breakfast and some skincare time.",
  "27€ · 22€ si ya has venido a un Pilates Sculpt": "€27 · €22 if you have attended a Pilates Sculpt before",
  "Desayuno y skincare 🧡": "Breakfast and skincare 🧡",
  "Toalla y agua": "A towel and water",
  "Último jueves de agosto. En septiembre volvemos 🧡": "The last Thursday of August. We will be back in September 🧡",
  "Jueves 20.08": "Thursday 20.08",
  "Morning Pilates en La Dominique, todos los jueves: Pilates Sculpt frente al mar y desayuno mediterráneo después.": "Morning Pilates at La Dominique, every Thursday: seaside Pilates Sculpt followed by a Mediterranean breakfast.",
  "20€ · clase + desayuno + seguro": "€20 · class + breakfast + insurance",
  "1h de Pilates Sculpt + breathwork": "1 hour of Pilates Sculpt + breathwork",
  "Desayuno mediterráneo 🧡": "Mediterranean breakfast 🧡",
  "El siguiente jueves es el Barré & Breakfast & Skincare del 27 🧡": "Next Thursday is Barré & Breakfast & Skincare on the 27th 🧡",
  "plazas agotadas": "all spaces taken",
  "Jueves 13.08": "Thursday 13.08",
  "Agotado. El jueves 20 ya está abierto 🧡": "Sold out. Booking for Thursday the 20th is now open 🧡",
  "Jueves 06.08": "Thursday 06.08",
  "Morning Pilates en La Dominique, ahora todos los jueves: Pilates Sculpt frente al mar y desayuno mediterráneo después.": "Morning Pilates at La Dominique, now every Thursday: seaside Pilates Sculpt followed by a Mediterranean breakfast.",
  "Agotado. El jueves 13 ya está abierto 🧡": "Sold out. Booking for Thursday the 13th is now open 🧡",
  "25 plazas agotadas": "25 spaces, sold out",
  "Sábado 01.08": "Saturday 01.08",
  "Morning Pilates. Pilates Sculpt frente al mar y desayuno mediterráneo en La Dominique.": "Morning Pilates. Seaside Pilates Sculpt and a Mediterranean breakfast at La Dominique.",
  "Desayuno mediterráneo a las 10:30 🧡": "Mediterranean breakfast at 10:30 🧡",
  "Vol. 1 · Lanzamiento": "Vol. 1 · Launch",
  "alrededor de 60 nomaders": "around 60 nomaders",
  "El primero. Donde empezó todo 🧡": "The first one. Where it all began 🧡",
  "6K al atardecer, Pilates Sculpt sold out y after con DJ.": "A sunset 6K, sold-out Pilates Sculpt and an after-party with a DJ.",
  "Nomade Meets · Mini Run Dominique + Calistenia": "Nomade Meets · Dominique Mini Run + Calisthenics",
  "20:45 Dominique Mini Run 3K hasta": "20:45 Dominique Mini Run 3K to",
  "Calistenia con sunset 🌅": "Sunset calisthenics 🌅",
  "Gratis": "Free",
  "Entrena a tu ritmo, sin exigencias, es una tarde para disfrutar. 🧡": "Train at your own pace, with no pressure. An evening to enjoy. 🧡",
  "Run al amanecer, Pilates Sculpt y after frente al mar. La tercera edición de la comunidad Nomade.": "A sunrise run, Pilates Sculpt and a seaside after-party. The third edition of the Nomade community.",
  "Ven caminando por la playa a inaugurar el nuevo parque de calistenia del polideportivo a las 20:30. Movilidad + Fuerza + Equilibrio. Iniciación a la disciplina y/o entrenamiento libre. Buenas vibes 🤙🏼": "Walk along the beach to join the opening of the sports centre’s new calisthenics park at 20:30. Mobility + Strength + Balance. An introduction to calisthenics and/or a free workout. Good vibes 🤙🏼",
  "Unirme": "Join us",
  "Running nocturno, 5K o 8K, con after y cena en la Cangreja para quien se quede. Entrada 7€ con bebida.": "A night run, 5K or 8K, with an after-party and dinner at La Cangreja for anyone staying on. €7 ticket including a drink.",
  "21:00 · running nocturno 5K u 8K con grupos de ritmo (iniciación, intermedio y tirada larga). 7€ con consumición, y después nos quedamos en La Dominique. Ahora hay running todos los martes, cada semana en una ubicación.": "21:00 · a 5K or 8K night run in pace groups (beginner, intermediate and long run). €7 including a drink, then we stay on at La Dominique. Running now takes place every Tuesday, somewhere different each week.",
  "9:00 · Pilates Sculpt frente al mar y desayuno mediterráneo. Ahora todos los jueves. 25 plazas, agotadas.": "9:00 · seaside Pilates Sculpt and a Mediterranean breakfast. Now every Thursday. 25 spaces, sold out.",
  "9:00 · una hora de Pilates Sculpt con breathwork frente al mar y desayuno mediterráneo después. Dress code: negro. 20€ con seguro incluido. 25 plazas, agotadas.": "9:00 · one hour of seaside Pilates Sculpt with breathwork, followed by a Mediterranean breakfast. Dress code: black. €20 including insurance. 25 spaces, sold out.",
  "19:30 · el sol se pone eclipsado sobre el Mar Menor con un 98% tapado. Lo vemos juntos con gafas homologadas incluidas (máximo a las 20:35) y, cuando se va, salimos a correr: 5K de iniciación (6:30-7:00), 5K intermedio (5:30-6:00) u 8K de tirada larga (5:30-6:00), los tres con pacer. Después, after en la playa con baño, picoteo y música. La entrada son 10€ e incluye gafas, carrera y consumición. Trae bañador y toalla. Las 30 plazas de running se agotaron y se abrió además una entrada de solo after de 6€ para quien no corría, que también se cerró.": "19:30 · the sun sets over the Mar Menor with 98% covered by the eclipse. We watch together with certified eclipse glasses included (peak at 20:35), then head out after sunset: a beginner 5K (6:30–7:00), an intermediate 5K (5:30–6:00) or a longer 8K (5:30–6:00), all with pacers. Afterwards, a beach after-party with a swim, snacks and music. Tickets cost €10 and include eclipse glasses, the run and a drink. Bring swimwear and a towel. All 30 running spaces sold out, followed by the additional €6 after-party-only tickets for non-runners.",
  "21:00 · running nocturno de 7 km para todos los niveles, en dos grupos: iniciación a 6:30-7:30 y social a 5:30-6:00. 8€ con una consumición en La Cangreja, sorteos y sorpresas. Dress code negro; trae bañador y toalla si te apetece.": "21:00 · a 7 km night run for all levels, in two groups: beginner at 6:30–7:30 and social at 5:30–6:00. €8 including a drink at La Cangreja, giveaways and surprises. Dress code: black; bring swimwear and a towel if you fancy a dip.",
  "9:00 · Pilates Sculpt frente al mar y desayuno mediterráneo. Dress code: negro. 20€ con seguro incluido. 25 plazas.": "9:00 · seaside Pilates Sculpt and a Mediterranean breakfast. Dress code: black. €20 including insurance. 25 spaces.",
  "70 personas, entre Nomade y Barré Murcia": "70 people from Nomade and Barré Murcia",
  "20:00 · 5 km al atardecer en dos grupos: iniciación a 6-7 min/km y pros a 5 min/km. Lo organizamos con Barré Murcia. After en Maloca con una consumición incluida. Dress code negro. 10€.": "20:00 · a sunset 5 km in two groups: beginner at 6–7 min/km and advanced at 5 min/km. Organised with Barré Murcia. After-party at Maloca with a drink included. Dress code: black. €10.",
  "9:00 · una edición distinta a la de cada jueves: clase de barré, desayuno y un rato de skincare. Dress code negro; trae toalla y agua. 27€, y 22€ si ya has venido a algún Pilates Sculpt de los jueves.": "9:00 · a twist on our usual Thursday: a barre class, breakfast and some skincare time. Dress code: black; bring a towel and water. €27, or €22 if you have attended one of our Thursday Pilates Sculpt classes before.",
  "8:30 a 11:00 · Pilates Sculpt en el rooftop con meditación guiada y breathwork, y después desayuno buffet del hotel con mesas reservadas para el grupo. Sorteos y regalos para todas. 35€ nomaders y 40€ precio general. Aforo completo: 22 plazas agotadas. Dress code negro; trae toalla y botella de agua.": "8:30–11:00 · rooftop Pilates Sculpt with guided meditation and breathwork, followed by the hotel breakfast buffet with tables reserved for the group. Giveaways and gifts for everyone. €35 for nomaders and €40 standard price. At full capacity: all 22 spaces sold out. Dress code: black; bring a towel and a water bottle.",
  "Nomade x NOW Running · 5 km, brunch y DJ set": "Nomade x NOW Running · 5 km, brunch and DJ set",
  "8:30 recepción y 9:00 salida · 5 km por Cabo de Palos con NOW Running, el club de Cartagena, y a la vuelta brunch con café, tostada y fruta, DJ set, sorteos y sorpresas. Dress code negro. 15€. Trae toalla y bañador si te apetece un baño al acabar.": "8:30 check-in and 9:00 start · a 5 km run through Cabo de Palos with NOW Running, the club from Cartagena, followed by brunch with coffee, toast and fruit, a DJ set, giveaways and surprises. Dress code: black. €15. Bring a towel and swimwear if you fancy a dip afterwards.",
  "Reserva tu plaza": "Book your spot",
  "10:00 · la primera vez que juntamos las dos tribus en una sola cita. Runners a 15€ y Movers de Pilates Sculpt a 30€, con plazas muy limitadas. Las dos entradas incluyen la sesión con breathwork, brunch completo, after con Coffee y sorteos. Dress code negro; si haces pilates trae toalla y agua.": "10:00 · our first event bringing both tribes together. Runners €15 and Pilates Sculpt Movers €30, with very limited spaces. Both tickets include the session with breathwork, a full brunch, a coffee after-party and giveaways. Dress code: black; bring a towel and water if you are doing pilates.",
  "Menú": "Menu",
  "Qué es": "About",
  "Evento": "Events",
  "Calendario Nomade": "Nomade calendar",
  "Comunidad": "Community",
  "Colabora": "Partner with us",
  "Contacto": "Contact",
  "Próximo evento": "Next event",
  "Únete a la comunidad": "Join the community",
  "Nomade. Para quienes quieren moverse con gente, descubrir nuevos rincones y convertir el running o el pilates en un atardecer inolvidable. Entrenos para conectar y disfrutar. Cero elitismo. Pura comunidad.": "Nomade. For anyone who wants to move together, discover new places and turn a run or pilates session into an unforgettable sunset. Workouts to connect and enjoy. No elitism. Just community.",
  "Corredores entrenando": "Runners training",
  "Tipos de evento": "Event types",
  "Evento Nomade": "Nomade event",
  "Evento más reciente": "Latest event",
  "Evento anterior": "Previous event",
  "Cada día cuenta.": "Every day counts.",
  "Toca una fecha y revive el evento: las fotos, el recorrido y lo que pasó.": "Tap a date to relive the event: the photos, the route and what happened.",
  "Comunidad & partners": "Community & partners",
  "Esto ya está pasando.": "It’s already happening.",
  "asistencias": "event attendances",
  "eventos": "events",
  "mujeres": "women",
  "comunidad WhatsApp": "WhatsApp community",
  "Espacios donde nos hemos movido": "Places we have moved together",
  "Únete.": "Join us.",
  "La comunidad es gratis. Entérate de qué se mueve y no te pierdas ningún evento.": "The community is free. Find out what’s happening and never miss an event.",
  "Unirme a WhatsApp": "Join WhatsApp",
  "Playlist Nomade 🎧": "Nomade playlist 🎧",
  "Antes de venir": "Before you come",
  "Preguntas frecuentes.": "Frequently asked questions.",
  "¿Necesito buen nivel para el run?": "Do I need to be a good runner?",
  "No. Corremos juntos y nadie se queda atrás. Ven a tu ritmo — se trata de moverse y conectar, no de competir.": "No. We run together and nobody gets left behind. Come at your own pace — it’s about moving and connecting, not competing.",
  "¿Y si nunca he hecho pilates?": "What if I have never tried pilates?",
  "Perfecto. La sesión se adapta a todos los niveles. Solo trae ganas.": "Perfect. The session suits all levels. Just bring your enthusiasm.",
  "¿Puedo ir solo/a?": "Can I come on my own?",
  "Sí, es lo más normal aquí. Mucha gente viene sola y se va con plan. Cero postureo. Puedes venir con tu grupo de amigos.": "Yes, that’s completely normal here. Many people arrive alone and leave with new plans. No showing off. You can also come with your friends.",
  "¿Qué llevo?": "What should I bring?",
  "Ropa cómoda, botella de agua y ganas. El dress code es negro.": "Comfortable clothes, a water bottle and good energy. The dress code is black.",
  "¿Cómo reservo y pago?": "How do I book and pay?",
  "Rellenas el formulario del evento y confirmas la plaza con un Bizum.": "Fill in the event form and confirm your spot with a Bizum payment.",
  "Run o pilates, ¿cuál elijo?": "Running or pilates — which should I choose?",
  "El que te pida el cuerpo. Ambos terminan en el mismo after frente al mar.": "Whichever feels right for you. Both finish at the same seaside after-party.",
  "¿Hay que ser socio o pagar cuota?": "Do I need a membership or pay a subscription?",
  "No. La comunidad es gratis; solo pagas la entrada del evento al que vengas.": "No. The community is free; you only pay for the events you attend.",
  "Marcas, locales y creadores: activad vuestra marca con una comunidad que se mueve de verdad. Mira qué te llevas y hablamos.": "Brands, venues and creators: bring your brand to life with a community that truly moves. See what’s in it for you and let’s talk.",
  "Qué te llevas →": "What you get →",
  "Marcas colaboradoras →": "Partner brands →",
  "WhatsApp directo": "Message us on WhatsApp",
  "Directo:": "Direct:",
  "Quiénes somos": "Who we are",
  "Distintas disciplinas, un mismo objetivo.": "Different disciplines, one shared goal.",
  "Runner y apasionada de la nutrición. Pone los kilómetros y la energía.": "Runner and nutrition enthusiast. She brings the miles and the energy.",
  "Instructora de Pilates & Barre. Pone el movimiento consciente.": "Pilates & Barre instructor. She brings mindful movement.",
  "Vive la experiencia Nomade.": "Experience Nomade.",
  "Una comunidad que no deja de crecer. Más de 400 personas han pasado ya por un evento Nomade.": "A community that keeps growing. More than 400 people have already joined a Nomade event.",
  "Quiero unirme": "Count me in",
  "Cerrar": "Close",
  "Colaboraciones": "Partnerships",
  "Lo que te llevas trabajando con nosotras:": "What you get when you work with us:",
  "Acceso a una comunidad activa y fiel.": "Access to an active, loyal community.",
  "Sampling de producto en mano, a un público cualificado.": "Hands-on product sampling for a relevant audience.",
  "Contenido: fotos y vídeo de tu marca en acción.": "Content: photos and videos of your brand in action.",
  "Presencia de marca en el evento (\"X by tu marca\").": "Brand presence at the event (\"X by your brand\").",
  "Datos reales: alcance, asistentes y engagement.": "Real data: reach, attendance and engagement.",
  "Activaciones a medida: welcome hour, sorteos, sampling…": "Tailored activations: welcome hour, giveaways, sampling…",
  "Hablamos por Instagram": "Let’s talk on Instagram",
  "Histórico": "Past collaborations",
  "Marcas colaboradoras.": "Partner brands.",
  "Las marcas que han pasado por la comunidad Nomade:": "Brands that have been part of the Nomade community:",
  "¿Quieres colaborar?": "Want to partner with us?",
  "Privacidad": "Privacy",
  "Tratamos tus datos solo para gestionar los eventos y avisarte de los próximos. Escríbenos y los borramos.": "We only use your data to manage events and let you know about upcoming ones. Contact us and we will delete it.",
  "Más info": "More info",
  "INSCRIPCIÓN CERRADA": "REGISTRATION CLOSED",
  "evento finalizado": "event finished",
  "Cuenta atrás para el evento": "Countdown to the event",
  "dias": "days",
  "horas": "hours",
  "seg": "sec",
  "El formulario es de Google Forms: al abrirlo, Google tratará tus datos (": "This is a Google Form: when you open it, Google will process your data (",
  "política": "privacy policy",
  "Ver fotos": "View photos",
  "Avísame en el grupo": "Keep me posted in the group",
  "Dudas": "Questions?",
  "Asistentes": "Attendees",
  "Ver las fotos 📸": "View the photos 📸",
  "El recorrido en Strava": "The route on Strava",
  "Ver la tarjeta del evento": "View the event card",
  "Mes anterior": "Previous month",
  "Mes siguiente": "Next month",
  "Próx. running": "Upcoming run",
  "Próx. pilates": "Upcoming pilates",
  "Privacidad, cookies y aviso legal · Nomade": "Privacy, cookies and legal notice · Nomade",
  "← Volver a Nomade": "← Back to Nomade",
  "Privacidad, cookies y aviso legal": "Privacy, cookies and legal notice",
  "Última actualización: 22 julio 2026 — versión provisional mientras Nomade termina su constitución legal formal.": "Last updated: 22 July 2026 — provisional version while Nomade completes its formal legal incorporation.",
  "1. Aviso legal — quién está detrás de Nomade": "1. Legal notice — who is behind Nomade",
  "Responsable:": "Data controller:",
  "Yolanda Morote, persona física, en representación de Nomade Social & Run Club (proyecto en proceso de constitución como entidad).": "Yolanda Morote, acting as an individual on behalf of Nomade Social & Run Club (a project in the process of being incorporated as a legal entity).",
  "Contacto:": "Contact:",
  "Actividad:": "Activity:",
  "organización de eventos deportivos y sociales (running, pilates, encuentros) en La Manga.": "organising sports and social events (running, pilates and meetups) in La Manga.",
  "Cuando Nomade quede constituida como entidad (NIF/CIF propio), este apartado se actualizará con esos datos. Hasta entonces, el responsable a efectos de contacto y protección de datos es Yolanda Morote.": "Once Nomade is incorporated as a legal entity with its own tax identification number (NIF/CIF), this section will be updated with those details. Until then, Yolanda Morote is responsible for contact and data protection matters.",
  "2. Qué datos tratamos y para qué": "2. What data we process and why",
  "2.1 Formulario de inscripción a eventos": "2.1 Event registration form",
  "Al inscribirte a un evento nos das: nombre, contacto (teléfono/email) y preferencias (bebida, tipo de leche, si eres vegetariano/a). Algunos formularios piden también, de forma": "When registering for an event, you provide your name, contact details (phone/email) and preferences (drink, type of milk and whether you are vegetarian). Some forms also ask, on an",
  "opcional": "optional basis",
  ", datos de salud (intolerancias alimentarias, lesiones) para adaptar el brunch o la actividad. Son \"categoría especial\" de datos según el RGPD, por eso se piden con una casilla de": ", for health data (food intolerances or injuries) so we can adapt the brunch or activity. These are “special category” data under the GDPR, so we request them through a",
  "consentimiento específico": "specific consent checkbox",
  ", separada del resto del formulario.": ", separate from the rest of the form.",
  "Para qué los usamos:": "How we use your data:",
  "gestionar tu plaza, adaptar el evento a tus necesidades y avisarte de próximos encuentros si lo aceptas expresamente. No se comparten con las marcas colaboradoras ni con nadie ajeno a la organización.": "to manage your spot, adapt the event to your needs and let you know about future meetups if you explicitly agree. We do not share your data with partner brands or anyone outside the organising team.",
  "Cuánto los guardamos:": "How long we keep it:",
  "los datos de inscripción se eliminan tras el evento. Si diste tu ok para avisos de futuros eventos, conservamos solo contacto (no salud) hasta que nos pidas borrarlo.": "registration data is deleted after the event. If you agreed to receive notifications about future events, we keep only your contact details (not health data) until you ask us to delete them.",
  "Base legal:": "Legal basis:",
  "tu consentimiento, otorgado al enviar el formulario.": "your consent, given when you submit the form.",
  "2.2 El formulario lo gestiona Google": "2.2 Google manages the form",
  "El formulario de inscripción es un Google Form. El botón \"Reserva tu plaza\" lo abre en una pestaña nueva — nada se carga de Google hasta que pulsas ese botón. Al abrirlo, Google recibe tu IP y los datos que rellenes, conforme a su propia": "The registration form is a Google Form. The “Book your spot” button opens it in a new tab — nothing from Google loads until you click that button. When you open it, Google receives your IP address and the data you enter, in accordance with its own",
  "política de privacidad": "privacy policy",
  ". Nomade no controla ese tratamiento técnico, solo el uso que hace de las respuestas una vez recibidas.": ". Nomade does not control that technical processing, only how it uses the responses once received.",
  "Los enlaces a nuestro grupo de WhatsApp, Instagram, club de Strava, playlist de Spotify o ubicaciones en Maps son solo eso: enlaces. Al pulsarlos sales de nuestra web y entras en esa plataforma, que aplica su propia política de privacidad. Nomade no incrusta ninguna de ellas en la página ni accede a tus datos ahí más allá de lo público (ej. tu nombre si te unes al grupo de WhatsApp).": "Links to our WhatsApp group, Instagram, Strava club, Spotify playlist or locations on Maps are simply links. Clicking them takes you away from our website to that platform, which applies its own privacy policy. Nomade does not embed any of these platforms on this page or access your data there beyond what is publicly visible (for example, your name if you join the WhatsApp group).",
  "Esta web": "This website",
  "no utiliza cookies de seguimiento": "does not use tracking cookies",
  ". No hay analítica, píxeles ni ningún script de terceros cargándose en segundo plano: las fuentes tipográficas están alojadas en nuestro propio servidor y ningún mapa, vídeo o formulario está incrustado en la página — todo son enlaces que solo se activan si haces clic. Por eso esta web no necesita banner de cookies.": ". There are no analytics, pixels or third-party scripts loading in the background: fonts are hosted on our own server, and no maps, videos or forms are embedded on the page — they are all links that only activate when clicked. This is why this website does not need a cookie banner.",
  "La única excepción posible es Google, y solo si tú decides abrir el formulario de inscripción (ver 2.2): en ese momento es Google quien puede fijar sus propias cookies en su propia pestaña, no nosotros.": "The only possible exception is Google, and only if you choose to open the registration form (see 2.2): at that point Google may set its own cookies in its own tab, not us.",
  "4. Tus derechos": "4. Your rights",
  "Puedes pedirnos en cualquier momento acceder a tus datos, corregirlos, borrarlos, limitarnos su uso o llevártelos a otro sitio (derechos ARCO-POL). Escríbenos a": "You can ask us at any time to access, correct or delete your data, restrict how we use it or transfer it elsewhere (the rights known as ARCO-POL in Spain). Email",
  "y lo resolvemos directamente — no hace falta ningún trámite formal.": "and we will handle it directly — no formal procedure is required.",
  "Si crees que no hemos tratado bien tus datos, puedes reclamar ante la": "If you believe we have mishandled your data, you can lodge a complaint with the",
  "Agencia Española de Protección de Datos (AEPD)": "Spanish Data Protection Agency (AEPD)",
  "5. Menores": "5. Under-18s",
  "Los eventos de Nomade están dirigidos a personas mayores de edad.": "Nomade events are intended for adults.",
  "Documento de trabajo generado el 22.07.2026 para Nomade Social & Run Club, La Manga. No constituye asesoramiento legal — pendiente de validación por un abogado.": "Working document created on 22.07.2026 for Nomade Social & Run Club, La Manga. This is not legal advice — pending review by a lawyer.",
  "Nomade · Social & Run Club. Run, pilates y after frente al mar en La Manga. Come for the movement, stay for the people.": "Nomade · Social & Run Club. Running, pilates and seaside after-parties in La Manga. Come for the movement, stay for the people.",
  "Run, pilates y sunsets en La Manga. Únete a la comunidad y reserva tu plaza.": "Running, pilates and sunsets in La Manga. Join the community and book your spot."
}
;
  const months = {'Enero':'January','Febrero':'February','Marzo':'March','Abril':'April','Mayo':'May','Junio':'June','Julio':'July','Agosto':'August','Septiembre':'September','Octubre':'October','Noviembre':'November','Diciembre':'December'};
  const translateText = value => {
    if (!en) return value;
    const key = value.trim();
    const translated = dictionary[key] ?? key.replace(/^(Enero|Febrero|Marzo|Abril|Mayo|Junio|Julio|Agosto|Septiembre|Octubre|Noviembre|Diciembre)( \d{4})$/, (_, month, year) => months[month] + year);
    return value.replace(key, translated);
  };
  function translateDOM(root) {
    if (!en) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement?.closest('script, style, .language-switch')) continue;
      node.nodeValue = translateText(node.nodeValue);
    }
    root.querySelectorAll('[aria-label], [alt], [title], meta[content]').forEach(el => {
      for (const attr of ['aria-label', 'alt', 'title', 'content']) {
        if (el.hasAttribute(attr)) el.setAttribute(attr, translateText(el.getAttribute(attr)));
      }
    });
    root.querySelectorAll('a[href]').forEach(a => {
      if (a.classList.contains('language-switch')) return;
      const raw = a.getAttribute('href');
      if (/^(index|privacidad)\.html(?:[?#]|$)/.test(raw)) {
        const url = new URL(raw, location.href);
        url.searchParams.set('lang', 'en');
        a.setAttribute('href', url.pathname + url.search + url.hash);
      }
    });
  }
  function translateHTML(html) {
    if (!en) return html;
    const template = document.createElement('template');
    template.innerHTML = html;
    translateDOM(template.content);
    return template.innerHTML;
  }
  function translateConfig(value) {
    if (!en) return value;
    if (typeof value === 'string') return /<[^>]+>/.test(value) ? translateHTML(value) : translateText(value);
    if (Array.isArray(value)) return value.map(translateConfig);
    if (value && typeof value === 'object') Object.keys(value).forEach(key => { value[key] = translateConfig(value[key]); });
    return value;
  }
  document.documentElement.lang = en ? 'en' : 'es';
  window.NOMADE_I18N = { en, translateDOM, translateHTML, translateConfig };
  window.NOMADE_I18N.init = () => {
    translateDOM(document);
    document.querySelectorAll('.language-switch').forEach(link => {
      link.textContent = en ? 'ES' : 'EN';
      link.setAttribute('lang', en ? 'es' : 'en');
      link.setAttribute('hreflang', en ? 'es' : 'en');
      link.setAttribute('aria-label', en ? 'Cambiar a español' : 'Switch to English');
      const destination = () => {
        const url = new URL(location.href);
        if (en) url.searchParams.delete('lang'); else url.searchParams.set('lang', 'en');
        return url.pathname + url.search + url.hash;
      };
      link.href = destination();
      link.addEventListener('click', event => {
        if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); location.assign(destination());
      });
    });
  };
})();
