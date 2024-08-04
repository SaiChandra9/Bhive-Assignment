export interface LocationData {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: Record<
    number,
    { value: number; message: string }
  >;
  manager_id: string | null;
  can_edit: boolean;
  google_maps_url?: string; // Marked as optional
  contact_person_name?: string; // Marked as optional
}
