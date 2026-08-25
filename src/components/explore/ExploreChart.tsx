import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export function ExploreChart({ metricLabel }: { metricLabel: string }) {
  const options: ApexOptions = {
    chart: { type: "area", toolbar: { show: false }, zoom: { enabled: false }, sparkline: { enabled: false } },
    colors: ["#4A62D9"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: { type: "gradient", gradient: { shadeIntensity: 0, opacityFrom: 0.25, opacityTo: 0 } },
    grid: { borderColor: "#E0E3EE", strokeDashArray: 3 },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], labels: { style: { colors: "#555D78", fontSize: "11px" } } },
    yaxis: { labels: { style: { colors: "#555D78", fontSize: "11px" } } },
    tooltip: { theme: "light" },
  };
  const series = [{ name: metricLabel, data: [31, 40, 28, 51, 42, 82, 56] }];
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="text-xs font-semibold mb-2">{metricLabel} — last 7 days · Anarix · Amazon</div>
      <ReactApexChart options={options} series={series} type="area" height={180} />
      <div className="text-[11px] text-muted-foreground">Neutral chart · no brand blue in data · hover for precise values</div>
    </div>
  );
}
