<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
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
          "July"
        ],
        datasets: [
          {
            label: 'Stable',
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "#574EC1",
            pointBackgroundColor: "#574EC1"
          },
          {
            label: 'Variable',
            data: [5, 3, 6, 8, 3, 5, 12],
            backgroundColor: "transparent",
            borderColor: "#04C9CF",
            pointBackgroundColor: "#04C9CF"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        aspecRatio: 0.75,
        title: {
          display: false
        },
        legend: {
          position: 'bottom'
        }
      }
    );
  }
};
</script>
