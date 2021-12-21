/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Visita, 'id'>, schemaOptions: { title: 'NewVisita', exclude: [ 'id' ] })
 */
export interface NewVisita {
  casaId?: string;
  fechaEntrada: string;
  fechaSalida: string;
  nombre: string;
}
