const FollowToggle = require("./follow_toggle.js");


$( () => {
  const buttons = $('button.follow-toggle');
    for (let i = 0; i < buttons.length; i++) {
      const newToggle = new FollowToggle(buttons[i]);
    }
});
