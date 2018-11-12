Vue.component('doughnut-chart', {
  extends: VueChartJs.Doughnut,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Flic","Keuf","Police","Condé", "BAC", "Autres"],
      datasets: [
        {
          label: 'Affaire de corruption en IDF par département',
          backgroundColor: ['#393c51', '#666b8c', '#8f95bf', '#a8afe0', '#a7add6', "#54555b"],
          data: [20 , 19 , 15 , 8, 6, 20],
          datalabels: {
            align: 'center',
            anchor: 'center'
          }
        }
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#e3e6f9',
					font: {
						weight: 'bold'
					},
          formatter: function(v, ctx) {
            return [v, data.labels[ctx.dataIndex]]
          }
				}
			}
    };

    this.renderChart(data, options);
  }
})
