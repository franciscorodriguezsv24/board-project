interface DataBoard { 
    company: string;
    status: "active" | "prospective" | "archived" ;
    projects: number ;
}

export const DataBoard: DataBoard[] = [
  { "company": "AlphaTech Solutions", "status": "active", "projects": 12 },
  { "company": "BlueWave Consulting", "status": "prospective", "projects": 3 },
  { "company": "GreenField Industries", "status": "archived", "projects": 0 },
  { "company": "NovaCore Systems", "status": "active", "projects": 7 },
  { "company": "BrightPath Analytics", "status": "prospective", "projects": 2 },
  { "company": "RedRock Security", "status": "active", "projects": 15 },
  { "company": "SilverLine Transport", "status": "archived", "projects": 1 },
  { "company": "EverPeak Software", "status": "active", "projects": 8 },
  { "company": "Sunrise Media Group", "status": "prospective", "projects": 4 },
  { "company": "Quantum Dynamics", "status": "active", "projects": 10 },
  { "company": "Cobalt Works", "status": "archived", "projects": 0 },
  { "company": "NextGen Robotics", "status": "active", "projects": 9 },
  { "company": "UrbanHive Studios", "status": "prospective", "projects": 5 },
  { "company": "GoldenBridge Finance", "status": "archived", "projects": 1 },
  { "company": "AeroVista Logistics", "status": "active", "projects": 6 },
  { "company": "CrystalBay Technologies", "status": "prospective", "projects": 3 },
  { "company": "IronPeak Manufacturing", "status": "active", "projects": 11 },
  { "company": "StarPath Marketing", "status": "archived", "projects": 0 },
  { "company": "BlueSky Innovations", "status": "active", "projects": 13 },
  { "company": "EcoSphere Solutions", "status": "prospective", "projects": 2 }
]
