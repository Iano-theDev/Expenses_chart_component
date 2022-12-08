// alert("it works!");
const chartBars = document.getElementById('chartBars').getContext("2d");

let myChart = new Chart(chartBars, {
    type: 'bar',
    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        label: '',
        data: [25, 55, 70, 45, 35, 60, 40],
        backgroundColor: [
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(186, 34%, 60%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)'
        ],
        borderWidth: 1,
        borderRadius: 5
      }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                    drawOnChartArea: false
                }
            },

            y: {
            beginAtZero: true,
            ticks: {
                display: false // hide y-axis labels
            },
            grid: {
                drawBorder: false,
                display: false // hide background grid mesh
            }
            }

      }
    }
  });