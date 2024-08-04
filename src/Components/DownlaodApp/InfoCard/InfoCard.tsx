import React from "react";
import "./index.css";

// Define the type for item
interface DayPassDiscount {
  value: number;
  message: string;
}

interface DataItem {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: Record<number, DayPassDiscount>;
  manager_id: string | null;
  can_edit?: boolean;
}

interface InfoCardProps {
  item: DataItem;
}

export default function InfoCard({ item }: InfoCardProps) {
  function checkLocation(input: string): JSX.Element {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes("platinum")) {
      return (
        <div className="hi">
          <img src={require("./static_assets/platinum-icon.png")} alt="Platinum Icon" />
          <span className="title-cover">Platinum</span>
        </div>
      );
    } else if (lowerCaseInput.includes("campus")) {
      return (
        <div className="hi">
          <img src={require("./static_assets/campus-icon.png")} alt="Campus Icon" />
          <span className="title-cover">Campus</span>
        </div>
      );
    } else {
      return (
        <div className="hi">
          <img src={require("./static_assets/workspace-icon.png")} alt="Workspace Icon" />
          <span className="title-cover">Workspace</span>
        </div>
      );
    }
  }

  const Icon = (): JSX.Element => {
    return (
      <div className="arrow">
        <img src={require("./static_assets/lightStrokeArrow.png")} alt="Light Stroke Arrow" />
        <img src={require("./static_assets/mediumStrokeArrow.png")} alt="Medium Stroke Arrow" />
        <img src={require("./static_assets/highStrokeArrow.png")} alt="High Stroke Arrow" />
      </div>
    );
  };

  const Button = (): JSX.Element => (
    <div className="pass-options">
      <div className="button-pass day-pass">
        <div className="pass-info">
          <div style={{ paddingBottom: "4px" }}>Day Pass</div>
          <div>
            ₹ {item.day_pass_price}
            <span className="per-day">/ Day</span>
          </div>
        </div>
        <Icon />
      </div>
      <div className="button-pass bulk-pass">
        <div className="discount-badge">20% Discount</div>
        <div className="pass-info">
          <div style={{ paddingBottom: "4px" }}>Bulk Pass</div>
          <div>
            ₹ 2400<span className="per-day">/ 10 Days</span>
          </div>
        </div>
        <Icon />
      </div>
    </div>
  );

  return (
    <div className="card-wrapper">
      <div className="title-wrapper">
        <div>
          <div className="title">{item.name}</div>
        </div>
        <div className="logo-wrapper">
          <img src={require("./static_assets/assistant_direction.png")} alt="Assistant Direction" />
          <div className="direction-count">6 kms</div>
        </div>
      </div>
      <div className="image-wrapper">
        {checkLocation(item.name)}
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={require(`./${item.images[0]}`)}
          alt="Location Image"
        />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
