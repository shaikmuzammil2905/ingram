export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  mainCategory: "ict-hardware" | "software" | "electronics" | "office-equipment" | "consumables";
  brand?: string;
  model?: string;
  shortDescription: string;
  description: string[];
  features: string[];
  specifications: { [key: string]: string };
  image: string;
  gallery?: string[];
  price?: string; // only if verified, otherwise undefined
  inStock?: boolean;
  tags?: string[];
  printerCompatibility?: string[]; // for consumables/toners
}

export interface CategoryInfo {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  mainCategory: "ict-hardware" | "software" | "electronics" | "office-equipment" | "consumables";
  bannerImage: string;
  iconName: string;
  keyFeatures: string[];
}

export const ICT_HARDWARE_CATEGORIES: CategoryInfo[] = [
  {
    id: "laptops-desktops",
    slug: "laptops-desktops",
    title: "Laptops & Desktops",
    subtitle: "Enterprise computing, business laptops & high-performance workstations",
    description: "Reliable, enterprise-grade business laptops, desktop computers, all-in-one PCs, and engineering workstations from leading manufacturers tailored for corporate and industrial operations in Tanzania.",
    mainCategory: "ict-hardware",
    bannerImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&q=80",
    iconName: "Laptop",
    keyFeatures: [
      "Enterprise security & remote manageability",
      "High-end CAD & engineering workstation configurations",
      "All-in-one space-saving office desktop PCs",
      "Full manufacturer warranty & local technical support"
    ]
  },
  {
    id: "printers",
    slug: "printers",
    title: "Office Printers & Multifunction Devices",
    subtitle: "Heavy-duty laser printers, multifunction copiers & high-speed scanners",
    description: "Cost-effective, high-volume office printing and document management solutions. We supply monochrome and color laser printers, wireless network copiers, and heavy-duty scanners for enterprise productivity.",
    mainCategory: "ict-hardware",
    bannerImage: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=80",
    iconName: "Printer",
    keyFeatures: [
      "Low cost-per-page laser printing",
      "Network duplex printing, scanning & copying",
      "Secure PIN & badge print release",
      "Compatible with high-yield toner cartridges"
    ]
  },
  {
    id: "networking-products",
    slug: "networking-products",
    title: "Networking Products & Infrastructure",
    subtitle: "Managed switches, enterprise routers, Wi-Fi 6 access points & server racks",
    description: "Design and implement resilient enterprise networking infrastructure. We deliver Gigabit/10G managed switches, high-throughput security routers, long-range wireless access points, and structured cabling accessories.",
    mainCategory: "ict-hardware",
    bannerImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    iconName: "Network",
    keyFeatures: [
      "Enterprise Layer 2/3 managed PoE+ switching",
      "High-capacity multi-gigabit routing & firewall integration",
      "High-density commercial Wi-Fi 6 mesh coverage",
      "Server rack cabinets & fiber optic patch solutions"
    ]
  },
  {
    id: "security-surveillance",
    slug: "security-surveillance",
    title: "Security & Surveillance Products",
    subtitle: "AI IP cameras, Network Video Recorders (NVR), biometric access & intrusion control",
    description: "Protect your commercial facilities and industrial plants with modern IP surveillance systems, 4K night-vision cameras, intelligent AI video analytics, and biometric time-attendance access control hardware.",
    mainCategory: "ict-hardware",
    bannerImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&q=80",
    iconName: "Shield",
    keyFeatures: [
      "4K Ultra-HD night-vision & PTZ perimeter cameras",
      "AI human & vehicle license plate recognition",
      "Scalable multi-channel NVRs with RAID redundancy",
      "Biometric fingerprint & facial recognition access control"
    ]
  },
  {
    id: "power-backup",
    slug: "power-backup",
    title: "Power Backup & UPS Systems",
    subtitle: "Online double-conversion UPS, industrial power protection & battery banks",
    description: "Guard against voltage spikes, sags, and blackout downtime. We supply pure sine wave online UPS systems, high-capacity sealed lead-acid/lithium battery banks, and automatic voltage regulators for continuous operational uptime.",
    mainCategory: "ict-hardware",
    bannerImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80",
    iconName: "Zap",
    keyFeatures: [
      "Zero-transfer-time Online Double Conversion topology",
      "Extended battery runtime modules for server rooms & skids",
      "Automatic Voltage Regulation (AVR) protection",
      "SNMP network remote management & telemetry cards"
    ]
  }
];

export const SOFTWARE_CATEGORIES: CategoryInfo[] = [
  {
    id: "microsoft-products",
    slug: "microsoft-products",
    title: "Microsoft Products & Cloud Solutions",
    subtitle: "Microsoft 365, Windows Server, Azure cloud productivity & licensing",
    description: "Empower your workforce with genuine Microsoft productivity and cloud suites. We supply Microsoft 365 Business, Office Home & Business, Windows 11 Pro, and Windows Server licensing with full setup support.",
    mainCategory: "software",
    bannerImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
    iconName: "LayoutGrid",
    keyFeatures: [
      "Microsoft 365 Business Standard & Premium licensing",
      "Exchange Online business email & Teams collaboration",
      "OneDrive for Business & SharePoint cloud storage",
      "Windows Server & SQL Server enterprise CALs"
    ]
  },
  {
    id: "hrms-payroll",
    slug: "hrms-payroll",
    title: "HRMS & Payroll Software",
    subtitle: "Automated payroll processing, biometric attendance, tax compliance & employee portal",
    description: "Modernize human resources management with automated payroll processing aligned with Tanzanian statutory requirements (PAYE, NSSF, WCF, NHIF). Includes biometric attendance sync and self-service leave management.",
    mainCategory: "software",
    bannerImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    iconName: "Users",
    keyFeatures: [
      "One-click Tanzanian statutory tax & deduction calculations",
      "Direct integration with biometric fingerprint & face terminals",
      "Self-service employee leave & payslip download portal",
      "Comprehensive HR audit trails and analytics reporting"
    ]
  },
  {
    id: "autocad",
    slug: "autocad",
    title: "AutoCAD & CAD Solutions",
    subtitle: "2D drafting, 3D mechanical modeling & architectural design software",
    description: "Equip your engineering, architectural, and design teams with industry-standard CAD software. Facilitating precise 2D drafting, 3D mechanical modeling, isometric pipe design, and BIM project collaboration.",
    mainCategory: "software",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
    iconName: "DraftingCompass",
    keyFeatures: [
      "Precision 2D drafting and documentation toolsets",
      "3D modeling and visualization capabilities",
      "Specialized mechanical, electrical & plant toolsets",
      "Commercial subscription & multi-seat licensing consultation"
    ]
  },
  {
    id: "assessment-management",
    slug: "assessment-management",
    title: "Assessment Management Software",
    subtitle: "Online examinations, question banks, automated grading & performance analytics",
    description: "Secure, scalable examination and assessment platforms for corporate training programs, academic institutions, and certification bodies. Features randomized question banks, proctoring controls, and instant analytical gradebooks.",
    mainCategory: "software",
    bannerImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
    iconName: "GraduationCap",
    keyFeatures: [
      "Multi-format question banks with multimedia support",
      "Automated evaluation and detailed candidate scorecards",
      "Anti-cheating exam security & remote proctoring options",
      "Classroom and corporate training performance metrics"
    ]
  },
  {
    id: "tally-erp",
    slug: "tally-erp",
    title: "Tally ERP & Business Management",
    subtitle: "Accounting, inventory tracking, VAT invoicing & financial reporting",
    description: "Streamline accounting, inventory management, and taxation with robust Tally solutions. Designed for small, medium, and growing enterprises in Tanzania to track transactions, cash flows, and warehouse stock accurately.",
    mainCategory: "software",
    bannerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    iconName: "Calculator",
    keyFeatures: [
      "Comprehensive financial accounting and ledger management",
      "Multi-location inventory tracking with batch and expiry control",
      "Compliant VAT tax invoicing and reporting",
      "Multi-currency support and real-time balance sheet reports"
    ]
  }
];

export const OFFICE_EQUIPMENT_CATEGORIES: CategoryInfo[] = [
  {
    id: "computer-tables",
    slug: "computer-tables",
    title: "Computer Tables & Workstations",
    subtitle: "Modern office desks, executive tables & modular modular work pods",
    description: "Durable, ergonomic computer tables and modular workstations built for modern office ergonomics. Features integrated wire management, scratch-resistant melamine surfaces, and sturdy metal frame construction.",
    mainCategory: "office-equipment",
    bannerImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&q=80",
    iconName: "Monitor",
    keyFeatures: [
      "High-density scratch and heat resistant wood finishes",
      "Built-in cable grommets & discreet wire trays",
      "Modular multi-person collaborative cluster desk systems",
      "Heavy-duty powder-coated steel leg frames"
    ]
  },
  {
    id: "office-chairs",
    slug: "office-chairs",
    title: "Ergonomic Office Chairs",
    subtitle: "High-back executive chairs, mesh task seating & boardroom chairs",
    description: "Support all-day workplace comfort with high-performance ergonomic seating. Equipped with breathable mesh backrests, adjustable lumbar support, multi-position tilt lock mechanisms, and smooth nylon castors.",
    mainCategory: "office-equipment",
    bannerImage: "https://images.unsplash.com/photo-1580481077190-7361356a15fa?w=1200&q=80",
    iconName: "Armchair",
    keyFeatures: [
      "Adjustable lumbar support & multi-directional armrests",
      "High-density molded foam seat cushions for long shifts",
      "Certified Class-4 pneumatic gas lift cylinders",
      "Breathable Korean mesh upholstery for tropical comfort"
    ]
  },
  {
    id: "file-racks",
    slug: "file-racks",
    title: "File Racks & Storage Organizers",
    subtitle: "Heavy-duty steel file racks, archive shelving & document organizers",
    description: "Maximize office and archive organization with heavy-duty metal shelving units and document file racks. Built with reinforced steel uprights to support high-density binder and folder loads without bending.",
    mainCategory: "office-equipment",
    bannerImage: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=1200&q=80",
    iconName: "FolderKanban",
    keyFeatures: [
      "Heavy gauge steel construction with electro-static powder coating",
      "Adjustable shelf heights to fit standard box files & binders",
      "High weight capacity per shelf tier (up to 100kg+)",
      "Corrosion resistant finish suitable for long-term archiving"
    ]
  },
  {
    id: "cupboards",
    slug: "cupboards",
    title: "Office Cupboards & Lockers",
    subtitle: "Secure steel filing cabinets, tambour storage & lockable metal cupboards",
    description: "Keep confidential corporate documents and valuable office supplies secure with lockable steel storage cupboards, sliding glass cabinets, and multi-drawer filing cabinets.",
    mainCategory: "office-equipment",
    bannerImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    iconName: "Archive",
    keyFeatures: [
      "Three-point central locking system with master keys",
      "Reinforced steel door panels with concealed hinges",
      "Smooth glide drawer rails for letter/legal filing folders",
      "Durable epoxy polyester anti-scratch powder coat"
    ]
  }
];

export const CONSUMABLES_CATEGORIES: CategoryInfo[] = [
  {
    id: "printer-paper",
    slug: "printer-paper",
    title: "Printer Paper & Office Stationery",
    subtitle: "A4, A3 high-grade copy paper, continuous forms & specialty media",
    description: "Premium, high-whiteness 75gsm and 80gsm A4 and A3 printing paper optimized for jam-free high-speed laser and inkjet office copiers. Suitable for sharp text and crisp color documents.",
    mainCategory: "consumables",
    bannerImage: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=1200&q=80",
    iconName: "FileText",
    keyFeatures: [
      "100% pure wood pulp with 98%+ brightness",
      "Precision rotary cut edges to eliminate paper jams",
      "Available in 75 GSM, 80 GSM, and specialty photo paper",
      "Standard 500-sheet reams / 5-ream carton boxes"
    ]
  },
  {
    id: "toners-cartridges",
    slug: "toners-cartridges",
    title: "Toners & Ink Cartridges",
    subtitle: "High-yield laser toner cartridges, original & compatible consumables",
    description: "Reliable toner and ink cartridges for HP, Canon, Epson, Brother, and Kyocera printers. Guaranteed high page yields, deep blacks, and vibrant color output with zero smudge risk.",
    mainCategory: "consumables",
    bannerImage: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=80",
    iconName: "Droplet",
    keyFeatures: [
      "High page-yield formulations with micro-refined toner powder",
      "Chip-enabled for accurate ink level reporting",
      "Crisp, smear-free text and rich photographic prints",
      "Wide compatibility across common Tanzanian office printer fleets"
    ]
  }
];

export const ELECTRONICS_CATEGORIES = [
  {
    id: "tvs-displays",
    slug: "tvs-displays",
    title: "Televisions & Commercial Displays",
    description: "4K UHD Smart TVs, commercial digital signage, and boardroom displays with crystal clear picture quality.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    count: "12+ Models"
  },
  {
    id: "refrigerators-cooling",
    slug: "refrigerators-cooling",
    title: "Refrigerators & Cooling",
    description: "Energy-efficient double door refrigerators, chest freezers, and commercial beverage coolers.",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
    count: "15+ Models"
  },
  {
    id: "washing-machines",
    slug: "washing-machines",
    title: "Washing Machines & Laundry",
    description: "Front-load and top-load automatic washing machines with inverter motors and steam hygiene cycles.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80",
    count: "8+ Models"
  },
  {
    id: "audio-sound",
    slug: "audio-sound",
    title: "Audio & Entertainment Systems",
    description: "Dolby Atmos soundbars, commercial public address systems, and high-fidelity Bluetooth audio equipment.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    count: "6+ Models"
  },
  {
    id: "kitchen-appliances",
    slug: "kitchen-appliances",
    title: "Kitchen & Small Appliances",
    description: "Microwave ovens, water dispensers, electric kettles, and hospitality beverage appliances.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    count: "14+ Models"
  },
  {
    id: "air-conditioners",
    slug: "air-conditioners",
    title: "Air Conditioners & Climate Control",
    description: "Inverter split air conditioners, portable cooling units, and commercial office HVAC airflow solutions.",
    image: "https://images.unsplash.com/photo-1614633833026-0820552978b6?w=800&q=80",
    count: "7+ Models"
  }
];

export const ALL_PRODUCTS: ProductItem[] = [
  // ------------------ ELECTRONICS SHOWROOM PRODUCTS ------------------
  {
    id: "elec-tv-65-4k",
    slug: "smart-4k-uhd-led-tv-65",
    name: "65-Inch 4K UHD Smart HDR Display",
    category: "Televisions & Commercial Displays",
    categorySlug: "tvs-displays",
    mainCategory: "electronics",
    brand: "Ingram Certified Range",
    model: "ING-65UHD-PRO",
    shortDescription: "Ultra-slim bezel 4K display with HDR10+, Dolby Audio, and built-in smart apps for conference rooms and executive lounges.",
    description: [
      "Experience lifelike picture clarity with 3840 x 2160 Ultra-HD resolution and vivid color contrast.",
      "Engineered for both boardroom presentations and entertainment, featuring wireless screen casting, HDMI 2.1 inputs, and ambient brightness adjustment."
    ],
    features: [
      "4K Ultra HD 3840x2160 Resolution with Direct LED Backlight",
      "HDR10+ & HLG High Dynamic Range Enhancement",
      "Dolby Audio 20W Stereo Sound with Voice Clarity Mode",
      "Dual-Band Wi-Fi, Bluetooth 5.0, 3x HDMI, 2x USB",
      "Wireless Screen Mirroring for Laptops & Mobile Devices"
    ],
    specifications: {
      "Screen Size": "65 Inch Diagonal",
      "Resolution": "3840 x 2160 (4K UHD)",
      "Refresh Rate": "60 Hz",
      "Audio Output": "2x 10W Stereo with Dolby Audio",
      "Connectivity": "3x HDMI, 2x USB, RJ45 LAN, Optical Audio",
      "Power Rating": "100-240V ~ 50/60Hz, 160W"
    },
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80"
    ],
    inStock: true,
    tags: ["4K", "Smart TV", "Boardroom Display", "HDR10"]
  },
  {
    id: "elec-tv-55-4k",
    slug: "smart-4k-uhd-led-tv-55",
    name: "55-Inch 4K UHD Smart Commercial TV",
    category: "Televisions & Commercial Displays",
    categorySlug: "tvs-displays",
    mainCategory: "electronics",
    brand: "Ingram Certified Range",
    model: "ING-55UHD-BIZ",
    shortDescription: "Vibrant 55-inch 4K Smart TV with wide viewing angles, low energy consumption, and high contrast ratio.",
    description: [
      "Ideal for meeting rooms, reception lobbies, and residential suites, offering crisp 4K imagery and seamless HDMI connectivity."
    ],
    features: [
      "3840 x 2160 True 4K Ultra-HD panel",
      "Fast response time for fluid video playback",
      "USB Media Player for automated promotional slideshows",
      "Energy Star rated low power standby"
    ],
    specifications: {
      "Screen Size": "55 Inch",
      "Resolution": "3840 x 2160",
      "Inputs": "3x HDMI, 2x USB, AV In, Ethernet",
      "Warranty": "1 Year Standard Warranty"
    },
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80",
    inStock: true,
    tags: ["55 Inch", "Commercial TV", "4K"]
  },
  {
    id: "elec-fridge-double-door",
    slug: "frost-free-double-door-refrigerator-320l",
    name: "320L Frost-Free Double Door Refrigerator",
    category: "Refrigerators & Cooling",
    categorySlug: "refrigerators-cooling",
    mainCategory: "electronics",
    brand: "Ingram Certified Cooling",
    model: "ING-REF-320FF",
    shortDescription: "Total No Frost double-door refrigerator with inverter compressor, multi-air flow cooling, and energy-saving operation.",
    description: [
      "Engineered for tropical climates with fast chill technology, tempered glass shelves, and vegetable moisture control crisper."
    ],
    features: [
      "Total No Frost technology — zero manual defrosting required",
      "Digital Inverter Compressor for quiet and efficient performance",
      "Multi-Air Flow columns cooling every compartment evenly",
      "Heavy-duty spill-proof tempered glass shelves",
      "Bright LED interior light and twist ice tray"
    ],
    specifications: {
      "Gross Capacity": "320 Litres",
      "Cooling Type": "Frost Free (Multi Air Flow)",
      "Refrigerant": "R600a Eco-friendly Gas",
      "Voltage": "220V - 240V / 50Hz (Built-in Surge Protection)",
      "Dimensions": "1720mm (H) x 600mm (W) x 650mm (D)"
    },
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80",
    inStock: true,
    tags: ["Frost Free", "Double Door", "Refrigerator"]
  },
  {
    id: "elec-freezer-chest-250",
    slug: "heavy-duty-chest-freezer-250l",
    name: "250L Heavy-Duty Commercial Chest Freezer",
    category: "Refrigerators & Cooling",
    categorySlug: "refrigerators-cooling",
    mainCategory: "electronics",
    brand: "Ingram Certified Cooling",
    model: "ING-FRZ-250C",
    shortDescription: "Super-freeze chest freezer with aluminum interior, safety key lock, and up to 48 hours cooling retention during power cuts.",
    description: [
      "Specially insulated with thick polyurethane foam to safeguard perishable inventory even during power outages."
    ],
    features: [
      "Super Fast Freezing Switch (-24°C capability)",
      "High-efficiency compressor designed for tropical ambient temperatures",
      "Internal wire basket and built-in drainage port for easy cleaning",
      "Integrated key lock handle for inventory security"
    ],
    specifications: {
      "Net Capacity": "250 Litres",
      "Temperature Range": "0°C to -24°C (Adjustable Thermostat)",
      "Interior Liner": "Embossed Aluminum",
      "Power": "220-240V ~ 50Hz"
    },
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80",
    inStock: true,
    tags: ["Chest Freezer", "Commercial Freezer"]
  },
  {
    id: "elec-washer-front-load-8kg",
    slug: "front-load-automatic-washing-machine-8kg",
    name: "8kg Front Load Inverter Washing Machine",
    category: "Washing Machines & Laundry",
    categorySlug: "washing-machines",
    mainCategory: "electronics",
    brand: "Ingram Certified Appliances",
    model: "ING-WM-80FL",
    shortDescription: "High-efficiency front loader with brushless inverter motor, 15 wash programs, 95°C steam allergy care, and 1400 RPM spin speed.",
    description: [
      "Gentle drum honeycomb pattern protecting fabrics while delivering thorough cleaning for hospitality and residential use."
    ],
    features: [
      "Direct Drive BLDC Inverter Motor with 10-year durability design",
      "15 Wash Programs including Quick 15', Delicates, Cotton & Bedding",
      "95°C High-Temperature Hygiene & Drum Clean Cycle",
      "Automatic unbalanced load detection and child lock protection"
    ],
    specifications: {
      "Washing Capacity": "8.0 kg",
      "Max Spin Speed": "1400 RPM",
      "Display": "Digital LED with Remaining Time Indicator",
      "Energy Rating": "A+++ Energy Efficiency"
    },
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80",
    inStock: true,
    tags: ["Front Load", "Washing Machine", "Inverter"]
  },
  {
    id: "elec-soundbar-dolby",
    slug: "wireless-soundbar-subwoofer-300w",
    name: "300W 2.1-Channel Soundbar with Wireless Subwoofer",
    category: "Audio & Entertainment Systems",
    categorySlug: "audio-sound",
    mainCategory: "electronics",
    brand: "Ingram Certified Audio",
    model: "ING-SB-300W",
    shortDescription: "Immersive audio system with deep wireless bass, Bluetooth 5.0 streaming, optical audio in, and HDMI ARC connectivity.",
    description: [
      "Transform boardroom audio clarity and office conference sound with dedicated dialog enhancement."
    ],
    features: [
      "300W Peak Power output with wireless dedicated subwoofer",
      "Dolby Digital decoding & dedicated Movie/Voice/Music EQ modes",
      "Bluetooth wireless streaming from phones and laptops",
      "HDMI ARC, Optical, Aux, and USB playback inputs"
    ],
    specifications: {
      "Total Output": "300W Peak (160W RMS)",
      "Channels": "2.1 Channel",
      "Connectivity": "HDMI ARC, Optical, Bluetooth 5.0, 3.5mm AUX, USB",
      "Remote Control": "Full function IR remote included"
    },
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    inStock: true,
    tags: ["Soundbar", "Audio", "Dolby"]
  },
  {
    id: "elec-microwave-30l",
    slug: "digital-microwave-grill-oven-30l",
    name: "30L Digital Microwave Oven with Grill",
    category: "Kitchen & Small Appliances",
    categorySlug: "kitchen-appliances",
    mainCategory: "electronics",
    brand: "Ingram Certified Appliances",
    model: "ING-MW-30G",
    shortDescription: "Stainless steel 30L digital microwave with 1000W microwave power, 1100W quartz grill, and auto-cook preset menus.",
    description: [
      "Versatile office pantry and commercial kitchen microwave oven with child lock safety and defrost by weight."
    ],
    features: [
      "Combined Microwave & Quartz Grill cooking modes",
      "Digital touch control panel with LED timer display",
      "10 Auto-Cook presets for rapid meal heating",
      "Easy-clean antibacterial ceramic enamel cavity"
    ],
    specifications: {
      "Cavity Capacity": "30 Litres",
      "Microwave Power": "1000 W",
      "Grill Power": "1100 W",
      "Turntable Diameter": "315 mm"
    },
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    inStock: true,
    tags: ["Microwave", "Kitchen Appliance"]
  },
  {
    id: "elec-water-dispenser",
    slug: "freestanding-hot-cold-water-dispenser",
    name: "Freestanding Hot & Cold Water Dispenser with Cabinet",
    category: "Kitchen & Small Appliances",
    categorySlug: "kitchen-appliances",
    mainCategory: "electronics",
    brand: "Ingram Certified Appliances",
    model: "ING-WD-200HC",
    shortDescription: "Fast cooling and boiling water dispenser with stainless steel food-grade tanks and bottom storage cabinet.",
    description: [
      "Dependable hydration station for corporate offices, reception areas, and industrial facilities."
    ],
    features: [
      "High-efficiency compressor cooling (<10°C water)",
      "High-speed heating element (>90°C for instant tea/coffee)",
      "Child safety lock on hot water push tap",
      "Built-in spacious bottom storage cupboard"
    ],
    specifications: {
      "Cooling Capacity": "2.0 L/hr (at ≤10°C)",
      "Heating Capacity": "5.0 L/hr (at ≥90°C)",
      "Tank Material": "SUS304 Food-Grade Stainless Steel",
      "Power Supply": "220-240V / 50Hz"
    },
    image: "https://images.unsplash.com/photo-1585670149967-b4f4da88cc9f?w=800&q=80",
    inStock: true,
    tags: ["Water Dispenser", "Office Pantry"]
  },

  // ------------------ ICT HARDWARE PRODUCTS ------------------
  {
    id: "ict-laptop-biz-15",
    slug: "enterprise-business-laptop-core-i7",
    name: "Enterprise Business Laptop 15.6\" (Intel Core i7, 16GB, 512GB SSD)",
    category: "Laptops & Desktops",
    categorySlug: "laptops-desktops",
    mainCategory: "ict-hardware",
    brand: "Enterprise Grade",
    model: "PRO-BOOK-15",
    shortDescription: "High-performance enterprise laptop with military-grade durability, fingerprint biometric security, and all-day battery life.",
    description: [
      "Built for demanding business multitasking, data analysis, and engineering mobility with Windows 11 Pro pre-configured."
    ],
    features: [
      "13th Gen Intel Core i7-1355U Processor (10 Cores, up to 5.0 GHz)",
      "16GB DDR4 3200MHz RAM (Expandable to 64GB)",
      "512GB PCIe NVMe M.2 Solid State Drive",
      "15.6\" FHD (1920x1080) Anti-Glare IPS Display",
      "Fingerprint Reader, Backlit Keyboard, Wi-Fi 6 & Thunderbolt 4"
    ],
    specifications: {
      "Processor": "Intel Core i7 (Latest Gen)",
      "Memory": "16 GB DDR4",
      "Storage": "512 GB NVMe SSD",
      "Operating System": "Windows 11 Pro 64-Bit Genuine",
      "Battery": "3-Cell 53Wh Lithium-Ion (Up to 10 Hours)",
      "Weight": "1.74 kg"
    },
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    inStock: true,
    tags: ["Laptop", "Business PC", "Core i7"]
  },
  {
    id: "ict-desktop-tower",
    slug: "corporate-workstation-desktop-pc",
    name: "Corporate Tower Desktop PC (Core i5, 16GB, 1TB SSD + 24\" Monitor)",
    category: "Laptops & Desktops",
    categorySlug: "laptops-desktops",
    mainCategory: "ict-hardware",
    brand: "Enterprise Grade",
    model: "PRO-DESK-TOWER",
    shortDescription: "Reliable commercial desktop bundle with high-speed processing, multi-display support, and 24-inch borderless IPS monitor.",
    description: [
      "Engineered for 24/7 corporate desks, accounts departments, and control room operator consoles."
    ],
    features: [
      "Intel Core i5-13400 Processor (10 Cores, 16 Threads)",
      "16GB RAM + 1TB High-speed NVMe SSD storage",
      "Includes 24-inch Full HD IPS Borderless Monitor",
      "USB Keyboard and Optical Optical Mouse bundle included"
    ],
    specifications: {
      "CPU": "Intel Core i5 (13th Gen)",
      "RAM": "16 GB DDR4",
      "Storage": "1 TB PCIe SSD",
      "Ports": "DisplayPort, HDMI, 6x USB 3.2, Gigabit Ethernet",
      "Monitor": "24\" FHD IPS 75Hz"
    },
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80",
    inStock: true,
    tags: ["Desktop PC", "Workstation"]
  },
  {
    id: "ict-printer-laser-mfp",
    slug: "heavy-duty-monochrome-laser-mfp",
    name: "High-Volume Monochrome Laser Multifunction Printer",
    category: "Printers",
    categorySlug: "printers",
    mainCategory: "ict-hardware",
    brand: "Commercial Printing",
    model: "LASER-MFP-45PPM",
    shortDescription: "45 ppm heavy-duty network laser printer with auto duplex, dual-sided scanning, and low cost-per-page operation.",
    description: [
      "Ideal for busy corporate offices and banks requiring fast, crystal-clear monochrome document production and scanning."
    ],
    features: [
      "Fast print speeds up to 45 pages per minute (ppm)",
      "Automatic two-sided printing and single-pass duplex ADF scanner",
      "Gigabit Ethernet and secure wireless mobile printing",
      "550-sheet standard input paper tray with optional add-on drawers"
    ],
    specifications: {
      "Print Speed": "Up to 45 ppm (A4)",
      "Duty Cycle": "Up to 100,000 pages monthly",
      "Connectivity": "USB 2.0, Gigabit LAN, Wi-Fi Direct",
      "Functions": "Print, Scan, Copy, Digital Fax"
    },
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80",
    inStock: true,
    tags: ["Laser Printer", "MFP", "Network Printer"]
  },
  {
    id: "ict-switch-24port-poe",
    slug: "24-port-gigabit-managed-poe-switch",
    name: "24-Port Gigabit Managed PoE+ Network Switch",
    category: "Networking Products",
    categorySlug: "networking-products",
    mainCategory: "ict-hardware",
    brand: "Enterprise Networking",
    model: "NET-SW24-POE-370W",
    shortDescription: "Layer 2+ managed Gigabit switch with 24 PoE+ ports (370W budget) and 4x 10G SFP+ fiber uplink ports.",
    description: [
      "Power your VoIP phones, Wi-Fi access points, and security IP cameras seamlessly over structured Ethernet cabling."
    ],
    features: [
      "24x 10/100/1000Base-T PoE+ ports compliant with IEEE 802.3at/af",
      "370W total internal PoE power budget",
      "4x 10-Gigabit SFP+ fiber optic uplinks for high-bandwidth aggregation",
      "VLAN, QoS, IGMP Snooping, and Link Aggregation management"
    ],
    specifications: {
      "Total Ports": "24 RJ45 + 4 SFP+ Uplinks",
      "PoE Budget": "370 Watts",
      "Switching Capacity": "128 Gbps non-blocking",
      "Mounting": "19-inch 1U standard rack mountable"
    },
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    inStock: true,
    tags: ["PoE Switch", "Managed Switch", "Networking"]
  },
  {
    id: "ict-cctv-kit-8ch",
    slug: "8-channel-4k-ip-surveillance-system-nvr",
    name: "8-Channel 4K IP CCTV Surveillance System with NVR",
    category: "Security & Surveillance Products",
    categorySlug: "security-surveillance",
    mainCategory: "ict-hardware",
    brand: "Security Solutions",
    model: "SEC-4K-NVR8-CAM",
    shortDescription: "Commercial security package with 8-channel 4K NVR, 4TB surveillance hard drive, and weatherproof night-vision bullet/dome cameras.",
    description: [
      "Protect assets with smart human and vehicle detection, instant mobile push alerts, and 24/7 continuous high-definition recording."
    ],
    features: [
      "8-Channel 4K NVR with built-in 8-Port PoE switch for plug-and-play setup",
      "Includes 4x 4K (8MP) Weatherproof IP Cameras with 30m IR Night Vision",
      "Smart AI motion analytics — filter false alarms from insects or leaves",
      "Free iOS and Android remote viewing mobile app"
    ],
    specifications: {
      "Camera Resolution": "8 Megapixel (3840 x 2160 @ 25fps)",
      "Weather Rating": "IP67 Weatherproof metal housing",
      "Storage": "Pre-installed 4TB Surveillance Grade HDD",
      "Video Compression": "H.265+ for 50% bandwidth and storage saving"
    },
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    inStock: true,
    tags: ["CCTV", "4K Security", "NVR"]
  },
  {
    id: "ict-ups-online-3kva",
    slug: "3000va-online-double-conversion-ups",
    name: "3kVA / 2700W Online Double Conversion Rack/Tower UPS",
    category: "Power Backup",
    categorySlug: "power-backup",
    mainCategory: "ict-hardware",
    brand: "Power Systems",
    model: "UPS-ONL-3KVA",
    shortDescription: "Zero-transfer-time pure sine wave online UPS designed to protect critical server rooms, automation panels, and lab equipment.",
    description: [
      "Provides continuous power conditioning, wide input voltage tolerance, and seamless battery backup during Tanzanian power fluctuations."
    ],
    features: [
      "True Online Double Conversion with 0ms transfer time",
      "High power factor 0.9 (3000VA / 2700W active load)",
      "Intuitive LCD control screen showing load %, battery charge, and voltage",
      "Emergency Power Off (EPO) and optional SNMP network card"
    ],
    specifications: {
      "Capacity": "3000 VA / 2700 W",
      "Input Voltage Range": "110V - 300V (Protects battery life)",
      "Output Waveform": "Pure Sine Wave (<2% THD)",
      "Form Factor": "2U Rackmount or Tower Convertible"
    },
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    inStock: true,
    tags: ["Online UPS", "Power Backup", "Pure Sine Wave"]
  },

  // ------------------ SOFTWARE SOLUTIONS ------------------
  {
    id: "soft-m365-biz",
    slug: "microsoft-365-business-standard-licensing",
    name: "Microsoft 365 Business Standard Annual Subscription",
    category: "Microsoft Products & Cloud Solutions",
    categorySlug: "microsoft-products",
    mainCategory: "software",
    brand: "Microsoft Genuine",
    model: "M365-BIZ-STD",
    shortDescription: "Premium Office desktop applications (Word, Excel, PowerPoint, Outlook) plus 1TB OneDrive cloud storage and Microsoft Teams.",
    description: [
      "Equip each employee on up to 5 PCs/Macs + 5 mobile devices with genuine Microsoft enterprise cloud tools."
    ],
    features: [
      "Desktop versions of Word, Excel, PowerPoint, Outlook, Access & Publisher",
      "Professional 50GB business email hosting on your custom domain",
      "1TB secure OneDrive cloud storage per user",
      "Microsoft Teams for video conferences, chat & file sharing"
    ],
    specifications: {
      "License Model": "Annual Subscription per User",
      "Platform": "Windows, macOS, iOS, Android, Web",
      "Support": "Includes deployment & DNS setup assistance"
    },
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    inStock: true,
    tags: ["Microsoft 365", "Office", "Teams"]
  },
  {
    id: "soft-hrms-tanzania",
    slug: "ingram-enterprise-hrms-payroll-system",
    name: "Ingram Integrated HRMS & Automated Payroll Software",
    category: "HRMS & Payroll Software",
    categorySlug: "hrms-payroll",
    mainCategory: "software",
    brand: "Ingram Software",
    model: "ING-HRMS-PAY",
    shortDescription: "Complete human resources and automated payroll software configured for TRA, PAYE, NSSF, WCF, and NHIF compliance in Tanzania.",
    description: [
      "Eliminate payroll calculation errors, track real-time biometric staff attendance, and generate bank-ready electronic payment files."
    ],
    features: [
      "Pre-configured Tanzanian tax slabs and statutory social security deductions",
      "Direct integration with ZKTeco and Hikvision biometric attendance machines",
      "Self-service mobile portal for leave requests and digital payslips",
      "Shift scheduling, overtime automation, and employee document filing"
    ],
    specifications: {
      "Deployment": "Cloud-hosted or On-Premise Local Server",
      "User Access": "Role-based access control with audit log",
      "Compliance": "Tanzanian Labour Law & TRA Ready"
    },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    inStock: true,
    tags: ["HRMS", "Payroll Software", "TRA Compliant"]
  },

  // ------------------ OFFICE EQUIPMENT & CONSUMABLES ------------------
  {
    id: "furn-exec-desk-180",
    slug: "executive-wooden-office-desk-180cm",
    name: "Executive Wooden Office Desk 1.8m with Side Extension & Pedestal",
    category: "Computer Tables & Workstations",
    categorySlug: "computer-tables",
    mainCategory: "office-equipment",
    brand: "Ingram Executive Office",
    model: "ING-DSK-180EX",
    shortDescription: "Premium mahogany/walnut finish executive desk with integrated cable duct, lockable 3-drawer storage pedestal, and side credenza.",
    description: [
      "Crafted from heavy-duty engineered wood with water and scratch resistant melamine coating for leadership offices."
    ],
    features: [
      "Spacious 1800mm x 900mm main executive surface area",
      "Included side return cabinet for computer tower, printer & documents",
      "Three lockable drawers with smooth telescopic ball-bearing sliders",
      "Concealed wire grommets keeping desktops clean and professional"
    ],
    specifications: {
      "Dimensions": "1800mm (W) x 900mm (D) x 760mm (H)",
      "Material": "E1 Grade High-Density Melamine Board",
      "Color": "Rich Walnut / Dark Oak"
    },
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    inStock: true,
    tags: ["Executive Desk", "Office Table"]
  },
  {
    id: "furn-chair-ergo-mesh",
    slug: "high-back-ergonomic-mesh-executive-chair",
    name: "High-Back Ergonomic Executive Mesh Chair with Headrest",
    category: "Ergonomic Office Chairs",
    categorySlug: "office-chairs",
    mainCategory: "office-equipment",
    brand: "Ingram Ergonomics",
    model: "ING-CHR-ERGO-HB",
    shortDescription: "Full-support ergonomic mesh chair with adjustable 3D armrests, dynamic lumbar support, tilt-lock mechanism, and breathable headrest.",
    description: [
      "Designed for 8+ hour work shifts to reduce spinal fatigue and improve posture."
    ],
    features: [
      "Dynamic adaptive lumbar support aligning with spine curve",
      "3D Adjustable armrests (height, depth, and angle pivot)",
      "Multi-lock synchronized recline mechanism (90° to 135°)",
      "Heavy-duty aluminum alloy 5-star base tested up to 150kg"
    ],
    specifications: {
      "Weight Capacity": "150 kg",
      "Gas Lift": "Class 4 TÜV & BIFMA Certified",
      "Upholstery": "High-Tension Korean Breathable Mesh"
    },
    image: "https://images.unsplash.com/photo-1580481077190-7361356a15fa?w=800&q=80",
    inStock: true,
    tags: ["Ergonomic Chair", "Mesh Chair", "Office Chair"]
  },
  {
    id: "cons-paper-a4-80gsm",
    slug: "premium-a4-copy-paper-80gsm-box",
    name: "Premium High-Whiteness A4 Copy Paper 80 GSM (Box of 5 Reams)",
    category: "Printer Paper & Office Stationery",
    categorySlug: "printer-paper",
    mainCategory: "consumables",
    brand: "Ingram Paper Supplies",
    model: "ING-A4-80G-BOX",
    shortDescription: "Ultra-white 80gsm A4 multipurpose copy paper for high-speed jam-free laser printing, color copies, and office correspondence.",
    description: [
      "500 sheets per ream, 5 reams per carton box (2,500 sheets total). Acid-free for permanent archival life."
    ],
    features: [
      "80 GSM high-opacity paper preventing ink show-through in duplex printing",
      "Superb 165 CIE whiteness for high-contrast crisp text and graphics",
      "Precision cut dust-free edges extending printer roller lifespan",
      "Certified sustainable wood pulp raw material"
    ],
    specifications: {
      "Size": "A4 (210mm x 297mm)",
      "Grammage": "80 gsm ± 2%",
      "Packaging": "500 sheets/ream, 5 reams/carton box",
      "Brightness": "104-106% ISO"
    },
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&q=80",
    inStock: true,
    tags: ["A4 Paper", "80 GSM", "Copy Paper"]
  },
  {
    id: "cons-toner-laser-black",
    slug: "high-yield-black-laser-toner-cartridge",
    name: "High-Yield Black Laser Toner Cartridge (Compatible 85A / 78A / 05A)",
    category: "Toners & Ink Cartridges",
    categorySlug: "toners-cartridges",
    mainCategory: "consumables",
    brand: "Ingram Certified Consumables",
    model: "ING-TONER-CE285A",
    shortDescription: "High-density micro-polymer black toner delivering up to 2,500 sharp, smudge-proof pages per cartridge.",
    description: [
      "Tested and calibrated for consistent optical density and smooth drum rotation without leaking."
    ],
    features: [
      "Yields up to 2,500 pages @ 5% standard page coverage",
      "Deep optical black density with uniform solid coverage",
      "Smart chip technology for accurate low-toner notifications",
      "Zero toner leakage guaranteeing clean printer mechanics"
    ],
    printerCompatibility: [
      "HP LaserJet P1102, P1102w, M1132, M1212nf, M1217nfw",
      "Canon LBP6000, LBP6020, MF3010",
      "HP LaserJet Pro P1566, P1606dn, M1536dnf"
    ],
    specifications: {
      "Color": "Monochrome Black",
      "Page Yield": "Approx. 2,500 Pages (ISO/IEC 19752)",
      "Shelf Life": "24 Months Sealed"
    },
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80",
    inStock: true,
    tags: ["Toner Cartridge", "Laser Toner", "HP Compatible"]
  }
];

export const ALL_CATALOG_CATEGORIES = [
  ...ICT_HARDWARE_CATEGORIES.map(c => ({ ...c, section: "ict-hardware" })),
  ...SOFTWARE_CATEGORIES.map(c => ({ ...c, section: "software" })),
  ...ELECTRONICS_CATEGORIES.map(c => ({ ...c, section: "electronics", subtitle: `${c.count}`, bannerImage: c.image, iconName: "Tv", keyFeatures: [] })),
  ...OFFICE_EQUIPMENT_CATEGORIES.map(c => ({ ...c, section: "office-equipment" })),
  ...CONSUMABLES_CATEGORIES.map(c => ({ ...c, section: "consumables" })),
];

export const ELECTRONICS_PRODUCTS = ALL_PRODUCTS.filter(p => p.mainCategory === "electronics" || !p.mainCategory);

