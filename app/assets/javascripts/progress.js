$(document).ready(function() {

  var count = 0;
  var checked = 0;
  function countBoxes() {
    count = $("input[type='checkbox']").length;
    console.log(count);
  }

  countBoxes();
  $(":checkbox").click(countBoxes);

  function countChecked() {
    checked = $("input:checked").length;

    var percentage = parseInt(((checked / count) * 100),10);
    $(".progressbar-bar").progressbar({
            value: percentage
        });
    $(".progressbar-label").text(percentage + "%");
  }

  countChecked();
  $(":checkbox").click(countChecked);
});
