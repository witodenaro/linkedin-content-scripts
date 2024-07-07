<script lang="ts">
  import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"

  import { getCurrentUserProfileMessenger } from "../../dist/messengers/GetCurrentUserProfileMessenger.js"

  export const config: PlasmoCSConfig = {
    matches: ["https://www.linkedin.com/*"]
  }

  export const getOverlayAnchor: PlasmoGetOverlayAnchor = () => {
    return document.querySelector("body")
  }

  async function fetch() {}
</script>

<div>
  <h2 class="text-center">Hello, World.</h2>

  <button on:click={fetch}>Fetch me</button>
</div>
