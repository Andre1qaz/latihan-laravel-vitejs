import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

export default function ApexChartWrapper({ labels = [], series = [] }) {
    const id = 'apex-chart-' + Math.random().toString(36).substr(2, 9);

    useEffect(() => {
        const options = {
            chart: { type: 'area', height: 240 },
            series: [{ name: 'Todos', data: series }],
            xaxis: { categories: labels },
        };

        const chart = new ApexCharts(document.querySelector('#' + id), options);
        chart.render();

        return () => chart.destroy();
    }, [id, labels.join(','), series.join(',')]);

    return <div id={id} />;
}
