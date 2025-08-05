import { CheckCircle2, Circle, Clock } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Foundation & Launch",
      status: "current",
      items: [
        "Smart contract development & audit",
        "Community building & partnerships",
        "Presale launch via PinkSale",
        "Token listing on DEX",
        "Initial liquidity provision"
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Platform Development",
      status: "upcoming",
      items: [
        "LES DeFi platform beta launch",
        "Staking mechanism implementation",
        "Yield farming pools activation",
        "Mobile app development",
        "CEX listing applications"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Expansion & Features",
      status: "upcoming",
      items: [
        "Advanced DeFi tools integration",
        "Cross-chain bridge development",
        "Governance token features",
        "NFT marketplace integration",
        "Strategic partnerships"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Ecosystem Growth",
      status: "upcoming",
      items: [
        "Lending & borrowing protocols",
        "Insurance product launch",
        "DAO governance implementation",
        "Multi-chain expansion",
        "Institutional partnerships"
      ]
    },
    {
      quarter: "Q1 2026",
      title: "Advanced DeFi",
      status: "future",
      items: [
        "Algorithmic trading tools",
        "Synthetic assets platform",
        "Derivatives trading",
        "AI-powered yield optimization",
        "Enterprise solutions"
      ]
    },
    {
      quarter: "Q2-Q3 2026",
      title: "Global Adoption",
      status: "future",
      items: [
        "Pokepay integration & launch",
        "Global payment solutions",
        "Regulatory compliance framework",
        "Banking partnerships",
        "Mass adoption initiatives"
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case "current":
        return <Clock className="w-6 h-6 text-gold animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "from-green-500/20 to-green-500/10 border-green-500/30";
      case "current":
        return "from-yellow-500/20 to-yellow-500/10 border-yellow-500/30";
      default:
        return "from-muted/20 to-muted/10 border-border";
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-muted/30">
      <div className="mx-auto px-4  flex  item-center justify-center">
        <div className="max-w-4xl flex item-center flex-col">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-glow bg-clip-text text-transparent">
              Roadmap
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey from token launch to becoming the leading halal DeFi platform
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-blue to-muted transform md:-translate-x-px"></div>

            {/* Roadmap Items */}
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 bg-background border-2 border-yellow-500 rounded-full flex items-center justify-center z-10">
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content Card (Custom) */}
                  <div
                    className={`flex-1 ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`rounded-xl border bg-gradient-to-br ${getStatusColor(
                        item.status
                      )} p-6 shadow transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground">
                          {item.title}
                        </h3>
                        <span className="text-sm font-semibold px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full">
                          {item.quarter}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="flex items-start gap-3 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Roadmap;
