"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// Light & dark themes
const THEMES = { light: "", dark: ".dark" };

// Chart configuration context
const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

// --------------------------
// CHART CONTAINER
// --------------------------
export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground \
           [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 \
           [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border \
           [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border \
           [&_.recharts-radial-bar-background-sector]:fill-muted \
           [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted \
           [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border \
           flex aspect-video justify-center text-xs \
           [&_.recharts-dot[stroke='#fff']]:stroke-transparent \
           [&_.recharts-layer]:outline-hidden \
           [&_.recharts-sector]:outline-hidden \
           [&_.recharts-sector[stroke='#fff']]:stroke-transparent \
           [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />

        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// --------------------------
// STYLES FOR COLORS/THEMES
// --------------------------
function ChartStyle({ id, config }) {
  const colorConfig = Object.entries(config).filter(
    ([, cfg]) => cfg.theme || cfg.color
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, cfg]) => {
    const color = cfg.theme?.[theme] || cfg.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
}

// --------------------------
// TOOLTIP
// --------------------------
export const ChartTooltip = RechartsPrimitive.Tooltip;

function isRecord(v) {
  return typeof v === "object" && v !== null;
}

// Tooltip content (converted to JSX)
export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) return null;

    const item = payload[0];
    const key =
      labelKey ||
      item?.dataKey ||
      item?.name ||
      "value";

    const itemConfig = getPayloadConfigFromPayload(config, item, key);

    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) return null;

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!active || !payload?.length) return null;

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel && tooltipLabel}

      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = nameKey || item.name || item.dataKey || "value";
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          const innerData = isRecord(item.payload) ? item.payload : undefined;

          const indicatorColor =
            color ||
            innerData?.fill ||
            item.color;

          return (
            <div
              key={item.dataKey || index}
              className={cn(
                "flex flex-wrap w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              )}
            >
              {/* Custom formatter */}
              {formatter && item.value !== undefined ? (
                formatter(
                  Array.isArray(item.value)
                    ? item.value.join(", ")
                    : item.value,
                  item.name,
                  item,
                  index,
                  item.payload
                )
              ) : (
                <>
                  {/* DOT / LINE INDICATOR */}
                  {!hideIndicator && (
                    <div
                      className={cn(
                        "rounded-[2px]",
                        indicator === "dot" && "h-2.5 w-2.5",
                        indicator === "line" && "w-1 h-2.5",
                        indicator === "dashed" &&
                          "w-0 border-[1.5px] border-dashed"
                      )}
                      style={{
                        backgroundColor: indicatorColor,
                        borderColor: indicatorColor,
                      }}
                    />
                  )}

                  {/* LABEL TEXT */}
                  <div className="flex flex-1 justify-between leading-none">
                    <div className="grid gap-1.5">
                      {nestLabel && tooltipLabel}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value !== undefined && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {Number(item.value).toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------
// LEGEND
// --------------------------
export const ChartLegend = RechartsPrimitive.Legend;

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload = [],
  verticalAlign = "bottom",
  nameKey,
}) {
  const { config } = useChart();

  if (!payload.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = nameKey || item.dataKey || "value";
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          >
            {!hideIcon ? (
              itemConfig?.icon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 rounded-[2px]"
                  style={{ backgroundColor: item.color }}
                />
              )
            ) : null}

            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// --------------------------
// HELPERS
// --------------------------
function getPayloadConfigFromPayload(config, payload, key) {
  if (!isRecord(payload)) return undefined;

  const inner = isRecord(payload.payload) ? payload.payload : undefined;

  let configKey = key;

  if (typeof payload[key] === "string") configKey = payload[key];
  else if (inner && typeof inner[key] === "string") configKey = inner[key];

  return config[configKey] || config[key];
}

export { ChartStyle };
