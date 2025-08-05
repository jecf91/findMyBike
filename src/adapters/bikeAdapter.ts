import type { Bike, Status } from '@/models';
import type { LatLngTuple } from 'leaflet';

export interface BikeAdapter {
  dateStolen: number;
  description: string | null;
  manufacturer: string;
  serial: string;
  status: Status;
  stolenLocation: string;
  stolenCoordinates: LatLngTuple;
  frameColors: string[];
  frameModel: string | null;
  image: string | null;
  title: string;
}

export const bikeAdapter = (bike: Bike): BikeAdapter => ({
  dateStolen: bike.date_stolen,
  description: bike.description,
  manufacturer: bike.manufacturer_name,
  serial: bike.serial,
  status: bike.status,
  stolenLocation: bike.stolen_location,
  stolenCoordinates: bike.stolen_coordinates as LatLngTuple,
  frameColors: bike.frame_colors,
  frameModel: bike.frame_model,
  image: bike.large_img,
  title: bike.title,
});
