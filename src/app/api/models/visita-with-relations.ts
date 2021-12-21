/* tslint:disable */
/* eslint-disable */
import { CasaWithRelations } from './casa-with-relations';

/**
 * (tsType: VisitaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface VisitaWithRelations {
  casa?: CasaWithRelations;
  casaId?: string;
  fechaEntrada: string;
  fechaSalida: string;
  id?: string;
  nombre: string;
}
