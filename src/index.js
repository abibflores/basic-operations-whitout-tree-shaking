import Lodash from 'lodash';

export const suma = (numero1, numero2) => {
  return numero1 + numero2;
};

export const unirPalabras = (palabra1, palabra2) => {
  return Lodash.join([palabra1, palabra2], ' ');
};
