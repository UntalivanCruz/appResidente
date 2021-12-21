/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Residente, 'id'>, schemaOptions: { title: 'NewResidente', exclude: [ 'id' ] })
 */
export interface NewResidente {
  identificacion: number;
  nombre: string;
  telefono?: number;
}
