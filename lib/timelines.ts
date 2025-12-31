export type TimelineCategory = "politics" | "economy" | "history";

export type TimelineEvent = {
  date: string;
  label: string;
  detail: string;
};

export type Timeline = {
  id: string;
  title: string;
  period: string;
  category: TimelineCategory;
  summary: string;
  events: TimelineEvent[];
};

export const timelines: Timeline[] = [
  {
    id: "cold-war",
    title: "The Cold War",
    period: "c. 1947 – 1991",
    category: "politics",
    summary:
      "A long period of strategic rivalry between the United States and the Soviet Union, fought through alliances, proxy wars, and ideology rather than direct large-scale conflict.",
    events: [
      {
        date: "1947–1949",
        label: "Early division of Europe",
        detail:
          "The post-war settlement hardens into two blocs, with the Truman Doctrine, Marshall Plan, and the formation of NATO on one side, and Soviet control over Eastern Europe on the other.",
      },
      {
        date: "1962",
        label: "Cuban Missile Crisis",
        detail:
          "The US and the USSR come close to nuclear war over Soviet missiles in Cuba, leading to new crisis-management mechanisms and a greater awareness of nuclear risk.",
      },
      {
        date: "1989–1991",
        label: "End of the Cold War",
        detail:
          "Reforms in the Soviet Union, the fall of the Berlin Wall, and the dissolution of the USSR bring the bipolar era to a close.",
      },
    ],
  },
  {
    id: "global-financial-crisis",
    title: "Global Financial Crisis",
    period: "2007 – 2009",
    category: "economy",
    summary:
      "A severe worldwide financial crisis that began in the US housing market and spread through a highly interconnected banking system.",
    events: [
      {
        date: "2007",
        label: "Housing bubble bursts",
        detail:
          "Rising defaults on US subprime mortgages begin to reveal weaknesses in complex financial products tied to housing.",
      },
      {
        date: "September 2008",
        label: "Lehman Brothers collapse",
        detail:
          "The failure of Lehman Brothers triggers panic in global credit markets and forces governments to intervene to stabilize the system.",
      },
      {
        date: "2009+",
        label: "Policy response and reform",
        detail:
          "Central banks use unprecedented monetary policy tools, and new regulations are introduced to strengthen bank capital and oversight.",
      },
    ],
  },
  {
    id: "decolonization",
    title: "Decolonization Wave",
    period: "c. 1945 – 1975",
    category: "history",
    summary:
      "The rapid end of European empires and the creation of many new independent states in Asia, Africa, and the Middle East.",
    events: [
      {
        date: "1947",
        label: "Indian independence",
        detail:
          "British India is partitioned into two independent states, India and Pakistan, setting a precedent for the end of other colonial regimes.",
      },
      {
        date: "1950s–1960s",
        label: "African independence",
        detail:
          "Many African territories negotiate or fight for independence, reshaping global politics and the composition of the United Nations.",
      },
      {
        date: "1970s",
        label: "Late decolonization cases",
        detail:
          "Some conflicts and transitions, including those linked to Portugal's former colonies, continue into the 1970s.",
      },
    ],
  },
];

export function getTimelines(): Timeline[] {
  return timelines;
}
