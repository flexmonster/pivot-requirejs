requirejs(["node_modules/flexmonster/flexmonster.full.js"], function() {
    var pivot = new Flexmonster({
        container: "pivot",
        toolbar: true,
        report: "https://cdn.flexmonster.com/reports/report.json"
    })
});
