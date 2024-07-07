<script lang="ts">
  import type { PlasmoGetOverlayAnchor } from "plasmo"
  import { messengers } from "../../src"
  import { addConnectionsMessenger } from "../../src/messengers/AddConnectionMessenger"


  export const getOverlayAnchor: PlasmoGetOverlayAnchor = () => {
    return document.querySelector("body")
  }

  async function fetch() {
  }
</script>

<div>
  <h2 class="text-center">Hello, World.</h2>

  <button on:click={fetch}>Fetch me</button>
</div>
