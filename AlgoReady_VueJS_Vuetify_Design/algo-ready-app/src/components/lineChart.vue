<script>
import VueChartJs from "../../node_modules/vue-chartjs";

export default {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "EU Tech",
            //data: [9, 58, 5, 10, 5, 1, 9, 3, 2, 25, 1, 1],
            data: [9, 58, 5, 10, 5, 1, -9, -58, -5, -10, -5, -1],
            backgroundColor: "#512DA8"
          },
          {
            label: "Japan Value",
            //data: [15, 52, 12, 5, 4, 0, 4, 2, 1, 22, 3, 2],
            data: [15, 52, 12, 5, 4, 0, -15, -52, -12, -5, -4, 0],
            backgroundColor: "#FFA000"
          },
          {
            label: "Utilities",
            //data: [17, 11, 22, 18, 12, 22, 22, 19, 24, 9, 8, 1],
            data: [17, 11, 22, 18, 12, 22, -17, -11, -22, -18, -12, -22],
            backgroundColor: "#D32F2F"
          },
          {
            label: "US Momentum",
            //data: [18, 13, 25, 10, 13, 25, 25, 21, 20, 1, 1, 9],
            data: [18, 13, 25, 10, 13, 25, -18, -13, -25, -10, -13, -25],
            backgroundColor: "#4D96BE"
          },
          {
            label: "Others",
            //data: [20, 15, 7, 7, 1, 29, 24, 22, 1, 9, 9, 0],
            data: [20, 15, 7, 7, 1, 29, -20, -15, -7, -7, -1, -29],
            backgroundColor: "#F47A7A"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: "#eaeaea"
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#eaeaea"
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#eaeaea"
              }
            }
          ]
        }
      }
    );
  }
};
</script>


