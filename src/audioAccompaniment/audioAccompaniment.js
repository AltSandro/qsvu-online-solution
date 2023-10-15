
$(document).ready(function() {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const buttonCls = soundClsDB;
      const soundIds = soundClsDB;
      for (let i = 0; i < buttonCls.length; i++) {
        const button = $("." + buttonCls[i]);
        const sound = $("#" + soundIds[i])[0];
    
        button.on("click", function() {
          sound.currentTime = 0; 
          sound.play();
        });
      }
  }
});


$(document).ready(function() {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const buttonHoverCls = soundHoverDB;
    const soundHoverIds = soundHoverDB;

    for (let i = 0; i < buttonHoverCls.length; i++) {
      const button = $("." + buttonHoverCls[i]);
      const sound = $("#" + soundHoverIds[i])[0];

      button.on("mouseenter", function() {
        sound.currentTime = 0; 
        sound.play();
      });
    }
  }
});
  
  