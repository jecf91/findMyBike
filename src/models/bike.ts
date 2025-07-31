export type CycleTypeSlug = 'bike';

export type PropulsionTypeSlug = 'foot-pedal' | 'pedal-assist';

export type Status = 'stolen';

export interface Bike {
  date_stolen: number;
  description: null | string;
  frame_colors: string[];
  frame_model: null | string;
  id: number;
  is_stock_img: boolean;
  large_img: null | string;
  location_found: null;
  manufacturer_name: string;
  external_id: null;
  registry_name: null;
  registry_url: null;
  serial: string;
  status: Status;
  stolen: boolean;
  stolen_coordinates: number[];
  stolen_location: string;
  thumb: null | string;
  title: string;
  url: string;
  year: number | null;
  propulsion_type_slug: PropulsionTypeSlug;
  cycle_type_slug: CycleTypeSlug;
}

export interface Bikes {
  bikes: Bike[];
}
