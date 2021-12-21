/* tslint:disable */
/* eslint-disable */
import { CasaWithRelations } from './casa-with-relations';
import { ResidenteWithRelations } from './residente-with-relations';

/**
 * (tsType: HabitantesCasaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface HabitantesCasaWithRelations {
  casa?: CasaWithRelations;
  casaId?: string;
  id?: string;
  parentesco?: string;
  residente?: ResidenteWithRelations;
  residenteId?: string;
}
