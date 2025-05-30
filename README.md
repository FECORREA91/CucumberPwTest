# 🧪 Magento Automation Framework (Playwright + Cucumber + JavaScript)

Este proyecto automatiza pruebas E2E para el sitio de ejemplo:  
🔗 [https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com)  
Utiliza **Playwright**, **Cucumber.js** y **JavaScript**, estructurado bajo el patrón **Page Object Model (POM)**.

---

## 📁 Estructura del Proyecto
CUCUMBERPWTEST/
├── features/
│ ├── pages/ # Page Object Model (POM)
│ │ ├── accountPage.js
│ │ ├── basePage.js
│ │ ├── homePage.js
│ │ ├── loginPage.js
│ │ ├── productPage.js
│ │ └── registrationPage.js
│ ├── step-definitions/ # Step Definitions para cada feature
│ │ ├── loginSteps.js
│ │ ├── purchaseSteps.js
│ │ └── registrationSteps.js
│ ├── 01_login.feature # Escenario de Login
│ ├── 02_registration.feature # Escenario de Registro
│ └── 03_purchase.feature # Escenario de Compra
├── support/
│ ├── hooks.js # Hooks globales de Cucumber
│ └── world.js # Configuración personalizada del "World" (parámetros)
├── .babelrc # Configuración Babel (ES6+)
├── .gitignore
├── cucumber-report.json # Reporte JSON de Cucumber
├── playwright.config.js # Configuración de Playwright
├── package.json # Configuración del proyecto y scripts
├── README.md
└── playwright-report/ # Reportes de Playwright

## ⚙️ Requisitos Previos
- Node.js v18 - v20
- npm

Verifica:

```bash
node -v
npm -v

📦 Instalación
Clona el repositorio:
git clone https://github.com/tu-usuario/magento-automation.git
cd magento-automation

Instala dependencias:
npm install
npx playwright install

🚀 Ejecución de Pruebas
✅ Ejecutar todas las pruebas:
npm test

▶️ Ejecutar por tags:
npm run test:login        # Solo login
npm run test:register     # Solo registro
npm run test:purchase     # Solo compra

🌐 Ejecutar con navegador específico:
npm run test:browser

🔁 Ejecutar todas las pruebas con etiquetas:
npm run test:all

📊 Reportes
npm run report

📚 Tecnologías

Playwright – automatización de navegadores
Cucumber.js – pruebas BDD con lenguaje Gherkin
Chai – aserciones
Faker – generación de datos de prueba
Dotenv – manejo de variables de entorno
Allure / Multiple HTML Reporter – generación de reportes

🧠 Tips
Mantén los Page Objects independientes y reutilizables.
Usa los hooks.js para manejar before, after, setup o limpieza de contexto.
Usa world.js para configurar navegadores, parámetros, etc.
Utiliza tags como @login, @purchase para segmentar la ejecución.


