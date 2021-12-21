/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<HabitantesCasa, 'id'>, 'residenteId'>, schemaOptions: { title: 'NewHabitantesCasaInResidente', exclude: [ 'id' ], optional: [ 'residenteId' ] })
 */
export interface NewHabitantesCasaInResidente {
  casaId?: string;
  parentesco?: string;
  residenteId?: string;
}
