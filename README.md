# 🧪 Magento Automation Framework (Playwright + Cucumber + JavaScript)

Este proyecto automatiza pruebas E2E para el sitio de ejemplo:  
🔗 [https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com)  
Utiliza **Playwright**, **Cucumber.js** y **JavaScript**, estructurado bajo el patrón **Page Object Model (POM)**.

---

## 📁 Estructura del Proyecto

```plaintext
📂 magento-automation
├── 📁 features
│   ├── 📁 pages
│   │   ├── accountPage.js
│   │   ├── basePage.js
│   │   ├── homePage.js
│   │   ├── loginPage.js
│   │   ├── productPage.js
│   │   └── registrationPage.js
│   ├── 📁 step-definitions
│   │   ├── loginSteps.js
│   │   ├── purchaseSteps.js
│   │   └── registrationSteps.js
│   ├── 01_login.feature
│   ├── 02_registration.feature
│   └── 03_purchase.feature
├── 📁 support
│   ├── hooks.js
│   └── world.js
├── 📁 playwright-report
├── .babelrc
├── .gitignore
├── cucumber-report.json
├── playwright.config.js
├── package.json
├── README.md

```
⚙️ Requisitos Previos
Node.js: versión 18 a 20
npm: gestor de paquetes de Node.js

📦 Instalación
Clona el repositorio:

```
git clone [https://github.com/tu-usuario/magento-automation.git](https://github.com/tu-usuario/magento-automation.git)
cd magento-automation
```
Instala las dependencias necesarias:

```
npm install
npx playwright install

```
🚀 Ejecución de Pruebas:
```
Ejecutar todas las pruebas por defecto:
npm test
```

▶️ Ejecutar Pruebas por Etiquetas (Tags)
Solo login:
```
npm run test:login
```
Solo registro:
```
npm run test:register
```
Solo compra:
```
npm run run test:purchase
```
🌐 Ejecutar con Navegador Específico

```
npm run test:browser
```
🔁 Ejecutar Todas las Pruebas con Etiquetas
```

npm run test:all
```
📊 Generar Reportes
```
npm run report
```
📚 Tecnologías Utilizadas
Playwright – Automatización de navegadores moderna y confiable
Cucumber.js – Framework BDD con lenguaje Gherkin
Chai – Librería de aserciones
Faker – Generador de datos falsos para pruebas
Dotenv – Gestión de variables de entorno
Allure / Multiple HTML Reporter – Herramientas para generación de reportes visuales

🧠 Tips Útiles
Mantén los Page Objects independientes y reutilizables.
Usa hooks.js para manejar acciones de before, after, configuración y limpieza de contexto.
Usa world.js para configurar navegadores, parámetros globales y más.
Utiliza tags como @login, @purchase, etc., para segmentar la ejecución de pruebas.
