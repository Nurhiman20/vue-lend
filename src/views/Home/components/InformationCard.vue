<template>
  <div>
    <v-card flat class="pa-3 pb-12">
      <v-card-title class="primary--text">Your information</v-card-title>
      <div class="d-flex flex-column px-3">
        <p class="text-bold secondary--text">Borrows</p>
        <div class="d-flex flex-row justify-space-between">
          <p>Borrowed</p>
          <p><span class="text-bold">0.00</span> DAI</p>
        </div>
        <div class="d-flex flex-row justify-space-between">
          <p>Health factor</p>
          <p>-</p>
        </div>
        <div class="d-flex flex-row justify-space-between">
          <p>Loan to value</p>
          <p><span class="text-bold">0</span> %</p>
        </div>
        <div class="d-flex flex-row justify-space-between">
          <p>Available to you</p>
          <p><span class="text-bold">0.00</span> DAI</p>
        </div>
        <p class="text-bold secondary--text mt-6">Deposits</p>
        <div class="d-flex flex-row justify-space-between">
          <p>Your wallet balance</p>
          <p><span class="text-bold">0.00</span> DAI</p>
        </div>
        <div class="d-flex flex-row justify-space-between">
          <p>You already deposited</p>
          <p><span class="text-bold">0.00</span> DAI</p>
        </div>
        <div class="d-flex flex-row justify-space-between mt-6">
          <v-chip color="primary">Deposit</v-chip>
          <v-chip color="grey">Borrow</v-chip>          
          <v-chip color="grey" outlined>Withdraw</v-chip>
          <v-chip color="grey" outlined>Repay</v-chip>
        </div>
      </div>
    </v-card>
  </div>
</template>
