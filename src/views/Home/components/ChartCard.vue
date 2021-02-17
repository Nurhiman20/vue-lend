<template>
  <div>
    <v-card flat max-height="45vh" class="pb-4">
      <v-card-title class="primary--text pb-0">{{ title }}</v-card-title>
      <div class="chart-3 pr-2">
        <line-chart-two v-if="title === 'Stable vs Variable APR'"></line-chart-two>
        <line-chart :color="color" v-else></line-chart>
      </div>
    </v-card>
  </div>
</template>

<script>
import lineChart from '@/components/LineChart.vue';
import lineChartTwo from '@/components/LineChart2.vue';

export default {
  props: ['title', 'color'],
  components: {
    lineChart,
    lineChartTwo
  }
};
</script>
