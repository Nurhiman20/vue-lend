<script>
import { Line } from "vue-chartjs";
export default {
  props: ['color'],
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
            label: 'Total Transaksi',
            data: [3, 8, 5, 3, 6, 4, 5],
            backgroundColor: "transparent",
            borderColor: this.color,
            pointBackgroundColor: this.color
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false
        },
        legend: {
          display: false
        },
      }
    );
  }
};
</script>
