Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
      datasets: [
        {
          label: 'Pourcentage de mentions du mot "BAC"',
          backgroundColor: '#393c51',
          // data: [0, 1, 4, 0, 2, 0, 0, 3, 6, 6, 9, 9, 8, 7, 10, 21, 7, 12, 19, 14, 27, 24],
          data: [0, 3.448275862, 8.510638298, 0, 4.347826087, 0, 0, 4.47761194, 5.825242718, 7.142857143, 6.923076923, 6.870229008, 6.106870229, 6.034482759, 8.064516129, 7.52688172, 4.069767442, 5.429864253, 7.509881423, 4.666666667, 6.617647059, 7.868852459],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }
      ]
    };

    var options = this.options || {
      responsive: true,
      tooltips: {
        enabled: true
      },
      legend: {
        display: false
      },
			plugins: {
				datalabels: {
          display: false,
					color: '#393c51',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
