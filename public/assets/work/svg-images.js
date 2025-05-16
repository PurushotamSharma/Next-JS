// DevOps Project Images

// 1. CI/CD Pipeline Automation
const cicdPipeline = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Pipeline Diagram -->
  <circle cx="150" cy="200" r="40" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  <text x="150" y="205" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">Commit</text>
  
  <line x1="190" y1="200" x2="250" y2="200" stroke="#00FF99" stroke-width="2"/>
  <polygon points="250,195 260,200 250,205" fill="#00FF99"/>
  
  <circle cx="300" cy="200" r="40" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  <text x="300" y="205" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">Build</text>
  
  <line x1="340" y1="200" x2="400" y2="200" stroke="#00FF99" stroke-width="2"/>
  <polygon points="400,195 410,200 400,205" fill="#00FF99"/>
  
  <circle cx="450" cy="200" r="40" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  <text x="450" y="205" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">Test</text>
  
  <line x1="490" y1="200" x2="550" y2="200" stroke="#00FF99" stroke-width="2"/>
  <polygon points="550,195 560,200 550,205" fill="#00FF99"/>
  
  <circle cx="600" cy="200" r="40" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  <text x="600" y="205" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">Deploy</text>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">CI/CD Pipeline Automation</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#00FF99" text-anchor="middle">DevOps</text>
</svg>`;

// 2. Infrastructure as Code
const iacProject = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Code -->
  <rect x="100" y="150" width="250" height="150" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="1"/>
  <text x="120" y="180" font-family="monospace" font-size="12" fill="#00FF99">resource "aws_instance" "web" {</text>
  <text x="120" y="200" font-family="monospace" font-size="12" fill="#FFFFFF">  ami           = "ami-005e54dee72cc1d00"</text>
  <text x="120" y="220" font-family="monospace" font-size="12" fill="#FFFFFF">  instance_type = "t2.micro"</text>
  <text x="120" y="240" font-family="monospace" font-size="12" fill="#FFFFFF">  tags = {</text>
  <text x="120" y="260" font-family="monospace" font-size="12" fill="#FFFFFF">    Name = "terraform-example"</text>
  <text x="120" y="280" font-family="monospace" font-size="12" fill="#FFFFFF">  }</text>
  <text x="120" y="300" font-family="monospace" font-size="12" fill="#00FF99">}</text>
  
  <!-- Infrastructure -->
  <rect x="450" y="150" width="250" height="150" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="1"/>
  <rect x="500" y="180" width="50" height="50" fill="#2A3343" stroke="#00FF99" stroke-width="1"/>
  <rect x="600" y="180" width="50" height="50" fill="#2A3343" stroke="#00FF99" stroke-width="1"/>
  <line x1="550" y1="205" x2="600" y2="205" stroke="#00FF99" stroke-width="1"/>
  <rect x="550" y="235" width="50" height="50" fill="#2A3343" stroke="#00FF99" stroke-width="1"/>
  <line x1="525" y1="230" x2="525" y2="260" stroke="#00FF99" stroke-width="1"/>
  <line x1="525" y1="260" x2="550" y2="260" stroke="#00FF99" stroke-width="1"/>
  <line x1="625" y1="230" x2="625" y2="260" stroke="#00FF99" stroke-width="1"/>
  <line x1="600" y1="260" x2="625" y2="260" stroke="#00FF99" stroke-width="1"/>
  
  <!-- Arrow -->
  <line x1="360" y1="225" x2="430" y2="225" stroke="#00FF99" stroke-width="2"/>
  <polygon points="430,220 440,225 430,230" fill="#00FF99"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Infrastructure as Code</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#00FF99" text-anchor="middle">DevOps</text>
</svg>`;

// 3. Microservices Monitoring
const monitoringSystem = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Dashboard -->
  <rect x="100" y="150" width="600" height="180" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="1"/>
  
  <!-- Graphs -->
  <rect x="120" y="170" width="250" height="70" rx="3" fill="#2A3343" stroke="#00FF99" stroke-width="1"/>
  <polyline points="130,220 150,200 170,210 190,190 210,220 230,180 250,200 270,190 290,210 310,200 330,220 350,210" fill="none" stroke="#00FF99" stroke-width="1"/>
  
  <rect x="120" y="250" width="250" height="70" rx="3" fill="#2A3343" stroke="#00FF99" stroke-width="1"/>
  <circle cx="170" cy="285" r="25" fill="none" stroke="#00FF99" stroke-width="1"/>
  <path d="M170,260 A25,25 0 0,1 195,285" fill="none" stroke="#00FF99" stroke-width="2"/>
  <text x="170" y="290" font-family="Arial" font-size="12" fill="#FFFFFF" text-anchor="middle">75%</text>
  
  <rect x="390" y="170" width="290" height="150" rx="3" fill="#2A3343" stroke="#00FF99" stroke-width="1"/>
  <line x1="410" y1="200" x2="660" y2="200" stroke="#3A4353" stroke-width="1"/>
  <line x1="410" y1="230" x2="660" y2="230" stroke="#3A4353" stroke-width="1"/>
  <line x1="410" y1="260" x2="660" y2="260" stroke="#3A4353" stroke-width="1"/>
  <line x1="410" y1="290" x2="660" y2="290" stroke="#3A4353" stroke-width="1"/>
  
  <rect x="410" y="205" width="100" height="20" rx="3" fill="#00FF99" opacity="0.5"/>
  <rect x="520" y="235" width="60" height="20" rx="3" fill="#00FF99" opacity="0.5"/>
  <rect x="410" y="265" width="150" height="20" rx="3" fill="#00FF99" opacity="0.5"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Microservices Monitoring System</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#00FF99" text-anchor="middle">DevOps</text>
</svg>`;

// 4. Container Orchestration
const containerPlatform = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Kubernetes Logo Inspired Design -->
  <circle cx="400" cy="200" r="100" fill="none" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Container Representations -->
  <rect x="370" y="140" width="60" height="40" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  <rect x="330" y="190" width="60" height="40" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  <rect x="410" y="190" width="60" height="40" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  <rect x="370" y="240" width="60" height="40" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Connecting Lines -->
  <line x1="400" y1="140" x2="400" y2="120" stroke="#00FF99" stroke-width="2"/>
  <line x1="330" y1="210" x2="310" y2="210" stroke="#00FF99" stroke-width="2"/>
  <line x1="470" y1="210" x2="490" y2="210" stroke="#00FF99" stroke-width="2"/>
  <line x1="400" y1="280" x2="400" y2="300" stroke="#00FF99" stroke-width="2"/>
  
  <line x1="400" y1="180" x2="370" y2="190" stroke="#00FF99" stroke-width="2"/>
  <line x1="400" y1="180" x2="430" y2="190" stroke="#00FF99" stroke-width="2"/>
  <line x1="370" y1="230" x2="390" y2="240" stroke="#00FF99" stroke-width="2"/>
  <line x1="430" y1="230" x2="410" y2="240" stroke="#00FF99" stroke-width="2"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Container Orchestration Platform</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#00FF99" text-anchor="middle">DevOps</text>
</svg>`;

// 5. GitOps Implementation
const gitopsWorkflow = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#00FF99" stroke-width="2"/>
  
  <!-- GitOps Flow -->
  <rect x="120" y="170" width="150" height="80" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  <text x="195" y="215" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Git Repository</text>
  
  <line x1="270" y1="210" x2="330" y2="210" stroke="#00FF99" stroke-width="2"/>
  <polygon points="330,205 340,210 330,215" fill="#00FF99"/>
  
  <rect x="340" y="170" width="120" height="80" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  <text x="400" y="215" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">CI/CD</text>
  
  <line x1="460" y1="210" x2="520" y2="210" stroke="#00FF99" stroke-width="2"/>
  <polygon points="520,205 530,210 520,215" fill="#00FF99"/>
  
  <rect x="530" y="170" width="150" height="80" rx="5" fill="#1A2333" stroke="#00FF99" stroke-width="2"/>
  <text x="605" y="215" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Kubernetes</text>
  
  <path d="M605 250 C605,280 195,280 195,250" fill="none" stroke="#00FF99" stroke-width="2" stroke-dasharray="5,5"/>
  <polygon points="195,255 195,245 185,250" fill="#00FF99"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">GitOps Workflow Implementation</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#00FF99" text-anchor="middle">DevOps</text>
</svg>`;

// Cloud Project Images

// 1. Multi-Cloud Disaster Recovery
const disasterRecovery = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Cloud 1 - AWS -->
  <path d="M250,150 Q300,100 350,150 Q400,120 380,170 Q420,180 400,210 Q440,240 390,250 Q370,300 320,270 Q290,310 260,280 Q210,300 220,250 Q180,230 210,200 Q190,170 220,160 Q220,120 250,150" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="300" y="210" font-family="Arial" font-size="16" fill="#FFFFFF" text-anchor="middle">AWS</text>

  <!-- Cloud 2 - GCP -->
  <path d="M570,150 Q620,100 670,150 Q720,120 700,170 Q740,180 720,210 Q760,240 710,250 Q690,300 640,270 Q610,310 580,280 Q530,300 540,250 Q500,230 530,200 Q510,170 540,160 Q540,120 570,150" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="620" y="210" font-family="Arial" font-size="16" fill="#FFFFFF" text-anchor="middle">GCP</text>
  
  <!-- Connection Between Clouds -->
  <line x1="390" y1="210" x2="530" y2="210" stroke="#3366FF" stroke-width="2" stroke-dasharray="10,5"/>
  <circle cx="460" cy="210" r="15" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <line x1="454" y1="204" x2="466" y2="216" stroke="#3366FF" stroke-width="2"/>
  <line x1="454" y1="216" x2="466" y2="204" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Multi-Cloud Disaster Recovery</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#3366FF" text-anchor="middle">Cloud</text>
</svg>`;

// 2. Serverless E-commerce
const serverlessEcommerce = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Serverless Architecture Diagram -->
  <rect x="180" y="140" width="440" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="400" y="165" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">API Gateway</text>
  
  <line x1="250" y1="180" x2="250" y2="220" stroke="#3366FF" stroke-width="2"/>
  <line x1="400" y1="180" x2="400" y2="220" stroke="#3366FF" stroke-width="2"/>
  <line x1="550" y1="180" x2="550" y2="220" stroke="#3366FF" stroke-width="2"/>
  
  <rect x="200" y="220" width="100" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="250" y="245" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Lambda</text>
  
  <rect x="350" y="220" width="100" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="400" y="245" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Lambda</text>
  
  <rect x="500" y="220" width="100" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="550" y="245" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Lambda</text>
  
  <line x1="250" y1="260" x2="250" y2="300" stroke="#3366FF" stroke-width="2"/>
  <line x1="400" y1="260" x2="400" y2="300" stroke="#3366FF" stroke-width="2"/>
  <line x1="550" y1="260" x2="550" y2="300" stroke="#3366FF" stroke-width="2"/>
  
  <rect x="180" y="300" width="440" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="400" y="325" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">DynamoDB</text>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Serverless E-commerce Backend</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#3366FF" text-anchor="middle">Cloud</text>
</svg>`;

// 3. Cloud-Native Data Pipeline
const dataPipeline = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Data Pipeline Flow -->
  <rect x="100" y="200" width="100" height="50" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="150" y="230" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Data Sources</text>
  
  <line x1="200" y1="225" x2="240" y2="225" stroke="#3366FF" stroke-width="2"/>
  <polygon points="240,220 250,225 240,230" fill="#3366FF"/>
  
  <rect x="250" y="200" width="100" height="50" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="300" y="230" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Kafka</text>
  
  <line x1="350" y1="225" x2="390" y2="225" stroke="#3366FF" stroke-width="2"/>
  <polygon points="390,220 400,225 390,230" fill="#3366FF"/>
  
  <rect x="400" y="200" width="100" height="50" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="450" y="230" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Spark</text>
  
  <line x1="500" y1="225" x2="540" y2="225" stroke="#3366FF" stroke-width="2"/>
  <polygon points="540,220 550,225 540,230" fill="#3366FF"/>
  
  <rect x="550" y="200" width="100" height="50" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="600" y="230" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Data Lake</text>
  
  <!-- Data Streams -->
  <path d="M120,190 L120,180 L140,180 L140,170 L160,170 L160,180 L180,180 L180,190" fill="none" stroke="#3366FF" stroke-width="1"/>
  <path d="M120,190 L120,180 L130,180 L130,170 L150,170 L150,160 L170,160 L170,170 L190,170 L190,190" fill="none" stroke="#3366FF" stroke-width="1"/>
  
  <path d="M270,190 L270,170 L280,170 L280,160 L290,160 L290,150 L300,150 L300,160 L310,160 L310,170 L320,170 L320,190" fill="none" stroke="#3366FF" stroke-width="1"/>
  
  <path d="M420,190 L420,170 L440,170 L440,160 L460,160 L460,170 L480,170 L480,190" fill="none" stroke="#3366FF" stroke-width="1"/>
  
  <rect x="560" y="140" width="80" height="50" rx="3" fill="#1A2333" stroke="#3366FF" stroke-width="1"/>
  <rect x="570" y="150" width="60" height="10" fill="#3366FF" opacity="0.5"/>
  <rect x="570" y="165" width="30" height="10" fill="#3366FF" opacity="0.5"/>
  <rect x="570" y="180" width="45" height="10" fill="#3366FF" opacity="0.5"/>
  
  <line x1="600" y1="190" x2="600" y2="200" stroke="#3366FF" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Cloud-Native Data Pipeline</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#3366FF" text-anchor="middle">Cloud</text>
</svg>`;

// 4. Secure Cloud Infrastructure
const secureCloud = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Cloud with Shield -->
  <path d="M400,150 Q450,100 500,150 Q550,120 530,170 Q570,180 550,210 Q590,240 540,250 Q520,300 470,270 Q440,310 410,280 Q360,300 370,250 Q330,230 360,200 Q340,170 370,160 Q370,120 400,150" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Shield -->
  <path d="M400,160 L450,160 L450,240 L400,270 L350,240 L350,160 L400,160" fill="none" stroke="#3366FF" stroke-width="3"/>
  <path d="M400,180 L420,180 L420,230 L400,245 L380,230 L380,180 L400,180" fill="#3366FF" opacity="0.3"/>
  
  <!-- Lock Symbol -->
  <rect x="385" y="200" width="30" height="25" rx="3" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <rect x="390" y="185" width="20" height="15" rx="5" fill="none" stroke="#3366FF" stroke-width="2"/>
  <circle cx="400" cy="210" r="3" fill="#3366FF"/>
  <line x1="400" y1="210" x2="400" y2="217" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Secure Cloud Infrastructure</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#3366FF" text-anchor="middle">Cloud</text>
</svg>`;

// 5. Auto-scaling Microservices
const autoScaling = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Auto-scaling Representation -->
  <rect x="200" y="200" width="60" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <rect x="270" y="200" width="60" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <rect x="340" y="200" width="60" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <rect x="410" y="200" width="60" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <rect x="480" y="200" width="60" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Load Graph -->
  <rect x="200" y="150" width="340" height="40" rx="5" fill="#1A2333" stroke="#3366FF" stroke-width="1"/>
  <path d="M210,180 L230,165 L250,175 L270,160 L290,170 L310,165 L330,155 L350,170 L370,165 L390,145 L410,155 L430,150 L450,155 L470,160 L490,165 L510,170 L530,175" fill="none" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Arrows -->
  <line x1="230" y1="250" x2="230" y2="270" stroke="#3366FF" stroke-width="1"/>
  <line x1="300" y1="250" x2="300" y2="270" stroke="#3366FF" stroke-width="1"/>
  <line x1="370" y1="250" x2="370" y2="270" stroke="#3366FF" stroke-width="1"/>
  <line x1="440" y1="250" x2="440" y2="270" stroke="#3366FF" stroke-width="1"/>
  <line x1="510" y1="250" x2="510" y2="270" stroke="#3366FF" stroke-width="1"/>
  
  <path d="M220,270 L520,270" fill="none" stroke="#3366FF" stroke-width="2"/>
  <text x="370" y="290" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Auto-scaling Microservices</text>
  
  <!-- Scale Icons -->
  <line x1="160" y1="170" x2="190" y2="170" stroke="#3366FF" stroke-width="1"/>
  <polygon points="160,165 150,170 160,175" fill="#3366FF"/>
  <line x1="580" y1="170" x2="610" y2="170" stroke="#3366FF" stroke-width="1"/>
  <polygon points="610,165 620,170 610,175" fill="#3366FF"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">Auto-scaling Microservices Platform</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#3366FF" text-anchor="middle">Cloud</text>
</svg>`;

// 6. FinTech Cloud Migration
const fintechMigration = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#1A2333"/>
  <rect x="50" y="50" width="700" height="300" rx="10" fill="#2A3343" stroke="#3366FF" stroke-width="2"/>
  
  <!-- Migration Flow -->
  <rect x="150" y="150" width="120" height="80" rx="5" fill="#1A2333" stroke="#777777" stroke-width="2"/>
  <text x="210" y="190" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Legacy</text>
  <text x="210" y="210" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">System</text>
  
  <!-- Migration Arrows -->
  <line x1="270" y1="190" x2="360" y2="190" stroke="#3366FF" stroke-width="2" stroke-dasharray="5,5"/>
  <polygon points="360,185 370,190 360,195" fill="#3366FF"/>
  
  <!-- Cloud Destination -->
  <path d="M450,150 Q500,100 550,150 Q600,120 580,170 Q620,180 600,210 Q640,240 590,250 Q570,300 520,270 Q490,310 460,280 Q410,300 420,250 Q380,230 410,200 Q390,170 420,160 Q420,120 450,150" fill="#1A2333" stroke="#3366FF" stroke-width="2"/>
  <text x="500" y="200" font-family="Arial" font-size="16" fill="#FFFFFF" text-anchor="middle">Cloud</text>
  
  <!-- Financial Icons -->
  <circle cx="150" cy="270" r="15" fill="none" stroke="#3366FF" stroke-width="1"/>
  <text x="150" y="275" font-family="Arial" font-size="14" fill="#3366FF" text-anchor="middle">$</text>
  
  <circle cx="180" cy="270" r="15" fill="none" stroke="#3366FF" stroke-width="1"/>
  <text x="180" y="275" font-family="Arial" font-size="14" fill="#3366FF" text-anchor="middle">€</text>
  
  <circle cx="210" cy="270" r="15" fill="none" stroke="#3366FF" stroke-width="1"/>
  <text x="210" y="275" font-family="Arial" font-size="14" fill="#3366FF" text-anchor="middle">£</text>
  
  <circle cx="500" cy="270" r="15" fill="none" stroke="#3366FF" stroke-width="1"/>
  <text x="500" y="275" font-family="Arial" font-size="14" fill="#3366FF" text-anchor="middle">$</text>
  
  <circle cx="530" cy="270" r="15" fill="none" stroke="#3366FF" stroke-width="1"/>
  <text x="530" y="275" font-family="Arial" font-size="14" fill="#3366FF" text-anchor="middle">€</text>
  
  <circle cx="560" cy="270" r="15" fill="none" stroke="#3366FF" stroke-width="1"/>
  <text x="560" y="275" font-family="Arial" font-size="14" fill="#3366FF" text-anchor="middle">£</text>
  
  <!-- Speed Indicator -->
  <text x="330" y="160" font-family="Arial" font-size="12" fill="#3366FF" text-anchor="middle">60% Faster</text>
  <line x1="320" y1="210" x2="380" y2="210" stroke="#3366FF" stroke-width="1"/>
  <polygon points="380,207 390,210 380,213" fill="#3366FF"/>
  
  <!-- Title -->
  <text x="400" y="100" font-family="Arial" font-size="24" fill="#FFFFFF" text-anchor="middle">FinTech Cloud Migration</text>
  <text x="400" y="130" font-family="Arial" font-size="16" fill="#3366FF" text-anchor="middle">Cloud</text>
</svg>`;

// Export all SVGs
export {
  cicdPipeline,
  iacProject,
  monitoringSystem,
  containerPlatform,
  gitopsWorkflow,
  disasterRecovery,
  serverlessEcommerce,
  dataPipeline,
  secureCloud,
  autoScaling,
  fintechMigration
};