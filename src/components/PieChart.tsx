'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PieChartProps {
  data: { label: string; value: number }[];
  colors: string[];
}

const PieChart: React.FC<PieChartProps> = ({ data, colors }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  // Function to calculate chart size based on screen width
  // Function to calculate chart size based on screen width
  const getChartSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) return 290; // Increased from 270
    if (screenWidth >= 375) return 220; // Increased from 200
    return 170; // Increased from 150 for very small screens
  };

  useEffect(() => {
    if (chartRef.current) {
      // Clear the previous chart
      d3.select(chartRef.current).selectAll('*').remove();

      // Determine dynamic size
      const size = getChartSize();
      const width = size;
      const height = size;

      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) / 2 - 20;

      // Create SVG container
      const svg = d3
        .select(chartRef.current)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${centerX}, ${centerY})`);

      // Pie generator
      const pie = d3
        .pie<{ label: string; value: number }>()
        .value((d) => d.value)
        .sort(null);

      // Arc generator with irregular radii
      const arc = d3
        .arc<d3.PieArcDatum<{ label: string; value: number }>>()
        .innerRadius(0)
        .outerRadius(
          (d, i) => baseRadius + (i % 2 === 0 ? 10 : -10) + Math.random() * 5,
        )
        .padAngle(0.05);

      // Bind data and create slices
      svg
        .selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', arc as any)
        .attr('fill', (d, i) => colors[i % colors.length])
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);

      // Add labels and percentages
      svg
        .selectAll('.slice-text-group')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('transform', (d) => {
          const [x, y] = arc.centroid(d);
          return `translate(${x}, ${y})`;
        })
        .each(function (d) {
          const group = d3.select(this);

          // Add percentage text
          group
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('font-size', '16px')
            .attr('fill', '#fff')
            .text(`${d.data.value}%`);

          // Add category label
          group
            .append('text')
            .attr('dy', '1.2em')
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('fill', '#fff')
            .text(d.data.label);
        });
    }
  }, [data, colors]);

  return <svg ref={chartRef} style={{ border: 'gray' }}></svg>;
};

export default PieChart;

// 'use client';
// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// interface PieChartProps {
//   data: { label: string; value: number }[];
//   colors: string[];
// }

// const IrregularPieChart: React.FC<PieChartProps> = ({ data, colors }) => {
//   const chartRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       // Clear the previous chart
//       d3.select(chartRef.current).selectAll('*').remove();

//       // Get the container dimensions
//       const container = chartRef.current.parentElement;
//       const width = container ? container.offsetWidth : 300;
//       const height = container ? container.offsetHeight : 300;

//       const centerX = width / 2;
//       const centerY = height / 2;
//       const baseRadius = Math.min(width, height) / 2 - 20;

//       // Create SVG container
//       const svg = d3
//         .select(chartRef.current)
//         .attr('width', width)
//         .attr('height', height)
//         .append('g')
//         .attr('transform', `translate(${centerX}, ${centerY})`);

//       // Pie generator
//       const pie = d3
//         .pie<{ label: string; value: number }>()
//         .value((d) => d.value)
//         .sort(null);

//       // Arc generator with irregular radii
//       const arc = d3
//         .arc<d3.PieArcDatum<{ label: string; value: number }>>()
//         .innerRadius(0)
//         .outerRadius(
//           (d, i) => baseRadius + (i % 2 === 0 ? 10 : -10) + Math.random() * 5,
//         )
//         .padAngle(0.05);

//       // Bind data and create slices
//       svg
//         .selectAll('path')
//         .data(pie(data))
//         .enter()
//         .append('path')
//         .attr('d', arc as any)
//         .attr('fill', (d, i) => colors[i % colors.length])
//         .attr('stroke', '#fff')
//         .attr('stroke-width', 2);

//       // Add labels and percentages
//       svg
//         .selectAll('.slice-text-group')
//         .data(pie(data))
//         .enter()
//         .append('g')
//         .attr('transform', (d) => {
//           const [x, y] = arc.centroid(d);
//           return `translate(${x}, ${y})`;
//         })
//         .each(function (d) {
//           const group = d3.select(this);

//           // Add percentage text
//           group
//             .append('text')
//             .attr('text-anchor', 'middle')
//             .attr('font-size', '12px')
//             .attr('fill', '#fff')
//             .text(`${d.data.value}%`);

//           // Add category label
//           group
//             .append('text')
//             .attr('dy', '1.2em')
//             .attr('text-anchor', 'middle')
//             .attr('font-size', '10px')
//             .attr('fill', '#fff')
//             .text(d.data.label);
//         });
//     }
//   }, [data, colors]);

//   return <svg ref={chartRef} style={{ width: '100%', height: '100%', border: 'gray' }}></svg>;
// };

// export default IrregularPieChart;
// //
