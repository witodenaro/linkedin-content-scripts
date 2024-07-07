<script lang="ts">
  import { getCurrentUserProfile } from "linkedin-api-adapter"

  export let count = 0
  async function increment() {
    const profile = await getCurrentUserProfile()
    console.log(profile)
  }
</script>

<div>
  <h2 class="text-center">
    Welcome to your <a href="https://www.plasmo.com" target="_blank">Plasmo</a> Extension!
  </h2>
  <div class="container">
    <p>Current count: <b>{count}</b></p>
    <button on:click={increment}>+</button>
  </div>
</div>
