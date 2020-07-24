<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.variantz.com/" target="_blank">Variantz</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Variantz Asia Pacific Pte. Ltd. |  All Rights Reserved</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a href="https://coreui.io/vue" target="_blank">CoreUI for Vue</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>


