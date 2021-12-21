/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Visita, 'id'>, 'casaId'>, schemaOptions: { title: 'NewVisitaInCasa', exclude: [ 'id' ], optional: [ 'casaId' ] })
 */
export interface NewVisitaInCasa {
  casaId?: string;
  fechaEntrada: string;
  fechaSalida: string;
  nombre: string;
}
