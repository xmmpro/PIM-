# DEFINICIONES DE QUE ES CADA COSA
.angular/        → caché interna de Angular (no tocar)
.vscode/         → configuración del editor
node_modules/    → dependencias (NO se sube a GitHub)
public/          → recursos estáticos (favicon, imágenes públicas)
src/             → AQUÍ VIVES TÚ (Todo lo importante está en src/, especialmente en src/app.)

# FLUJO MENTAL DE ANGULAR
index.html
   ↓
main.ts
   ↓
AppComponent (app.ts)
   ↓
Rutas (app.routes.ts)
   ↓
Componentes (Home, Categories, etc.)


## INDEX.HTML (src/index.html)
<body>
  <app-root></app-root>
</body>

- <app-root> es una etiqueta inventada por Angular (Angular inyecta todo ahí dentro)
- Nunca pongas contenido aquí, solo estructura base (title, meta, favicon).

## main.ts (punto de arranque real)
- src/main.ts -> “Arranca Angular y usa este componente como raíz”
- bootstrapApplication(AppComponent, appConfig);
 - Aquí Angular se inicia
 - Aquí se conecta todo
 - No se toca casi nunca

## app.ts → EL CEREBRO (AppComponent)
- src/app/app.ts -> Este archivo es el componente raíz.
- selector: 'app-root' -> Coincide con <app-root> del index.html
- templateUrl -> Qué HTML se renderiza
- styleUrl -> Estilos SOLO de este componente
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}

- AppComponent no debe tener lógica, Es solo un contenedor

## app.html (layout principal)
- src/app/app.html
- Aquí normalmente pondremos: <app-header></app-header>  //  <router-outlet></router-outlet> // <app-footer></app-footer>
-router-outlet ->  Es donde Angular pinta las páginas según la URL

## app.routes.ts (navegación)
- src/app/app.routes.ts -> Aquí defines qué componente se ve según la ruta.

##  Estructura
src/
 ├─ app/
 │   ├─ pages/
 │   │   └─ home/
 │   │       ├─ home.ts
 │   │       ├─ home.html
 │   │       ├─ home.scss
 │   │       └─ home.spec.ts
 │   │
 │   ├─ app.ts
 │   ├─ app.html
 │   ├─ app.scss
 │   ├─ app.routes.ts
 │
 ├─ styles.scss
 ├─ main.ts
 └─ index.html

