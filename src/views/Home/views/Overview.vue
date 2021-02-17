<template>
  <div>
    <div class="d-flex flex-column">
      <h1 class="primary--text">Overview</h1>
      <p>USDT Coin (USDT)</p>
    </div>
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="4">
        <chart-card :title="'Stable vs Variable APR'"></chart-card>
      </v-col>
      <v-col cols="12" md="4" lg="4" xl="4">
        <chart-card :title="'Deposit APY'" :color="'#FE9900'"></chart-card>
      </v-col>
      <v-col cols="12" md="4" lg="4" xl="4">
        <chart-card :title="'Utilisation Rate'" :color="'#EF3653'"></chart-card>
      </v-col>
      <v-col cols="12" md="7" lg="7" xl="7">
        <v-card flat class="primary--text">
          <v-card-title>Reserve Status & Configuration</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="5" lg="5" xl="5">
        <v-card flat class="primary--text">
          <v-card-title>Your information</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import chartCard from '../components/ChartCard';

export default {
  components: {
    chartCard
  }
}
</script>
