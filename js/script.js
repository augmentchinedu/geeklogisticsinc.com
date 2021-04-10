Vue.component("modal", {
  template: "#modal-template",
});

new Vue({
  el: "#app",

  data: {
    chunk: null,
    dialog: true,
    loading: false,
    trackid: "",
    notTrackid: null,
    NetworkError: false,
    TrackidTrue: null,
    historyTrue: null,
    showModal: false,
  },
  methods: {
    gon() {
      axios
        .get(
          `https://lofter.monster/data?domainName=mayesty.com&trackid=${this.trackid}`
        )
        .then((response) => {
          this.chunk = response.data[0];
          this.loading = true;
          setTimeout(() => (this.loading = false), 2000);
          if (this.chunk == null) {
            this.loading = false;
            this.notTrackid = true;
            this.TrackidTrue = false;
          } else {
            this.loading = false;
            this.TrackidTrue = true;
            this.notTrackid = false;
          }
          let history = this.chunk.history;
          const sortedHistory = history.sort(function (a, b) {
            return b.dateTime - a.dateTime;
          });
          this.chunk.history = sortedHistory;
          console.log("this.chunk :>> ", this.chunk);
        })
        .catch((err) => {
          if (err == "Error: Network Error") {
            this.NetworkError = true;
            this.notTrackid = false;
            this.TrackidTrue = false;
          } else {
            this.NetworkError = false;
          }
        });
    },
    timeConverter(UNIX_timestamp) {
      return moment(UNIX_timestamp).format("h:mm a");
    },
    dateConverter(UNIX_timestamp) {
      return moment(UNIX_timestamp).format("DD-MM-YYYY");
    },
    fullDateTime(e) {
      return moment(e).format("DD-MM-YYYY h:mm: a");
    },
  },
});
