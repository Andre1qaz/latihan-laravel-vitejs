import React, { useEffect, useRef, useState } from 'react';
import AppLayout from '@/layouts/AppLayout';
import ApexCharts from 'apexcharts';

export default function Stats() {
    const chartRef = useRef(null);
    const [stats, setStats] = useState({ total: 0, finished: 0, unfinished: 0, chart: { labels: [], series: [] } });

    useEffect(() => {
        fetch(route('todos.stats'))
            .then((res) => res.json())
            .then((data) => {
                setStats(data);
            });
    }, []);

    useEffect(() => {
        if (!stats || !stats.chart) return;

        const options = {
            chart: {
                type: 'area',
                height: 320,
            },
            series: [
                {
                    name: 'Todos',
                    data: stats.chart.series,
                },
            ],
            xaxis: {
                categories: stats.chart.labels,
            },
            stroke: { curve: 'smooth' },
        };

        if (chartRef.current) {
            chartRef.current.innerHTML = '';
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();
            return () => chart.destroy();
        }
    }, [stats]);

    return (
        <AppLayout>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-semibold mb-4">Statistik Todo</h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 border rounded">
                        <div className="text-sm text-muted-foreground">Total</div>
                        <div className="text-2xl font-bold">{stats.total}</div>
                    </div>
                    <div className="p-4 border rounded">
                        <div className="text-sm text-muted-foreground">Selesai</div>
                        <div className="text-2xl font-bold">{stats.finished}</div>
                    </div>
                    <div className="p-4 border rounded">
                        <div className="text-sm text-muted-foreground">Belum Selesai</div>
                        <div className="text-2xl font-bold">{stats.unfinished}</div>
                    </div>
                </div>

                <div className="p-4 border rounded">
                    <div ref={chartRef} />
                </div>
            </div>
        </AppLayout>
    );
}
