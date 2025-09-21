import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CourseCard } from "./CourseCard";

interface Course {
  name: string;
  category: string;
  link: string;
}

// Complete course data from Excel file
const coursesData: Course[] = [
  { name: "Calculus and its Applications", category: "Mathematics", link: "https://drive.google.com/drive/folders/1gq_SBH1Owa-HKHGm8PBs1Qr4yJJ7IdFZ?usp=drive_link" },
  { name: "Physics", category: "Science", link: "https://drive.google.com/drive/folders/1pFi3H9ZQQLS-Gt8dgD60ZVLkUqhHqJ9q?usp=drive_link" },
  { name: "Chemistry", category: "Science", link: "https://drive.google.com/drive/folders/1YJJXHZ51FL10OIL_R2dSsN91AoZW9DYs?usp=drive_link" },
  { name: "Professional Ethics", category: "General", link: "https://drive.google.com/drive/folders/1R6sR5gNKfiwOSiIWbg0uZMRV-aSy37Ki?usp=drive_link" },
  { name: "English Language Proficiency", category: "Language", link: "https://drive.google.com/drive/folders/1rBuLuoM3AV3ronN_hQSCu-kHdbIP1vl9?usp=drive_link" },
  { name: "Engineering Graphics", category: "Engineering", link: "https://drive.google.com/drive/folders/1zUJ_rdBEqx2w3BkqsfSz0A5zJWPsPawO?usp=drive_link" },
  { name: "Basic Sciences Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1Xv8pmeladVajH6Xgumd7t5F9z7iSkioL?usp=drive_link" },
  { name: "Engineering Practices", category: "Engineering", link: "https://drive.google.com/drive/folders/1ilpO12RvmNdqbAn84M7RK3TN-zSvh4ye?usp=drive_link" },
  { name: "Complex Variables and Transforms", category: "Mathematics", link: "https://drive.google.com/drive/folders/1bZOuCuzRrZl8eHs7StszkKVYJqZRer_x?usp=drive_link" },
  { name: "Materials Science", category: "Engineering", link: "https://drive.google.com/drive/folders/1navNSTMvU_d9raUAeBMlimd3jQfTcBE0?usp=drive_link" },
  { name: "Chemistry of Engineering Materials", category: "Science", link: "https://drive.google.com/drive/folders/1Lt4vuDyBr9mINf7I4HJ6PIo-4LNGCZOF?usp=drive_link" },
  { name: "Engineering Mechanics", category: "Engineering", link: "https://drive.google.com/drive/folders/1xpDwPEV-7-rjejDIP-Eykap7x0e5LRk1?usp=drive_link" },
  { name: "Basics of Electrical and Electronics Engineering", category: "Engineering", link: "https://drive.google.com/drive/folders/1edTxUVHpbLtJ7fv77xjNL8bhyHd5aWmU?usp=drive_link" },
  { name: "Language Elective", category: "Language", link: "https://drive.google.com/drive/folders/19tOo8imq2lxuBEiYDhLGKMQsGfDcuepz?usp=drive_link" },
  { name: "Electrical and Electronics Engineering Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1pEjtNP8MEFfS8V5MTKF9cGTEOFTVuxl-?usp=drive_link" },
  { name: "Numerical Methods", category: "Mathematics", link: "https://drive.google.com/drive/folders/1e9aDcJhgCockdVZYsNrvvl4cKfZfKvUi?usp=drive_link" },
  { name: "Engineering Metallurgy", category: "Engineering", link: "https://drive.google.com/drive/folders/1hchUcaWjwhI5yb5lM3M_l1MSha8w-hTF?usp=drive_link" },
  { name: "Strength of Materials", category: "Engineering", link: "https://drive.google.com/drive/folders/1lfXeDPTRkKTShlR4aAdagy5lkY75DWfA?usp=drive_link" },
  { name: "Fluid Mechanics and Machinery", category: "Engineering", link: "https://drive.google.com/drive/folders/17H3Ws6lSrDRz62RHoIRuh_3JdZxqqlKS?usp=drive_link" },
  { name: "Welding Technology", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1f9mo5wsIGLopGfV1seMk5jdHZhiMm9u2?usp=drive_link" },
  { name: "Economics for Engineers", category: "General", link: "https://drive.google.com/drive/folders/114wSNcXEwoKwnUibpWXE1_V9JO13xQYy?usp=drive_link" },
  { name: "Machine Drawing", category: "Engineering", link: "https://drive.google.com/drive/folders/1l8vc1KxfBH2WS4WLb6YkfF3H98Tk3a96?usp=sharing" },
  { name: "Metallurgy and Strength of Materials Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1455FIMUmfkU6-yEs1Uk4UaMnDrpyaLSS?usp=drive_link" },
  { name: "Probability and Statistics", category: "Mathematics", link: "https://drive.google.com/drive/folders/1uJUO55lq4R6OZ7FQx2uZHtDeV8N1q8AO?usp=sharing" },
  { name: "Thermal Systems and Heat Transfer", category: "Engineering", link: "https://drive.google.com/drive/folders/1smzgqkBmX96Ifyjn1565JMfAy5AxS7Z2?usp=sharing" },
  { name: "Metal Forming Processes", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1TxWhaPbZV9BNmYkBifCRpJ3NPORtB_9X?usp=sharing" },
  { name: "Foundry Technology", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1XvKiFrizckQKM4LYDa4UWm9lS4FXVgBl?usp=sharing" },
  { name: "Mechanics of Machines", category: "Engineering", link: "https://drive.google.com/drive/folders/1netgVAi7mSvpGjV8IgSUEOLj_GORchIy?usp=sharing" },
  { name: "Machining Technology", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1bkN_MnPbq3A82pklvM1dpqp5fb80aRau?usp=sharing" },
  { name: "Thermal Engineering and Fluid Machinery Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1CLH1wspqYY5o-6ZzoEMzNTM14TLPZOQx?usp=sharing" },
  { name: "Machining Technology Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1A5riAdUZ1DhndD-jXh26rHaxorP2PL3a?usp=sharing" },
  { name: "Soft Skills Development", category: "General", link: "https://drive.google.com/drive/folders/1NKqaUUsxolICbqEC1bA0ClxV8p51k54m?usp=sharing" },
  { name: "Indian Constitution", category: "General", link: "https://drive.google.com/drive/folders/1uwmuVaOlDOIz93_xoKv_M9Waxn8bOyOW?usp=sharing" },
  { name: "Computer Numerical Control Machines", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1y3ylHTmKuwc9TZSTxgogMeJudGIwHZYG?usp=sharing" },
  { name: "Process Planning and Cost Estimation", category: "Manufacturing", link: "https://drive.google.com/drive/folders/14YlfXarG6Gi-D1rWdPedMrTHKJosmjHM?usp=sharing" },
  { name: "Manufacturing Metrology", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1jbcTzx2hfAVCNdcrCqaAAi9eoZhtRrOb?usp=sharing" },
  { name: "Design of Machine Elements", category: "Engineering", link: "https://drive.google.com/drive/folders/11F3LLTQre_wtnJT60lr65OSi_e5WLFHL?usp=sharing" },
  { name: "Applied Hydraulics and Pneumatics", category: "Engineering", link: "https://drive.google.com/drive/folders/1LaUBm_ZttmLza0nFiQvyoKUru32bvK4Y?usp=sharing" },
  { name: "Manufacturing Technology Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1d-iCybNTsY-mu6xj6tlXyv269RR6Wxbk?usp=sharing" },
  { name: "Metrology and Computer Aided Inspection Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1X9HHW5TilWZvLjZ6vvzRr-hmVZs7ckVj?usp=sharing" },
  { name: "Business and Managerial Communications", category: "Management", link: "https://drive.google.com/drive/folders/1TfmB-FUYoWriv-kUE17Pl3iDTbTJcqvf?usp=sharing" },
  { name: "Quantitative Methods In Management", category: "Management", link: "https://drive.google.com/drive/folders/1MoDtPoLQAQ0jPQJtzslX51XKiPYj3O9S?usp=sharing" },
  { name: "Jigs, Fixtures and Die Design", category: "Manufacturing", link: "https://drive.google.com/drive/folders/138okRaFS8Snef3oOz_0Zlv5xyTIrTU2C?usp=sharing" },
  { name: "Design for Manufacture and Assembly", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1RlPsx7u_aTWoIlJxns7sLk0icX-gpjBb?usp=sharing" },
  { name: "Automation and Robotics", category: "Engineering", link: "https://drive.google.com/drive/folders/1c2TQxeeUqHeOEWWiZiA7JtAszDM6yFLB?usp=sharing" },
  { name: "Fluid Power Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/18oxFor2ye_vYJhh5TGJPu_wi0VaGJMDT?usp=sharing" },
  { name: "CAD, CAM and CAE Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1sefAHaq478vQu3MevV7IF9CSpeojSZpx?usp=sharing" },
  { name: "Quantitative and Reasoning Skills", category: "Aptitude", link: "https://drive.google.com/drive/folders/1X31qZTZnW736YsQmZFt0KqwRuz9uPzq1?usp=sharing" },
  { name: "Environment Conscious Manufacturing", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1A2vMy4W3RH2kQilga7XdokJZ5VeySqgd?usp=sharing" },
  { name: "Production and Operations Management", category: "Management", link: "https://drive.google.com/drive/folders/1ulQCQwg3ygmWwe-Ezh9ZrkpkxIqKP2yf?usp=sharing" },
  { name: "Industrial Engineering and Lean Practices Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1SRpoHL-hDVj36YgD8fbKmfop0TQaT-lQ?usp=sharing" },
  { name: "Innovation Practices", category: "General", link: "https://drive.google.com/drive/folders/1couk8cDgBGaNUZf2ZZhPNyUu2vF4vCAF?usp=sharing" },
  { name: "Communication Skills for Engineers", category: "Language", link: "https://drive.google.com/drive/folders/1Qklj9savbmA5Vczs0meWCex3NV6C9_W1?usp=drive_link" },
  { name: "Mechatronics", category: "Engineering", link: "https://drive.google.com/drive/folders/1vveuDPHKvM-9tci5L0RMYz2owlWFia8y?usp=sharing" },
  { name: "Modeling and Control of Dynamic Systems", category: "Engineering", link: "https://drive.google.com/drive/folders/1lUOKK5xG1N6Oi7yy6rmywGHdOaUygnf9?usp=sharing" },
  { name: "Maintenance and Safety Engineering", category: "Engineering", link: "https://drive.google.com/drive/folders/1A541gpHpNMjQlZECY7XoMVsFt8iqh0KO?usp=sharing" },
  { name: "Finite Element Applications in Manufacturing", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1dp9Uen3jbE0Df90YA7XBx8Tb8QpfCfJs?usp=sharing" },
  { name: "Design and Manufacture of Gears", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1OYfqMEjbUeK_2D5ETlStzA71Ek8ScbEx?usp=sharing" },
  { name: "Product Lifecycle Management", category: "Management", link: "https://drive.google.com/drive/folders/1LiT2-J4sBzSmwKHds6SRhMJvEDGQQL0u?usp=sharing" },
  { name: "Surface Engineering and Tribology", category: "Engineering", link: "https://drive.google.com/drive/folders/1VnJUcu2TSN4Tv8epz8m3_WrWtA_hD5RJ?usp=drive_link" },
  { name: "Manufacture of Automotive Components", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1GDpsPJasYv8yNHyhWB2Oc6K7CtjAutN4?usp=sharing" },
  { name: "Lean Manufacturing", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1Fr90M0M7UjSfuqHXHAP2bDVwZ5XUgeNG?usp=sharing" },
  { name: "Material Handling Systems", category: "Engineering", link: "https://drive.google.com/drive/folders/1Gx3sQBipQmnwAsMtzkzmsHEos8fL8_7F?usp=sharing" },
  { name: "Non -Traditional Machining Techniques", category: "Manufacturing", link: "https://drive.google.com/drive/folders/11-fLa-GHw0B0pEILbBVcd5LIZs0Prr-Q?usp=drive_link" },
  { name: "Supply Chain Management", category: "Management", link: "https://drive.google.com/drive/folders/1QksLaiYNKuTxcGOqQec4KqPWJz_AHZOH?usp=sharing" },
  { name: "PLC Programming and Applications", category: "Engineering", link: "https://drive.google.com/drive/folders/1UKykVFiXGNH3nJewSKyQK4k-ZUKbdnYr?usp=sharing" },
  { name: "Mechanical Vibrations", category: "Engineering", link: "https://drive.google.com/drive/folders/1ee00rfQ4tQ9VPDxsPY5OqgZu24GnQdFk?usp=sharing" },
  { name: "Precision Manufacturing", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1fmFFwZeU7xMWTPPJTyr730e-zTrotzj6?usp=sharing" },
  { name: "Product Development Strategies", category: "Management", link: "https://drive.google.com/drive/folders/1fJNgabB90VXBGnQDtSvWlezvZp9kbQzj?usp=sharing" },
  { name: "Composite Materials Processing", category: "Engineering", link: "https://drive.google.com/drive/folders/1Vcs4Uw2GkD-D5q1NBsxy_ZJIhJJDPjoH?usp=sharing" },
  { name: "Industrial Ergonomics", category: "Engineering", link: "https://drive.google.com/drive/folders/1tlLwbnX36nU9oML1-AirJSpPFoG08s5R?usp=sharing" },
  { name: "Computational Fluid Dynamics", category: "Engineering", link: "https://drive.google.com/drive/folders/14KY-3msRpj3fioWG0I0NzHsMojcfMkox?usp=sharing" },
  { name: "Six Sigma", category: "Management", link: "https://drive.google.com/drive/folders/10sT0XYpUPpLiSiejY1nRb1s3gjfQ8pT8?usp=sharing" },
  { name: "Additive Manufacturing", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1p2tYeCPXi2lBsaEKK9cKrkuUAE8I0uuL?usp=sharing" },
  { name: "Measurement Systems", category: "Engineering", link: "https://drive.google.com/drive/folders/18eFDEG5lxFoxoGpySFOCl4EuWBFL95Y5?usp=drive_link" },
  { name: "Statistical Quality Control", category: "Management", link: "https://drive.google.com/drive/folders/1S7oBUJhSJOXs9R-7id9Ix8IIKBNlGDE4?usp=sharing" },
  { name: "Automated Assembly System Design", category: "Manufacturing", link: "https://drive.google.com/drive/folders/12afQQrYkmMKNRr91R-XcCJ3ERTDVgcwu?usp=sharing" },
  { name: "Sustainable Mobility and Logistics", category: "Management", link: "https://drive.google.com/drive/folders/1EOi9es2CABQzCOpPD3WFpNqTJ87c0s7o?usp=sharing" },
  { name: "Precision Machining", category: "Manufacturing", link: "https://drive.google.com/drive/folders/19MfmqzRWKfACkMdogVCIu4P6-Ya7zPdp?usp=sharing" },
  { name: "Non Destructive Testing of Aircraft Structures", category: "Engineering", link: "https://drive.google.com/drive/folders/118qudlzqxyMWN2ryUNRqXMoc13ddfE62?usp=sharing" },
  { name: "Introduction to Design and manufacture of Armour Systems", category: "Engineering", link: "https://drive.google.com/drive/folders/1UVNV9_47S18TzfZaOId7ivWvx47Amt91?usp=sharing" },
  { name: "Advanced Materials for Armour Applications", category: "Engineering", link: "https://drive.google.com/drive/folders/1GsfCZIg7dw7q6-ULTVl1i4cKCsH8ajRi?usp=sharing" },
  { name: "Export – Import Practices", category: "Management", link: "https://drive.google.com/drive/folders/12HRrGsWldSmUdGHN5rUoy800J9wUOlL6?usp=sharing" },
  { name: "Insurance - Concepts and Practices", category: "Management", link: "https://drive.google.com/drive/folders/1f3bKfLg1T_Boyqiyu50I35CjRQPvcmRT?usp=sharing" },
  { name: "Public Finance", category: "Management", link: "https://drive.google.com/drive/folders/1BDJ7vtA7e8IO602A16IJug-iszjLOnWI?usp=sharing" },
  { name: "Security Analysis and Portfolio Management", category: "Management", link: "https://drive.google.com/drive/folders/1Nq5yWyBQGPu5qj3sZZ5BRCUt-502DrxJ?usp=sharing" },
  { name: "Interpersonal and Organizational Communication", category: "Management", link: "https://drive.google.com/drive/folders/1vkCslZj3hdHZRQin-V9EYdlEgF0_uMY2?usp=sharing" },
  { name: "Human Values Through Literature", category: "General", link: "https://drive.google.com/drive/folders/1IgI7Jv-VNvS7GZLyOuAXNt3ClteYF9q7?usp=sharing" },
  { name: "Engineering Materials and Metallurgy", category: "Engineering", link: "https://drive.google.com/drive/folders/1ZNWJleYO-IV0n-gE9uBNer2zXNUx7Ze8?usp=sharing" },
  { name: "Engineering Practices Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1cf_ls1NyGQCnAR-6s_hl38x3PhidRaFe?usp=sharing" },
  { name: "Casting Technology", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1PBtnP7GK9zmQkE52fPGQwWj9A4cJt-P2?usp=sharing" },
  { name: "Foundations of Problem Solving", category: "General", link: "https://drive.google.com/drive/folders/1FJIdVgurrHHLzFwbrW-dnUCgGw-Rz6pp?usp=sharing" },
  { name: "Matrix Theory and Numerical Methods", category: "Mathematics", link: "https://drive.google.com/drive/folders/1wR2ZTAsjY6jhNN0oj9_se2bPQWZwU6KP?usp=sharing" },
  { name: "Engineering Economics", category: "General", link: "https://drive.google.com/drive/folders/1NyC9tPH1BSnXefb5vOzGqI6-M0O4h0dl?usp=sharing" },
  { name: "Building Communication Skills", category: "Language", link: "https://drive.google.com/drive/folders/1I4sL-aJQNAlIEma2pgch01P1QrFCnMEL?usp=sharing" },
  { name: "Heritage of Tamils / தமிழர் மரபு", category: "General", link: "https://drive.google.com/drive/folders/1QOW8jrls30YSQVFikGPHgsVAVSvtqXlQ?usp=sharing" },
  { name: "Probability and Statistical Methods", category: "Mathematics", link: "https://drive.google.com/drive/folders/1MCaPRtmKLMfrWG2LCQjb-iFPQqvV1KX2?usp=sharing" },
  { name: "Thermal Engineering", category: "Engineering", link: "https://drive.google.com/drive/folders/1JnkUsyUjGiGjV1bbCnMZyQYpdHufU6fG?usp=sharing" },
  { name: "Manufacturing Processes Laboratory - I", category: "Laboratory", link: "https://drive.google.com/drive/folders/1SxJw5EBsGCThEH1BZX9l44easF0YJEMm?usp=sharing" },
  { name: "Python Programming Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1XsPB6D3OF65aCDe74xOMnz51FKWXUdxc?usp=sharing" },
  { name: "Problem Solving", category: "Aptitude", link: "https://drive.google.com/drive/folders/1jdgIAGCHG9TmXhuRXIyrZzVNg9YoTMPS?usp=sharing" },
  { name: "Tamils and Technology / தமிழும் தொழில்நுட்பமும்", category: "General", link: "https://drive.google.com/drive/folders/11Bm8fuJMcHCimRpcA5dYguH6QmTitLmh?usp=sharing" },
  { name: "CNC Machines and Robotics", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1NiUf_uH864hhEyHDDSBsoNcq6ti2HyP8?usp=sharing" },
  { name: "Metrology and Quality Control", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1MdTSIjYRk-5gxNhzTVwEkPaWz1bMhQgF?usp=sharing" },
  { name: "Production Tooling", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1gIIjafx23R4ssv8C2rHU6RyNauW8VFAn?usp=sharing" },
  { name: "Manufacturing Processes Laboratory - II", category: "Laboratory", link: "https://drive.google.com/drive/folders/11lodV7NaUNcwLrSOYKNdP81rsfqVEHUW?usp=sharing" },
  { name: "Metrology Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1tL870oMIrwSQz5ug1kruBHDqCGmf1wBa?usp=sharing" },
  { name: "Aptitude Skills", category: "Aptitude", link: "https://drive.google.com/drive/folders/1dLWhHHakQwlJ3zkphhdm4OZC9mO0Bs_F?usp=sharing" },
  { name: "Fluid Power Automation Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1oSDxdNNcGpdrSkiOsClYWSy5mgdm1nzv?usp=sharing" },
  { name: "CAD, CAM, CAE Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/1GIUASBPg38aTuOfYeLFkSgxKHz8RYhMw?usp=sharing" },
  { name: "Enhancing Problem Solving Ability with Code", category: "Aptitude", link: "https://drive.google.com/drive/folders/16BU5JIMkVgZb0Tzh9MR8XQb34SuydooV?usp=sharing" },
  { name: "Industrial Engineering Laboratory", category: "Laboratory", link: "https://drive.google.com/drive/folders/12RdhNvtSFMpm140gTFmX8tEDLqV95czr?usp=sharing" },
  { name: "Enterprise Resource Planning", category: "Management", link: "https://drive.google.com/drive/folders/1kYmtKzs8vrLfrfRKcwniBK2YzLnQ3mD2?usp=sharing" },
  { name: "Work System Design", category: "Engineering", link: "https://drive.google.com/drive/folders/1K__adxUvs47Xb60ilRu4VPmNeEGEtCyX?usp=sharing" },
  { name: "Factory Automation", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1wmqDBQ3SRMUwu5dLrQvF6NDCsZWjdw3C?usp=sharing" },
  { name: "Computer Aided Design and Analysis", category: "Engineering", link: "https://drive.google.com/drive/folders/179H2CtfHIGxCcTyxKzrqwLYOGe-Rz61q?usp=sharing" },
  { name: "Computer Integrated Manufacturing", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1jvyO4zBdSr5GkRHbjO-JaBd7EVp0eOkD?usp=sharing" },
  { name: "Sensors for Condition Monitoring", category: "Engineering", link: "https://drive.google.com/drive/folders/1zCeJuy9QYUCTJEdC4hZedYPIFmDPdRZ9?usp=sharing" },
  { name: "Sensors and Control Systems in Manufacturing", category: "Engineering", link: "https://drive.google.com/drive/folders/1eFLM5HU52wg74wF5F5gJwz6Nd4lYltiP?usp=sharing" },
  { name: "Battery Technology", category: "Engineering", link: "https://drive.google.com/drive/folders/17eEWxQOQfW3l4JWzGTCTPI6yPJwglL69?usp=sharing" },
  { name: "Digital Marketing for Engineers", category: "Management", link: "https://drive.google.com/drive/folders/11JNtALDlH5SZSGsnw5WeLRUJF8bKCnag?usp=sharing" },
  { name: "Financial Management", category: "Management", link: "https://drive.google.com/drive/folders/1P4eNHNKpYXTnsXBIwkMe4l8_4CaNGC6v?usp=sharing" },
  { name: "Industrial Internet of Things", category: "Engineering", link: "https://drive.google.com/drive/folders/10mcA5Q719ECmYSt-UFR-igofDHFi4CeI?usp=sharing" },
  { name: "Innovation and Leadership Management", category: "Management", link: "https://drive.google.com/drive/folders/1fctICNSh2USM93vWxZhO3LWf98Xfvqna?usp=sharing" },
  { name: "Sustainable Development Goals for Manufacturing Industries", category: "Manufacturing", link: "https://drive.google.com/drive/folders/1B17etvyYkawg1UxXfY4bhaVuv7toBW3f?usp=drive_link" },
  { name: "Virtual Reality Systems and Applications", category: "Engineering", link: "https://drive.google.com/drive/folders/1pxeFCyck6bS-0_BxroKRqnWAr59SmTSh?usp=sharing" },
];

export function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = [...new Set(coursesData.map(course => course.category))];
    return cats.sort();
  }, []);

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      return matchesSearch && matchesCategory && course.link; // Only show courses with links
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Course Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive study materials and resources for all engineering courses - everything you need for academic excellence
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 pl-10">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={`${course.name}-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}