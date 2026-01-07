# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Que es un Reporte

- Es un archivo de texto (.txt) el cual se genera a partir de una calibracion de la maquina de SPEA, este reporte puede estar generado a partir de multiples archivos .txt, el reporte se genera en formato PDF

## La infromacion minima que debe contener cada reporte (.txt) debe ser la siguiente

1. DATAFORMATVERSION

- Este apartado rige que version del formato se esta usando, en esta version (1.0) solo se aceptara la version 3

2. FORMAT

- Este apartado rige el formato de la fecha, en esta version (1.0) solo sera aceptado el formato mmdd

3. START

- En este apartado se mostraran los datos de incio de lacalibracion tales como: version, equipó, fecha y ora, etc

4. TIMESTART

- En este apartado se mostrara la fecha y hora de inicio

5. SWVERSION

- Este apartado nos mostrara la version del software

6. LOT

- Sin informacion

7. FIXTURECODE

- Se mostrara el codigo de la fixtura

8. SYSNAME

- Sin informacion

9. FIXTURENAME

- Sin informacion

10. CARRIERNAME

- Sin informacion

11. TOPPLATENAME

- Sin informacion

12. CUSTOMINFO1

- Sin informacion

13. CUSTOMINFO2

- Sin informacion

14. FUNC

- Indica que es una prueba funcional
- Tipo: Identificador numerico consistente
- Nombre de la prueba: Texto libre
- Grupo: Grupo o categoria de prueba
- Subgrupo: Indice dentro del grupo
- Descripcion: Alias de la prueba
- ``: Campo vacio
- Resultado: Viene por la maquina
- Medido: Valor medido real
- Limite bajo: Limite inferior permitido
- Limite alto: Limite superior permitido
- Unidad: Que se mido V, mV, C
