const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = $(el).data("user-id");
    this.followState = $(el).data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render(){
    if(this.followState === "unfollowed"){
      this.el.text("Followwww!");
      this.el.prop("disabled", false);
    } else if (this.followState === "followed" ){
      this.el.text("Unfollow!");
      this.el.prop("disabled", false);
    } else if (this.followState === "following" || this.followState === "unfollowing" ){
      this.el.prop("disabled", true);
    } else {
      this.el.prop("disabled", false);
    }
  }

  handleClick(){
    this.el.on("click", event =>{
      event.preventDefault();
      console.log("doing stuff");
      if(this.followState === "unfollowed") {
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userId).then(() => {
          this.followState = "followed";
          this.render();

        });
      } else if (this.followState === "followed") {
        this.followState = "unfollowing";
          this.render();
          APIUtil.unfollowUser(this.userId).then(() => {
            this.followState = "unfollowed";
            this.render();
          });
        }
      });
    }

  }


module.exports = FollowToggle;
