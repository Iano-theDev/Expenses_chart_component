// alert("it works!");
const chartBars = document.getElementById('chartBars').getContext("2d");

let myChart = new Chart(chartBars, {
    type: 'bar',
    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        label: 'expenditure',
        data: [25, 55, 70, 45, 35, 63, 40],
        backgroundColor: 'hsl(10, 79%, 65%)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          // hide y-axis labels
          ticks: {
            display: false
          }
        }
      }
      
    }
  });