<template>
<div class="text-page">
    <div class="text-page-content">
        <slot/>
    </div>
</div>
</template>

<style lang="scss" scoped>
.text-page {
  padding: 16px;
  display: flex;
  justify-content: center;
}
.text-page-content {
  /* optimal width for legibility: https://baymard.com/blog/line-length-readability */
  @include media(">sm") {
    max-width: 560px;
    width: 560px;
  }
  @include media ("<sm") {
      flex: 1;
  }
}
</style>
