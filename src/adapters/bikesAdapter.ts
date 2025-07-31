import type { Bike } from '@/models';

export interface BikeRow {
  dateStolen: number;
  serial: string;
  model: string;
  manufacturer: string;
  frameModel: string | null;
}

export const bikesAdapter = (bikes: Bike[]): BikeRow[] =>
  bikes.map((bike) => ({
    dateStolen: bike.date_stolen,
    serial: bike.serial,
    model: bike.title,
    manufacturer: bike.manufacturer_name,
    frameModel: bike.frame_model,
  }));
