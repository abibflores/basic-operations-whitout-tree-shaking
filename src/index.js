import { join }   from 'lodash';

export const suma = (numero1, numero2) => {
  return numero1 + numero2;
};

export const unirPalabras = (palabra1, palabra2) => {
  return join([palabra1, palabra2], ' ');
};
