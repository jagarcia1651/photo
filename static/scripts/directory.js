  function load_directory()
  {
      $.ajax({
      url: "/directory",
      type: "get",
      success: function(response) {
        $("#directory").html(response);
      },
      error: function(xhr) {
        //Do Something to handle error
      }
    });
  }
  
  Dropzone.options.fileDrop = {
  init: function () {
    this.on("queuecomplete", function (file) {
      
      load_directory();
      
    });
  }
};