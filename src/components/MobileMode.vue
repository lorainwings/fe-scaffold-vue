<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1024 1024"
    >
      <symbol id="vite-svg-icon" viewBox="0 0 1024 1024">
        <path
          style="fill-rule: evenodd"
          d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"
          p-id="3347"
        />
      </symbol>
    </svg>

    <div class="wrap" v-if="data.isA">
      <svg class="wrap-a-svg">
        <use xlink:href="#vite-svg-icon"></use>
      </svg>
      <input
        type="text"
        id="success_form_input"
        readonly
        v-model="data.copy_content"
        style="opacity: 0"
      />
      <form
        class="download-btn"
        method="get"
        :action="data.download_url"
        target="hidden_frame"
      >
        <button
          class="download-submit"
          type="submit"
          @click="downloadApp"
          ref="copy"
          data-clipboard-action="copy"
          data-clipboard-target="#success_form_input"
        >
          <img
            class="download-btn-img"
            src="../assets/mobile-download-btn.png"
            alt=""
          />
        </button>
      </form>
      <iframe name="hidden_frame" id="hidden_frame" style="display: none" />
    </div>

    <div class="wrap-b" v-else>
      <svg class="wrap-b-svg">
        <use xlink:href="#vite-svg-icon"></use>
      </svg>
      <input
        type="text"
        id="success_form_input"
        readonly
        v-model="data.copy_content"
        style="opacity: 0"
      />
      <form
        class="download-btn-b"
        method="get"
        :action="data.download_url"
        target="hidden_frame"
      >
        <button
          class="download-submit-b"
          type="submit"
          @click="downloadApp"
          ref="copy"
          data-clipboard-action="copy"
          data-clipboard-target="#success_form_input"
        >
          <img
            class="download-btn-img-b"
            src="../assets/mobile-download-btn-b.png"
            alt=""
          />
        </button>
      </form>
      <iframe name="hidden_frame" id="hidden_frame" style="display: none" />
    </div>
  </div>
</template>
<!-- eslint-disable @typescript-eslint/no-this-alias -->
<script lang="ts" setup>
import { reactive } from 'vue'

const data = reactive({
  download_url: '',
  copy_content: '',
  isA: false
})

const downloadApp = (...args: unknown[]) => {
  data.isA = !data.isA
  console.log(args)
}
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/mobile-bg.jpg) no-repeat;
  background-size: 100% auto;
}

.wrap-a-svg {
  fill: #1ab394;
}

.download-submit {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  border: none;
}
.download-btn {
  font-size: 0;
}
.download-btn-img {
  width: 512px;
  position: absolute;
  top: 750px;
  left: 50%;
  transform: translate(-50%);
}
#success_form_input {
  position: absolute;
  left: -9999px;
}

/* b渠道 */
.wrap-b {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../assets/mobile-bg-2.png) no-repeat;
  background-size: 100% auto;
  background-color: #d31e69;
}
.download-bg-img {
  width: 100%;
}
.download-btn-b {
  position: absolute;
  top: 860px;
  left: 50%;
  transform: translateX(-50%);
}
.download-submit-b {
  background-color: transparent;
  border: none;
}
.download-btn-img-b {
  width: 500px;
}
</style>
