# Challenge_04
** Hackers dañan sistema de archivos **

## Problem

En un mundo donde la información es poder, un hacker conocido como Savipo Yatar descubre una serie de archivos en un servidor altamente protegido.

Estos archivos contienen secretos que podrían cambiar el curso de la historia. Pero hay un problema: algunos de los archivos son falsos, diseñados para engañar a los intrusos. Savipo Yatar debe determinar rápidamente cuáles archivos son reales y cuáles son falsos.

Cada archivo tiene un nombre con dos partes, separadas por un guion (-). La primera parte es una cadena alfanumérica y la segunda es unchecksum, que es una cadena formada por los caracteres que sólo aparecen una vez en la primera parte y en el orden en que aparecen.

Escribe un programa que determine si un archivo es real o falso basado en estas reglas.

Ejemplos:

Nombre del archivo: xyzz33-xy
Resultado: ✅ Real (El checksum es válido)

Nombre del archivo: abcca1-ab1
Resultado: ❌ Falso (El checksum debería ser b1, es incorrecto)

Nombre del archivo: abbc11-ca
Resultado: ❌ Falso (El checksum debería ser ac, el orden es incorrecto)

** Tu desafío: **
Busca el archivo real número 33 (de todos los archivos reales, el 33º en orden de apareción) y envía su checksum con submit.
[Test string](https://codember.dev/data/files_quarantine.txt)

## Code

```javascript

function viewReal(string){
  return string.split('\n').filter(element => {
    const [alpha, checkKey] = element.split('-')
    const count = []
    for(let i = 0;  i < alpha.length; i++){
      count.push(0)
      for(let j = 0; j < alpha.length; j++){
        if(alpha[i] == alpha[j]){
          count[i]++
        }
      }
    }
    const realKey = []
      for (let j = 0; j < alpha.length; j++){
        if(count[j] == 1){
          realKey.push(alpha[j])
        }
      }
    return realKey.join('') === checkKey
  })[32]
  
}
               
```
