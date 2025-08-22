export interface DataBoard {
  id: number;
  company: string;
  status: "active" | "prospective" | "archived";
  projects: number;
}

export const data: DataBoard[] = [
  { id: 1, company: "AlphaTech Solutions", status: "active", projects: 12 },
  { id: 2, company: "BlueWave Consulting", status: "prospective", projects: 3 },
  { id: 3, company: "GreenField Industries", status: "archived", projects: 0 },
  { id: 4, company: "NovaCore Systems", status: "active", projects: 7 },
  {
    id: 5,
    company: "BrightPath Analytics",
    status: "prospective",
    projects: 2,
  },
  { id: 6, company: "RedRock Security", status: "active", projects: 15 },
  { id: 7, company: "SilverLine Transport", status: "archived", projects: 1 },
  { id: 8, company: "EverPeak Software", status: "active", projects: 8 },
  { id: 9, company: "Sunrise Media Group", status: "prospective", projects: 4 },
  { id: 10, company: "Quantum Dynamics", status: "active", projects: 10 },
  { id: 11, company: "Cobalt Works", status: "archived", projects: 0 },
  { id: 12, company: "NextGen Robotics", status: "active", projects: 9 },
  { id: 13, company: "UrbanHive Studios", status: "prospective", projects: 5 },
  { id: 14, company: "GoldenBridge Finance", status: "archived", projects: 1 },
  { id: 15, company: "AeroVista Logistics", status: "active", projects: 6 },
  {
    id: 16,
    company: "CrystalBay Technologies",
    status: "prospective",
    projects: 3,
  },
  { id: 17, company: "IronPeak Manufacturing", status: "active", projects: 11 },
  { id: 18, company: "StarPath Marketing", status: "archived", projects: 0 },
  { id: 19, company: "BlueSky Innovations", status: "active", projects: 13 },
  {
    id: 20,
    company: "EcoSphere Solutions",
    status: "prospective",
    projects: 2,
  },
];
