import { ChartConfig } from "@/components/ui/chart";

export const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];


export const chartData = [
  { point: 'A', total: 275, fill: 'var(--color-A)' },
  { point: 'Bplus', total: 200, fill: 'var(--color-Bplus)' },
  { point: 'B', total: 187, fill: 'var(--color-B)' },
  { point: 'Cplus', total: 173, fill: 'var(--color-Cplus)' },
  { point: 'C', total: 90, fill: 'var(--color-C)' },
  { point: 'Dplus', total: 173, fill: 'var(--color-Dplus)' },
  { point: 'D', total: 187, fill: 'var(--color-D)' },
  { point: 'F', total: 90, fill: 'var(--color-F)' },
];


export const chartConfig = {
  total: {
    label: "Số sinh viên",
  },
  A: {
    label: "A",
    color: "hsl(var(--chart-1))",
  },
  Bplus: {
    label: "B+",
    color: "hsl(var(--chart-2))",
  },
  B: {
    label: "B",
    color: "hsl(var(--chart-3))",
  },
  Cplus: {
    label: "C",
    color: "hsl(var(--chart-4))",
  },
  C: {
    label: "C+",
    color: "hsl(var(--chart-5))",
  },
  Dplus: {
    label: "D+",
    color: "hsl(var(--chart-6))",
  },
  D: {
    label: "D",
    color: "hsl(var(--chart-7))",
  },
  F: {
    label: "F",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig


export const summaryData = [{
  "point": "A",
  "total": 755
}, {
  "point": "B+",
  "total": 771
}, {
  "point": "B",
  "total": 623
}, {
  "point": "C+",
  "total": 714
}, {
  "point": "C",
  "total": 374
}, {
  "point": "D+",
  "total": 507
}, {
  "point": "D",
  "total": 604
}, {
  "point": "F",
  "total": 110
}]