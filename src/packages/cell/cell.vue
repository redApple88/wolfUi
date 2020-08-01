<template>
  <a
    :class="['jz-cell', { 'jz-cell-link': isLink }]"
    :href="linkUrl"
    :style="{ 'background-color': bgColor }"
  >
    <div class="jz-cell-box">
      <div class="jz-cell-left">
        <span class="jz-cell-title"
          ><slot name="title">{{ title }}</slot></span
        >
        <span class="jz-cell-sub-title"
          ><slot name="sub-title">{{ subTitle }}</slot></span
        >
      </div>
      <div class="jz-cell-right">
        <span class="jz-cell-desc"
          ><slot name="desc">{{ desc }}</slot></span
        >
        <span class="jz-cell-icon"
          ><slot name="icon" v-if="showIcon"
            ><img
              src="data:image/svg+xml,%3Csvg viewBox='0 0 5 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.215 9.757l3.577-4.17a.931.931 0 0 0 0-1.173L1.215.244a.642.642 0 0 0-1.007 0 .929.929 0 0 0 0 1.172L3.283 5 .208 8.584a.93.93 0 0 0 0 1.173.643.643 0 0 0 1.007 0z' fill='%23c8c8cd'/%3E%3C/svg%3E"
              alt=""/></slot
        ></span>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "jz-cell",
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkUrl: {
      type: String,
      default: "javascript:;",
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "#FFFFFF",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
