/* tslint:disable */
/* eslint-disable */
import { HabitantesCasaWithRelations } from './habitantes-casa-with-relations';
import { VisitaWithRelations } from './visita-with-relations';

/**
 * (tsType: CasaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CasaWithRelations {
  bloque: number;
  calle: number;
  habitantesCasas?: Array<HabitantesCasaWithRelations>;
  id?: string;
  numero: number;
  referencia?: string;
  visitas?: Array<VisitaWithRelations>;

  [key: string]: any;
}
