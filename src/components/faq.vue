<template >
  <div class="bg-content text-gray-100 ">
    <h2 class="text-center font-semibold md:text-5xl text-4xl py-3 ">FAQs</h2>
    <Accordion
      
    expandIcon="pi pi-plus" collapseIcon="pi pi-minus"
      class="xl:w-[50%] lg:w-[60%] md:w-[70%] w-[90%] mx-auto py-10 flex flex-col gap-3 "
    >
      <AccordionTab v-for="tab in tabs" class=" m-5 border-2 flex justify-center px-2 items-center border-yellow-400">
        <template #header>
          <span class="flex items-center gap-4 font-semibold text-md w-[90%] px-5 py-5  ">
            {{ tab.title }}
          </span>
        </template>
        <p class="px-5 py-3 text-gray-200 ">
          {{ tab.content }}
        </p>
      </AccordionTab>
    </Accordion>
  </div>
</template>
<script setup>
import { ref } from "vue";
import "primeicons/primeicons.css";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const tabs = ref([
  {
    title: "What is Halalend?",
    content:
      " Halalend is a lending and borrowing protocol on Cardano, distinct with its unique interest-free model."
    },
  {
    title: "Why Halalend?",
    content:
      " Building Halalend is driven by a desire to address the prevailing reliance on interest-based systems, which has cast a shadow over the global economy. By offering an alternative, we aim to mitigate the seeds of economic instability and alleviate the daunting burden of debt that such systems often impose",
  },
  {
    title: "Why Borrow?",
    content:
      " Simply put, to access liquidity without selling assets. This enables users to leverage their holdings and retain potential value appreciation in the long term.",
  },
  {
    title: "Can I Lend Directly To Users?",
    content:
      " No, you cannot lend directly to users. however, you can provide liquidity to loan pools and earn yield from the protocol.",
  },
  {
    title: "Will There Be A Native Token?",
    content:
      "Yes, there will be a native token whose utility will be governance, bearer of a portion of protocol fees, loan pools bootstrap, liquidation market participation, yields, and protocol development.",
  },
  {
    title: "Do Debts/Loans Accrue Interest Overtime?",
    content:
      "No, interest on Halalend is default to Zero.",
  },
  {
    title: "How Does The Platform Generate Revenue If No Interest Is Charged On Loans? ",
    content:
      "The protocol generates revenue from fees and protocol owned private stakepools.",
  },
  {
    title:"What Are The Risks Involved in Using Halalend?",
    content:
      "Although we will ensure a thorough audit of our smart contracts before exposing it to usage by the community, we cannot neglect the fact that the risk of failure and other potential bugs exist. Additionally, using the platform as a borrower, subjects your collateral for a potential liquidation in the event of one of two cases namely: 1. loan term overdue. 2. Undercollateralized position"
  },
  {
    title:"What Assets Are Supported On Halalend?",
    content:"Supported assets will be a governance decision by the Halalend DAO. Ultimately, the underlying design is modeled to support all Cardano Native Tokens."
  },
  {
    title:"What Happens If The Market Value Of My Collateral Changes?",
    content:" Collateral value changes can be positive or negative. A positive change (price appreciation) of collateral means more health to your debt position, reduced risk of liquidation, and more possibility to borrow more with thesame collateral while a negative change can lead to liquidation."
  },
  {
    title:"What Security Measures Are In Place To Protect User Funds?",
    content:" Rigorous audit of our Smart Contracts and the use of multisigs, managed by different projects in the ecosystem to avoid single point of failure."
  },
  {
    title:"How Are Interest Calculated On Loans?",
    content:" No interest charged on loans."
  },
  {
    title:"How Are Interest Rates Determined?",
    content:"No interest charged"
  },
  {
    title:"Is There A Min. And Max. Loan Amount?",
    content:" Yes, the actual amounts will be finalized and updated before mainnet."
  },
  {
    title:"Are There Fees Associated With Using The Protocol?",
    content:"Yes, there are fees associated with protocol usage. This refers to activities like providing collateral, providing liquidity, borrowing, repayment, and redemption."
  },
  {
    title:"What Happens In Case Of Loan Default?",
    content:" Collateral gets Liquidated. "
  }
]);
</script>
<style scoped>
.p-accordion-content{
  border: 2px solid red;
}
</style>