<template>
  <div class="jeb-parents">
    <h1>Parents</h1>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeahah9I-G0bdAPsBDWzbbWb9pIp1oPZjSd98xpG6d13FUyEg/viewform?embedded=true"
      title="parents-form"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </div>
</template>

<style scoped>
  .jeb-parents {
    display: flex;
    flex-direction: column;
  }

  iframe {
    width: 100%;
    height: 2760px;
  }

  @media screen and (max-width: 781px) {
    iframe {
      height: 2830px;
    }
  }

  @media screen and (max-width: 600px) {
    iframe {
      height: 2700px;
    }
  }
</style>
