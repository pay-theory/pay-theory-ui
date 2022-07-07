import React, { useCallback, useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useChartData, HOURS, DAYS } from "./chartHooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PaymentsChart = ({ payments = [], daily, weekly }) => {
  const type = daily ? HOURS : weekly ? DAYS : null;
  const label = daily ? "Yesterday" : "Last Week";
  const [options, chartData, currentData, priorData, labels] = useChartData(
    payments,
    type
  );
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [sideMargin, setSideMargin] = useState(48);

  const beforeDraw = useCallback((chart) => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx;
      ctx.save();
      const activePoint = chart.tooltip._active[0];
      ctx.beginPath();
      setHoverIndex(activePoint.index);
      ctx.moveTo(activePoint.element.x, chart.chartArea.top);
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#de9dff";
      ctx.stroke();
      ctx.restore();
    }
    if (chart.chartArea) {
      setSideMargin(chart.chartArea.left);
    }
  }, []);

  const currentLabel = useCallback(() => {
    let now = new Date();
    if (type === HOURS) {
      now = now.getHours();
    } else {
      now = now.getDay();
    }
    return labels[now];
  });

  const formatAmount = useCallback(
    (amountArray) => {
      if (amountArray.length === 0) {
        return "-";
      } else {
        let amount =
          amountArray[isHovering ? hoverIndex : amountArray.length - 1];
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(amount || 0);
      }
    },
    [isHovering, hoverIndex]
  );

  if (options && chartData) {
    return (
      <div>
        <div className="chart-info">
          <div className={"chart-info-current"}>
            <div className={"chart-info-title"}>
              <div
                className="legend-dot"
                style={{ backgroundColor: `#c552ff` }}
              />
              <h4>Payments</h4>
            </div>
            <h3 className={"chart-info-amount"}>{formatAmount(currentData)}</h3>
            <h5 className={"chart-info-subtitle"}>
              {isHovering ? labels[hoverIndex] : currentLabel()}
            </h5>
          </div>
          <div className={"chart-info-prior"}>
            <div className={"chart-info-title"}>
              <div
                className="legend-dot"
                style={{ backgroundColor: `#6a606d` }}
              />
              <h4>{label}</h4>
            </div>
            <h3 className={"chart-info-amount"}>{formatAmount(priorData)}</h3>
            <h5 className={"chart-info-subtitle"}>
              {isHovering ? labels[hoverIndex] : ""}
            </h5>
          </div>
        </div>
        <Line
          options={options}
          data={chartData}
          plugins={[
            {
              id: "annotationline",
              beforeDraw: beforeDraw
            }
          ]}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        <style jsx>{`
          .chart-info {
            display: flex;
            align-items: center;
            margin: 8px ${sideMargin}px;
          }
          .chart-info-current,
          .chart-info-prior {
            display: flex;
            flex-direction: column;
            margin-right: 80px;
            min-width: 160px;
          }
          .chart-info-title {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            position: relative;
          }

          .legend-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            left: -16px;
          }
          .chart-info-subtitle {
            min-height: 17px;
            color: #69606c;
          }
        `}</style>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default PaymentsChart;
