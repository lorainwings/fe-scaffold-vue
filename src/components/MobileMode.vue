<template>
  <div>
    <div class="wrap">
      <input
        type="text"
        id="success_form_input"
        readonly="readonly"
        v-model="copy_content"
        style="opacity: 0"
      />
      <form
        class="download-btn"
        method="get"
        :action="download_url"
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
    <div class="wrap-b">
      <input
        type="text"
        id="success_form_input"
        readonly="readonly"
        v-model="copy_content"
        style="opacity: 0"
      />
      <form
        class="download-btn-b"
        method="get"
        :action="download_url"
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
<script>
export default {
  data() {
    return {
      download_url_list: [],
      download_url: '',
      referer: '',
      copy_content: '',
      isDownload: false,
      plan: 'a',
      nativeUrl: ''
    }
  }
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
