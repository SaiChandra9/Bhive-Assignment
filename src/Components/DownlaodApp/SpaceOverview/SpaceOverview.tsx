import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import { LocationData } from "../../../types";
import { data } from "../../../constants";
import "./index.css";

const spaceOverviewData: LocationData[] = data as LocationData[];

export default function SpaceOverview() {
  return (
    <div className="space-wrapper">
      <p className="space-overview-title">Our Space Overview</p>
      <div className="space-cards-wrapper">
        {spaceOverviewData.map((item) => (
          <InfoCard
            key={item.id}
            item={{
              ...item,
              amenities: item.amenities || [], // Provide a default empty array if amenities is null
            }}
          />
        ))}
      </div>
    </div>
  );
}
