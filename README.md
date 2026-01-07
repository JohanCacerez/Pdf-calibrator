## Que es un Reporte

- El Reporte es una representación estructurada de una calibración
- Puede provenir de uno o varios TXT
  Puede exportarse a PDF

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

15. BOARDRESULT

- Resultado del test

16. TIMEEND

- Fecha y hora en la que termino la calibracion

17. END

- Muestra el resultado de la calibracion y su fecha y hora
