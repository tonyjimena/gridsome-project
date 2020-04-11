<template>
  <footer class="bd-footer text-muted docs-border">
    <div class="container">
      <div class="row justify-content-center">
        <div class="text-center text-sm-right col-sm order-sm-3 col-12">
          <img
            src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDIwNDEgMjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJtMTM5NyAyNzEtMzcwIDY0Mi0zNzEtNjQyaC01OTJsOTYzIDE2NjcgOTYyLTE2Njd6IiBmaWxsPSIjMzQ0OTVlIiAvPgogIDxwYXRoIGQ9Im00NCAwaDE5NTJsLTk3OSAxNjk2eiIgZmlsbD0iIzU2M2Q3YyIgZmlsbC1ydWxlPSJub256ZXJvIiAvPgogIDxwYXRoIGQ9Im0xNjMzIDM5Mi02MTIgMTA2MS02MTMtMTA2MWgtNDA4bDEwMjEgMTc2OCAxMDIwLTE3Njh6IiBmaWxsPSIjNDFiODgzIiAvPgogIDxwYXRoIGQ9Im03NjcgMTk2aDMzOWM2MiAwIDExMiAxNCAxNTAgNDMgMzggMjggNTYgNzEgNTYgMTI5IDAgMzYtOCA2Ni0yNSA5MXMtNDIgNDQtNzQgNTh2MmM0MyA5IDc1IDI5IDk4IDYxIDIyIDMxIDMzIDcxIDMzIDExOCAwIDI4LTUgNTMtMTUgNzdzLTI1IDQ0LTQ2IDYxYy0yMSAxOC00NyAzMS04MCA0MS0zMiAxMS03MSAxNi0xMTYgMTZoLTMyMHptMTIyIDI5MmgxOTljMjkgMCA1NC05IDczLTI1IDIwLTE3IDI5LTQxIDI5LTcyIDAtMzUtOC02MC0yNi03NS0xNy0xNC00My0yMS03Ni0yMWgtMTk5em0wIDMwNWgyMTZjMzcgMCA2Ni0xMCA4Ni0yOXMzMS00NiAzMS04MS0xMC02MS0zMS04MC00OS0yOC04Ni0yOGgtMjE2eiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+Cg=="
            alt="BootstrapVue logo"
            width="100"
            class="mb-4 mt-0 mt-sm-4 img-fluid"
           
          />
        </div>
        <div class="text-left col-md-4 col-auto">
          <h5 class="bd-text-purple-bright mb-1">Documentation</h5>
          <ul class="list-unstyled ml-3">
            <li>
              <a href="/" target="_self" class>Home</a>
            </li>
            <li>
              <a href="/docs" target="_self" class>Getting started</a>
            </li>
            <li>
              <a href="/docs/components" target="_self" class>Components</a>
            </li>
            <li>
              <a href="/docs/directives" target="_self" class>Directives</a>
            </li>
            <li>
              <a href="/docs/icons" target="_self" class>Icons</a>
            </li>
            <li>
              <a href="/docs/reference" target="_self" class>Reference</a>
            </li>
            <li>
              <a href="/docs/misc" target="_self" class>Miscellaneous</a>
            </li>
            <li>
              <a href="/play" target="_self" class>Playground</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="mb-2">
        Designed and built with all the love in the world. Maintained by the
        <a
          href="https://github.com/orgs/bootstrap-vue/people"
          target="_blank"
         
        >core team</a>
        with the help of
        <a
          href="https://github.com/bootstrap-vue/bootstrap-vue/graphs/contributors"
          target="_blank"
         
        >our contributors</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import bus from '@/busdata.js' //importamos el bus de eventos ke vamos a escuchar del hermano
export default {
  name: "footerComponent",
  data() {
    return {
      algo: ''
    }
  },
  created() {
    bus.$on('search', criteria => {
      console.log('Search capturado desde footer con bus de datos', criteria)
    })
  }
};
</script>

<style>
footer {
  font-weight: 400;
  line-height: 1.5;
  box-sizing: border-box;
  display: block;
  color: #6c757d !important;
  font-size: 0.875rem;
  padding: 4rem 0;
  text-align: center;
  background-color: #eee;
  border-top: 3px solid #dee2e6;
}
</style>