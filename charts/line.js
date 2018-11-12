Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
      datasets: [
        {
          fillColor : "rgba(57, 60, 81, 0.8)",
          label: 'Pourcentage de chansons évoquant au moins une fois la police',
          borderColor: '#393c51',
          // backgroundColor: '#393c51',
          pointColor : "#fffff",
          data: [32.258, 24.590, 30.833, 29.114, 40.541, 38.596, 21.505, 26.230, 34.536, 35.795, 35.743, 31.022, 31.818, 30.451, 31.930, 33.276, 28.728, 30.814, 23.068, 25.856, 22.979, 20.994]
        }
      ]
    };

    var options = this.options || {
      legend: {
        display: false
      },
      tooltips: {
        enabled: true
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 50
            }
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
