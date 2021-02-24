<template>
  <div>
    <div class="d-flex flex-column mb-4">
      <h1 class="primary--text">Overview</h1>
      <div class="d-flex flex-row align-center">
        <v-img src="@/assets/img/usdt.svg" :aspect-ratio="1" max-width="35" max-height="35" contain></v-img>        
        <p class="ml-2 my-auto">USDT Coin (USDT)</p>
      </div>
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
        <status-card></status-card>
      </v-col>
      <v-col cols="12" md="5" lg="5" xl="5">
        <information-card></information-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import chartCard from '../components/ChartCard';
import statusCard from '../components/StatusCard';
import informationCard from '../components/InformationCard';

export default {
  components: {
    chartCard,
    statusCard,
    informationCard
  }
}
</script>
