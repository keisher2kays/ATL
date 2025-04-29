// ProductDatabase.js
import pantum from '../images/pantum.jpg';
import printer255 from '../images/255.jpg';
import printer4024 from '../images/olivetti-4024mf.jpg';
import laptops12gen from '../images/hp12gen.jpg';
import Toneroti from '../images/otitoner.jpg';
import toner255 from '../images/toner255.webp';
import laserjet from '../images/laserjet.png';
import stapler from '../images/Stapler-Black-1-scaled.jpg';
import flatfiles from '../images/flat files.png';
import flipcharts from '../images/flip charts.webp';
import leverfiles from '../images/lever files.png';
import paperpuncher from '../images/paper punch.jpg';
import penandpencils from '../images/pen ad pencils.jpg';
import staplepins from '../images/staple pins.jpg';
import typek from '../images/typek.jpg';

const products = [
  {
    id: 1,
    name: "HP 250 Dual Core Laptop",
    category: "laptops",
    price: 280.00,
    specs: [
      "Processor: Intel Celeron Dual Core (12th Gen 4500U or N4500)",
      "RAM: 8 GB DDR4 RAM",
      "Storage: 256 GB SSD",
      "Display: 15.6-inch HD (1366x768) display with 250 nits brightness and 45% NTSC color gamut",
      "Graphics: Intel Integrated Graphics",
      "Battery Life: Up to 3 hours",
      "Ports: 2 x USB 3.2 Type-A, 1 x HDMI port, RJ45 Ethernet port, USB Type-C port (on some models)",
      "Operating System: DOS or Windows 11 Home"
    ],
    image: laptops12gen,
    featured: true
  },
  {
    id: 3,
    name: "Olivetti D Copia 255",
    category: "printers",
    price: 2600.00,
    specs: [
      "Mono A3 multifunctional printer",
      "Print speed of up to 25 ppm A4",
      "4.3\" color touch panel for easy navigation",
      "1 GB RAM memory, expandable to 3 GB",
      "Optional SSD memory (32 GB or 128 GB)",
      "Supports network and mobile printing",
      "Includes a 50-sheet document feeder",
      "Print, copy, scan, and optional fax capabilities",
      "Resolution: 600 x 600 dpi, fine 1,200 x 1,200 dpi",
    ],
    image: printer255,
    featured: true
  },
  {
    id: 4,
    name: "Olivetti D Cpoia 4024",
    category: "printers",
    price: 1200.00,
    specs: [
      "Print, copy, scan, and optional fax capabilities",
      "Ideal for heavier duty volumes",
      "Speeds up to 40 ppm with a resolution of 1200 dpi",
      "Dual Scan Document Feeder: One pass scans both sides of the sheet",
      "Large toner capacity – up to 7,200 pages",
      "Standard 250-sheet input tray and optional 500-sheet tray",
      "150-sheet output capacity",
      "USB 2.0 and optional Ethernet/Wi-Fi connectivity",   
    ],
    image: printer4024,
    featured: false
  },
  {
    id: 5,
    name: "Olivetti B0357",
    category: "toners",
    price: 80.00,
    specs: [
      "Model: Olivetti B0357 (Black)",
      "Page Yield: Not specified for this exact model, but similar Olivetti models have page yields ranging from 7,200 pages",
      "Compatibility: Compatible toner cartridges are available from brands like FranceToner and InknToner UK"
    ],
    image: Toneroti,
    featured: true
  },
  {
    id: 6,
    name: "Olivetti B1272",
    category: "toners",
    price: 124.00,
    specs: [
      "Toner Model: Olivetti B1272 (Black)",
      "Page Yield: Approximately 15,000 pages",
"Compatibility: Compatible with Olivetti d-Copia 255MF printer",
    ],
    image: toner255,
    featured: false
  },
  {
    id: 7,
    name: "PANTUM BM2305AW",
    category: "printers",
    price: 34.99,
    specs: [
      "Print Speed: 22 pages per minute (A4) / 23 pages per minute (Letter)",
      "First Print Out Time: Less than 7.8 seconds",
      "Print Resolution: Up to 1200 x 1200 DPI",
      "Duplex Mode: Manual",
      "Recommended Monthly Volume: 250-2,000 pages",
      "Maximum Monthly Duty Cycle: 10,000 pages"
    ],
    image: pantum,
    featured: true
  },
  {
    id: 8,
    name: "HP LaserJet Pro MFP 4103fdn",
    category: "printers",
    price: 49.99,
    specs: [
      "Print Speed: Up to 40 ppm (A4), up to 42 ppm (Letter)",
      "First Page Out Time: As fast as 6.1 seconds (black, ready)",
      "Print Resolution: Up to 1200 x 1200 dpi (Fine Lines)",
      "Copy Speed: Up to 40 cpm (black text)",
      "Maximum Copy Resolution: 600 x 600 dpi",
      "USB Ports: 1 Hi-Speed USB 2.0, 1 rear host USB, 1 front USB port",
      "Ethernet: Gigabit Ethernet 10/100/1000 network",
      "Wi-Fi: 802.11b/g/n / 2.4 / 5 GHz Wi-Fi radio + BLE",
      "Input Capacity: 100-sheet tray 1, 250-sheet input tray 2"
    ],
    image: laserjet,
    featured: true
  },
  {
    id: 9,
    name: "Staple Pins",
    category: "stationery",
    price: 29.99,
    specs: [
      "Standard size 26/6",
      "Pack of 1000 staples",
      "Galvanized steel construction",
      "Compatible with most standard staplers",
      "Sharp precision points for clean stapling",
      "Box dimensions: 2\" x 1\" x 0.5\"",
      "Silver finish"
    ],
    image: staplepins,
    featured: false
  },
  {
    id: 10,
    name: "Flip Chart",
    category: "stationery",
    price: 0.50,
    specs: [
      "25 sheets per pad",
      "Paper size: 585mm x 810mm",
      "80gsm paper quality",
      "Perforated for easy tear-off",
      "Universal punching to fit most flip chart stands",
      "Plain white paper",
      "20mm grid pattern for neat writing"
    ],
    image: flipcharts,
    featured: false
  },
  {
    id: 11,
    name: "Flat Files",
    category: "stationery",
    price: 0.40,
    specs: [
      "A4 size document storage",
      "Made from durable polypropylene material",
      "Capacity: approximately 100 sheets",
      "Dimensions: 310mm x 240mm",
      "Available in multiple colors",
      "Clear front for document visibility",
      "Label space for easy identification"
    ],
    image: flatfiles,
    featured: false
  },
  {
    id: 12,
    name: "Pens and Pencils",
    category: "stationery",
    price: 0.15,  
    specs: [
      "Pack includes 10 ballpoint pens and 5 mechanical pencils",
      "Pen ink color: blue and black",
      "Medium 0.7mm pen tip",
      "Comfortable rubber grip",
      "Mechanical pencil: 0.5mm lead",
      "Retractable design",
      "Ideal for everyday writing tasks"
    ],
    image: penandpencils,
    featured: false
  },
  {
    id: 13,
    name: "Paper Puncher",
    category: "stationery",
    price: 4.50,
    specs: [
      "Two-hole punch design",
      "Punching capacity: up to 30 sheets",
      "Metal construction with non-slip base",
      "Adjustable paper guide for accurate punching",
      "Built-in paper alignment ruler",
      "Dimensions: 5\" x 3\" x 2.5\"",
      "Waste container for easy emptying"
    ],
    image: paperpuncher,
    featured: false
  },
 
  {
    id: 14,
    name: "Lever Arch Files",
    category: "stationery",
    price: 1.70,
    specs: [
      "Paper size: A4",
      "Spine width: 70mm",
      "Made from durable cardboard with plastic covering",
      "Metal lever arch mechanism",
      "Metal edge protectors",
      "Finger ring for easy removal from shelf",
      "Label holder on spine"
    ],
    image: leverfiles,
    featured: false
  },
  {
    id: 15,
    name: "A4 Bond Paper",
    category: "stationery",
    price: 4.50,
    specs: [
      "A4 size (210mm x 297mm)",
      "80gsm weight",
      "Bright white color",
      "500 sheets per ream",
      "Acid-free for archival quality",
      "Compatible with all printers and copiers",
      "Smooth surface for excellent print quality"
    ],
    image: typek,
    featured: false
  },
  {
    id: 16,
    name: "Stapler",
    category: "stationery",
    price: 4.00,
    specs: [
      "Heavy-duty metal construction",
      "Full strip capacity: 210 staples",
      "Stapling capacity: up to 20 sheets",
      "Built-in staple remover",
      "Anti-jam mechanism",
      "Dimensions: 6\" x 2.5\" x 1.5\"",
      "Compatible with standard 26/6 staples"
    ],
    image: stapler,
    featured: false
  }
];

export default products;

