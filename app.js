const moduleConfig = [
  { name: "Realizar compra", icon: "flow", tone: "tone-rose", subtitle: "Onboarding de suscripción BIOFIT" },
  { name: "Inicio", icon: "home", tone: "tone-green", subtitle: "Panel principal de BIOFIT" },
  { name: "Reportería", icon: "chart", tone: "tone-blue", subtitle: "Análisis y reportes operativos" },
  { name: "Calendario", icon: "calendar", tone: "tone-purple", subtitle: "Dimensión y gestión temporal" },
  { name: "Canal Venta", icon: "cart", tone: "tone-orange", subtitle: "Catálogo y desempeño de canales" },
  { name: "Clientes", icon: "users", tone: "tone-cyan", subtitle: "Datos maestros de clientes" },
  { name: "Clientes estado", icon: "clipboard", tone: "tone-pink", subtitle: "Estado y clasificación de clientes" },
  { name: "Estado venta", icon: "check", tone: "tone-lime", subtitle: "Estados del proceso comercial" },
  { name: "Producto", icon: "box", tone: "tone-indigo", subtitle: "Productos, precio y stock" },
  { name: "Suscripcion", icon: "refresh", tone: "tone-violet", subtitle: "Gestión de suscripciones" },
  { name: "Ventas", icon: "dollar", tone: "tone-amber", subtitle: "Transacciones y facturación" },
];

const moduleInfo = {
  "Reportería": ["Reportes diarios", "Exportaciones", "Indicadores críticos"],
  Calendario: ["Periodos activos", "Fechas clave", "Eventos pendientes"],
  "Canal Venta": ["Canales habilitados", "Leads", "Conversión"],
  Clientes: ["Clientes activos", "Nuevos clientes", "Contactos actualizados"],
  "Clientes estado": ["Activos", "En seguimiento", "Inactivos"],
  "Estado venta": ["Abiertas", "En negociación", "Cerradas"],
  Producto: ["Productos", "Stock crítico", "Precio promedio"],
  Suscripcion: ["Suscripciones", "Renovaciones", "Cancelaciones"],
  Ventas: ["Ventas mes", "Ticket promedio", "Meta alcanzada"],
};

const quickCards = [
  {
    title: "Calendario",
    icon: "calendar",
    tone: "tone-purple",
    description: "Dimensión de tiempo (fecha, mes, trimestre, semestre).",
  },
  {
    title: "Clientes",
    icon: "users",
    tone: "tone-cyan",
    description: "Datos maestros de clientes y contacto.",
  },
  {
    title: "Producto",
    icon: "box",
    tone: "tone-indigo",
    description: "Catálogo, precio y stock.",
  },
  {
    title: "Ventas",
    icon: "dollar",
    tone: "tone-amber",
    description: "Transacciones y detalle de compra.",
  },
  {
    title: "Suscripcion",
    icon: "refresh",
    tone: "tone-violet",
    description: "Estado de suscripciones y relación con canal.",
  },
  {
    title: "Canal Venta",
    icon: "cart",
    tone: "tone-orange",
    description: "Catálogo de canales.",
  },
  {
    title: "Estado venta",
    icon: "check",
    tone: "tone-lime",
    description: "Catálogo de estados de la venta.",
  },
  {
    title: "Clientes estado",
    icon: "clipboard",
    tone: "tone-pink",
    description: "Catálogo de estados del cliente.",
  },
];

const sidebarNav = document.getElementById("sidebarNav");
const moduleTitle = document.getElementById("moduleTitle");
const moduleSubtitle = document.getElementById("moduleSubtitle");
const mainContent = document.getElementById("mainContent");

const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.7a.3.3 0 0 1-.3-.3V15a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5.7a.3.3 0 0 1-.3.3H5a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5h16M7 16v-3m5 3V8m5 8v-5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="m6.5 9.5 4 2.5 6-5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 3.5v3m10-3v3M4 9h16M6 5.5h12a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M8.5 13h3m4 0h-3m-4 4h3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h2l2.1 10.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H7.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.7"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 18.5c0-2.6 2.5-4.5 5.5-4.5s5.5 1.9 5.5 4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16 14.4c2.2.4 4 1.9 4 4.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M15.8 5.2A2.8 2.8 0 1 1 15.6 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none"><rect x="6" y="5" width="12" height="16" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M9 5.5h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1ZM9 11h6M9 15h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="m8.7 12 2.2 2.2 4.4-4.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none"><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M4 7.5V16l8 5 8-5V7.5M12 12v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none"><path d="M19 8.5A7 7 0 1 0 20 13m-1-7.5V10h-4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  dollar: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4v16m3.7-12.5c-.8-.6-2-.9-3.2-.9-2 0-3.5 1-3.5 2.6 0 3.8 7.5 1.5 7.5 5 0 1.7-1.7 2.8-4 2.8-1.5 0-2.9-.4-3.8-1.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  flow: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 6h9a3 3 0 1 1 0 6H8a3 3 0 1 0 0 6h12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="m14.5 4 2.5 2-2.5 2M17 16l2.5 2-2.5 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const LS_KEYS = {
  session: "biofit_session",
  customers: "biofit_customers",
  draftPurchase: "biofit_draft_purchase",
};
const MOCK_PASSWORD_STORAGE = {
  "cliente@biofit-demo.com": "biofit2026",
};
const PURCHASE_TOTAL_STEPS = 5;

let purchaseState = {
  screen: "intro",
  pendingEmail: "",
  step: 1,
  email: "",
  docType: "DNI",
  docNumber: "",
  registrationDateDisplay: "",
  selectedPlan: "",
  selectedProduct: "",
  fullName: "",
  password: "",
  paymentStatus: "",
};

const purchasePlans = [
  { id: "Mensual", desc: "Acceso flexible mes a mes.", price: "S/ 59" },
  { id: "Trimestral", desc: "Ahorra y mantén constancia.", price: "S/ 149" },
  { id: "Anual", desc: "Mejor valor para resultados sostenidos.", price: "S/ 499" },
];

const purchaseProducts = [
  { id: "Proteína BIOFIT", desc: "Recuperación muscular y energía diaria." },
  { id: "Omega Balance", desc: "Soporte cardiovascular y concentración." },
  { id: "Multi Vita Plus", desc: "Vitaminas esenciales para tu rutina." },
];

const MOCK_EXISTING_CUSTOMER_EMAIL = "cliente@biofit-demo.com";

const MOCK_EXISTING_CUSTOMER = {
  email: MOCK_EXISTING_CUSTOMER_EMAIL,
  docType: "DNI",
  docNumber: "43218765",
  fullName: "Valeria Ramos Quispe",
  registrationDate: "2025-03-14",
  password: MOCK_PASSWORD_STORAGE[MOCK_EXISTING_CUSTOMER_EMAIL],
  purchases: [
    {
      date: "2025-06-05",
      product: "Omega Balance",
      subscriptionType: "Trimestral",
      status: "Finalizada",
    },
    {
      date: "2025-09-02",
      product: "Proteína BIOFIT",
      subscriptionType: "Mensual",
      status: "Cancelada",
    },
  ],
  subscriptions: [
    {
      product: "Multi Vita Plus",
      plan: "Trimestral",
      startDate: "2026-03-01",
      nextRenewal: "2026-06-01",
      status: "Activa",
    },
  ],
};

function getIcon(name) {
  return icons[name] || icons.home;
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function persistDraftPurchase(state) {
  writeJson(LS_KEYS.draftPurchase, state);
}

function loadDraftPurchase() {
  const draft = readJson(LS_KEYS.draftPurchase, null);
  if (!draft || typeof draft !== "object") return null;
  return draft;
}

function clearDraftPurchase() {
  localStorage.removeItem(LS_KEYS.draftPurchase);
}

function seedMockCustomers() {
  let customers = readJson(LS_KEYS.customers, null);
  if (!customers || typeof customers !== "object") {
    customers = {};
    writeJson(LS_KEYS.customers, customers);
  }
  if (!customers[MOCK_EXISTING_CUSTOMER_EMAIL]) {
    customers[MOCK_EXISTING_CUSTOMER_EMAIL] = { ...MOCK_EXISTING_CUSTOMER };
    writeJson(LS_KEYS.customers, customers);
  }
}

seedMockCustomers();

function getCustomers() {
  return readJson(LS_KEYS.customers, {});
}

function saveCustomer(customer) {
  const customers = getCustomers();
  customers[normalizeEmail(customer.email)] = customer;
  writeJson(LS_KEYS.customers, customers);
}

function getCustomerByEmail(email) {
  return getCustomers()[normalizeEmail(email)] || null;
}

function getSession() {
  const session = readJson(LS_KEYS.session, null);
  if (!session || !session.email) return null;
  return session;
}

function setSession(email, customer) {
  writeJson(LS_KEYS.session, { email: normalizeEmail(email), customer });
}

function clearSession() {
  localStorage.removeItem(LS_KEYS.session);
}

function todayIsoDisplay() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function addMonths(dateStr, months) {
  const d = new Date(dateStr + "T12:00:00");
  d.setMonth(d.getMonth() + months);
  return d.toISOString().slice(0, 10);
}

function renewalFor(planId, saleDate) {
  if (planId === "Mensual") return addMonths(saleDate, 1);
  if (planId === "Trimestral") return addMonths(saleDate, 3);
  if (planId === "Anual") return addMonths(saleDate, 12);
  return addMonths(saleDate, 1);
}

/** Reset SPA state for onboarding (does not wipe localStorage profiles). */
function resetPurchaseWizardState(emailFromIntro = "") {
  purchaseState = {
    screen: "intro",
    pendingEmail: emailFromIntro,
    step: 1,
    email: normalizeEmail(emailFromIntro),
    docType: "DNI",
    docNumber: "",
    registrationDateDisplay: "",
    selectedPlan: "",
    selectedProduct: "",
    fullName: "",
    password: "",
    paymentStatus: "",
  };
}

/** Enter module: restore draft or logged-in shortcuts */
function hydratePurchaseModuleState() {
  const session = getSession();
  const draft = loadDraftPurchase();

  if (draft && normalizeEmail(draft.pendingEmail || draft.email)) {
    resetPurchaseWizardState(normalizeEmail(draft.pendingEmail || draft.email || ""));
    purchaseState = {
      ...purchaseState,
      ...draft,
      docType: draft.docType || "DNI",
      docNumber: draft.docNumber || "",
      registrationDateDisplay: draft.registrationDateDisplay || "",
    };
    if (!purchaseState.pendingEmail && purchaseState.email) {
      purchaseState.pendingEmail = purchaseState.email;
    }
    purchaseState.pendingEmail =
      normalizeEmail(purchaseState.pendingEmail || purchaseState.email) ||
      normalizeEmail(localStorage.getItem("biofit_last_email") || "");
    return;
  }

  if (session && session.customer && session.customer.email === session.email) {
    purchaseState.screen = "accountDashboard";
    purchaseState.email = normalizeEmail(session.email);
    return;
  }

  const lastEmail = localStorage.getItem("biofit_last_email");
  resetPurchaseWizardState(lastEmail || "");
}

/** Deep clone for merging after purchase */
function deepCloneCustomer(c) {
  return JSON.parse(JSON.stringify(c));
}

function getPurchaseStepData() {
  const steps = {
    1: { title: "Elige tu plan de suscripción", subtitle: "Selecciona el plan que mejor se adapta a tus objetivos." },
    2: { title: "Selecciona tu producto", subtitle: "Escoge el suplemento ideal para tu progreso." },
    3: { title: "Crea tu cuenta", subtitle: "Configura tu acceso para gestionar tu suscripción." },
    4: { title: "Pago", subtitle: "Simula tu método de pago de forma segura." },
    5: { title: "¡Bienvenido a BIOFIT!", subtitle: "Tu suscripción ha sido activada." },
  };
  return steps[purchaseState.step];
}

function renderPurchaseIntro(message = "") {
  const emailInput = String(purchaseState.pendingEmail || purchaseState.email || "").trim();
  mainContent.innerHTML = `
    <section class="purchase-hero">
      <div class="purchase-overlay"></div>
      <article class="purchase-hero-content">
        <h1>Empieza tu experiencia BIOFIT</h1>
        <p>Suplementos de calidad, suscripciones flexibles y resultados reales</p>
        <div class="purchase-email-row">
          <input type="email" data-purchase-input="pendingEmail" value="${emailInput}" placeholder="Coloca tu correo" />
          <button class="btn purchase-cta" data-purchase-action="start">Comenzar</button>
        </div>
        ${message ? `<p class="purchase-message">${message}</p>` : ""}
      </article>
    </section>
  `;
}

function renderLoginScreen(message = "") {
  const loginEmail = normalizeEmail(purchaseState.pendingEmail || purchaseState.email);
  mainContent.innerHTML = `
    <section class="purchase-flow">
      <article class="card purchase-step-card login-card">
        <div class="purchase-progress-head">
          <strong>Iniciar sesión</strong>
          <p>Accede a tu cuenta BIOFIT o crea una nueva para continuar</p>
        </div>
        <div class="purchase-form login-form-single">
          <label>Correo
            <input type="email" data-purchase-login="email" value="${loginEmail}" placeholder="tu@correo.com" />
          </label>
          <label>Contraseña
            <input type="password" data-purchase-login="password" placeholder="Contraseña" />
          </label>
          <button class="btn purchase-cta" data-purchase-action="login-submit">Iniciar sesión</button>
          <button class="btn btn-secondary" type="button" data-purchase-action="go-register">Crear cuenta nueva</button>
          <a href="#" class="purchase-forgot" data-purchase-action="forgot">¿Olvidaste tu contraseña?</a>
          ${message ? `<p class="purchase-message">${message}</p>` : ""}
        </div>
      </article>
    </section>
  `;
}

function renderAccountDashboard() {
  const customer = getCustomerByEmail(getSession()?.email || purchaseState.email);
  if (!customer) {
    clearSession();
    resetPurchaseWizardState();
    renderRealizarCompra("Sesión no válida. Ingresa de nuevo.");
    return;
  }

  const purchasesHtml = (customer.purchases || [])
    .map(
      (p) => `
      <tr>
        <td>${p.date}</td>
        <td>${p.product}</td>
        <td>${p.subscriptionType}</td>
        <td><span class="purchase-chip">${p.status}</span></td>
      </tr>`
    )
    .join("");

  const subsHtml = (customer.subscriptions || [])
    .map(
      (s) => `
      <tr>
        <td>${s.product}</td>
        <td>${s.plan}</td>
        <td>${s.startDate}</td>
        <td>${s.nextRenewal}</td>
        <td><span class="purchase-chip">${s.status}</span></td>
      </tr>`
    )
    .join("");

  mainContent.innerHTML = `
    <section class="purchase-flow">
      <article class="card purchase-step-card account-dashboard">
        <div class="account-dashboard-head">
          <h3>Mi cuenta BIOFIT</h3>
          <button class="ghost-btn logout-inline" type="button" data-purchase-action="logout-account">Salir</button>
        </div>
        <div class="account-section">
          <h4>Datos del cliente</h4>
          <div class="account-kv-grid">
            <div><small>Tipo de documento</small><strong>${customer.docType}</strong></div>
            <div><small>Número de documento</small><strong>${customer.docNumber}</strong></div>
            <div><small>Nombre</small><strong>${customer.fullName}</strong></div>
            <div><small>Correo</small><strong>${customer.email}</strong></div>
            <div><small>Fecha de registro</small><strong>${customer.registrationDate}</strong></div>
          </div>
        </div>
        <div class="account-section">
          <h4>Historial de compras</h4>
          <div class="table-wrap">
            <table class="account-table">
              <thead><tr><th>Fecha de venta</th><th>Producto</th><th>Tipo de suscripción</th><th>Estado</th></tr></thead>
              <tbody>${purchasesHtml || `<tr><td colspan="4" class="empty-cell">Sin compras registradas</td></tr>`}</tbody>
            </table>
          </div>
        </div>
        <div class="account-section">
          <h4>Suscripciones activas</h4>
          <div class="table-wrap">
            <table class="account-table">
              <thead><tr><th>Producto</th><th>Plan</th><th>Inicio</th><th>Renovación</th><th>Estado</th></tr></thead>
              <tbody>${subsHtml || `<tr><td colspan="5" class="empty-cell">Sin suscripciones</td></tr>`}</tbody>
            </table>
          </div>
        </div>
        <button class="btn purchase-cta btn-block-margin" type="button" data-purchase-action="new-purchase-from-account">Realizar nueva compra</button>
      </article>
    </section>
  `;
}

function renderPurchaseStep(message = "") {
  const step = getPurchaseStepData();
  const progress = (purchaseState.step / PURCHASE_TOTAL_STEPS) * 100;

  let body = "";
  if (purchaseState.step === 1) {
    body = `<div class="purchase-grid">
      ${purchasePlans
        .map(
          (plan) => `<button class="purchase-option ${purchaseState.selectedPlan === plan.id ? "selected" : ""}" data-purchase-action="choose-plan" data-value="${plan.id}">
            <h4>${plan.id}</h4><p>${plan.desc}</p><strong>${plan.price}</strong>
          </button>`
        )
        .join("")}
    </div>`;
  } else if (purchaseState.step === 2) {
    body = `<div class="purchase-grid">
      ${purchaseProducts
        .map(
          (item) => `<button class="purchase-option ${purchaseState.selectedProduct === item.id ? "selected" : ""}" data-purchase-action="choose-product" data-value="${item.id}">
            <h4>${item.id}</h4><p>${item.desc}</p>
          </button>`
        )
        .join("")}
    </div>`;
  } else if (purchaseState.step === 3) {
    const regDisplay = purchaseState.registrationDateDisplay || todayIsoDisplay();
    purchaseState.registrationDateDisplay = regDisplay;
    body = `<div class="purchase-form registration-form">
      <label>Tipo de documento
        <select data-purchase-input="docType">
          <option value="DNI" ${purchaseState.docType === "DNI" ? "selected" : ""}>DNI</option>
          <option value="CE" ${purchaseState.docType === "CE" ? "selected" : ""}>CE</option>
          <option value="Pasaporte" ${purchaseState.docType === "Pasaporte" ? "selected" : ""}>Pasaporte</option>
        </select>
      </label>
      <label>Número de documento<input type="text" data-purchase-input="docNumber" value="${purchaseState.docNumber}" placeholder="Número" /></label>
      <label>Nombre<input type="text" data-purchase-input="fullName" value="${purchaseState.fullName}" placeholder="Tu nombre completo" /></label>
      <label>Correo<input type="email" data-purchase-input="email" value="${purchaseState.email}" placeholder="tu@correo.com" readonly /></label>
      <label>Contraseña<input type="password" data-purchase-input="password" value="${purchaseState.password}" placeholder="********" /></label>
      <label>Fecha de registro<input type="text" value="${regDisplay}" readonly /></label>
    </div>`;
  } else if (purchaseState.step === 4) {
    body = `<div class="purchase-grid">
      <button class="purchase-option ${purchaseState.paymentStatus === "ok" ? "selected" : ""}" data-purchase-action="set-payment" data-value="ok">
        <h4>Pago aprobado</h4><p>Completar suscripción y activar cuenta.</p>
      </button>
      <button class="purchase-option ${purchaseState.paymentStatus === "fail" ? "selected" : ""}" data-purchase-action="set-payment" data-value="fail">
        <h4>Pago rechazado</h4><p>Mostrar error y permitir reintento.</p>
      </button>
    </div>`;
  } else {
    body = `<div class="purchase-success">
      <h3>¡Bienvenido a BIOFIT!</h3>
      <p>Tu suscripción ha sido activada</p>
      <ul>
        <li>Plan: ${purchaseState.selectedPlan || "No definido"}</li>
        <li>Producto: ${purchaseState.selectedProduct || "No definido"}</li>
        <li>Correo: ${purchaseState.email || "No definido"}</li>
      </ul>
    </div>`;
  }

  mainContent.innerHTML = `
    <section class="purchase-flow">
      <article class="card purchase-step-card">
        <div class="purchase-progress-head">
          <span>Paso ${purchaseState.step} de ${PURCHASE_TOTAL_STEPS}</span>
          <strong>${step.title}</strong>
          <p>${step.subtitle}</p>
        </div>
        <div class="flow-progress-track">
          <div class="flow-progress-value" style="width:${progress}%"></div>
        </div>
        <div class="purchase-stage">${body}</div>
        ${message ? `<p class="purchase-message">${message}</p>` : ""}
        <div class="flow-actions">
          <button class="btn btn-secondary" data-purchase-action="back" ${purchaseState.step === 1 ? "disabled" : ""}>Atrás</button>
          <button class="btn purchase-cta" data-purchase-action="next">${purchaseState.step === PURCHASE_TOTAL_STEPS ? "Finalizar" : "Siguiente"}</button>
        </div>
      </article>
    </section>
  `;
}

function renderRealizarCompra(message = "") {
  if (purchaseState.screen === "intro" || purchaseState.screen === "login" || purchaseState.screen === "onboarding") {
    persistDraftPurchase(purchaseState);
  } else {
    clearDraftPurchase();
  }
  switch (purchaseState.screen) {
    case "intro":
      renderPurchaseIntro(message);
      break;
    case "login":
      renderLoginScreen(message);
      break;
    case "onboarding":
      renderPurchaseStep(message);
      break;
    case "accountDashboard":
      renderAccountDashboard();
      break;
    default:
      resetPurchaseWizardState();
      renderPurchaseIntro(message);
  }
}

function validatePurchaseNext() {
  if (purchaseState.step === 1 && !purchaseState.selectedPlan) return "Selecciona un plan para continuar.";
  if (purchaseState.step === 2 && !purchaseState.selectedProduct) return "Selecciona un producto para continuar.";
  if (purchaseState.step === 3) {
    if (
      !purchaseState.docNumber.trim() ||
      !purchaseState.fullName.trim() ||
      !purchaseState.email.trim() ||
      !purchaseState.password.trim()
    ) {
      return "Completa tipo y número de documento, nombre, correo y contraseña.";
    }
  }
  if (purchaseState.step === 4) {
    if (!purchaseState.paymentStatus) return "Debes simular el resultado del pago.";
    if (purchaseState.paymentStatus === "fail") return "Pago rechazado. Selecciona Pago aprobado para continuar.";
  }
  return "";
}

function completeNewUserPurchaseFlow() {
  const email = normalizeEmail(purchaseState.email);
  const regDate = purchaseState.registrationDateDisplay || todayIsoDisplay();
  const saleDate = todayIsoDisplay();
  const renewal = renewalFor(purchaseState.selectedPlan, saleDate);

  let customer =
    getCustomerByEmail(email) ||
    ({
      email,
      docType: purchaseState.docType,
      docNumber: purchaseState.docNumber.trim(),
      fullName: purchaseState.fullName.trim(),
      registrationDate: regDate,
      password: purchaseState.password,
      purchases: [],
      subscriptions: [],
    });

  customer.docType = purchaseState.docType;
  customer.docNumber = purchaseState.docNumber.trim();
  customer.fullName = purchaseState.fullName.trim();
  customer.registrationDate = regDate;

  customer.purchases = customer.purchases || [];
  customer.purchases.push({
    date: saleDate,
    product: purchaseState.selectedProduct,
    subscriptionType: purchaseState.selectedPlan,
    status: "Activa",
  });

  customer.subscriptions = customer.subscriptions || [];
  customer.subscriptions = customer.subscriptions.filter((s) => s.product !== purchaseState.selectedProduct);
  customer.subscriptions.push({
    product: purchaseState.selectedProduct,
    plan: purchaseState.selectedPlan,
    startDate: saleDate,
    nextRenewal: renewal,
    status: "Activa",
  });

  saveCustomer(customer);
  setSession(email, deepCloneCustomer(customer));

  resetPurchaseWizardState(email);
  purchaseState.screen = "accountDashboard";
  purchaseState.email = email;
  clearDraftPurchase();
  renderRealizarCompra();
}

function generateNav() {
  sidebarNav.innerHTML = moduleConfig
    .map(
      (module) => `
      <button class="nav-item" data-module="${module.name}">
        <span class="icon-badge ${module.tone}" aria-hidden="true">${getIcon(module.icon)}</span>
        <span>${module.name}</span>
      </button>
    `
    )
    .join("");
}

function renderInicio() {
  mainContent.innerHTML = `
    <section class="stack">
      <section class="section-block">
        <article class="card alert-banner">
          API conectada. Puedes gestionar tus tablas en tiempo real.
        </article>

        <article class="card hero">
          <h3>BIOFIT</h3>
          <p>BIOFIT se dedica a la venta de suplementos alimenticios, con foco en calidad, trazabilidad y servicio.</p>
          <div class="button-row">
            <button class="btn btn-primary" data-go-module="Ventas">Ir a Ventas</button>
            <button class="btn btn-secondary" data-go-module="Clientes">Ver Clientes</button>
          </div>
        </article>
      </section>

      <section class="section-block">
        <div class="info-grid">
          <article class="card info-card">
            <small>Servidor</small>
            <strong>building-cloud-grupo6</strong>
            <p>SQL Server en Azure</p>
          </article>
          <article class="card info-card">
            <small>Base de datos</small>
            <strong>building-cloud-grupo6</strong>
            <p>Conexión vía mssql</p>
          </article>
          <article class="card info-card">
            <small>Módulos</small>
            <strong>8</strong>
            <p>Tablas habilitadas</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <article class="card section-title">
          <h3>Accesos rápidos</h3>
          <p>Entra a cualquier tabla para crear, editar o eliminar registros.</p>
        </article>

        <section class="quick-grid">
          ${quickCards
            .map(
              (card) => `
                <article class="quick-card">
                  <div class="quick-top">
                    <span class="quick-icon ${card.tone}" aria-hidden="true">${getIcon(card.icon)}</span>
                    <h4>${card.title}</h4>
                  </div>
                  <p>${card.description}</p>
                  <button class="open-link" data-go-module="${card.title}">Abrir →</button>
                </article>
              `
            )
            .join("")}
        </section>
      </section>
    </section>
  `;
}

function renderModuleView(name) {
  const summary = moduleInfo[name] || ["Registros", "Actualizaciones", "Estado"];
  mainContent.innerHTML = `
    <section class="module-view">
      <article class="card module-header">
        <h3>${name}</h3>
        <p>Vista dinámica del módulo ${name}. Este espacio está listo para tablas, filtros y formularios sin recargar la página.</p>
      </article>
      <section class="kpi-grid">
        ${summary
          .map(
            (item, index) => `
              <article class="kpi">
                <small>${item}</small>
                <strong>${(index + 2) * 21}</strong>
              </article>
            `
          )
          .join("")}
      </section>
    </section>
  `;
}

function setActiveModule(name) {
  const match = moduleConfig.find((module) => module.name === name) || moduleConfig[0];

  moduleTitle.textContent = match.name;
  moduleSubtitle.textContent = match.subtitle;

  sidebarNav.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === match.name);
  });

  if (match.name === "Inicio") {
    renderInicio();
  } else if (match.name === "Realizar compra") {
    hydratePurchaseModuleState();
    renderRealizarCompra();
  } else {
    renderModuleView(match.name);
  }

  mainContent.classList.remove("content-enter");
  requestAnimationFrame(() => {
    mainContent.classList.add("content-enter");
  });
}

sidebarNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-module]");
  if (!(button instanceof HTMLButtonElement)) return;
  setActiveModule(button.dataset.module || "Inicio");
});

mainContent.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-go-module]");
  if (button instanceof HTMLButtonElement) {
    setActiveModule(button.dataset.goModule || "Inicio");
    return;
  }

  const purchaseButton = event.target.closest("button[data-purchase-action]");
  if (!(purchaseButton instanceof HTMLButtonElement)) return;

  const action = purchaseButton.dataset.purchaseAction;
  if (action === "start") {
    const inputEl = document.querySelector("input[data-purchase-input='pendingEmail']");
    if (inputEl instanceof HTMLInputElement) {
      purchaseState.pendingEmail = inputEl.value;
    }
    const emailNorm = normalizeEmail(purchaseState.pendingEmail);
    if (!emailNorm) {
      renderRealizarCompra("Ingresa tu correo para comenzar.");
      return;
    }
    purchaseState.pendingEmail = emailNorm;
    purchaseState.email = emailNorm;
    localStorage.setItem("biofit_last_email", emailNorm);
    purchaseState.screen = "login";
    renderRealizarCompra();
    return;
  }

  if (action === "go-register") {
    purchaseState.email = normalizeEmail(purchaseState.pendingEmail || purchaseState.email);
    purchaseState.step = 1;
    purchaseState.screen = "onboarding";
    renderRealizarCompra();
    return;
  }

  if (action === "login-submit") {
    const emailInput = document.querySelector("input[data-purchase-login='email']");
    const passInput = document.querySelector("input[data-purchase-login='password']");
    const email = normalizeEmail(emailInput?.value || "");
    const password = passInput?.value || "";

    if (!email || !password) {
      renderLoginScreen("Ingresa correo y contraseña.");
      return;
    }

    purchaseState.pendingEmail = email;
    purchaseState.email = email;

    const customer = getCustomerByEmail(email);
    const expectedPw =
      (customer && customer.password) || MOCK_PASSWORD_STORAGE[email];

    if (customer && expectedPw === password) {
      clearDraftPurchase();
      setSession(email, deepCloneCustomer(customer));
      resetPurchaseWizardState(email);
      purchaseState.screen = "accountDashboard";
      purchaseState.email = email;
      renderRealizarCompra();
      return;
    }

    renderLoginScreen(
      "Correo o contraseña incorrectos. Prueba cliente@biofit-demo.com / biofit2026 o crea cuenta nueva."
    );
    return;
  }

  if (action === "forgot") {
    event.preventDefault();
    renderLoginScreen("(Simulación) Revisa tu bandeja o contacta soporte BIOFIT.");
    return;
  }

  if (action === "new-purchase-from-account") {
    const session = getSession();
    resetPurchaseWizardState(session?.email || purchaseState.email);
    purchaseState.screen = "onboarding";
    purchaseState.step = 1;
    renderRealizarCompra();
    return;
  }

  if (action === "logout-account") {
    clearSession();
    resetPurchaseWizardState();
    purchaseState.pendingEmail =
      localStorage.getItem("biofit_last_email") || purchaseState.pendingEmail;
    purchaseState.screen = "intro";
    clearDraftPurchase();
    renderRealizarCompra();
    return;
  }

  if (action === "choose-plan") {
    purchaseState.selectedPlan = purchaseButton.dataset.value || "";
    renderRealizarCompra();
    return;
  }

  if (action === "choose-product") {
    purchaseState.selectedProduct = purchaseButton.dataset.value || "";
    renderRealizarCompra();
    return;
  }

  if (action === "set-payment") {
    purchaseState.paymentStatus = purchaseButton.dataset.value || "";
    renderRealizarCompra();
    return;
  }

  if (action === "back") {
    if (purchaseState.screen === "onboarding") {
      if (purchaseState.step <= 1) {
        purchaseState.screen = "login";
        purchaseState.pendingEmail =
          normalizeEmail(purchaseState.pendingEmail || purchaseState.email) ||
          normalizeEmail(document.querySelector("[data-purchase-login='email']")?.value);
        renderRealizarCompra();
        return;
      }
      purchaseState.step -= 1;
      renderRealizarCompra();
      return;
    }
  }

  if (action === "next") {
    if (purchaseState.screen !== "onboarding") return;

    const validationMessage = validatePurchaseNext();
    if (validationMessage) {
      renderRealizarCompra(validationMessage);
      return;
    }

    if (purchaseState.step === PURCHASE_TOTAL_STEPS) {
      completeNewUserPurchaseFlow();
      return;
    }

    purchaseState.step += 1;
    renderRealizarCompra();
  }
});

mainContent.addEventListener("input", (event) => {
  const target = event.target;
  if (
    !(target instanceof HTMLInputElement || target instanceof HTMLSelectElement) ||
    !target.dataset.purchaseInput &&
    !target.dataset.purchaseLogin
  ) {
    return;
  }

  if (target.dataset.purchaseInput === "pendingEmail") {
    purchaseState.pendingEmail = target.value;
    return;
  }
  if (target.dataset.purchaseInput) {
    const key = target.dataset.purchaseInput;
    purchaseState[key] = target.value;
    return;
  }
});

/** Login: Enter submits */
mainContent.addEventListener("keyup", (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.key !== "Enter") return;
  if (purchaseState.screen !== "login") return;
  if (
    event.target.dataset.purchaseLogin === "password" ||
    event.target.dataset.purchaseLogin === "email"
  ) {
    const loginSubmit = document.querySelector("button[data-purchase-action='login-submit']");
    loginSubmit?.click();
  }
});

generateNav();
setActiveModule("Inicio");
