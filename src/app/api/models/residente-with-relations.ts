/* tslint:disable */
/* eslint-disable */
import { HabitantesCasaWithRelations } from './habitantes-casa-with-relations';

/**
 * (tsType: ResidenteWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ResidenteWithRelations {
  habitantesCasas?: Array<HabitantesCasaWithRelations>;
  id?: string;
  identificacion: number;
  nombre: string;
  telefono?: number;
}
