<template>
  <div>
    <v-card flat class="pa-3 pb-6">
      <v-card-title class="primary--text">Reserve Status & Configuration</v-card-title>
      <v-chip color="background" class="ml-2 mt-n2">
        Reserve Size
        <span class=" ml-3 text-bold">$108,962,420.49</span>
      </v-chip>
      <v-row no-gutters align="center">
        <v-col cols="12" align="center">
          <div class="d-flex flex-column justify-center mt-3">
            <p class="text-bold mb-0">77.11 %</p>
            <p>Utilization rate</p>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4" align="center">
          <div class="d-flex flex-column justify-center mt-3">
            <div class="d-flex flex-row justify-center">
              <p class="mb-0">Available Liquidity</p>
              <v-avatar
                color="primary"
                size="16"
                class="my-auto ml-2"
              ></v-avatar>
            </div>
            <h2>24,776,963.38</h2>
            <p class="app-subtitle">$24,744,428.29</p>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4">
          <doughnat-chart></doughnat-chart>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4" align="center">
          <div class="d-flex flex-column justify-center mt-3">
            <div class="d-flex flex-row justify-center">
              <p class="mb-0">Total Borrowed</p>
              <v-avatar
                color="secondary"
                size="16"
                class="my-auto ml-2"
              ></v-avatar>
            </div>
            <h2>83,456,724.63</h2>
            <p class="app-subtitle">$83,347,136.08</p>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="4" lg="4" xl="4" align="center">
          <v-card outlined class="pa-3">
            <div class="d-flex flex-column">
              <p class="mb-2 secondary2--text">Deposit</p>
              <v-divider></v-divider>
              <div class="d-flex flex-row justify-space-between mt-3">
                <p>Deposit APY</p>
                <p class="text-bold">7.04%</p>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p>Past 30D Avg.</p>
                <p class="text-bold">-</p>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4" align="center">
          <v-card outlined class="pa-3">
            <div class="d-flex flex-column">
              <p class="mb-2 secondary--text">Deposit</p>
              <v-divider></v-divider>
              <div class="d-flex flex-row justify-space-between mt-3">
                <p>Deposit APR</p>
                <p class="text-bold">7.04%</p>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p>% over total</p>
                <p class="text-bold">9.96%</p>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4" align="center">
          <v-card outlined class="pa-3">
            <div class="d-flex flex-column">
              <p class="mb-2 primary--text">Variable Borrowing</p>
              <v-divider></v-divider>
              <div class="d-flex flex-row justify-space-between mt-3">
                <p>Deposit APR</p>
                <p class="text-bold">7.04%</p>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p>Past 30D Avg.</p>
                <p class="text-bold">-</p>
              </div>
              <div class="d-flex flex-row justify-space-between">
                <p>% over total</p>
                <p class="text-bold">9.96%</p>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="2" lg="2" xl="2" align="center">
          <div class="d-flex flex-column">
            <p>Maximum LTV</p>
            <p class="text-bold mt-n3">75.00 %</p>
          </div>
        </v-col>
        <v-col cols="6" md="2" lg="2" xl="2" align="center">
          <div class="d-flex flex-column">
            <p>Liquidation threshold</p>
            <p class="text-bold mt-n3">75.00 %</p>
          </div>
        </v-col>
        <v-col cols="6" md="2" lg="2" xl="2" align="center">
          <div class="d-flex flex-column">
            <p>Liquidation penalty</p>
            <p class="text-bold mt-n3">75.00 %</p>
          </div>
        </v-col>
        <v-col cols="6" md="2" lg="2" xl="2" align="center">
          <div class="d-flex flex-column">
            <p>Used as collateral</p>
            <p class="text-bold mt-n3 success--text">Yes</p>
          </div>
        </v-col>
        <v-col cols="6" md="2" lg="2" xl="2" align="center">
          <div class="d-flex flex-column">
            <p>Stable borrowing</p>
            <p class="text-bold mt-n3 success--text">Yes</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import doughnatChart from '@/components/DoughnatChart';

export default {
  components: {
    doughnatChart
  }
}
</script>
