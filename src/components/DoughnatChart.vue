<script>
import { Doughnut } from "vue-chartjs";
export default {
  props: ['color'],
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Available Liquidity",
          "Total Borrowed"
        ],
        datasets: [
          {
            data: [24776963.38, 83456724.63],
            backgroundColor: ['#574EC1', '#04C9CF']
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false
        },
        legend: {
          display: false
        }
      }
    );
  }
};
</script>
