/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Casa, 'id'>, schemaOptions: { title: 'NewCasa', exclude: [ 'id' ] })
 */
export interface NewCasa {
  bloque: number;
  calle: number;
  numero: number;
  referencia?: string;

  [key: string]: any;
}
