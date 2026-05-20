export const ME = {
  name:        "Fadzli Muhammad",
  location:    "Bengkulu, Indonesia",
  phone:       "+62 823-8731-7227",
  email:       "fadmuh12@gmail.com",
  linkedin:    "Fadzli Muhammad",
  linkedinUrl: "https://linkedin.com/in/fadzli-muhammad",
  github:      "lifadz",
  githubUrl:   "https://github.com/lifadz",
  resume:      "/assets/resume.pdf",
};

export const SKILLS = [
  { group:"IT Support & Systems", icon:"🖥️", items:[
    { name:"System & network troubleshooting", lvl:"hands-on" },
    { name:"Windows & Linux environment",      lvl:"hands-on" },
    { name:"Technical support & user assist",  lvl:"hands-on" },
  ]},
  { group:"Networking", icon:"🌐", items:[
    { name:"Network configuration",   lvl:"familiar" },
    { name:"Cisco Packet Tracer",     lvl:"hands-on" },
  ]},
  { group:"Cybersecurity", icon:"🔐", items:[
    { name:"WiFi & network security auditing", lvl:"learning" },
    { name:"Passive traffic analysis",         lvl:"learning" },
    { name:"Python security scripting",        lvl:"learning" },
    { name:"Security report generation",       lvl:"learning" },
  ]},
  { group:"Programming & Tools", icon:"💻", items:[
    { name:"Python", lvl:"familiar" },
    { name:"Git",    lvl:"familiar" },
  ]},
  { group:"Database", icon:"🗄️", items:[
    { name:"MySQL (querying)", lvl:"basic" },
  ]},
];

export const LVL = {
  "hands-on": { label:"Hands-on",    cls:"lv-ho"  },
  "familiar":  { label:"Familiar",   cls:"lv-fam" },
  "learning":  { label:"In Progress",cls:"lv-lrn" },
  "basic":     { label:"Basic",      cls:"lv-bas" },
};

export const PROJECTS = [
  {
    id:1, icon:"🌐",
    title:"Office Network VLAN & ACL Design",
    desc:"Full office network segmentation design and simulation using Cisco Packet Tracer.",
    bullets:[
      "Configured Router-on-a-Stick with per-VLAN DHCP for Finance, IT, and HR segments.",
      "Implemented extended ACLs and debugged stateless ICMP echo/echo-reply edge cases.",
      "Documented the full design end-to-end — from topology to troubleshooting decisions.",
    ],
    tech:["Cisco Packet Tracer","VLAN","Inter-VLAN Routing","DHCP","ACL"],
    tags:["networking","security"],
    github:"https://github.com/lifadz/office-network-vlan-acl",
    demo:null,
  },
  {
    id:5, icon:"🗂️",
    title:"IT Support Lab",
    desc:"Structured IT Support knowledge base covering real helpdesk scenarios, network cases, and practical guides.",
    bullets:[
      "5 network troubleshooting cases (No Internet, DHCP, DNS, inter-VLAN, drops) — each with root cause and fix.",
      "Guides covering network setup, hardware maintenance, and security best practices.",
      "Written from scratch in a real helpdesk documentation style, not copied from textbooks.",
    ],
    tech:["DNS","DHCP","VLAN","Windows"],
    tags:["networking","security","sysadmin"],
    github:"https://github.com/lifadz/IT-Support-Troubleshooting-Lab",
    demo:null,
  },
  {
    id:2, icon:"🔐",
    title:"WiFi Security Analyzer",
    desc:"Python tool for passive network scanning and anomaly detection on local WiFi environments.",
    bullets:[
      "Built with Scapy to enumerate connected devices and monitor ARP/DNS traffic.",
      "Detects potential ARP spoofing and rogue device patterns automatically.",
      "Generates structured HTML and JSON reports from scan results.",
    ],
    tech:["Python","Scapy","Rich","Jinja2","JSON"],
    tags:["security","networking"],
    github:"https://github.com/lifadz/wifi-security-analyzer",
    demo:null,
  },
  {
    id:3, icon:"🤖",
    title:"Arabic Letter Detection (ML)",
    desc:"CNN model for handwritten Arabic letter recognition, built as a Bangkit Academy capstone project.",
    bullets:[
      "Owned the full model lifecycle — data prep, architecture, training, and evaluation.",
      "Designed as a component for an Islamic religious learning application.",
      "Completed within the top 1,000 cohort of a nationally competitive program.",
    ],
    tech:["Python","TensorFlow","Bangkit Academy 2024"],
    tags:["ml"],
    github:null,
    demo:null,
  },
  {
    id:4, icon:"🌐",
    title:"Freelance Landing Page",
    desc:"Responsive landing page delivered for a client with no design brief and a tight deadline.",
    bullets:[
      "Translated verbal requirements into a functional, cross-device compatible interface.",
      "Managed full client communication including two revision rounds.",
      "Shipped on schedule — first paid project with a non-technical client.",
    ],
    tech:["HTML","CSS","Responsive Design"],
    tags:["web"],
    github:null,
    demo:null,
  },
];

export const TAG_CLS = { networking:"t-net", security:"t-sec", web:"t-web", sysadmin:"t-sys", ml:"t-ml" };
export const FILTERS  = ["All","networking","security","sysadmin","ml","web"];

export const EXP = [
  {
    date:"Aug 2023 – May 2024",
    title:"Assistant Lecturer — Computer Networks & Operating Systems",
    org:"University of Bengkulu · Bengkulu, Indonesia",
    bullets:[
      "Ran practical sessions covering computer networking and OS fundamentals — Cisco Packet Tracer labs, Linux basics, and system configuration.",
      "Guided 20+ students per session through hands-on labs; first point of contact for technical issues during practicum.",
      "Troubleshot system and network problems in real time across multiple users and setups.",
      "Maintained lab flow and student engagement across a full academic year.",
    ],
  },
  {
    date:"Feb 2024 – Jul 2024",
    title:"Machine Learning Cohort — Bangkit Academy 2024 Batch 1",
    org:"Google, GoTo, Tokopedia, Traveloka · Jakarta, Indonesia",
    bullets:[
      "Completed structured training in machine learning, professional communication, and problem-solving.",
      "Built an Arabic letter detection model as part of an Islamic learning application — handled data preparation, training, and evaluation.",
      "Ranked among the top 1,000 performing students in English proficiency assessments.",
    ],
  },
  {
    date:"Oct 2025 – Dec 2025",
    title:"Web Developer (Freelance)",
    org:"Remote",
    bullets:[
      "Delivered a responsive landing page for a client based on verbal requirements — no design spec provided.",
      "Managed client communication, handled two rounds of revision, and shipped on schedule.",
      "Ensured cross-device compatibility and clean, maintainable HTML/CSS output.",
    ],
  },
];

export const ROADMAP = [
  {
    phase:"01", icon:"🖥️", title:"IT Support", status:"active",
    desc:"Building solid IT Support fundamentals covering hardware, OS, networking basics, and real helpdesk workflows.",
    items:[
      { label:"System & network troubleshooting", done:true  },
      { label:"Windows & Linux environments",     done:true  },
      { label:"Computer networking fundamentals", done:true  },
      { label:"Helpdesk documentation",           done:true  },
      { label:"Google IT Support Certificate",    done:false },
    ],
  },
  {
    phase:"02", icon:"📡", title:"NOC Engineer", status:"next",
    desc:"Moving into network operations covering monitoring, incident response, and infrastructure management.",
    items:[
      { label:"Network protocol analysis (TCP/IP, DNS, DHCP)", done:false },
      { label:"Routing & switching basics",       done:false },
      { label:"Network monitoring & alerting",    done:false },
      { label:"CCNA fundamentals",                done:false },
      { label:"Linux sysadmin basics",            done:false },
    ],
  },
  {
    phase:"03", icon:"🔐", title:"Cyber Security", status:"future",
    desc:"Long-term goal specializing in network security, threat detection, and security operations.",
    items:[
      { label:"SIEM & log analysis",              done:false },
      { label:"SOC analyst fundamentals",         done:false },
      { label:"Network security & defense",       done:false },
      { label:"Ethical hacking basics",           done:false },
      { label:"TryHackMe SOC & hacking paths",    done:false },
    ],
  },
];